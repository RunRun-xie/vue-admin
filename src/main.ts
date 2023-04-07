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
// 注册全局自定义指令 -- 返回参数有些问题，暂时没有引入到use中
import directives from "@/directives/index";
// vue 路由
import router from "@/router/index";
// Vue I18n 是 Vue.js 的国际化插件
import I18n from "@/languages/index";
// pinia 状态管理
import pinia from "@/stores/index";

const app = createApp(App);

// 注册element Icons组件
Object.keys(ElementPlusIconsVue).forEach(key => {
	app.component(key, ElementPlusIconsVue[key as keyof typeof ElementPlusIconsVue]);
});

app.use(ElementPlus).use(router).use(I18n).use(pinia).mount("#app");
