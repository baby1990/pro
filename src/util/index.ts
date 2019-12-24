import { verify } from 'jsonwebtoken';
import { APP_SECRET } from '../constants';
import { Context } from '../context'

export interface IToken {
	unionId: string;
}

export function getUserUnionId(context: Context) {
	const Authorization = context.request.headers.authorization;
	if (Authorization) {
		const token = Authorization.replace('Bearer ', '');
		const verifiedToken = verify(token, APP_SECRET) as IToken;
		return verifiedToken ? verifiedToken.unionId : '';
	}
}

export function getUserUnionIdFormToken(token: string) {
	const verifiedToken = verify(token, APP_SECRET) as IToken;
	return verifiedToken ? verifiedToken.unionId : '';
}

export const randomString = (len = 32, justNum = false) => {

	const chars = justNum ? '0123456789' : 'abcdefghijklmnopqrstuvwxyz0123456789';

	const maxPos = chars.length;

	let str: string | number = '';

	if (justNum) {
		str += chars.charAt(Math.round(Math.random() * (maxPos -1)));
		for (let i = 1; i < len; i++) {

			str += chars.charAt(Math.floor(Math.random() * maxPos));

		}
		str = parseInt(str);
	} else {
		for (let i = 0; i < len; i++) {

			str += chars.charAt(Math.floor(Math.random() * maxPos));

		}
	}

	return str;
};

// 校验正则
export const validatePattern = {
	common: {
		phone: /^(\+?0?86\-?)?1[345789]\d{9}$/,
		name: /^[0-9a-zA-Z\u4e00-\u9fa5]{2,20}$/,
		path: /^[0-9a-z]{2,10}$/,
		password: /^[0-9a-zA-Z]{6,20}$/,
		email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
		code: /^\d{6}$/
	}
};


// 随机生成范围内数字
export const randomNum = (Min: number, Max: number):number => {
	const range = Max - Min;
	const rand = Math.random();
	return Min + Math.round(rand * range);
};