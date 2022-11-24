import Layout from '@/layout/index.vue'
import tipsComponents from '@/views/placeholder-page/tips-components/index.vue'

export default {
  path: '/',
  name: 'tipsComponents',
  component: Layout,
  meta: {
    title: '弹框组件',
  },
  children: [
    {
      path: '/tips-components',
      name: 'tipsComponents',
      component: tipsComponents,
      meta: {
        title: '弹框组件',
        icon: '',
        keepAlive: true
      },
    }
  ]
}