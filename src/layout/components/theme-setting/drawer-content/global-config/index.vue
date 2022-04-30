<template>
  <el-divider title-placement="center">界面显示</el-divider>
  <setting-menu label="固定头部和多页签">
    <el-switch v-model="theme.fixedHeaderAndTab" />
  </setting-menu>
  <setting-menu label="头部高度">
    <el-input-number v-model="theme.header.height" />
  </setting-menu>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import SettingMenu from '@/components/SettingMenu/index.vue'

const theme = useThemeStore()
</script>
<style scoped></style>
