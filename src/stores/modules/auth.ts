import { defineStore } from "pinia";
import { getFlatArr } from "@/utils/util";
import type { AuthState } from "@/stores/interface";
import { getAuthMenuListApi } from "@/api/modules/login";

// 身份验证存储
export const AuthStore = defineStore({
	id: "AuthState",
	state: (): AuthState => ({
		// 当前页面的 router name，用来做按钮权限筛选
		routeName: "",
		// 按钮权限列表
		authButtonList: {},
		// 菜单权限列表
		authMenuList: []
	}),
	getters: {
		// 后端返回的菜单列表 ==> 这里没有经过任何处理
		authMenuListGet: state => state.authMenuList,
		// 扁平化之后的一维数组路由，主要用来添加动态路由
		flatMenuListGet: state => getFlatArr(state.authMenuList),
		// 按钮权限列表
		authButtonListGet: state => state.authButtonList
	},
	actions: {
		getAuthMenuList() {
			const { data } = getAuthMenuListApi();
			this.authMenuList = data;
		}
	}
});
