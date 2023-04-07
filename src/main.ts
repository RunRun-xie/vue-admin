import { createApp } from "vue";
import App from "./App.vue";
// 导入重置样式
import "@/styles/reset.scss";
// 导入CSS通用样式表
import "@/styles/common.scss";
// element plus
import ElementPlus from "element-plus";
// element icons
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element dark(自定义暗黑模式)
import "@/styles/theme/css-vars.css";
// 自定义 element组件 样式
import "@/styles/element.scss";
// 注册全局自定义指令
import directives from "@/directives/index";

const app = createApp(App);

// 注册element Icons组件
Object.keys(ElementPlusIconsVue).forEach(key => {
	app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]);
});
