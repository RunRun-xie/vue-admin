<template>
	<el-form ref="ruleFormRef" :model="loginForm" status-icon :rules="loginRules">
		<el-form-item prop="username">
			<el-input v-model="loginForm.username" placeholder="用户名：admin / user">
				<template #prefix>
					<el-icon class="el-input__icon"><user /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item prop="password">
			<el-input v-model="loginForm.password" show-password type="password" autocomplete="off" placeholder="密码：123456">
				<template #prefix>
					<el-icon class="el-input__icon"><lock /></el-icon>
				</template>
			</el-input>
		</el-form-item>
		<el-form-item>
			<el-row justify="space-between" style="width: 100%">
				<el-checkbox v-model="checked" label="记住密码" size="large" />
				<el-button type="primary" link size="default">忘记密码</el-button>
			</el-row>
		</el-form-item>
		<el-form-item>
			<el-space direction="vertical" fill style="width: 100%">
				<el-button type="primary" @click="handleLogin(ruleFormRef)" :loading="loginLoading">登录</el-button>
				<el-button text>注册账号</el-button>
			</el-space>
		</el-form-item>
	</el-form>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import type { Login } from "@/api/interface";
import type { FormInstance, FormRules } from "element-plus";
import { loginAPI } from "@/api/modules/login";
import md5 from "js-md5";
import { useGlobalStore } from "@/stores/modules/global";
import { useRouter } from "vue-router";
import { HOME_URL } from "@/config/config";

const globalStore = useGlobalStore();
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const loginRules = reactive<FormRules>({
	username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
	password: [{ required: true, message: "请输入密码", trigger: "blur" }]
});

const loginForm = reactive<Login.ReqLoginForm>({ username: "admin", password: "123456" });

// 记住密码
const checked = ref<Boolean>(false);
// 登录等待状态样式
const loginLoading = ref<Boolean>(false);

// 登录
const handleLogin = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate(async (valid, fields) => {
		if (valid) {
			// const { data }: any = await loginAPI({ ...loginForm, password: md5(loginForm.password) });
			// globalStore.setToken(data.access_token);
			router.push(HOME_URL);
		} else {
			console.log("error submit!", fields);
		}
	});
};
</script>

<style scoped lang="scss"></style>
