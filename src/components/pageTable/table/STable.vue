<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        minWidth="60"
        :align="selectColumnAlign ?? 'center'"
        type="selection"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        minWidth="80"
        :label="indexColumnLabel ?? '序号'"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div flex justify-end>
      <slot name="tableFooter">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
      /></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
const currentPage4 = ref(4)
const pageSize4 = ref(100)
const small = ref(false)
const background = ref(true)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
const props = withDefaults(
  defineProps<{
    tableData: any[]
    propList: any[]
    showSelectColumn: boolean
    indexColumnLabel: string
    showIndexColumn: boolean
    selectColumnAlign: string
    tableCount: number
  }>(),
  {
    showSelectColumn: true
  }
)
const emit = defineEmits<{
  (e: 'handleSelectionChange', value: any[]): void
}>()
console.log(props)
function handleSelectionChange(value: any) {
  emit('handleSelectionChange', value)
}
</script>
