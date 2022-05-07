<template>
  <div>
    <slot name="header"> <div>我是默认header</div> </slot>
    <SForm v-bind="searchFormConfig" v-model="formData">
      <template #operation>
        <el-button @click="handleResetaForm">清空条件</el-button>
        <el-button type="primary" @click="handleQueryaClick">搜索</el-button>
      </template>
    </SForm>
    <slot name="footer">我是默认footer</slot>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['handleResetClick', 'handleQueryClick'],
  setup(props, { emit }) {
    // formdata 动态属性
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ''
    }
    const formData = ref(formOriginData)

    // 用户点击重置
    const handleResetaForm = () => {
      for (const item in formOriginData) {
        formData.value[`${item}`] = formOriginData[item]
      }
      emit('handleResetClick')
    }
    // 点击查询
    const handleQueryaClick = () => {
      console.log(formData.value)
      emit('handleQueryClick', formData.value)
    }
    return {
      formData,
      handleResetaForm,
      handleQueryaClick
    }
  }
})
</script>

<style scoped>
.handle-btn {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  margin: 0 50px;
}
</style>
