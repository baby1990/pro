/**
 * oss 相关功能
 * Created by daxiaopengyou on 2018/3/16.
 */
const OSS = require('ali-oss');
const Crypto = require('crypto-js');
const {Base64} = require('js-base64');

// const multer  = require('multer');
// const multerOss = require('multer-oss');

/**
 * OSS 配置
 * @type {{accessId: string; accessKey: string; host: string; dirName: string; expire: number}}
 */
const {accessId, accessKey, host, region, dirName, expire, bucket} = {
	accessId: 'LTAI4FhjAY3osaWR2xpyekHj',
	accessKey: 'oboL2HfmQJjyDGP8dRhVTUgRSC5c3x',
	host: 'wangxiaoyan.oss-cn-hangzhou.aliyuncs.com',
	region: 'oss-cn-hangzhou',
	dirName: 'image/',
	expire: 60,
	bucket: 'wangxiaoyan',
};

const client = new OSS({
	region,
	accessKeyId: accessId,
	accessKeySecret: accessKey,
	bucket
});

// 上传路径
// const UPLOAD_PATH = 'uploads';
//
// const MulterOssStorage = multerOss({
// 	destination: (req: any, file: File, cb: Function) => {
// 		cb(null, 'uploads');
// 	},
// 	accessKeyId: accessId,
// 	accessKeySecret: accessKey,
// 	endpoint: region,
// 	bucket,
// 	// 超时时间1小时，不设置默认30分钟
// 	timeout: 60 * 60 * 1000,
// 	extensionsMimeReg: /^(image|audio|video)/,
// 	extensionError: new Error('请上传图片、音频或视频文件'),
// 	filename: (req: any, file: any, cb: Function) => {
// 		console.log(file);
// 		cb(null, `f${Date.now()}.${file.mimetype ? file.mimetype.split('/')[1] : 'jpg'}`);
// 	}
// });


/**
 * 签名获取接口
 * @returns {{accessId: string; host: string; policy: any; signature: string; expire: number; dir: string}}
 */
const getResponse = () => {

	// 获取当前时间60s后的时间
	const end = new Date(new Date().getTime() + expire * 1000);

	// 设置过期时间
	const expiration = end.toISOString();

	// 文件大小不超过10m
	// 以market文件夹来保存
	const conditions = [["content-length-range", 0, 10485760], ["starts-with", "$key", dirName]];

	const policyText = {
		"expiration": expiration, // 设置该Policy的失效时间，超过这个失效时间之后，就没有办法通过这个policy上传文件了
		"conditions": conditions
	};

	// 对policy进行编码
	const policyBase64 = Base64.encode(JSON.stringify(policyText));

	// 获取签名
	const signature = Crypto.enc.Base64.stringify(Crypto.HmacSHA1(policyBase64, accessKey));

	return {
		accessId,
		host,
		policy: policyBase64,
		signature,
		expire: Math.floor(end.getTime() / 1000),
		dir: dirName
	};

};

const deleteFile = async (file: string) => (await client.delete(file));

const deleteManyFiles = async (files: string) => (await client.deleteMulti(files));

export default {getResponse, deleteFile, deleteManyFiles}