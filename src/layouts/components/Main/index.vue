<template>
	<el-container class="layout">
		<el-main>
			<router-view v-slot="{ Component, route }">
				<transition appear name="fade-transform" mode="out-in">
					<component :is="Component" :key="route.path" />
				</transition>
			</router-view>
		</el-main>
	</el-container>
</template>

<script setup lang="ts"></script>

<style scoped></style>
