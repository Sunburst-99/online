<template>
	<view class="content">
		<view class="title">登录</view>
		<form class="form">
			<input class="input input-phone" placeholder-style="color:#888;" v-model="form.email" type="text"
				placeholder="请输入邮箱" @blur="blurPhone" />
			<input class="input input-password" placeholder-style="color:#888;" v-model="form.password" type="password"
				placeholder="请输入密码" />
		</form>
		<button class="btn-login" @click="toLogin">登录</button>
		<view class="btn-sign" @click="toSign">
			注册账号
		</view>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	import {
		Encrypt
	} from "@/utils/aes.js";
	import {
		aesMinEncrypt
	} from '@/utils/encrypt.js'
	import {
		key,
		iv
	} from '@/utils/config.js'
	import {
		v4 as uuidv4
	} from 'uuid';
	import {
		apiLogin
	} from '@/api/user.js'
	import { set_user,set_token,get_token} from "@/store/index.js";

	const form = ref({})
	
	onMounted(()=>{
		if(get_token()){
			uni.switchTab({
				url: '/pages/home/home'
			})
		}
	})

	function blurPhone() {
		const regCN = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
		if (!regCN.test(form.value.email)) {
			form.value.email = ''
			uni.showToast({
				title: '邮箱格式不正确',
				icon: 'none'
			})
		}
	}

	function toLogin() {
		if (!form.value.email || !form.value.password) {
			uni.showToast({
				title: '请输入邮箱或密码',
				icon: 'none'
			})
			return false
		}
		let uuid = uuidv4().split('-').join('')
		let word = uuid + Encrypt(form.value.password)
		let password = aesMinEncrypt(key, iv, word)
		apiLogin({
			email: form.value.email,
			password,
			keyCode: uuid
		}).then(res => {
			set_token(res.data.token)
			set_user(res.data.user)
			uni.switchTab({
				url: '/pages/home/home'
			})
		})
	}

	function toSign() {
		uni.navigateTo({
			url: '/pages/sign/sign'
		})
	}
</script>

<style scoped>
	.content {
		height: 100vh;
		padding: 0 50rpx;
	}

	.title {
		color: #fff;
		font-size: 60rpx;
		padding-top: 200rpx;
		text-align: center;
	}

	.input {
		padding-bottom: 16rpx;
		border-bottom: 1px solid #333145;
		color: #fff;
		display: flex;
		align-items: center;
		gap: 20rpx;
	}

	.input-phone {
		padding-top: 200rpx;
	}

	.input-password {
		margin-top: 80rpx;
	}

	.btn-login {
		background: #493985;
		color: #f0f0f0;
		margin-top: 200rpx;
		border-radius: 50rpx;
		line-height: 3;
	}

	.btn-sign {
		color: #f0f0f0;
		position: absolute;
		bottom: 80rpx;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
