import { cloneDeep } from 'lodash-es'
import { themeSetting } from '@/settings'

/** 获取主题配置 */
export function getThemeSettings() {
  const setting = cloneDeep({ ...themeSetting })
  console.log(setting)

  return setting
}
