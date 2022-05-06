import type { Component } from 'vue'
import { EnumLayoutComponentName } from '@/enum'

import { views } from '@/views/index'
// import { AuthRoute } from '/#/route'
const BasicLayout = () => import('@/layout/BasicLayout/index.vue')
const BlankLayout = () => import('@/layout/BlankLayout/index.vue')
type LayoutComponent = Record<
  EnumType.LayoutComponentName,
  () => Promise<Component>
>

/**
 * 获取页面导入的vue文件(懒加载的方式)
 * @param layoutType - 布局类型
 */
export function getLayoutComponent(layoutType: EnumType.LayoutComponentName) {
  const layoutComponent: LayoutComponent = {
    basic: BasicLayout,
    blank: BlankLayout
  }
  return () =>
    setViewComponentName(
      layoutComponent[layoutType],
      EnumLayoutComponentName[layoutType]
    )
}

/**
 * 获取页面导入的vue文件(懒加载的方式)
 * @param routeKey - 路由key
 */
// export function getViewComponent(routeKey: AuthRoute.RouteKey) {
export function getViewComponent(routeKey: string) {
  if (!views[routeKey]) {
    console.error(`路由“${routeKey}”没有对应的组件文件！`)
  }
  return () =>
    setViewComponentName(views[routeKey], routeKey) as Promise<Component>
}

/** 给页面组件设置名称 */
async function setViewComponentName(
  asyncComponent: () => Promise<Component>,
  name: string
) {
  const component = (await asyncComponent()) as { default: Component }
  Object.assign(component.default, { name })
  return component
}
