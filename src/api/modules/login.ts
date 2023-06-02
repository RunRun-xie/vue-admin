import http from "@/api";
import dynamicRouter from "@/assets/json/dynamicRouter.json";
// 用户登录
export const loginAPI = (params: object | undefined) => {
	return http.post(`/login`, params);
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
	// 本地路由菜单数据
	return dynamicRouter;
};
