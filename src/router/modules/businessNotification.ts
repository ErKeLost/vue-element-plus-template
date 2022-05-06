const BasicLayout = () => import('@/layout/BasicLayout/index.vue')

const BusinessNotification = {
  path: '/businessNotification',
  name: 'businessNotification',
  redirect: '/businessNotification/index.vue',
  component: BasicLayout,
  meta: {
    icon: '',
    sort: 1
  },
  children: [
    {
      path: 'index',
      name: 'businessNotificationIndex',
      component: () => import('@/views/businessNotification/index.vue')
    }
  ]
}

export default BusinessNotification
