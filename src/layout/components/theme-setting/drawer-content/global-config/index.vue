<template>
  <div>
    <el-divider title-placement="center">界面功能</el-divider>

    <setting-menu label="展示Header">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Tab">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Sider">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Footer">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="固定Sider">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="固定Footer">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="固定Header和Tab栏">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="Header高度">
      <el-input-number v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Tab高度">
      <el-input-number v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Footer高度">
      <el-input-number v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Sider宽度">
      <el-input-number v-model="theme.header.height" />
    </setting-menu>
    <el-divider title-placement="center">界面展示</el-divider>
    <setting-menu label="面包屑">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="面包屑图标">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import SettingMenu from '@/components/SettingMenu/index.vue'

const theme = useThemeStore()
</script>
<style scoped lang="scss">
:deep(.el-switch__core) {
  transform: scale(1.2);
  width: 4rem !important;
}
</style>
