/** 布局组件的名称 */
export enum EnumLayoutComponentName {
  basic = 'basic-layout',
  blank = 'blank-layout'
}

/** 布局模式 */
export enum EnumThemeLayoutMode {
  'vertical' = '左侧菜单模式',
  'horizontal' = '顶部菜单模式',
  'vertical-mix' = '左侧菜单混合模式',
  'horizontal-mix' = '顶部菜单混合模式'
}

/** 多页签风格 */
export enum EnumThemeTabMode {
  'chrome' = '谷歌风格',
  'button' = '按钮风格'
}

/** 水平模式的菜单位置 */
export enum EnumThemeHorizontalMenuPosition {
  'flex-start' = '居左',
  'center' = '居中',
  'flex-end' = '居右'
}

/** 过渡动画类型 */
export enum EnumThemeAnimateMode {
  'zoom-fade' = '渐变',
  'zoom-out' = '闪现',
  'fade-slide' = '滑动',
  'fade' = '消退',
  'fade-bottom' = '底部消退',
  'fade-scale' = '缩放消退',
  'bounceInUp' = '由内向上',
  'bounceInDown' = '由内向下',
  'bounceInLeft' = '由内向左',
  'bounceInRight' = '由内向右',
  'backInRight' = '向右返回弹跳',
  'backInLeft' = '向左返回弹跳',
  'backInDown' = '向下返回弹跳',
  'backInUp' = '向上返回弹跳'
}
