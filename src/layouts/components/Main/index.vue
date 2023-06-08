<template>
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
</script>

<style scoped>
@import "./index.scss";
</style>
