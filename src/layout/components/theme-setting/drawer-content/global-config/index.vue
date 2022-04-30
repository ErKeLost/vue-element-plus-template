<template>
  <el-divider title-placement="center">界面显示</el-divider>
  <setting-menu label="页面切换动画类型">
    <el-input-number v-model="theme.header.height" />
  </setting-menu>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import SettingMenu from '@/components/SettingMenu/index.vue'

const theme = useThemeStore()
</script>
<style scoped></style>
