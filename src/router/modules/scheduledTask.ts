const BasicLayout = () => import('@/layout/BasicLayout/index.vue')

const ScheduledTask = {
  path: '/scheduledTask',
  name: 'scheduledTask',
  redirect: '/scheduledTask/resultsEnforcement',
  component: BasicLayout,
  meta: {
    icon: '',
    sort: 1
  },
  children: [
    {
      path: 'resultsEnforcement',
      name: 'resultsEnforcement',
      component: () =>
        import('@/views/scheduledTask/resultsEnforcement/index.vue'),
      meta: {}
    },
    {
      path: 'taskList',
      name: 'taskList',
      component: () => import('@/views/scheduledTask/taskList/index.vue'),
      meta: {}
    },
    {
      path: 'manualExecutionResults',
      name: 'manualExecutionResults',
      component: () =>
        import('@/views/scheduledTask/manualExecutionResults/index.vue'),
      meta: {}
    },
    {
      path: 'kettleExecutionResults',
      name: 'kettleExecutionResults',
      component: () =>
        import('@/views/scheduledTask/kettleExecutionResults/index.vue'),
      meta: {}
    }
  ]
}
export default ScheduledTask
