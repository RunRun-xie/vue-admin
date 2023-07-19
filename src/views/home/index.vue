<template>
	<!-- <div class="map-container" ref="mapContainer"></div> -->
	<baidu-map autoLocation class="map-container" :center="center" :zoom="zoom" scroll-wheel-zoom @ready="initBaiMAP">
		<bm-copyright
			anchor="BMAP_ANCHOR_TOP_RIGHT"
			:copyright="[{ id: 1, content: '润土出品', bounds: { ne: { lng: 110, lat: 40 }, sw: { lng: 0, lat: 0 } } }]"
		>
		</bm-copyright>
	</baidu-map>
</template>

<script setup lang="ts" name="home">
import { ref, onMounted } from "vue";
import { Map, View } from "ol"; // 地图实例方法、视图方法
import Tile from "ol/layer/Tile"; // 瓦片渲染方法
import OSM from "ol/source/OSM"; // OSM瓦片【OSM不能在实际开发中使用，因为OSM里中国地图的边界有点问题！！！！】
import { BaiduMap } from "vue-baidu-map-3x";

const center = ref({ lng: 0, lat: 0 });
const zoom = ref(3);

const mapContainer = ref<any>(null); // 存放地图实例
const initMap = () => {
	mapContainer.value = new Map({
		target: mapContainer.value,
		layers: [
			// 图层
			new Tile({
				// 使用瓦片渲染方法
				source: new OSM() // 图层数据源
			})
		],
		view: new View({
			// 地图视图
			projection: "EPSG:4326", // 坐标系，有EPSG:4326和EPSG:3857
			center: [116.404, 39.915], // 坐标
			minZoom: 10, // 地图缩放最小级别
			zoom: 16 // 地图缩放级别（打开页面时默认级别）
			// rotation: (Math.PI / 180) * 45 // 旋转地图45度
		})
	});
};

const initBaiMAP = () => {
	center.value.lng = 121.508513;
	center.value.lat = 31.24291;
	zoom.value = 15;
};

onMounted(() => {
	// initMap();
	// initBaiMAP();
});
</script>

<style lang="scss" scoped>
.map-container {
	width: 100%;
	height: 100%;
}
</style>
