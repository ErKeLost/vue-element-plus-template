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
    <LayoutCheckBox
      v-for="item in theme.layout.modeList"
      :key="item.value"
      :mode="item.value"
      :label="item.label"
      :checked="item.value === theme.layout.mode"
      @click="theme.setLayoutMode(item.value)"
    />
  </el-space>
  <!-- <Teleport to="body"> -->
  <!-- </Teleport> -->
  <el-button type="text" @click="dialogVisible = true"
    >click to open the Dialog</el-button
  >

  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <DColorPicker></DColorPicker>
  </el-dialog>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/store'
import sunIcon from '@/assets/svg/sun.svg?component'
import moonIcon from '@/assets/svg/moon.svg?component'
const theme = useThemeStore()
const dialogVisible = ref(false)
</script>
<style scoped lang="scss">
.div {
  position: relative;
  z-index: 99999999 !important;
}
:deep(.el-switch__core) {
  transform: scale(1.3);
  width: 3.5rem !important;
}
</style>
