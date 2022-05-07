/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'

  const component: DefineComponent<object, object, any>
  export default component
}
/**
 * env环境类型
 * - dev: 后台开发环境
 * - test: 后台测试环境
 * - prod: 后台生产环境
 */
type EnvType = 'dev' | 'test' | 'prod'

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  /** 项目基本地址 */
  readonly VITE_PUBLIC_PATH: string
  /** 全局title属性 */
  readonly VITE_GLOB_APP_TITLE: string
  /** App */
  readonly VITE_GLOB_APP_SHORT_NAME: string
  /** 打包问题console问题 */
  readonly VITE_DROP_CONSOLE: boolean
  /** 全局BASE IMG URL */
  readonly VITE_GLOB_IMG_URL: string
  /** 打包优化 */
  readonly VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  /** 打包优化删除源文件 */
  readonly VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
  //** 项目基本端口 */
  readonly VITE_PORT: number
  /** 项目名称 */
  readonly VITE_APP_NAME: string
  /** 项目标题 */
  readonly VITE_APP_TITLE: string
  /** 项目描述 */
  readonly VITE_APP_DESC: string
  /**
   * 权限路由模式:
   * - static - 前端声明的静态
   * - dynamic - 后端返回的动态 */
  readonly VITE_AUTH_ROUTE_MODE: 'static' | 'dynamic'
  /** vite环境类型 */
  readonly VITE_ENV_TYPE?: EnvType
  /** 开启请求代理 */
  readonly VITE_IS_PROXY?: 'true' | 'false'
  /** 代理请求地址 */
  readonly VITE_PROXY?: [string, string][]
  /** 是否开启打包文件大小结果分析 */
  readonly VITE_VISUALIZER?: 'true' | 'false'
  /** hash路由模式 */
  readonly VITE_HASH_ROUTE?: 'true' | 'false'
}
declare namespace AuthRoute {
  /** 多级路由分割符号 */
  type RouteSplitMark = '_'

  /** 路由的key */
  type RouteKey =
    // 固定的路由
    | 'root' // 根路由
    | 'login'
    | 'not-found'
    | 'no-permission'
    | 'not-service'
    | 'not-found-page' // 捕获无效path的路由
  'redirect'
  /** 路由的path */
  type RoutePath =
    | '/'
    | Exclude<KeyToPath<RouteKey>, '/root' | 'not-found-page'>
    | SingleRouteParentPath
    | '/:pathMatch(.*)*'

  /**
   * 路由的组件
   * - basic - 基础布局，具有公共部分的布局
   * - blank - 空白布局
   * - multi - 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
   * - self - 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
   */
  type RouteComponent = 'basic' | 'blank' | 'multi' | 'self'

  /** 路由描述 */
  type RouteMeta = {
    /** 路由标题(可用来作document.title或者菜单的名称) */
    title: string
    /** 路由的动态路径 */
    dynamicPath?: PathToDynamicPath<'/login'>
    /** 作为单级路由的父级路由布局组件 */
    singleLayout?: Extract<RouteComponent, 'basic' | 'blank'>
    /** 需要登录权限 */
    requiresAuth?: boolean
    /**
     * 哪些类型的用户有权限才能访问的路由(空的话则表示不需要权限)
     * @description 后端动态路由数据不需要该属性，直接由后端根据用户角色返回对应权限的路由数据
     */
    permissions?: Auth.RoleType[]
    /** 缓存页面 */
    keepAlive?: boolean
    /** 菜单和面包屑对应的图标 */
    icon?: string
    /** 是否在菜单中隐藏 */
    hide?: boolean
    /** 外链链接 */
    href?: string
    /** 路由顺序，可用于菜单的排序 */
    order?: number
    /** 表示是否是多级路由的中间级路由(用于转换路由数据时筛选多级路由的标识，定义路由时不用填写) */
    multi?: boolean
  }

  /** 单个路由的类型结构(动态路由模式：后端返回此类型结构的路由) */
  interface Route {
    /** 路由名称(路由唯一标识) */
    // name: RouteKey
    name: string
    /** 路由路径 */
    path: RoutePath
    /** 路由重定向 */
    redirect?: RoutePath
    /**
     * 路由组件
     * - basic: 基础布局，具有公共部分的布局
     * - blank: 空白布局
     * - multi: 多级路由布局(三级路由或三级以上时，除第一级路由和最后一级路由，其余的采用该布局)
     * - self: 作为子路由，使用自身的布局(作为最后一级路由，没有子路由)
     */
    component?: RouteComponent
    /** 子路由 */
    children?: Route[]
    /** 路由描述 */
    meta: RouteMeta
    /** 路由属性 */
    props?: boolean | Record<string, any> | ((to: any) => Record<string, any>)
  }

  /** 前端导入的路由模块 */
  type RouteModule = Record<string, { default: AuthRoute.Route }>

  /** 单独一级路由的key (单独路由需要添加一个父级路由用于应用布局组件) */
  type SingleRouteKey = Exclude<
    GetSingleRouteKey<RouteKey>,
    GetRouteFirstParentKey<RouteKey> | 'root' | 'not-found-page'
  >
  /** 单独路由父级路由key */
  type SingleRouteParentKey = `${SingleRouteKey}-parent`

  /** 单独路由父级路由path */
  type SingleRouteParentPath = KeyToPath<SingleRouteParentKey>

  /** 路由key转换路由path */
  type KeyToPath<Key extends string> =
    Key extends `${infer Left}_${infer Right}`
      ? KeyToPath<`${Left}/${Right}`>
      : `/${Key}`

  /** 路由path转换动态路径 */
  type PathToDynamicPath<Path extends RoutePath> =
    | `${Path}/:module`
    | `${Path}/:module(${string})`
    | `${Path}/:module(${string})?`

  /** 获取一级路由(包括有子路由的一级路由) */
  type GetSingleRouteKey<Key extends RouteKey> =
    Key extends `${infer _Left}${RouteSplitMark}${infer _Right}` ? never : Key

  /** 获取子路由的一级父路由 */
  type GetRouteFirstParentKey<Key extends RouteKey> =
    Key extends `${infer Left}${RouteSplitMark}${infer _Right}` ? Left : never
}
