import type { RouteRecordRaw } from "vue-router";
import Layouts from "@/layouts/index.vue";

// 测试页面
export const testRoutes: RouteRecordRaw[] = [
	{
		path: "/home",
		name: "Home",
		component: Layouts,
		children: [
			{
				path: "/home/index",
				name: "Home",
				component: () => import("@/views/home/index.vue"),
				meta: {
					title: "首页"
				}
			}
		]
	},
	{
		path: "/test-page",
		name: "testPage",
		component: Layouts,
		meta: {
			title: "测试页面"
		},
		children: [
			{
				path: "/test-one",
				name: "testOne",
				component: () => import("@/views/caseTest/waterfallFlow/index.vue"),
				meta: {
					title: "小红书瀑布流"
				}
			}
		]
	}
];
