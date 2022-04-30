<template>
  <el-drawer
    :size="350"
    v-model="app.settingDrawerVisible"
    :with-header="false"
    :before-close="handleClose"
    :append-to-body="true"
    :show-close="false"
    :close-on-press-escape="true"
  >
    <div text-center>
      <GlobalConfig />
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'

const app = useAppStore()
const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
