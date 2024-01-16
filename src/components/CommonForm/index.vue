<template>
	<div class="card content-box">
		<el-alert
			title="通过 component :is 组件属性 && v-bind 属性透传，可以将 template 中的 html 代码全部改变为 columns 配置项，具体配置请看代码。"
			type="warning"
			:closable="false"
		/>
		<component :is="'el-form'" v-bind="options.form" ref="proFormRef" :model="model">
			<template v-for="item in options.columns" :key="item.formItem.prop">
				<el-form-item v-if="item.attrs.typeName != 'select'">
					<component :is="'el-form-item'" v-bind="item.formItem">
						<component :is="`el-${item.attrs.typeName}`" v-bind="item.attrs" v-model="model[item.formItem.prop]" />
					</component>
				</el-form-item>

				<el-form-item v-if="item.attrs.typeName == 'select'" v-bind="item.formItem">
					<component
						v-bind="item.attrs"
						:is="`el-${item.attrs.typeName}`"
						:placeholder="item.attrs.placeholder"
						v-model="model[item.formItem.prop]"
					>
						<component v-for="(child, i) in item.selectList" :key="i" :is="'el-option'" :label="child.label" :value="child.value">
						</component>
					</component>
				</el-form-item>
			</template>

			<el-form-item>
				<slot name="operation"></slot>
			</el-form-item>
		</component>
	</div>
</template>

<script setup lang="tsx" name="proForm">
import { ref } from "vue";

let model = ref<any>({});

const options = ref({
	// 表单整体配置项
	form: {
		inline: false,
		labelPosition: "right",
		// labelWidth: "80px",
		size: "default",
		disabled: false,
		labelSuffix: " :"
	},
	// 表单列配置项 (formItem 代表 item 配置项，attrs 代表 输入、选择框 配置项)
	columns: [
		{
			formItem: {
				label: "日期组件",
				prop: "data"
			},
			attrs: {
				typeName: "date-picker",
				placeholder: "请选择日期组件",
				clearable: true
			}
		},
		{
			formItem: {
				label: "万条数据下拉",
				prop: "selectV2"
			},
			attrs: {
				typeName: "select-v2",
				placeholder: "万条数据下拉组件",
				clearable: true,
				options: [{ label: "数据一", value: 1 }]
			}
		},
		{
			formItem: {
				label: "下拉组件",
				prop: "email"
			},
			attrs: {
				teleported: true,
				typeName: "select",
				placeholder: "下拉组件",
				fitInputWidth: true,
				clearable: true
			},
			selectList: [{ label: "数据一", value: 1 }]
		}
	]
});
</script>

<style scoped lang="scss"></style>

<!-- <template v-if="item.attrs?.typeName == 'radio-group'">
	<component :is="'el-radio'" v-for="(selectValue, index) in item.attrs.selectRadio" :label="selectValue.value" :key="index">
		{{ selectValue.label }}
	</component>
</template> -->
