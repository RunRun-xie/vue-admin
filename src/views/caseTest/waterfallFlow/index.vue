<template>
	<div class="water-content">
		<div class="container" ref="fContainerRef">
			<FsBookWaterFall :bottom="10" :column="column" :gap="10" :page-size="15" :request="getData">
				<template #item="{ item, index, imageHeight }">
					<FSBookCard
						:detail="{
							imageHeight,
							title: item.title,
							url: item.url,
							author: item.author,
							bgColor: colorArr[index % (colorArr.length - 1)]
						}"
					>
					</FSBookCard>
				</template>
			</FsBookWaterFall>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import FsBookWaterFall from "@/components/FsBookWaterfall/index.vue";
import type { ICardItem } from "@/components/FsBookWaterfall/type";
import FSBookCard from "@/components/FsBookWaterfall/FSBookCard.vue";
import redBookData1 from "@/assets/json/redBookData1.json";
import redBookData2 from "@/assets/json/redBookData2.json";

const colorArr = ["#409eff", "#67c23a", "#e6a23c", "#f56c6c", "#909399"];
const column = ref(4);
const fContainerRef = ref<HTMLDivElement | null>(null);
const fContainerObserver = new ResizeObserver(entries => {
	changeColumn(entries[0].target.clientWidth);
});

const changeColumn = (width: number) => {
	if (width > 960) {
		column.value = 5;
	} else if (width >= 690 && width < 960) {
		column.value = 4;
	} else if (width >= 500 && width < 690) {
		column.value = 3;
	} else {
		column.value = 2;
	}
};

onMounted(() => {
	fContainerRef.value && fContainerObserver.observe(fContainerRef.value);
});

onUnmounted(() => {
	fContainerRef.value && fContainerObserver.unobserve(fContainerRef.value);
});

const list1: ICardItem[] = redBookData1.data.items.map(i => ({
	id: i.id,
	url: i.note_card.cover.url_pre,
	width: i.note_card.cover.width,
	height: i.note_card.cover.height,
	title: i.note_card.display_title,
	author: i.note_card.user.nickname
}));
const list2: ICardItem[] = redBookData2.data.items.map(i => ({
	id: i.id,
	url: i.note_card.cover.url_pre,
	width: i.note_card.cover.width,
	height: i.note_card.cover.height,
	title: i.note_card.display_title,
	author: i.note_card.user.nickname
}));

const list = [...list1, ...list2];

const getData = (page: number, pageSize: number) => {
	return new Promise<ICardItem[]>((resolve, reject) => {
		setTimeout(() => {
			resolve(list.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize));
		}, 500);
	});
};
</script>

<style scoped lang="scss">
@import "./index.scss";
// .app {
// 	width: 100vw;
// 	height: 100vh;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	.container {
// 		width: 700px;
// 		height: 600px;
// 		border: 1px solid red;
// 	}
// 	.card-box {
// 		position: relative;
// 		width: 100%;
// 		height: 100%;
// 		border-radius: 10px;
// 	}
// }
</style>
