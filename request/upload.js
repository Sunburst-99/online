import {
	randomWord
} from '@/utils/util.js'
import {
	Base64
} from 'js-base64'
import {
	hexMD5
} from '@/utils/md5.js'

const baseUrl = 'https://www.decunt.com/prod-api'

// 全局请求封装
export default ({
	url,filePath,
}) => {
	const token = uni.getStorageSync('token');
	const time = parseInt(new Date().getTime()) + ''
	const sign = Base64.encode(time)
	const signPrefix = sign.substring(0, 9)
	const signSuffix = sign.substring(9, 18)
	const header = {
		sign: time,
		current: hexMD5(time + '8a639fd7a14640958ac15600896f537d'),
		token: token ? Base64.encode(signPrefix + token + signSuffix) : '',
		traceId: randomWord(false, 32)
	}
	// uni.showLoading({
	// 	title: "加载中..."
	// });
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: baseUrl + url,
			filePath,
			name:'file',
			header,
			success(res) {
				let response = JSON.parse(res.data)
				if (response.code === 200) {
					resolve(response);
				} else {
					uni.showToast({
						title: response.msg,
						icon: 'none'
					})
				}
			},
			fail(err) {
				uni.showToast({
					title: '请求接口失败！',
					icon: 'none'
				})
				reject(err)
			},
			// complete() {
			// 	uni.hideLoading();
			// }
		});
	});
};
