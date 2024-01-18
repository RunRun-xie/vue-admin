<template>
	<component :is="LayoutComponents[themeConfig.layout]" />
</template>

<script setup lang="ts" name="layout">
import { computed, type Component } from "vue";
import { useGlobalStore } from "@/stores/modules/global";

import LayoutVertical from "./LayoutVertical/index.vue";

const globalStore = useGlobalStore();

// 根据不同布局改变整体布局样式
const LayoutComponents: { [key: string]: Component } = {
	vertical: LayoutVertical
};

const themeConfig = computed(() => globalStore.themeConfig);

// const router = useRouter();
// const route = useRoute();
// const routes = router.options.routes;

// const routerKey = computed(() => {
// 	console.log(route.path, "route");

// 	return route.path;
// });
</script>

<style scoped lang="scss"></style>
