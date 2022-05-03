<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { createAxios } from '@erkelost/axios-ext'
const http = createAxios({
  baseURL: '/api',
  timeout: 5000
})
console.log(http)
</script>

<template>
  <!-- <router-view /> -->
  <BasicLayout />
</template>

<style lang="scss"></style>
