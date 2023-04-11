import { createRouter, createWebHistory } from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";
import { GlobalStore } from "@/stores";
import NProgress from "@/config/nprogress";

const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	//strict： 路由 /users 将匹配 /users、/users/、甚至 /Users/
	strict: false // 适用于所有路由
});

router.beforeEach(async (to, from, next) => {
	const globalStore = GlobalStore();
	// 1.NProgress 开始
	NProgress.start();

	// 2.动态设置标题
	const title = import.meta.env.VITE_GLOB_APP_TITLE;
	document.title = to.meta.title ? `${to.meta.title}-${title}` : title;

	// 3.判断是否有 Token，没有重定向到 login
	if (to.path.toLocaleLowerCase() === "/login") {
		if (globalStore.token) return next(from.fullPath);
		return next();
	}
});

/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
	NProgress.done();
});

export default router;
