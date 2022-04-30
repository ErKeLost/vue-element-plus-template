<template>
  <adny-layout
    :mode="mode"
    :min-width="theme.layout.minWidth"
    :fixed-header-and-tab="theme.fixedHeaderAndTab"
    :header-height="theme.header.height"
    :header-visible="theme.header.visible"
    :tab-visible="theme.tab.visible"
    :tab-height="theme.tab.height"
    :footer-visible="theme.footer.visible"
    :sider-visible="theme.sider.visible"
    :sider-width="siderWidth"
    :sider-collapsed-width="siderCollapsedWidth"
    :sider-collapse="app.siderCollapse"
    :fixed-footer="theme.footer.fixed"
  >
    <template #header>
      <div text-red class="flex-center h-full bg-[#abf]">Header</div>
    </template>
    <template #tab>
      <div class="flex-center h-full bg-[#fba]">Tab</div>
    </template>
    <template #sider>
      <div class="h-full bg-[#fab] whitespace-nowrap">
        <el-date-picker
          v-model="value1"
          type="datetimerange"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date"
        />
        <el-button>我是按钮</el-button>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-[#bfa]">Footer</div>
    </template>
    <div text-center></div>
    <div v-for="i in 100" :key="i" class="text-center">{{ i }}</div>
  </adny-layout>
  <ThemeSetting />
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'
import { useBasicLayout } from '@/composables'

const app = useAppStore()
const theme = useThemeStore()

const { mode, siderVisible, siderWidth, siderCollapsedWidth } = useBasicLayout()
const value1 = ref([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10)
])
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
