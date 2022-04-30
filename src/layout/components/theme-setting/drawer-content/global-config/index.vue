<template>
  <div>
    <el-divider title-placement="center">界面功能</el-divider>

    <setting-menu label="展示Header">
      <el-switch
        v-model="theme.header.visible"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Tab">
      <el-switch
        v-model="theme.tab.visible"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Sider">
      <el-switch
        v-model="theme.sider.visible"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="展示Footer">
      <el-switch
        v-model="theme.footer.visible"
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
      <el-input-number size="small" v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Tab高度">
      <el-input-number size="small" v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Footer高度">
      <el-input-number size="small" v-model="theme.header.height" />
    </setting-menu>
    <setting-menu label="Sider宽度">
      <el-input-number size="small" v-model="theme.header.height" />
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
    <setting-menu label="页面切换动画">
      <el-switch
        v-model="theme.fixedHeaderAndTab"
        active-text="开启"
        inline-prompt
        inactive-text="关闭"
      />
    </setting-menu>
    <setting-menu label="页面切换动画类型">
      <el-select v-model="value" placeholder="Select">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </setting-menu>
  </div>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import SettingMenu from '@/components/SettingMenu/index.vue'
const value = ref('')
const theme = useThemeStore()
const options = [
  {
    value: 'Option1',
    label: 'Option1'
  },
  {
    value: 'Option2',
    label: 'Option2'
  },
  {
    value: 'Option3',
    label: 'Option3'
  },
  {
    value: 'Option4',
    label: 'Option4'
  },
  {
    value: 'Option5',
    label: 'Option5'
  }
]
</script>
<style scoped lang="scss">
:deep(.el-switch__core) {
  transform: scale(1.2);
  width: 4rem !important;
}
:deep(.el-select) {
  width: 10rem !important;
}
:deep(.el-input--small .el-input__inner) {
  height: 30px;
  line-height: 30px;
}
</style>
