import http from "@/api";

// 用户登录
export const loginAPI = (params: object | undefined) => {
	return http.post(`/login`, params);
};
