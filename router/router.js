import {
	RouterMount,
	createRouter
} from 'uni-simple-router';
import { get_token} from "@/store/index.js";
	
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	let token = get_token()
	//权限控制登录
	if (to.meta.auth) {
		if (token) {
			next();
		} else {
			uni.showModal({
				title: '提示',
				content: '登陆过期请重新登陆',
				confirmText: "确认",
				showCancel: false,
				success: (res) => {
					if (res.confirm) {
						next({
							path: 'pages/login/login'
						})
					}
				}
			})

		}
	} else {
		next();
	}
});
// 全局路由后置守卫
// router.afterEach((to, from) => {
// 	
// })

export {
	router,
	RouterMount
}
