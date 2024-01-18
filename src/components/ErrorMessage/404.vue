<template>
	<div class="not-container">
		<img class="not-image" src="@/assets/images/404.png" alt="404" />
		<div class="not-details">
			<h2>404</h2>
			<h4>抱歉，你访问的页面不存在🤷‍♂️🤷‍♀️。</h4>
			<el-button type="primary" @click="router.back">返回上一页</el-button>
		</div>
	</div>
</template>

<script setup lang="ts" name="404">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
