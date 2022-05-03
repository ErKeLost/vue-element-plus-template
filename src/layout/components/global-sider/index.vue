<template>
  <el-button @click="app.setSiderCollapse(!app.siderCollapse)"
    >我是按钮</el-button
  >
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="app.siderCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><CarbonClose /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon><CarbonMoon /></el-icon>
      <span>Navigator Two</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <el-icon><LogosBitriseIcon /></el-icon>
      <span>Navigator Three</span>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><CarbonSettings /></el-icon>
      <span>Navigator Four</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'
const theme = useThemeStore()
const app = useAppStore()
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.el-menu {
  border-right: none;
}
</style>
