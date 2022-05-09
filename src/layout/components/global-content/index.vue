<template>
  <div :class="{ 'p-25px': showPadding }" h-full ease-in-out>
    <router-view v-slot="{ Component, route }">
      <transition
        :name="theme.page.animate ? theme.page.animateMode : undefined"
        mode="out-in"
        appear
      >
        <!-- <keep-alive :include="routeStore.cacheRoutes">
          <component :is="Component" v-if="app.reloadFlag" :key="route.path" />
        </keep-alive> -->
        <component :is="Component" v-if="app.reloadFlag" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store'
interface Props {
  /** 显示padding */
  showPadding?: boolean
}
withDefaults(defineProps<Props>(), {
  showPadding: true
})
const app = useAppStore()
const theme = useThemeStore()
</script>
<style scoped></style>
