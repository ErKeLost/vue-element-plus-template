// declare module '*.vue' {
//   import { DefineComponent } from 'vue'
//   const Component: DefineComponent<{}, {}, any>
//   export default Component
// }

declare module 'virtual:*' {
  const result: any
  export default result
}
declare module 'css-color-function' {
  export { convert }
}
declare module '@erkelost/colorpicker' {
  export { ColorPicker }
}
