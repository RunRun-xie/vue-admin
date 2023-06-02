import { AuthStore } from "@/stores/modules/auth";
import { isType } from "@/utils/util";
import router from "@/router/index";

// 引入 views 文件夹下所有 vue 文件
const modules = import.meta.glob("@/views/**/*.vue");

export const initDynamicRouter = async () => {
	const authStore = AuthStore();

	// 3.添加动态路由
	authStore.flatMenuListGet.forEach((item: any) => {
		item.children && delete item.children;
		if (item.component && isType(item.component) == "string") {
			item.component = modules["/src/views" + item.component + ".vue"];
		}
		if (item.meta.isFull) {
			router.addRoute(item);
		} else {
			router.addRoute("layout", item);
		}
	});
	try {
		await authStore.getAuthMenuList();
	} catch (error) {
		console.log(error, "💢 当按钮 || 菜单请求出错时，重定向到登陆页");
	}
};
