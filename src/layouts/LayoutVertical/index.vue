<!-- 纵向布局 -->
<template>
	<el-container class="layout">
		<el-aside>
			<div class="menu" :style="{ width: isCollapse ? '65px' : '210px' }">
				<div class="logo flx-center">
					<img src="@/assets/images/logo.svg" alt="logo" />
					<span v-show="!isCollapse">RunTu Admin</span>
				</div>
				<el-scrollbar>
					<el-menu
						:default-active="activeMenu"
						:router="false"
						:collapse="isCollapse"
						:collapse-transition="false"
						:unique-opened="true"
						background-color="#191a20"
						text-color="#bdbdc0"
						active-text-color="#ffffff"
					>
						<SubMenu :menuList="menuList"></SubMenu>
					</el-menu>
				</el-scrollbar>
			</div>
		</el-aside>
		<el-container>
			<el-header>
				<ToolBarLeft />
			</el-header>
			<Main />
		</el-container>
	</el-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { GlobalStore } from "@/stores";
import { AuthStore } from "@/stores/modules/auth";
import SubMenu from "@/layouts/components/Menu/index.vue";
import Main from "../components/Main/index.vue";
import ToolBarLeft from "@/layouts/components/Header/ToolBarLeft.vue";

const authStore = AuthStore();
const route = useRoute();
const globalStore = GlobalStore();
const menuList = computed(() => authStore.authMenuListGet);

const router = useRouter();
const routes = router.options.routes;

const routerKey = () => {};

routerKey();

// 默认加载的第一个菜单
const activeMenu = computed(() => {
	route.meta.activeMenu ? route.meta.activeMenu : route.path;
});
// 是否可以折叠菜单
const isCollapse = computed(() => globalStore.themeConfig.isCollapse);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
