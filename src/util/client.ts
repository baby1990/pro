// import {validatePattern, getUserUnionId} from './index';
//
// import redisClient from '../cloud/redisClient';
// import smsClient from '../cloud/smsClient';
// import ossClient from '../cloud/ossClient';
//
// export const utils = {
// 	/**
// 	 * @desc                        发送验证码
// 	 * @param parent
// 	 * @param {string} phone        手机号
// 	 * @param {MsgSendType} type    类型
// 	 * @param {string} code         验证码
// 	 * @param ctx
// 	 * @param info
// 	 * @returns {Promise<MsgData>}
// 	 */
// 	async messageCall(parent, {phone, code}, ctx, info) {
//
// 		if (!validatePattern.phone.test(phone)) {
// 			throw new Error('手机号格式不正确!');
// 		}
//
// 		// 获取 redis 中对应的 phone 数据记录
// 		const hashData = await redisClient.getHashData(phone);
//
// 		try {
// 			//字段在redis中已存在
// 			if (hashData && hashData.code) {
//
// 				await smsClient.sendMessage(phone, hashData.code);
//
// 				return {
// 					code: 'OK',
// 					message: '短信发送成功'
// 				}
//
// 			} else {  //字段在redis中不存在
//
// 				//不存在生成code
// 				let code = `${1000 + Math.floor(9000 * Math.random())}`;
//
// 				//存入到redis中并返回code
// 				await redisClient.setHashData({phone, code, validate: 0});
//
// 				//调用短信服务
// 				await redisClient.setExpire(phone);
//
// 				await smsClient.sendMessage(phone, code);
//
// 				return {
// 					code: 'OK',
// 					message: '短信发送成功'
// 				}
//
// 			}
//
// 		} catch (e) {
//
// 			throw new Error('短信发送失败');
//
// 		}
//
// 	},
//
// 	/**
// 	 * 获取图片上传临时签名
// 	 * @param parent
// 	 * @param args
// 	 * @param ctx
// 	 * @param info
// 	 * @returns {any}
// 	 */
// 	async getOSSPolicy(parent, args, ctx, info) {
//
// 		const id = getUserId(ctx);
//
// 		if (!ctx.db.exists.User({id})) {
// 			throw new CommonError('当前用户不存在', 'AUTH_ERROR');
// 		}
//
// 		return ossClient.getResponse();
//
// 	},
// };
