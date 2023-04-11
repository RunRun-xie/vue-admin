import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "GlobalState",
	// state: 返回对象的函数
	state: () => ({
		// token
		token: ""
	}),
	// Getter 完全等同于 Store 状态的 计算值。
	// 它们可以用 defineStore() 中的 getters 属性定义。
	// 他们接收“状态”作为第一个参数以鼓励箭头函数的使用
	getters: {},
	// Actions 相当于组件中的 methods。
	// 它们可以使用 defineStore() 中的 actions 属性定义，
	// 并且它们非常适合定义业务逻辑
	actions: {
		// setToken
		setToken(token: string) {
			this.token = token;
		}
	},
	persist: true
});

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
