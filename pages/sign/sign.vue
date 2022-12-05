<template>
	<view class="content">
		<view class="title">注册</view>
		<uni-forms :model="form" :rules="rules">
			<input class="input-phone" placeholder-style="color:#888;" v-model="form.email" type="text"
				placeholder="请输入邮箱" />
			<input class="input-password" placeholder-style="color:#888;" v-model="form.password" type="password"
				placeholder="请输入密码" />
		</uni-forms>
		<button class="btn-sign">注册</button>
		<button class="btn-sign" style="margin-top: 20rpx;" @click="back">返回</button>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	const form = ref({})
	const rules = ref({
		email: {
			rules: [{
				format: 'email',
				errorMessage: '请输入正确的邮箱地址',
			}]
		}
	})
	function back(){
		uni.navigateBack()
	}
</script>

<style scoped>
	.content {
		height: 100vh;
		background-image: linear-gradient(140deg, #311d70, #1a172b, #533b98);
		background-size: cover;
		padding: 0 50rpx;
	}
	
	.title{
		color: #fff;
		font-size: 60rpx;
		padding-top: 200rpx;
		text-align: center;
	}

	.input-phone {
		padding-top:200rpx;
		padding-bottom: 16rpx;
		border-bottom: 1px solid #333145;
		color: #fff;
	}

	.input-password,
	.get-code {
		margin-top: 80rpx;
		padding-bottom: 16rpx;
		border-bottom: 1px solid #333145;
		color: #fff;
	}

	.get-code {
		display: grid;
		grid-template-columns: 1fr 200rpx;
	}

	.btn-code {
		color: #888;
		align-self: center;
		text-align: center;
	}

	.btn-sign {
		background: #493985;
		color: #f0f0f0;
		margin-top: 200rpx;
		border-radius: 50rpx;
		line-height: 3;
	}

</style>
