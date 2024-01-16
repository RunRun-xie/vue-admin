import { fileURLToPath, URL } from "node:url";
import { defineConfig, loadEnv } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	return {
		server: {
			https: false, // 是否开启 https
			open: false, // 是否自动在浏览器打开
			cors: true, // 允许跨域  8月更新
			port: 3431, // 端口号
			host: "0.0.0.0",
			proxy: {
				"/admin-api": {
					target: env.VITE_BASE_URL
				}
			} //
		},
		// 进行插件配置
		plugins: [
			// 使用 Vite 内置的 Vue 插件
			vue(),
			vueJsx()
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "@/styles/var.scss";`,
					javascriptEnabled: true
				}
			}
		},
		resolve: {
			alias: {
				"@": fileURLToPath(new URL("./src", import.meta.url))
			}
		},
		define: {
			__VUE_I18N_FULL_INSTALL__: true,
			__VUE_I18N_LEGACY_API__: false
		}
	};
});
