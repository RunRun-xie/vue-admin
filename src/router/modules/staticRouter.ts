import type { RouteRecordRaw } from "vue-router";
import { HOME_URL, LOGIN_URL } from "@/config/config";
// import Layouts from "@/layouts/index.vue";

// 静态路由地址
export const staticRouter: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: HOME_URL
	},
	{
		path: "/login",
		name: "login",
		component: () => import("@/views/login/index.vue"),
		meta: {
			title: "登录"
		}
	},
	{
		path: "/layout",
		name: "layout",
		component: () => import("@/layouts/index.vue"),
		// component: () => import("@/layouts/indexAsync.vue"),
		redirect: "/home/index",
		children: []
	}
];

// 错误页面地址
export const errorRouter: RouteRecordRaw[] = [
	{
		path: "/403",
		name: "403",
		component: () => import("@/components/ErrorMessage/403.vue"),
		meta: {
			title: "403页面"
		}
	},
	{
		path: "/404",
		name: "404",
		component: () => import("@/components/ErrorMessage/404.vue"),
		meta: {
			title: "404页面"
		}
	},
	{
		path: "/500",
		name: "500",
		component: () => import("@/components/ErrorMessage/500.vue"),
		meta: {
			title: "500页面"
		}
	}
];
