import {ObjectDefinitionBlock} from "nexus/src/definitions/objectType";
import {arg, stringArg, booleanArg, intArg} from "nexus";
import {getUserUnionId, randomString} from "../../util";
import ossClient from "../../cloud/ossClient";

export function Cloud(t: ObjectDefinitionBlock<"Mutation">) {

	// 获取图片上传临时签名
	t.field('getOSSPolicy', {
		type: 'OSSPolicy' as any,
		nullable: true,
		resolve: async (_, args, ctx) => {
			const unionId = getUserUnionId(ctx) || '';

			const user = ctx.photon.users.findOne({where: {unionId}, select: {id: true}});
			if (!user) {
				throw new Error('当前用户不存在');
			}

			return ossClient.getResponse();
		},
	} as any);

	// $id: ID!, $name: String!, $contentType: String!, $eTag: String!, $size: Int!, $url: String!
	t.field('uploadDocFile', {
		type: 'File' as any,
		args: {
			id: intArg({ required: true }),
			name: stringArg({ required: true }),
			contentType: stringArg({ required: true }),
			eTag: stringArg({ required: true }),
			size: intArg({ required: true }),
			url: stringArg({ required: true }),
		} as any,
		resolve: async (_, { id, name, contentType, eTag, size, url }, ctx) => {
			// 判断 id 文档是否存在

			// 判断是否有权限

			// 将文件更新到 doc 的媒体列表里
			return ctx.photon.files.create({
				data: {
					id: randomString(7, true),
					name,
					contentType,
					eTag,
					size,
					url,
					document: {
						connect: {
							id
						}
					}
				} as any,
			})
		},
	});

}