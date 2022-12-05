import request from "@/request/request.js"
import upload from '@/request/upload.js'

// 登录
export function apiLogin(params) {
	return request({
		url: '/app/login',
		method: 'POST',
		params
	})
}

// 修改用户头像
export function apiUpdateAvatar(filePath) {
	return upload({
		url: '/userCenter/uploadImg',
		filePath
	})
}

// 获取用户信息
export function apiFreshUser() {
	return request({
		url:'/app/refreshUserInfo',
		method:'GET'
	})
}
