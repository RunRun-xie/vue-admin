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
import { GlobalStore } from "@/stores";

const globalStore = GlobalStore();
</script>

<style scoped>
@import "./index.scss";
</style>
