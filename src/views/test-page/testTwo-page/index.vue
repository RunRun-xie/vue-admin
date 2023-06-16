<template>
	<div class="div">
		<div :style="styleObj" ref="divRef">
			<div v-for="item in scrollList" :key="item.id">
				<div class="cell">{{ item.title }}</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue";

type cellType = {
	id: number;
	title: string;
};
interface faceRequest {
	data: cellType;
	total: number;
}

// 滚动样式
const styleObj = ref({
	transform: "translate(0px, 0px)"
});
// 总数据的数组
const totalList = ref<Array<cellType>>([]);
// 滚动的数组
const scrollList = ref<Array<cellType>>([]);
// 数据是否全部加载完毕
let loading: Boolean = false;

// 模拟异步请求
const request = () => {
	return new Promise<faceRequest>((resolve: any, reject: any) => {
		let data = [];
		// 每次返回30条数据
		for (let i = 0; i < 30; i++) {
			data.push({
				id: totalList.value.length + i,
				title: "cell---" + (totalList.value.length + i)
			});
		}
		let total = 10000; // 数据的总数
		resolve({ data, total });
	});
};

const getData = () => {
	request().then(res => {
		totalList.value = totalList.value.concat(res.data);

		// 默认获取第一次请求回来的数据
		if (totalList.value.length <= 30) {
			scrollList.value = scrollList.value.concat(res.data);
		}
		// 当前请求的数量小于总数则继续请求
		if (totalList.value.length < res.total) {
			getData();
		} else {
			loading = true;
		}
	});
};
</script>

<style scoped>
.div {
	width: 500px;
	height: 500px;
	background-color: aquamarine;
	overflow: hidden;
}

.cell {
	height: 30px;
}
</style>
