<template>
	<div class="tool-bar-ri">
		<div class="header-tools">
			<SwitchDark class="switch-dark" />
		</div>
	</div>
</template>

<script setup lang="ts">
import SwitchDark from "@/components/SwitchDark/index.vue";
</script>
<style lang="scss" scoped>
.tool-bar-ri {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: 25px;

	.header-tools {
	}
}
</style>
