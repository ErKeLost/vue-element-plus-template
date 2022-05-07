type IFormType = 'input' | 'password' | 'select' | 'datepicker'
type ILabelPosition = 'left' | 'right' | 'top'
export interface IFormItem {
  field: string
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}
export interface IColLayout {
  xl: number
  lg: number
  md: number
  sm: number
  xs: number
}
export interface IFormConfig {
  formItems: IFormItem[]
  labelWidth?: string
  labelPosition?: ILabelPosition
  colLayout?: IColLayout
  itemStyle?: any
  gutter?: number
  operationLayout?: IColLayout
}
