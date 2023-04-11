<template>
	<div class="login-container flx-center">
		<div class="login-box">
			<section class="animate__bounceIn">
				<div class="login-form">
					<div class="login-left">
						<img class="login-img" src="@/assets/images/login-img.svg" alt="" />
					</div>
					<div class="login-right">
						<div class="login-logo">
							<img class="login-icon" src="@/assets/images/logo.svg" alt="" />
							<h2 class="logo-text">RunTu-Admin</h2>
						</div>
						<LoginForm></LoginForm
					></div>
				</div>
			</section>
		</div>
		<LoginBg></LoginBg>
	</div>
</template>

<script setup lang="ts">
import LoginBg from "./components/CornerStyle/index.vue";
import LoginForm from "./components/LoginForm/index.vue";
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
