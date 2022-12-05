<template>
	<view class="chart">
		<view class="chart-title">
			<view>消息</view>
			<view class="title-right">
				<uni-icons type="search" color="#fff" size="24"></uni-icons>
				<uni-icons type="plusempty" color="#fff" size="24" @click="scan"></uni-icons>
			</view>
		</view>
		<view class="chart-list">
			<!-- 左侧通讯录 -->
			<view class="items" v-for="(item, index) in chartList" :key="index" :id="item.id">
				<view class="item-avatar">
					<image class="img-avatar" :src="item.url?item.url:'/static/avatar.jpg'" mode=""></image>
				</view>
				<view class="item-data">
					<view class="item-left">
						<view>{{ item.name }}</view>
						<view class="item-note">{{item.record}}</view>
					</view>
					<view class="item-right">
						<view class="item-time">{{item.time}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'

	const chartList = ref([])

	function getChartList() {
		chartList.value = [{
				id: 1,
				name: '好友1',
				url: null,
				record: 'test12345',
				time: '9:00'
			},
			{
				id: 2,
				name: '好友2',
				url: null,
				record: 'test12345',
				time: '9:00'
			},
			{
				id: 3,
				name: '好友3',
				url: null,
				record: 'test12345',
				time: '9:00'
			},
			{
				id: 4,
				name: '好友4',
				url: null,
				record: 'test12345',
				time: '9:00'
			},
			{
				id: 5,
				name: '好友5',
				url: null,
				record: 'test12345',
				time: '9:00'
			},
		]
	}
	getChartList()

	function scan() {
		uni.scanCode({
			success: (res) => {
				console.log(res);
			}
		})
	}
</script>

<style lang="scss" scoped>
	.chart-title {
		width: calc(100% - 60rpx);
		height: 150rpx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		padding: 0 30rpx 30rpx;
		font-weight: 600;
		position: fixed;
		top: 0;
		z-index: 99;
		background: #231b4a;
	}

	.title-right {
		display: flex;
		gap: 20rpx;
	}

	.chart-list {
		margin-top: 180rpx;
		padding: 0 30rpx 30rpx;
	}

	.items {
		height: 160rpx;
		display: flex;
		align-items: center;
		gap: 40rpx;
	}

	.item-avatar {
		width: 100rpx;
		height: 100rpx;
	}

	.img-avatar {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
	}

	.item-data {
		width: 100%;
		height: 160rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #382d64;
	}

	.item-note {
		margin: 10rpx 0;
		color: #888;
		font-size: 28rpx;
		width: 450rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.item-time {
		color: #888;
	}
</style>
