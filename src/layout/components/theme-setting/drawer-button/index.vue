<template>
  <el-button
    type="primary"
    fixed
    top-240px
    right-14px
    z-10000
    w-42px
    h-42px
    p-0
    transition-all
    @click="app.toggleSettingDrawerVisible"
    :class="[
      { '!right-350px': app.settingDrawerVisible },
      app.settingDrawerVisible ? 'ease-out' : 'ease-in'
    ]"
  >
    <CarbonSettingsServices text-2xl v-if="app.settingDrawerVisible" />
    <CarbonClose text-2xl v-else />
  </el-button>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store'

const app = useAppStore()
</script>
