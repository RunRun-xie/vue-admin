<template>
	<div class="div">
		<el-button @click="handle">点击</el-button>
		{{ count }}
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);

const debounce = (fun: (...args: any[]) => void, time: number) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	return function debouncedFunction(this: any, ...args: any[]) {
		const context = this;
		clearTimeout(timeout!);
		timeout = setTimeout(() => fun.apply(context, args), time);
	};
};

const handle = debounce(() => {
	count.value++;
}, 1000);
</script>

<style scoped></style>
