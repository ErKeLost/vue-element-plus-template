import { AppRouteRecordRaw } from '../../../types/route'
import {
  PAGE_NOT_FOUND_NAME,
  PAGE_NOT_FOUND_PAGE_NAME,
  PAGE_NOT_PERMISSION_NAME,
  PAGE_NOT_SERVICE_NAME,
  PAGE_LOGIN_NAME,
  PAGE_ROOT_NAME,
  NotPermission,
  NotFound,
  NotService,
  Login,
  BlankLayout
} from '../constant'
export const RedirectName = 'Redirect'

export const notFound: AppRouteRecordRaw[] = [
  // 匹配无效路径的路由
  {
    name: PAGE_NOT_FOUND_PAGE_NAME,
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]
export const otherErrorRoutes: Array<AppRouteRecordRaw> = [
  {
    name: PAGE_NOT_PERMISSION_NAME,
    path: '/not-permission',
    meta: {
      title: '没有查看当前页面权限'
    },
    component: NotPermission
  },
  {
    name: PAGE_NOT_FOUND_NAME,
    path: '/not-found',
    meta: {
      title: '页面未找到'
    },
    component: NotFound
  },
  {
    name: PAGE_NOT_SERVICE_NAME,
    path: '/not-service',
    meta: {
      title: '服务器错误'
    },
    component: NotService
  }
]

export const baseRoutes: AppRouteRecordRaw[] = [
  {
    name: PAGE_LOGIN_NAME,
    path: '/login',
    component: Login
  },
  {
    name: PAGE_ROOT_NAME,
    path: '/',
    redirect: '/login'
  }
]
export const RedirectRoute: AppRouteRecordRaw[] = [
  {
    name: 'redirect',
    path: '/redirect',
    component: BlankLayout,
    meta: {},
    children: [
      {
        name: RedirectName,
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue'),
        meta: {}
      }
    ]
  }
]
export default [
  ...otherErrorRoutes,
  ...RedirectRoute,
  ...baseRoutes,
  ...notFound
]
