<template>
  <div>
    <div>公司用户管理</div>
    <el-date-picker
      v-model="value1"
      type="datetime"
      placeholder="Select date and time"
    />
    <PageSearch
      :searchFormConfig="searchFormConfig"
      @handleQueryClick="handleQueryClick"
      @handleResetClick="handleResetClick"
    ></PageSearch>
    <PageTable :tableConfig="tableConfig">
      <template #date="scope">
        {{ scope.row.date }}
      </template>
    </PageTable>
  </div>
</template>
<script setup lang="ts">
import { searchFormConfig } from './config/search.config'
import { tableConfig } from './config/table.config'
const value1 = ref('')
function handleResetClick() {
  console.log('重置')
}
function handleQueryClick(value: any) {
  console.log(value)
}
</script>
