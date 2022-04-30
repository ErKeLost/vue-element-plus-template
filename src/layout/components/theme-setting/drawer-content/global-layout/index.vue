<template>
  <el-divider title-placement="center">系统主题</el-divider>
  <el-switch
    v-model="theme.header.visible"
    size="large"
    :width="50"
    inline-prompt
    active-color="#000"
    inactive-color="#000"
    border-color="#fff"
    :active-icon="IcBaselineWbSunny"
    :inactive-icon="CarbonMoon"
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
import CarbonMoon from '@/components/Icon/CarbonMoon.vue'
import IcBaselineWbSunny from '@/components/Icon/IcBaselineWbSunny.vue'
const theme = useThemeStore()
</script>
<style scoped lang="scss">
:deep(.el-switch__core) {
  transform: scale(1.2);
  width: 4rem !important;
}
</style>
