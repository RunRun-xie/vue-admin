<!-- 纵向布局 -->
<template>
	<el-container class="layout">
		<el-aside>
			<div class="aside-box" :style="{ width: isCollapse ? '65px' : '210px' }">
				<div class="logo flx-center">
					<img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
					<span v-show="!isCollapse" class="logo-text">RunTu Admin</span>
				</div>
				<el-scrollbar>
					<el-menu
						:default-active="activeMenu"
						:router="false"
						:collapse="isCollapse"
						:collapse-transition="false"
						:unique-opened="true"
					>
						<SubMenu :menuList="menuList"></SubMenu>
					</el-menu>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-container>
			<el-header>
				<ToolBarLeft />
				<ToolBarRightVue />
			</el-header>
			<Main />
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useGlobalStore } from "@/stores/modules/global";

import { useAuthStore } from "@/stores/modules/auth";
import SubMenu from "@/layouts/components/Menu/index.vue";
import Main from "../components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";
import ToolBarRightVue from "@/layouts/components/Header/ToolBarRight.vue";

const authStore = useAuthStore();
const route = useRoute();
const globalStore = useGlobalStore();
const menuList = computed(() => authStore.authMenuListGet);

const router = useRouter();
const routes = router.options.routes;

const routerKey = () => {};

routerKey();

// 默认加载的第一个菜单
const activeMenu = computed(() => {
	return route.meta.activeMenu ? route.meta.activeMenu : route.path;
});

// 是否可以折叠菜单
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
