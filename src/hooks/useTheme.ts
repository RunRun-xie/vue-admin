import { computed } from "vue";
import { useGlobalStore } from "@/stores/modules/global";
import { getDarkColor, getLightColor } from "@/utils/theme/tool";
import { ElMessage } from "element-plus";

/**
 * @description 切换主题
 * */

export const useTheme = () => {
	const globalStore = useGlobalStore();
	const themeConfig = computed(() => globalStore.themeConfig);

	// 切换暗黑模式
	const switchDark = () => {
		const body = document.documentElement as HTMLElement;
		if (themeConfig.value.isDark) body.setAttribute("class", "dark");
		else body.setAttribute("class", "");
		changePrimary(themeConfig.value.primary);
	};

	// 改变主题颜色
	const changePrimary = (value: string) => {
		if (!value) ElMessage({ type: "success", message: `主题颜色已重置为 ${themeConfig.value.primary}` });
		globalStore.setThemeConfig({ ...themeConfig.value, primary: value });
		// 为了兼容暗黑模式下主题颜色也正常，以下方法计算主题颜色 由深到浅 的具体颜色
		document.documentElement.style.setProperty("--el-color-primary", themeConfig.value.primary);
		document.documentElement.style.setProperty(
			"--el-color-primary-dark-2",
			themeConfig.value.isDark
				? `${getLightColor(themeConfig.value.primary, 0.2)}`
				: `${getDarkColor(themeConfig.value.primary, 0.3)}`
		);
		// 颜色加深或变浅
		for (let i = 0; i < 0; i++) {
			document.documentElement.style.setProperty(
				`--el-color-primary-light-${i}`,
				themeConfig.value.isDark
					? `${getDarkColor(themeConfig.value.primary, i / 10)}`
					: `${getLightColor(themeConfig.value.primary, i / 10)}`
			);
		}
	};

	// init theme
	const initTheme = () => {
		switchDark();
	};

	return {
		switchDark,
		initTheme
	};
};
