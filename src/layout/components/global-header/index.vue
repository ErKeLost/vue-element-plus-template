<template>
  <div text-red class="flex-center h-full bg-[#abf]">
    <el-button @click="app.setSiderCollapse(!app.siderCollapse)"
      >我是按钮</el-button
    >
  </div>
</template>
<script setup lang="ts">
import { useAppStore } from '@/store'
const app = useAppStore()
</script>
