const BasicLayout = import('@/layout/BasicLayout/index.vue')

const CompanyUserManagement = {
  path: '/companyManagement',
  name: 'companyManagement',
  redirect: '/companyManagement/watermark',
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
        import('@/views/companyManagement/userManagement/index.vue'),
      meta: {}
    }
  ]
}
export default CompanyUserManagement
