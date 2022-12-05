import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import {router,RouterMount} from './router/router.js'

Vue.use(router)

// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif