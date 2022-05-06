const BasicLayout = () => import('@/layout/BasicLayout/index.vue')

const CompanyUserManagement = {
  path: '/companyUserManagement',
  name: 'companyUserManagement',
  redirect: '/companyUserManagement/userManagement',
  component: BasicLayout,
  meta: {
    icon: '',
    sort: 1
  },
  children: [
    {
      path: 'userManagement',
      name: 'userManagement',
      component: () =>
        import('@/views/companyUserManagement/userManagement/index.vue'),
      meta: {}
    },
    {
      path: 'shareholderApproval',
      name: 'shareholderApproval',
      component: () =>
        import('@/views/companyUserManagement/shareholderApproval/index.vue'),
      meta: {}
    },
    {
      path: 'userStatistics',
      name: 'userStatistics',
      component: () =>
        import('@/views/companyUserManagement/userStatistics/index.vue'),
      meta: {}
    },
    {
      path: 'whiteList',
      name: 'whiteList',
      component: () =>
        import('@/views/companyUserManagement/whiteList/index.vue'),
      meta: {}
    }
  ]
}
export default CompanyUserManagement
