<template>
	<template v-for="item in menuList" :key="item.path">
		<el-sub-menu v-if="item.children?.length" :index="item.path">
			<template #title>
				<el-icon>
					<component :is="item.meta.icon"></component>
				</el-icon>
				<span>{{ item.meta.title }}</span>
			</template>
			<SubMenu :menuList="item.children" />
		</el-sub-menu>
		<el-menu-item v-else :index="item.path" @click="handleClickMenu(item)">
			<el-icon v-if="item.meta.icon">
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

<style lang="scss">
.el-sub-menu .el-sub-menu__title:hover {
	color: var(--el-menu-hover-text-color) !important;
	background-color: transparent !important;
}
.el-menu--collapse {
	.is-active {
		.el-sub-menu__title {
			color: #ffffff !important;
			background-color: var(--el-color-primary) !important;
		}
	}
}
.el-menu-item {
	&:hover {
		color: var(--el-menu-hover-text-color);
	}
	&.is-active {
		color: var(--el-menu-active-color) !important;
		background-color: var(--el-menu-active-bg-color) !important;
		&::before {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 4px;
			content: "";
			background-color: var(--el-color-primary);
		}
	}
}
.el-menu-item {
	&.is-active {
		&::before {
			left: 0;
		}
	}
}
.columns {
	.el-menu-item {
		&.is-active {
			&::before {
				right: 0;
			}
		}
	}
}
</style>
