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
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Primary</el-button>
      <el-button type="success" plain>Success</el-button>
      <el-button type="info" plain>Info</el-button>
      <el-button type="warning" plain>Warning</el-button>
      <el-button type="danger" plain>Danger</el-button>
    </el-row>

    <el-row class="mb-4">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Primary</el-button>
      <el-button type="success" round>Success</el-button>
      <el-button type="info" round>Info</el-button>
      <el-button type="warning" round>Warning</el-button>
      <el-button type="danger" round>Danger</el-button>
    </el-row>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-carousel
      :initial-index="5"
      :interval="40000"
      type="card"
      height="400px"
    >
      <el-carousel-item v-for="item in a" :key="item">
        <img :src="item.pic" />
      </el-carousel-item>
    </el-carousel>
    <el-select v-model="value" class="m-2" placeholder="Select" size="large">
      <el-option
        v-for="item in a"
        :key="item.value"
        :label="item.label"
        :value="item.pic"
      >
        <img :src="item.pic" alt="" />
      </el-option>
    </el-select>
    <el-button plain @click="open1"> Closes automatically </el-button>
    <div v-for="i in 100" :key="i">{{ i }}</div>
  </adny-layout>
  <ThemeSetting />
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'
import { useBasicLayout } from '@/composables'
import { createAxios } from '@erkelost/axios-ext'
import axios from 'axios'
const value = ref('')
const http = createAxios({
  baseURL: '/api',
  timeout: 5000
})
const a = ref<any>(null)
axios
  .get('http://123.207.32.32:9001/banner?type=2')
  .then(function (res) {
    console.log(res)
    a.value = res.data.banners
  })
  .catch(function (error) {
    console.log(error)
  })
http('/banner?type=2').then((res) => {
  console.log(res)
  // a.value = res.data.banners
})

const app = useAppStore()
const theme = useThemeStore()

const { mode, siderWidth, siderCollapsedWidth } = useBasicLayout()
const open1 = () => {
  ElNotification({
    title: 'Title',
    message: h('img', { src: a.value[0].pic })
  })
}
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
