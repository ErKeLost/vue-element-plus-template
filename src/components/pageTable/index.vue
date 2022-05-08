<template>
  <STable
    :tableData="tableData"
    :tableCount="tableCount"
    v-bind="tableConfig"
    @handleSelectionChange="handleSelectionChange"
  >
    <template #name="scope">
      <el-button type="primary">{{ scope.row.name }}</el-button>
    </template>
    <template #action>
      <el-button type="primary">编辑</el-button>
      <el-button type="primary">删除</el-button>
    </template>
    <!-- 高级插槽 -->
    <template
      v-for="item in otherPropSlots"
      :key="item.prop"
      #[item.slotName]="scope"
    >
      <template v-if="item.slotName">
        <slot :name="item.slotName" :row="scope.row"></slot>
      </template>
    </template>
  </STable>
</template>
<script setup lang="ts">
const props = defineProps<{
  tableConfig: any
  // tableData: any[]
  tableCount: number
}>()
console.log(props)

function handleSelectionChange(value: any) {
  console.log(value)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'adny',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'erkelost',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'you',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
// 获取其他动态插槽
const otherPropSlots = props.tableConfig.propList.filter((item: any) => {
  return item
})
</script>
