import { createApp } from 'vue'
import App from './App.vue'
import 'uno.css'
import 'animate.css'
import './styles/main.css'
import '@erkelost/colorpicker/dist/style.css'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import { setupCustomComponents } from '@/plugins'
async function bootStrap() {
  const app = createApp(App)
  // 注册全局常用的 组件
  setupCustomComponents(app)
  // 注册全局自定义指令
  //   setupDirectives(app)
  // 挂载状态管理
  setupStore(app)
  // 挂载路由
  await setupRouter(app)
  // 路由准备就绪后挂载APP实例
  //   await router.isReady()
  app.mount('#app', true)
}
bootStrap()
