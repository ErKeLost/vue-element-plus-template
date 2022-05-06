import { RouteRecordRaw } from 'vue-router'
import { AuthRoute } from '/#/route'
import { getLayoutComponent, getViewComponent } from './component'

export function transformAuthRoutesToVueRoutes(routes: AuthRoute.Route[]) {
  return routes.map((route) => transformAuthRouteToVueRoute(route)).flat(1)
}
type ComponentAction = Record<AuthRoute.RouteComponent, () => void>

function transformAuthRouteToVueRoute(item: AuthRoute.Route) {
  const resultRoute: RouteRecordRaw[] = []

  const itemRoute = { ...item } as RouteRecordRaw

  // 路由组件
  if (hasComponent(item)) {
    console.log(item)

    const action: ComponentAction = {
      basic() {
        itemRoute.component = getLayoutComponent('basic')
      },
      blank() {
        itemRoute.component = getLayoutComponent('blank')
      },
      multi() {
        // 多级路由一定有子路由
        if (hasChildren(item)) {
          Object.assign(itemRoute, { meta: { ...itemRoute.meta, multi: true } })
          delete itemRoute.component
        } else {
          console.log('多级路由缺少子路由: ', item)
        }
      },
      self() {
        itemRoute.component = getViewComponent(item.name)
      }
    }
    try {
      if (item.component) {
        action[item.component]()
      } else {
        console.log('路由组件解析失败: ', item)
      }
    } catch {
      console.log('路由组件解析失败: ', item)
    }
  }

  // 注意：单独路由没有children
  if (isSingleRoute(item)) {
    if (hasChildren(item)) {
      console.log('单独路由不应该有子路由: ', item)
    }

    // 捕获无效路由的需特殊处理
    if (item.name === 'not-found-page') {
      itemRoute.children = [
        {
          path: '',
          name: item.name,
          component: getViewComponent('not-found-page')
        }
      ]
    } else {
      const parentPath =
        `${itemRoute.path}-parent` as AuthRoute.SingleRouteParentPath

      const layout =
        item.meta.singleLayout === 'basic'
          ? getLayoutComponent('basic')
          : getLayoutComponent('blank')

      const parentRoute: RouteRecordRaw = {
        path: parentPath,
        component: layout,
        redirect: item.path,
        children: [itemRoute]
      }

      return [parentRoute]
    }
  }

  // 子路由
  if (hasChildren(item)) {
    const children = (item.children as AuthRoute.Route[])
      .map((child) => transformAuthRouteToVueRoute(child))
      .flat()

    // 找出第一个不为多级路由中间级的子路由路径作为重定向路径
    const redirectPath: AuthRoute.RoutePath = (children.find(
      (v) => !v.meta?.multi
    )?.path || '/') as AuthRoute.RoutePath
    if (redirectPath === '/') {
      console.log('该多级路由没有有效的子路径', item)
    }

    if (item.component === 'multi') {
      // 多级路由，将子路由提取出来变成同级
      resultRoute.push(...children)
      delete itemRoute.children
    } else {
      itemRoute.children = children
    }
    itemRoute.redirect = redirectPath
  }

  resultRoute.push(itemRoute)
  return resultRoute
}
/**
 * 是否有路由组件
 * @param item - 权限路由
 */
function hasComponent(item: AuthRoute.Route) {
  return Boolean(item.component)
}

/**
 * 是否有子路由
 * @param item - 权限路由
 */
function hasChildren(item: AuthRoute.Route) {
  return Boolean(item.children && item.children.length)
}

/**
 * 是否是单层级路由
 * @param item - 权限路由
 */
function isSingleRoute(item: AuthRoute.Route) {
  return Boolean(item.meta.singleLayout)
}
