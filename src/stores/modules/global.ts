import { defineStore } from "pinia";
import type { GlobalState, ThemeConfigProps } from "../interface";
import { DEFAULT_THEME } from "@/config/config";
import piniaPersistConfig from "@/stores/helper/persist";

export const useGlobalStore = defineStore({
	// id: 必须的，在所有 Store 中唯一
	id: "theme-global",
	// state: 返回对象的函数
	state: (): GlobalState => ({
		// token
		token: "",
		// 主题配置
		themeConfig: {
			// 当前页面是否全屏
			maximize: false,
			// 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
			layout: "vertical",
			// 默认 primary 主题颜色
			primary: DEFAULT_THEME,
			// 深色模式
			isDark: false,
			// 灰色模式
			isGrey: false,
			// 色弱模式
			isWeak: false,
			// 折叠菜单
			isCollapse: false,
			// 面包屑导航
			breadcrumb: true,
			// 面包屑导航图标
			breadcrumbIcon: true,
			// 标签页
			tabs: true,
			// 标签页图标
			tabsIcon: true,
			// 页脚
			footer: true
		}
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
		},

		// 改变主题样式
		setThemeConfig(themeConfig: ThemeConfigProps) {
			this.themeConfig = themeConfig;
		}
	},
	persist: piniaPersistConfig("theme-global")
});
