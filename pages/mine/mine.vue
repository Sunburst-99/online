<template>
	<view class="mine">
		<view class="title">我的资料</view>
		<!-- 头像 -->
		<view class="avatar">
			<image class="img-avatar" :src="imgUrl?imgUrl:'/static/avatar.jpg'" mode=""></image>
		</view>
		<view class="edit-avatar" @click="editAvatar">
			修改头像<uni-icons type="right" color="#888" size="20"></uni-icons>
		</view>
		<!-- 资料 -->
		<view class="info">
			<view class="info-item">
				<text class="item-label">我的昵称</text>
				<text>{{user.username || ''}}</text>
			</view>
			<view class="info-item">
				<text class="item-label">我的邮箱</text>
				<text>{{user.email || ''}}</text>
			</view>
			<view class="info-item">
				<text class="item-label">我的手机号</text>
				<text>{{user.phone || ''}}</text>
			</view>
		</view>
		<!-- 退出登录 -->
		<view class="logout" @click="logout">退出登录</view>
		<!-- 退出登录弹框 -->
		<uni-popup ref="ref_popup" background-color="#473980">
			<view class="popup-content">
				<view class="btn" @click="toLogout">退出登录</view>
				<view class="line"></view>
				<view class="btn" @click="cancel">取消</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue'
	import {
		get_user,set_user,
		remove_token
	} from "@/store/index.js";
	import {
		apiUpdateAvatar,
		apiFreshUser
	} from '@/api/user.js'

	const user = ref({})
	const imgUrl = ref('')
	const ref_popup = ref(null)
	
	function getUserInfo(){
		user.value = get_user()
		let url = user.value.headUrl
		imgUrl.value = url ? `https://www.decunt.com/cover/user/headImg/${url}` : ''
	}
	getUserInfo()

	function editAvatar() {
		uni.chooseImage({ // 从本地相册选择图片或使用相机拍照。
			count: 1, //默认选择1张图片
			sizeType: ['original', 'compressed'], //original 原图，compressed 压缩图，默认二者都有
			success: (res) => {
				let filePath = res.tempFilePaths[0]
				updateAvatar(filePath)
			}
		});
	}
	
	function updateAvatar(filePath){
		apiUpdateAvatar(filePath).then(res => {
			apiFreshUser().then(response => {
				set_user(response.data)
				setTimeout(()=>{
					getUserInfo()
				})
			})
		})
	}

	function logout() {
		ref_popup.value.open('bottom')
	}

	function toLogout() {
		remove_token();
		uni.reLaunch({
			url: '/pages/login/login'
		})
	}

	function cancel() {
		ref_popup.value.close()
	}
</script>

<style lang="scss" scoped>
	.mine {
		position: relative;
		padding-top: 120rpx;
		height: calc(100vh - 120rpx);
	}

	.title {
		text-align: center;
	}

	.avatar {
		margin: 40rpx auto 0;
		width: 180rpx;
		height: 180rpx;
	}

	.img-avatar {
		width: 180rpx;
		height: 180rpx;
		border-radius: 50%;
		object-fit: contain;
	}

	.edit-avatar {
		margin-right: 40rpx;
		color: #888;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	.info {
		margin-top: 40rpx;
		background: #252235;
		border-radius: 30rpx;
	}

	.info-item {
		padding: 0 30rpx;
		height: 100rpx;
		line-height: 100rpx;
		display: flex;
		justify-content: space-between;
	}

	.item-label {
		color: #888;
	}

	.logout {
		position: absolute;
		bottom: 50rpx;
		left: 50%;
		transform: translateX(-50%);
	}

	.btn {
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
	}

	.line {
		width: 90%;
		margin: 0 auto;
		height: 2rpx;
		background: #311d70;
	}
</style>
