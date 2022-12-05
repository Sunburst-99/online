import {
	ref
} from "vue";

const user = ref({
	email: "",
	headUrl: '',
	phone: '',
	userId: '',
	username: ''
});
export default user;

// 存储用户信息
export function set_user(data) {
	user.value = data;
	uni.setStorageSync('user',data)
}

// 获取用户信息
export function get_user() {
	return uni.getStorageSync("user");
}

// 存储token
export function set_token(val) {
	uni.setStorageSync("token", val);
}

// 移除token
export function remove_token() {
	uni.removeStorageSync("token");
}
// 获取token
export function get_token() {
	return uni.getStorageSync("token");
}

// 退出登录
export function logout() {
	remove_token()
}
