<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
// import TnForm from "@tuniao/tnui-vue3-uniapp/components/form/src/form.vue";
// import TnFormItem from "@tuniao/tnui-vue3-uniapp/components/form/src/form-item.vue";
// import TnInput from "@tuniao/tnui-vue3-uniapp/components/input/src/input.vue";
// import TnIcon from "@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue";
import {
	TnForm,
	TnFormItem,
	TnInput,
	TnIcon,
	TnActionSheet,
} from "@tuniao/tnui-vue3-uniapp";
import type { FormSettings, TnFormInstance, TnActionSheetInstance } from "../types/form";

const props = defineProps<{ settings?: FormSettings }>();
const data = defineModel<{ [key: string]: any }>("data", { required: true });

const formRef = ref<TnFormInstance>();
const actionSheetRefs = ref<{[key:string]: any}>({});

//表单的校验规则
const formRules = computed(() => {
	return props?.settings?.rules;
});

//表单的配置项
const formItem = computed(() => {
	return props?.settings?.items;
});

//动态设置ref
// const setActionSheetRefs = (el: any, prop: string) => {
// 	actionSheetRefs.value.push(el)
// };

动态打开actionsheet
const openActionSheet = (prop:string) => {
	actionSheetRefs.value[prop]?.value.show({
		actions: formItem[prop]?.default || [],
		title:
	})
}

onMounted(() => {});
</script>
<template>
	<view class="base-container">
		<TnForm ref="formRef" :model="data" :rules="formRules">
			<TnFormItem
				v-for="item in formItem"
				:key="item.prop"
				:label="item.label"
				:prop="item.prop"
				:label-position="item.labelPosition || 'left'"
				:label-width="item.labelWidth || 'auto'"
			>
				<view v-if="item.type === 'input'">
					<TnInput
						type="text"
						v-model="data[item.prop]"
						:placeholder="item.placeholder || ''"
						:disabled="item.disabled || false"
						:border="item.border || false"
						:textAlign="item.textAlign || 'left'"
						:underline="item.underline || false"
					>
					</TnInput>
				</view>
				<view v-else-if="item.type === 'actionsheet'">
					<TnInput
						type="select"
						v-model="data[item.prop]"
						:placeholder="item.placeholder || ''"
						:disabled="item.disabled || false"
						:border="item.border || false"
						:textAlign="item.textAlign || 'left'"
						:underline="item.underline || false"
						@click="item.select"
					>
						<template #suffix>
							<TnIcon name="right"></TnIcon>
						</template>
					</TnInput>
					<TnActionSheet :ref="(el) => actionSheetRefs[item.prop] = el" />
				</view>
			</TnFormItem>
		</TnForm>
	</view>
</template>

<style lang="scss" scoped>
.basecontainer {
	width: 100%;
	height: 100%;
}
</style>
