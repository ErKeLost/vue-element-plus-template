<template>
  <el-divider title-placement="center">颜色主题</el-divider>
  <el-row :gutter="35">
    <el-col
      :span="4"
      v-for="color in theme.themeColorList"
      :key="color"
      class="flex-x-center"
    >
      <color-checkbox
        :color="color"
        :checked="color === theme.themeColor"
        @click="theme.setThemeColor(color)"
      />
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { useThemeStore } from '@/store'

const theme = useThemeStore()
</script>
