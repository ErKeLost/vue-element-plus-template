<template>
  <!-- <router-view /> -->
  <BasicLayout />
</template>
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { createAxios } from '@erkelost/axios-ext'
import {
  shadeBgColor,
  writeNewStyle,
  createNewStyle
} from '@/layout/components/theme-setting/theme-color/element-plus'
const http = createAxios({
  baseURL: '/api',
  timeout: 5000
})
console.log(http)

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
