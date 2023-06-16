<template>
	<Tabs />
	<el-main>
		<router-view v-slot="{ Component, route }">
			<transition appear name="fade-transform" mode="out-in">
				<component :is="Component" :key="route.path" />
			</transition>
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
console.log(globalStore);
</script>

<style scoped>
@import "./index.scss";
</style>
