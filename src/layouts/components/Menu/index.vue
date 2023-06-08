<template>
	<template v-for="(item, index) in menuList" :key="index">
		<el-sub-menu v-if="item.children && item.children.length > 0" :index="item.path">
			<template #title>
				<el-icon>
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<SubMenu :menuList="item.children"></SubMenu>
		</el-sub-menu>
		<el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
			<el-icon>
				<component :is="item.meta.icon"></component>
			</el-icon>
			<template #title>
				<span>{{ item.meta.title }}</span>
			</template>
		</el-menu-item>
	</template>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SubMenu from "@/layouts/components/Menu/index.vue";

const router = useRouter();

defineProps<{ menuList: Menu.MenuOptions[] }>();

const handleClickMenu = (subItem: Menu.MenuOptions) => {
	if (subItem.meta.isLink) return window.open(subItem.meta.isLink, "_blank");
	router.push(subItem.path);
};
</script>

<style scoped></style>
