<template>
	<div class="login-bg">
		<div class="corner-top-box">
			<CornerTop></CornerTop>
		</div>
		<div class="corner-bottom-box">
			<CornerBottom></CornerBottom>
		</div>
		<div v-for="item in state" :class="`fly bg-fly-circle${item}`"></div>
	</div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import CornerTop from "./CornerTop.vue";
import CornerBottom from "./CornerBottom.vue";

const state = reactive<Number[]>([1, 2, 3, 4]);
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
