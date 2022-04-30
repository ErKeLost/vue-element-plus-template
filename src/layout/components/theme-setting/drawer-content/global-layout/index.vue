<template>
  <el-divider title-placement="center">系统主题</el-divider>
  <el-switch
    v-model="theme.header.visible"
    size="large"
    inline-prompt
    active-color="#000"
    inactive-color="#000"
    border-color="#fff"
    :active-icon="sunIcon"
    :inactive-icon="moonIcon"
  />
  <el-divider title-placement="center">布局模式</el-divider>
  <el-space justify="space-between">
    <layout-checkbox
      v-for="item in theme.layout.modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === theme.layout.mode"
      @click="theme.setLayoutMode(item.value)"
    />
  </el-space>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import RiMoonFoggyFill from '@/components/Icon/CarbonMoon.vue'
import IcBaselineWbSunny from '@/components/Icon/IcBaselineWbSunny.vue'
import sunIcon from '@/assets/svg/sun.svg?component'
import moonIcon from '@/assets/svg/moon.svg?component'
console.log(RiMoonFoggyFill)

const theme = useThemeStore()
</script>
<style scoped lang="scss">
:deep(.el-switch__core) {
  transform: scale(1.3);
  width: 3.5rem !important;
}
</style>
