<template>
	<el-config-provider :locale="i18nLocale" :button="config">
		<router-view></router-view>
	</el-config-provider>
	<!-- <RouterView /> -->
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
import { RouterView } from "vue-router";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import { useTheme } from "@/hooks/useTheme";

// init theme
const { initTheme } = useTheme();
initTheme();

// element config
const config = reactive({ autoInsertSpace: false });

// element language
const i18nLocale = computed(() => {
	return zhCn;
});
</script>
