<template>
  <el-config-provider :locale="zhCn">
    <router-view />
  </el-config-provider>
  <!-- <BasicLayout /> -->
</template>
<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import {
  shadeBgColor,
  writeNewStyle,
  createNewStyle
} from '@/layout/components/theme-setting/theme-color/element-plus'

const body = document.documentElement as HTMLElement
const setEpThemeColor = (color: string) => {
  // @ts-expect-error
  writeNewStyle(createNewStyle(color))
  // useEpThemeStoreHook().setEpThemeColor(color)
  body.style.setProperty('--el-color-primary-active', shadeBgColor(color))
}
setEpThemeColor(import.meta.env.VITE_THEME_COLOR)
</script>
<style lang="scss"></style>
