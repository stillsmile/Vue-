/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const tableRouter = {
  path: '/table',
  component: Layout,
  redirect: '/table/complex-table',
  name: '表格',
  meta: {
    title: '表格',
    icon: 'table'
  },
  children: [
    {
      path: 'dynamic-table',
      component: () => import('@/views/table/dynamic-table/index'),
      name: '动态表格',
      meta: { title: '动态表格' }
    },
    {
      path: 'drag-table',
      component: () => import('@/views/table/drag-table'),
      name: '拖动表格',
      meta: { title: '拖动表格' }
    },
    {
      path: 'inline-edit-table',
      component: () => import('@/views/table/inline-edit-table'),
      name: '可编辑表格',
      meta: { title: '可编辑表格' }
    },
    {
      path: 'complex-table',
      component: () => import('@/views/table/complex-table'),
      name: '混合功能表格',
      meta: { title: '混合功能表格' }
    }
  ]
}
export default tableRouter
