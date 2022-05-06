<template>
  <div h-full text-center flex select-none all:transition-400>
    <div ma>
      <div
        grid="~ flow-col gap-4"
        place="content-center items-center"
        h="screen"
        font="mono"
      >
        <div>
          <el-button type="primary" @click="login">登录</el-button>
        </div>
        <Coordinate label="X" :value="x" />
        <Coordinate label="Y" :value="y" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { x, y } = useMouse()
const router = useRouter()
function login() {
  router.push('/companyUserManagement')
}
</script>
