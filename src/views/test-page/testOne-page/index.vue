<template>
	<div class="public-card">
		<h1>高性能渲染十万条数据(虚拟列表)</h1>
		<el-divider />
		<div class="scrollView" ref="listRef" @scroll="handleOnScroll">
			<div class="virtualScroller" :style="{ height: `${listHeight}px` }"></div>
			<div class="list" :style="{ transform: `translateY(${startOffset}px)` }">
				<div class="item" v-for="item in list" :key="item">
					{{ item }}
				</div>
			</div>
		</div>
	</div>
</template>
18064166263
<script setup lang="ts">
import { ref, onMounted } from "vue";

const listRef = ref<any>(null);

// 要显示的总条数
const total = ref(100000);
const list = ref<Array<number>>([]);
const data = ref<Array<number>>([]);
const itemSize = ref(50);
const containerHeight = ref<number>(300);
const startOffset = ref<number>(0);
const listHeight = ref<number>(0);

const getData = () => {
	for (let i = 0; i < total.value; i++) {
		list.value.push(i);
	}

	listHeight.value = list.value.length * itemSize.value;
	data.value = list.value;
	list.value = list.value.slice(0, 6);
};

const handleOnScroll = () => {
	// 当前滚动的位置
	let scrollTop = listRef.value.scrollTop;
	// 列表开始索引
	let startIndex = Math.floor(scrollTop / itemSize.value);
	// 列表结束索引
	let endIndex = Math.ceil((scrollTop + containerHeight.value) / itemSize.value);
	list.value = data.value.slice(startIndex, endIndex);
	// 列表移动距离
	startOffset.value = scrollTop - (scrollTop % itemSize.value);
};

onMounted(() => {
	getData();
});
</script>

<style scoped lang="scss">
.scrollView {
	width: 200px;
	height: 300px;
	overflow-y: scroll;
	position: relative;
	border: 1px solid;
}

.item {
	height: 50px;
	background-color: #a0cfff;
	border-bottom: 1px solid;
	line-height: 50px;
	text-align: center;
}

.list {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
}
</style>
