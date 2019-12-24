import {stringArg} from "nexus";
import {APP_SECRET} from "../../constants";
import * as jwt from "jsonwebtoken";
import { hash, compare } from 'bcrypt';
import uuid from 'uuid/v1';
import {ObjectDefinitionBlock} from "nexus/src/definitions/objectType";
import { validatePattern, randomString } from '../../util'

export function Auth(t: ObjectDefinitionBlock<"Mutation">) {

	t.crud.createOneUser(undefined as any);

	// 注册账号
	t.field('signup', {
		type: 'AuthPayload' as any,
		args: {
			name: stringArg({ required: true }),
			alias: stringArg(),
			password: stringArg({ required: true }),
		} as any,
		resolve: async (parent, { name, alias, password }, context) => {
			// 校验参数
			switch (true) {
				case !validatePattern.common.password.test(password):
					throw new Error('密码格式不正确');
				case !validatePattern.common.name.test(name):
					throw new Error('用户名格式不正确');
				case alias && !validatePattern.common.name.test(alias):
					throw new Error('昵称格式不正确');
			}

			// 将用户的原密码加密
			const passwordEncoded = await hash(password, 10);

			// 使用新密码注册用户
			const user = await context.photon.users.create({
				data: {
					id: randomString(7, true),
					password: passwordEncoded,
					name,
					alias,
					unionId: uuid(),
				} as any,
			});

			// 返回 {token, user}
			return {
				token: jwt.sign({unionId: user.unionId}, APP_SECRET),
				user,
			}
		},
	});

	// 用户名密码登录
	t.field('login', {
		type: 'AuthPayload' as any,
		args: {
			name: stringArg({required: true }),
			password: stringArg({required: true }),
		} as any,
		resolve: async (parent, { name, password }, context) => {
			const user = await context.photon.users.findOne({
				where: {
					name
				},
			});
			if (!user) {
				throw new Error('该用户尚未注册!');
			}

			const passwordValid = await compare(password, user.password as string);

			if (!passwordValid) {
				throw new Error('密码输入错误!');
			}

			return {
				token: jwt.sign({unionId: user.unionId}, APP_SECRET),
				user,
			};
		},
	});

}