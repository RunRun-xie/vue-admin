import { createRouter, createWebHistory } from "vue-router";
import { staticRouter, errorRouter } from "./modules/staticRouter";

const router = createRouter({
	history: createWebHistory(),
	routes: [...staticRouter, ...errorRouter],
	//strict： 路由 /users 将匹配 /users、/users/、甚至 /Users/
	strict: false // 适用于所有路由
});

export default router;
