<template>
  // ...
</template>

<script setup>
  import WS from './websocket'
  import { onLoad, onUnload } from '@dcloudio/uni-app'
  
  // 进入聊天页面初始化
  let ws = null
  onLoad((options) => {
    ws = new WS({
      // 连接websocket所需参数
      data: { userId: options.userId },
      // 首次连接成功之后，断线重新连接后也会触发（防止断线期间对方发送消息未接收到）
      onConnected: () => {
        // toDo
        // 一般用于请求历史消息列表 getHistoryList()
      },
      // 监听接收到服务器消息
      onMessage: (data) => {
        // toDo
        // 一般用于将最新的一条消息展示在页面上
      }
    })
  })
  
  // 发送消息
  function sendMsg() {
    uni.request({
      url: '后端url',
      data: {...},
      success: () => {
        // 发送成功后，上方onMessage会接收到最新消息
      }
    })
  }
  
  // 页面销毁，断开websocket
  onUnload(() => {
    // 主动关闭websocket
    ws.close()
  })
</script>

