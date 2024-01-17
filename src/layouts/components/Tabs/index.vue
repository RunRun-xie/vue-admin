<template>
	<div class="tabs-box">
		<div class="tabs-menu">
			<el-tabs v-model="tabsMenuValue" type="card" @tab-click="handleTabClick" @tab-remove="handleTabRemove">
				<el-tab-pane v-for="item in tabsMenuList" :key="item.path" :label="item.title" :name="item.path" :closable="item.close">
					<template #label>
						<el-icon v-if="item.icon" class="tabs-icon">
							<component :is="item.icon"></component>
						</el-icon>
						{{ item.title }}
					</template>
				</el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from "vue";
import { useTabsStore } from "@/stores/modules/tabs";
import { useAuthStore } from "@/stores/modules/auth";
import type { TabsPaneContext, TabPaneName } from "element-plus";
import { useRoute, useRouter } from "vue-router";

const authStore = useAuthStore();
const tabStore = useTabsStore();
const route = useRoute();
const router = useRouter();

const tabsMenuList = computed(() => tabStore.tabsMenuList);
const tabsMenuValue = ref(route.fullPath);

// 监听路由的变化（防止浏览器后退/前进不变化 tabsMenuValue）
watch(
	() => route.fullPath,
	() => {
		if (route.meta.isFull) return;
		tabsMenuValue.value = route.fullPath;
		const tabsParams = {
			icon: route.meta.icon as string,
			title: route.meta.title as string,
			path: route.fullPath,
			name: route.name as string,
			close: !route.meta.isAffix,
			isKeepAlive: route.meta.isKeepAlive as boolean
		};
		tabStore.addTabs(tabsParams);
	},
	{ immediate: true }
);

const handleTabClick = (tabItem: TabsPaneContext) => {
	const fullPath = tabItem.props.name as string;
	router.push(fullPath);
};

const handleTabRemove = (fullPath: TabPaneName) => {
	tabStore.removeTabs(fullPath as string, fullPath == route.fullPath);
};

const initTabs = () => {
	authStore.flatMenuListGet.forEach(item => {
		if (item.meta.isAffix && !item.meta.isHide && !item.meta.isFull) {
			const tabsParams = {
				icon: item.meta.icon,
				title: item.meta.title,
				path: item.path,
				name: item.name,
				close: !item.meta.isAffix,
				isKeepAlive: item.meta.isKeepAlive
			};
			tabStore.addTabs(tabsParams);
		}
	});
};

onMounted(() => {
	console.log(21);
	initTabs();
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
