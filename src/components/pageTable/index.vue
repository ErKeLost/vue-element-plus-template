<template>
  <STable
    :tableData="tableData"
    :propList="propList"
    :showIndexColumn="showIndexColumn"
    :showSelectColumn="showSelectColumn"
    @handleSelectionChange="handleSelectionChange"
  >
    <template #name="scope">
      <el-button type="primary">{{ scope.row.name }}</el-button>
    </template>
    <template #action="scope">
      <el-button type="primary">编辑</el-button>
      <el-button type="primary">删除</el-button>
    </template>
  </STable>
</template>
<script setup lang="ts">
const propList = [
  {
    prop: 'name',
    label: '姓名',
    minWith: '100',
    slotName: 'name'
  },
  {
    prop: 'address',
    label: '地址',
    minWith: '100'
  },
  {
    prop: 'date',
    label: '时间123',
    minWith: '100'
  },
  {
    label: '操作',
    minWith: '100',
    slotName: 'action'
  }
]
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
function handleSelectionChange(value: any) {
  console.log(value)
}
</script>
