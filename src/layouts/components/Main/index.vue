<template>
	<Tabs />
	<el-main>
		<router-view v-slot="{ Component, route }">
			<component :is="Component" :key="route.fullPath" />

			<!-- <Transition appear name="fade-transform" mode="out-in">
				<component :is="Component" :key="route.fullPath" />
			</Transition> -->
		</router-view>
	</el-main>
	<el-footer>
		<Footer />
	</el-footer>
</template>

<script setup lang="ts">
import Footer from "../Footer/index.vue";
import Tabs from "../Tabs/index.vue";
import { useGlobalStore } from "@/stores/modules/global";

const globalStore = useGlobalStore();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
