<template>
  <div
    class="h-full bg-[#f6f9f8] dark:bg-[#101014] transition duration-300 ease-in-out"
  >
    {{ theme.page.animateMode }}

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
