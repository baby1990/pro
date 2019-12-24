import {ObjectDefinitionBlock} from "nexus/src/definitions/objectType";
import {arg, stringArg, booleanArg, intArg} from "nexus";
import {getUserUnionId, randomNum} from "../../util";


export function Document(t: ObjectDefinitionBlock<"Mutation">) {

	// 发布或更新知识
	t.field('documentPublish', {
		type: 'Document',
		args: {
			id: intArg(),
			isPublish: booleanArg({ required: true }),
			subject: stringArg({ required: true }),
			draft: stringArg(),
			content: stringArg({ required: true }),
			contentRaw: stringArg({ required: true }),
		} as any,
		resolve: async (_, { id, subject, isPublish, draft = '', content = '', contentRaw = '' }, ctx) => {
			// 根据是否含有 id 字段来判断是新建还是更新
			// 根据 isPublish 来判断用户是做的 save 操作还是发布操作
			// save 操作存 draft, publish 操作存 content, 并切换状态为非 draft 状态，两种状态都会存 contentRaw

			// 获取当前用户
			const userUnionId = getUserUnionId(ctx);

			if (!userUnionId) {
				throw new Error('用户尚未登录');
			}

			const select = {
				id: true,
				subject: true,
				content: true,
				contentRaw: true,
				draft: true,
				likeCount: true,
				readCount: true,
				updatedAt: true,
				author: {
					select: {
						id: true,
						name: true,
						alias: true,
					}
				},
			};

			const readCount = randomNum(100, 200);
			const likeCount = randomNum(50, 100);

			if (id) {
				if (isPublish) {
					const res = await ctx.photon.documents.update({
						where: {
							id
						},
						data: {
							subject,
							draft: '',
							content,
							contentRaw: contentRaw,
							author: {
								connect: {
									unionId: userUnionId
								}
							},
						},
						select,
					});

					return {
						...res,
						isPublish,
					}
				}

				const res = await ctx.photon.documents.update({
					where: {
						id
					},
					data: {
						subject,
						draft: draft,
						contentRaw: contentRaw,
						author: {
							connect: {
								unionId: userUnionId
							}
						},
					},
					select,
				});

				return {
					...res,
					isPublish,
				}
			} else {
				if (isPublish) {
					const res = await ctx.photon.documents.create({
						data: {
							subject,
							draft: '',
							content,
							contentRaw: contentRaw,
							readCount,
							likeCount,
							author: {
								connect: {
									unionId: userUnionId
								}
							},
						},
						select,
					});

					return {
						...res,
						isPublish,
					}
				}

				const res = await ctx.photon.documents.create({
					data: {
						subject,
						draft: draft,
						contentRaw: contentRaw,
						readCount,
						likeCount,
						author: {
							connect: {
								unionId: userUnionId
							}
						},
					},
					select,
				});

				return {
					...res,
					isPublish,
				}
			}
		},
	});

	t.field('documentCollect', {
		type: 'Document',
		args: {
			id: intArg({required: true}),
		} as any,
		resolve: async (_, {id}, ctx) => {
			// 校验权限

			// 获取当前用户
			const userUnionId = getUserUnionId(ctx);

			if (!userUnionId) {
				throw new Error('用户尚未登录');
			}

			return ctx.photon.documents.update({
				where: {
					id
				},
				data: {
					collectors: {
						connect: {
							unionId: userUnionId
						}
					}
				}
			});
		},
	});

	// 喜欢知识
	t.field('documentLike', {
		type: 'Document',
		args: {
			id: intArg({required: true}),
		} as any,
		resolve: async (_, {id}, ctx) => {

			const res = await ctx.photon.documents.findOne({
				where: {
					id,
				},
				select: {
					likeCount: true,
				}
			});

			if (!res) {
				throw new Error('该文档不存在');
			}

			return ctx.photon.documents.update({
				where: {
					id
				},
				data: {
					likeCount: res.likeCount + 1,
				}
			});
		},
	});

	// 删除知识
	t.field('deleteDocument', {
		type: 'Document',
		args: {
			id: intArg({required: true}),
		} as any,
		resolve: async (_, {id}, ctx) => {
			// 校验权限

			// 获取当前用户
			const userUnionId = getUserUnionId(ctx);

			if (!userUnionId) {
				throw new Error('用户尚未登录');
			}

			// 校验是否为其作者
			const res = await ctx.photon.documents.findMany({
				where: {
					id,
					author: {
						unionId: userUnionId,
					}
				}
			});

			if (!res.length) {
				throw new Error('用户无权限或该知识并不存在');
			}

			return ctx.photon.documents.delete({
				where: {
					id,
				}
			});
		}
	});
}