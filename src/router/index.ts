import { App } from 'vue'
import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw
  // RouteRecordRaw
} from 'vue-router'
import { routes } from './modules'

import WHITE_NAME_LIST from './routes/router-basic'
// import { RedirectRoute } from '@/router/base'
// // import { PageEnum } from '@/enums/pageEnum'
import { createRouterGuards } from './guard/router-guards'

// //需要验证权限
// export const asyncRoutes = [...routeModuleList]

// //普通路由 无需验证权限
// export const constantRouter: any[] = [constantRoutes]

const { VITE_HASH_ROUTE = 'false', VITE_BASE_URL } = import.meta.env
const router = createRouter({
  history:
    VITE_HASH_ROUTE === 'false'
      ? createWebHashHistory(VITE_BASE_URL)
      : createWebHistory(VITE_BASE_URL),
  routes: [...(WHITE_NAME_LIST as unknown as RouteRecordRaw[]), ...routes],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
// console.log([...(WHITE_NAME_LIST as unknown as RouteRecordRaw[]), ...routes])

export async function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫
  createRouterGuards(router)
  await router.isReady()
}

export default router
export { modules } from './modules'
