import { App } from 'vue'
import AdnyLayout from '@erkelost/layout'
import { ColorPicker } from '@erkelost/colorpicker'
/**
 * 全局注册自定义组件 待完善
 * @param app
 */
// console.log(AdnyColorPicker)
// AdnyColorPicker.name = 'AdnyColorPicker'
const registerComponents = [AdnyLayout, ColorPicker]
export function setupCustomComponents(app: App) {
  registerComponents.forEach((component) => {
    app.component(component.name, component)
  })
}
