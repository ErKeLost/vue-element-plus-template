<template>
  <el-drawer
    :size="350"
    v-model="app.settingDrawerVisible"
    title="I am the title"
    :before-close="handleClose"
  >
    <span>Hi, there!</span>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'

const app = useAppStore()
const handleClose = (done: () => void) => {
  // ElMessageBox.confirm('Are you sure you want to close this?')
  //   .then(() => {
  //     done()
  //   })
  //   .catch(() => {
  //     // catch error
  //   })
}
</script>
