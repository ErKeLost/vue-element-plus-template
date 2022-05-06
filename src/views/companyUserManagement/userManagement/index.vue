<template>
  <div>公司用户管理</div>
  <el-date-picker
    v-model="value1"
    type="datetime"
    placeholder="Select date and time"
  />
</template>
<script setup lang="ts">
const value1 = ref('')
</script>
