<template>
  <div>
    <div>公司用户管理</div>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time"
    />
    <PageSearch :searchFormConfig="searchFormConfig"></PageSearch>
  </div>
</template>
<script setup lang="ts">
import { searchFormConfig } from './config/search.config'
const value1 = ref('')
// function handleResetClick() {
//   console.log('重置')
// }
// function handleQueryClick() {
//   console.log('查询')
// }
</script>
