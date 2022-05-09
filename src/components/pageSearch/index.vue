<template>
  <div>
    <slot name="header"> <div>我是默认header</div> </slot>
    <SForm v-bind="searchFormConfig" v-model="formData">
      <template #operation>
        <el-button @click="handleResetForm">清空条件</el-button>
        <el-button type="success" @click="handleResetForm">新增用户</el-button>
        <el-button type="primary" @click="handleQueryClick">搜索</el-button>
      </template>
    </SForm>
    <slot name="footer">我是默认footer</slot>
  </div>
</template>
<script lang="ts" setup>
import { IFormConfig } from './form/types'
const props = defineProps<{
  searchFormConfig: IFormConfig
}>()
const emit = defineEmits<{
  (e: 'handleResetClick'): void
  (e: 'handleQueryClick', value: any): void
}>()
// formData 动态属性
const formItems = props.searchFormConfig?.formItems ?? []
const formOriginData: any = {}
for (const item of formItems) {
  formOriginData[item.field] = ''
}
const formData = ref(formOriginData)
// 用户点击重置
const handleResetForm = () => {
  for (const item in formOriginData) {
    formData.value[`${item}`] = formOriginData[item]
  }
  emit('handleResetClick')
}
// 点击查询
const handleQueryClick = () => {
  console.log(formData.value)
  emit('handleQueryClick', formData.value)
}
</script>

<style scoped>
.handle-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  margin: 0 50px;
}
</style>
