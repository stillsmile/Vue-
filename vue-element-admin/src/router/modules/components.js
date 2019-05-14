/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: '组件',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      path: 'tinymce',
      component: () => import('@/views/components-demo/tinymce'),
      name: 'TinymceDemo',
      meta: { title: 'Tinymce' }
    },
    {
      path: 'markdown',
      component: () => import('@/views/components-demo/markdown'),
      name: '富文本',
      meta: { title: '富文本' }
    },
    {
      path: 'json-editor',
      component: () => import('@/views/components-demo/json-editor'),
      name: 'JSON编辑器',
      meta: { title: 'JSON编辑器' }
    },
    {
      path: 'split-pane',
      component: () => import('@/views/components-demo/split-pane'),
      name: '分板块',
      meta: { title: '分板块' }
    },
    {
      path: '上传',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'Upload' }
    },
    {
      path: 'dropzone',
      component: () => import('@/views/components-demo/dropzone'),
      name: '拖拽上传',
      meta: { title: '拖拽上传' }
    },
    {
      path: 'sticky',
      component: () => import('@/views/components-demo/sticky'),
      name: 'StickyDemo',
      meta: { title: 'Sticky' }
    },
    {
      path: 'count-to',
      component: () => import('@/views/components-demo/count-to'),
      name: '计数输入框',
      meta: { title: '计数输入框' }
    },
    {
      path: 'mixin',
      component: () => import('@/views/components-demo/mixin'),
      name: '组件按钮效果混合',
      meta: { title: '组件按钮效果混合' }
    },
    {
      path: 'back-to-top',
      component: () => import('@/views/components-demo/back-to-top'),
      name: '回到顶部',
      meta: { title: '回到顶部' }
    },
    {
      path: 'drag-dialog',
      component: () => import('@/views/components-demo/drag-dialog'),
      name: '对话框',
      meta: { title: '对话框' }
    },
    {
      path: 'drag-select',
      component: () => import('@/views/components-demo/drag-select'),
      name: '多选select',
      meta: { title: '多选select' }
    },
    {
      path: 'dnd-list',
      component: () => import('@/views/components-demo/dnd-list'),
      name: 'DndListDemo',
      meta: { title: 'Dnd List' }
    },
    {
      path: 'drag-kanban',
      component: () => import('@/views/components-demo/drag-kanban'),
      name: 'DragKanbanDemo',
      meta: { title: 'Drag Kanban' }
    }
  ]
}

export default componentsRouter
