<template>
	<el-switch v-model="themeConfig.isDark" @change="switchDark" inline-prompt :active-icon="Sunny" :inactive-icon="Moon" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { GlobalStore } from "@/stores";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useTheme } from "@/hooks/useTheme";

const globalStore = GlobalStore();
const themeConfig = computed(() => globalStore.themeConfig);
const { switchDark } = useTheme();
</script>
