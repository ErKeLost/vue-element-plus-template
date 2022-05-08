<template>
  <el-form :label-width="labelWidth" :label-position="labelPosition">
    <el-row :gutter="gutter">
      <template v-for="item in formItems" :key="item.label">
        <el-col v-bind="colLayout">
          <el-form-item
            v-if="!item.isHidden"
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                v-model="formData[`${item.field}`]"
                :show-password="item.type === 'password'"
              ></el-input>
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                style="width: 100%"
                v-model="formData[`${item.field}`]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.value"
                  :value="option.value"
                  >{{ option.title }}</el-option
                >
              </el-select>
            </template>
            <template v-else-if="item.type === 'datepicker'">
              <el-date-picker
                v-bind="item.otherOptions"
                style="width: 100%"
                v-model="formData[`${item.field}`]"
              ></el-date-picker>
            </template>
          </el-form-item>
        </el-col>
      </template>
      <el-col v-bind="operationLayout" :style="itemStyle">
        <div flex justify-end>
          <slot name="operation"></slot>
        </div>
      </el-col>
    </el-row>
  </el-form>
</template>

<script lang="ts" setup>
import { IFormItem } from './types'
interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  labelPosition?: string
  colLayout?: any
  itemStyle?: any
  modelValue: any
  operationLayout?: any
  gutter?: number
}
const props = withDefaults(defineProps<IForm>(), {
  labelWidth: '100px',
  labelPosition: 'left',
  colLayout: () => ({
    xl: 6,
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }),
  itemStyle: {
    padding: '22px 30px 0px 30px'
  }
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()
const formData = ref({ ...props.modelValue })
watch(
  formData,
  (newValue) => {
    console.log(newValue)

    emit('update:modelValue', newValue)
  },
  {
    deep: true
  }
)
</script>

<style scoped lang="scss"></style>
