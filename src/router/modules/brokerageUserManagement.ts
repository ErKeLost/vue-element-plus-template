const BasicLayout = import('@/layout/BasicLayout/index.vue')

const BrokerageUserManagement = {
  path: '/brokerageUserManagement',
  name: 'brokerageUserManagement',
  redirect: '/brokerageUserManagement/accountManagement',
  component: BasicLayout,
  meta: {
    icon: '',
    sort: 1
  },
  children: [
    {
      path: 'accountManagement',
      name: 'accountManagement',
      component: () =>
        import('@/views/brokerageUserManagement/accountManagement/index.vue'),
      meta: {}
    },
    {
      path: 'roleManagement',
      name: 'roleManagement',
      component: () =>
        import('@/views/brokerageUserManagement/roleManagement/index.vue'),
      meta: {}
    }
  ]
}
export default BrokerageUserManagement
