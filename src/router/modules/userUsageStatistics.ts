const BasicLayout = () => import('@/layout/BasicLayout/index.vue')

const UserUsageStatistics = {
  path: '/userUsageStatistics',
  name: 'userUsageStatistics',
  redirect: '/userUsageStatistics/userLoginRecord',
  component: BasicLayout,
  meta: {
    icon: '',
    sort: 1
  },
  children: [
    {
      path: 'userLoginRecord',
      name: 'userLoginRecord',
      component: () =>
        import('@/views/userUsageStatistics/userLoginRecord/index.vue'),
      meta: {}
    },
    {
      path: 'userOperationRecord',
      name: 'userOperationRecord',
      component: () =>
        import('@/views/userUsageStatistics/userOperationRecord/index.vue'),
      meta: {}
    },
    {
      path: 'complianceRecord',
      name: 'complianceRecord',
      component: () =>
        import('@/views/userUsageStatistics/complianceRecord/index.vue'),
      meta: {}
    },
    {
      path: 'communicationRecord',
      name: 'communicationRecord',
      component: () =>
        import('@/views/userUsageStatistics/communicationRecord/index.vue'),
      meta: {}
    }
  ]
}
export default UserUsageStatistics
