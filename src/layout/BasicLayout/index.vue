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
    :fixed-sider="theme.sider.fixedSider"
  >
    <template #header>
      <div text-red class="flex-center h-full bg-[#abf]">Header</div>
    </template>
    <template #tab>
      <div class="flex-center h-full bg-[#fba]">Tab</div>
    </template>
    <template #sider>
      <div style="overflow-y: auto" class="h-full bg-[#fab] whitespace-nowrap">
        <div v-for="i in 100" :key="i">{{ i }}</div>
      </div>
    </template>
    <template #footer>
      <div class="flex-center h-full bg-[#bfa]">Footer</div>
    </template>
    <ContentLayout />
  </adny-layout>
  <ThemeSetting />
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'
import { useBasicLayout } from '@/composables'
const app = useAppStore()
const theme = useThemeStore()

const { mode, siderWidth, siderCollapsedWidth } = useBasicLayout()
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
