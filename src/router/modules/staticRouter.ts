import type { RouteRecordRaw } from "vue-router";

export const staticRouter: RouteRecordRaw[] = [
	{
		path: "/",
		redirect: "/login/index"
	}
];
