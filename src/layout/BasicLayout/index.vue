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
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-col :span="11">
          <el-date-picker
            v-model="form.date1"
            type="date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </el-col>
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-time-picker
            v-model="form.date2"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button>Cancel</el-button>
      </el-form-item>
    </el-form>
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
// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
