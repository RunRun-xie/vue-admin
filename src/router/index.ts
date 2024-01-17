import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";
import { GlobalStore } from "@/stores";
import NProgress from "@/config/nprogress";
import { LOGIN_URL, ROUTER_WHITE_LIST } from "@/config/config";
import { useAuthStore } from "@/stores/modules/auth";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";

type Mode = "hash" | "history";
const mode: Mode = import.meta.env.VITE_ROUTER_MODE;

const routerMode = {
	hash: () => createWebHashHistory(),
	history: () => createWebHistory()
};

const router = createRouter({
	history: routerMode[mode](),
	routes: [...staticRouter, ...errorRouter],
	//strict： 路由 /users 将匹配 /users、/users/、甚至 /Users/
	strict: false, // 适用于所有路由
	scrollBehavior: () => ({ left: 0, top: 0 })
});

/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach(async (to, from, next) => {
	const globalStore = GlobalStore();
	const authStore = useAuthStore();

	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	const title = import.meta.env.VITE_GLOB_APP_TITLE;
	document.title = to.meta.title ? `${to.meta.title}-${title}` : title;

	// 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由到登陆页

	// 4.判断访问页面是否在路由白名单地址(静态路由)中，如果存在直接放行
	if (ROUTER_WHITE_LIST.includes(to.path)) return next();

	// 5.判断是否有 Token，没有重定向到 login 页面

	// 6.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter();
		return next({ ...to, replace: true });
	}

	// 7.正常访问页面
	next();
});

/**
 * @description 重置路由
 * */

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	NProgress.done();
	console.warn("路由错误", error.message);
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

export default router;
