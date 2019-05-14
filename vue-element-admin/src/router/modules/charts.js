/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const chartsRouter = {
  path: '/charts',
  component: Layout,
  redirect: 'noRedirect',
  name: '图表',
  meta: {
    title: '图表',
    icon: 'chart'
  },
  children: [
    {
      path: 'keyboard',
      component: () => import('@/views/charts/keyboard'),
      name: '钢琴图',
      meta: { title: '钢琴图', noCache: true }
    },
    {
      path: 'line',
      component: () => import('@/views/charts/line'),
      name: '曲线图',
      meta: { title: '曲线图', noCache: true }
    },
    {
      path: 'mix-chart',
      component: () => import('@/views/charts/mix-chart'),
      name: '柱状图',
      meta: { title: '柱状图', noCache: true }
    }
  ]
}

export default chartsRouter
