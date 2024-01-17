import { useAuthStore } from "@/stores/modules/auth";
import { LOGIN_URL } from "@/config/config";
import router from "@/router/index";
import type { RouteRecordRaw } from "vue-router";

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

export const initDynamicRouter = async () => {
	const authStore = useAuthStore();

	try {
		// 	1.获取菜单列表
		authStore.getAuthMenuList();

		// 2.判断当前用户有没有菜单权限

		// 3.添加动态路由
		authStore.flatMenuListGet.forEach((item: any) => {
			item.children && delete item.children;
			if (item.component && typeof item.component == "string") {
				item.component = modules["/src/views" + item.component + ".vue"];
			}

			if (item.meta.isFull) {
				router.addRoute(item as unknown as RouteRecordRaw);
			} else {
				router.addRoute("layout", item as unknown as RouteRecordRaw);
			}
		});
	} catch (error) {
		console.log(error, "💢 当按钮 || 菜单请求出错时，重定向到登陆页");
		router.replace(LOGIN_URL);
		return Promise.reject(error);
	}
};
