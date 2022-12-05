<template>
	<view class="contacts">
		<view class="contacts-title">
			<view :style="{color:isChooseFriend?'#f0f0f0':'#999'}" @click="chooseFriend">好友</view>
			<view :style="{color:isChooseGroup?'#f0f0f0':'#999'}" @click="chooseGroup">群聊</view>
		</view>
		<!-- 搜索 -->
		<view class="input-search">
			<uni-easyinput prefixIcon="search" v-model="params" :styles="{color:'#f0f0f0',borderColor:'#666'}">
			</uni-easyinput>
		</view>
		<!-- 好友列表 -->
		<view class="friend-list" v-show="isChooseFriend">
			<!-- 左侧通讯录 -->
			<view class="items" v-for="(item, index) in friends" :key="index" :id="item.id">
				<!-- <view class="items-title">{{ item.letter }}</view> -->
				<view class="items-datas" v-for="(cell, i) in item.datas" :key="i">
					<view class="item-avatar">
						<image class="img-avatar" :src="item.url?item.url:'/static/avatar.jpg'" mode=""></image>
					</view>
					<view class="item-name">{{ cell.name }}</view>
				</view>
			</view>
			<!-- 右侧字母导航条 -->
			<view class="letter-nav">
				<view class="item" v-for="(item, index) in letters" :key="index" @click="toSelectIndex(item)">
					{{ item }}
				</view>
			</view>
		</view>
		<!-- 群聊列表 -->
		<view class="group-list" v-show="isChooseGroup">
			<!-- 左侧通讯录 -->
			<view class="group-items" v-for="(item, index) in groups" :key="index" :id="item.id">
				<view class="item-avatar">
					<image class="img-avatar" :src="item.url?item.url:'/static/avatar.jpg'" mode=""></image>
				</view>
				<view class="group-item-name">{{ item.name }}</view>
			</view>
		</view>
	</view>
</template>


<script setup>
	import {
		reactive,
		toRefs,
		onMounted
	} from 'vue'
	import Pinyin from '@/utils/pinyin.js'

	const data = reactive({
		letters: [],
		friends: [],
		groups: [],
		isChooseFriend: true,
		isChooseGroup: false,
		params: ''
	})
	const {
		list,
		letters,
		friends,
		groups,
		isChooseFriend,
		isChooseGroup,
		params
	} = toRefs(data)

	onMounted(() => {
		chooseFriend()
	})

	function chooseFriend() {
		data.isChooseFriend = true
		data.isChooseGroup = false
		getFriends()
	}

	function chooseGroup() {
		data.isChooseGroup = true
		data.isChooseFriend = false
		getGroup()
	}

	function getFriends() {
		let list = [{
				id: 1,
				name: 'aa1',
				url: null
			},
			{
				id: 2,
				name: 'aa2',
				url: null
			},
			{
				id: 3,
				name: 'bb1',
				url: null
			},
			{
				id: 4,
				name: 'ee1',
				url: null
			},
			{
				id: 5,
				name: 'll1',
				url: null
			},
			{
				id: 6,
				name: 'mm1',
				url: null
			}, {
				id: 7,
				name: 'mm1',
				url: null
			}, {
				id: 8,
				name: 'mm1',
				url: null
			}, {
				id: 9,
				name: 'mm1',
				url: null
			}, {
				id: 10,
				name: 'mm1',
				url: null
			}, {
				id: 11,
				name: 'mm1',
				url: null
			}, {
				id: 12,
				name: 'mm1',
				url: null
			}, {
				id: 13,
				name: '123',
				url: null
			}, {
				id: 14,
				name: 'ww1',
				url: null
			}, {
				id: 15,
				name: 'zz1',
				url: null
			}
		]
		data.friends = pinyinSort(list);
		data.letters = data.friends.map(item => item.letter)
	}

	function getGroup() {
		data.groups = [{
				id: 1,
				name: '群组1',
				url: null
			},
			{
				id: 2,
				name: '群组2',
				url: null
			},
			{
				id: 3,
				name: '群组3',
				url: null
			},
			{
				id: 4,
				name: '群组4',
				url: null
			},
			{
				id: 5,
				name: '群组5',
				url: null
			},
		]
	}

	function toSelectIndex(item) {
		let index = data.letters.indexOf(item)
		let arr = []
		data.friends.forEach(el => {
			el.datas.forEach(cell => {
				arr.push(cell)
			})
		})
		let arr2 = arr.map(el => el.first)
		let index2 = arr2.indexOf(item)
		// let distanceList = index * 40 + index2 * 61 + 80
		let distanceList = index2 * 61
		uni.pageScrollTo({
			scrollTop: distanceList,
			duration: 0
		});
	}

	// 将数据处理成以拼音首字母分组的排序
	function pinyinSort(arr) {
		let wordArrs = arr;
		let newArrs = [];
		let letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q",
			"R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"
		]
		for (let i = 0; i < wordArrs.length; i++) {
			//获取每条数据里的名称
			let wordName = wordArrs[i].name;
			//获取所有名称的首字母，并且大写
			let fristName = Pinyin.getSpell(arr[i].name, function(charactor, spell) {
				return spell[0];
			})
			fristName = fristName.substring(0, 1).toUpperCase()
			//进行判断，给原始json数据添加新的键值对
			if (letterList.includes(fristName)) {
				wordArrs[i].first = fristName;
			} else {
				wordArrs[i].first = "#";
			}
			//放入新的数组中
			newArrs.push(wordArrs[i]);
		}
		let wordJson = [];
		for (let i = 0; i < letterList.length; i++) {
			newArrs.forEach(el => {
				if (letterList[i] === el.first) {
					wordJson.push(el);
				}
			});
		}
		let filterLetterList = []
		letterList.forEach(item => {
			filterLetterList.push({
				letter: item,
				datas: []
			})
		})
		filterLetterList.forEach(item => {
			wordJson.forEach(cell => {
				if (cell.first == item.letter) {
					item.datas.push(cell)
				}
			})
		})
		filterLetterList = filterLetterList.filter(item => {
			return item.datas.length > 0
		})
		return filterLetterList;
	}
</script>

<style lang="scss" scoped>
	.contacts-title {
		width: calc(100% - 60rpx);
		height: 70px;
		padding: 0 30rpx 30rpx;
		display: flex;
		// justify-content: center;
		align-items: flex-end;
		gap: 20rpx;
		font-weight: 600;
		position: fixed;
		top: 0;
		z-index: 99;
		background: #231b4a;
	}

	.input-search {
		width: calc(100% - 60rpx);
		height: 50px;
		padding: 0 30rpx;
		position: fixed;
		top: 85px;
		z-index: 99;
		background: #231b4a;
	}

	:deep(.uni-easyinput__content) {
		border-radius: 60rpx;
		background: transparent !important;
	}

	.friend-list,
	.group-list {
		margin-top: 135px;
		padding: 0 30rpx 30rpx;
		// height: calc(100vh - 282rpx);
		// overflow: auto;
	}

	.items-title {
		height: 30px;
		line-height: 30px;
		margin-top: 10px;
	}

	.items-datas,.group-items {
		height: 60px;
		line-height: 60px;
		display: flex;
		align-items: center;
		gap: 40rpx;
	}

	.item-avatar {
		width: 80rpx;
		height: 80rpx;
	}

	.img-avatar {
		width: 80rpx;
		height: 80rpx;
		border-radius: 50%;
	}

	.item-name,
	.group-item-name {
		width: 460rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		border-bottom: 1px solid #1c1a2a;
	}

	.group-item-name {
		width: 570rpx;
	}

	.letter-nav {
		position: fixed;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		// box-shadow: 5rpx 5rpx 10rpx rgba(0, 0, 0, 0.05), -5rpx -5rpx 10rpx rgba(0, 0, 0, 0.05);
		padding: 20rpx;
		border-radius: 30rpx;
		color: #949597;

		.item {
			text-align: center;
		}
	}
</style>
