import { createRouter, createWebHashHistory } from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";
import { GlobalStore } from "@/stores";
import NProgress from "@/config/nprogress";
import { LOGIN_URL } from "@/config/config";
import { AuthStore } from "@/stores/modules/auth";
import { initDynamicRouter } from "@/router/modules/dynamicRouter";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [...staticRouter, ...errorRouter],
	//strict： 路由 /users 将匹配 /users、/users/、甚至 /Users/
	strict: false, // 适用于所有路由
	scrollBehavior: () => ({ left: 0, top: 0 })
});

router.beforeEach(async (to, from, next) => {
	const globalStore = GlobalStore();
	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	const title = import.meta.env.VITE_GLOB_APP_TITLE;
	document.title = to.meta.title ? `${to.meta.title}-${title}` : title;

	// 3.判断是访问登陆页，有 Token 就在当前页面，没有 Token 重置路由并放行到登陆页
	if (to.path.toLocaleLowerCase() === "/login") {
		if (globalStore.token) return next(from.fullPath);
		return next();
	}

	// 4.判断是否有 Token，没有重定向到 login
	if (!globalStore.token) return next({ path: LOGIN_URL, replace: true });

	// 5.如果没有菜单列表，就重新请求菜单列表并添加动态路由
	const authStore = AuthStore();
	if (!authStore.authMenuListGet.length) {
		await initDynamicRouter();
		return next({ ...to, replace: true });
	}

	// 7.正常访问页面
	next();
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

export default router;
