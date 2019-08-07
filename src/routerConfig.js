
// 布局组件
import BlankLayout from './layouts/BlankLayout'

import Home from './views/Home.vue'

const routerConfig = [
  {
    path: '/',
    name: 'home',
    layout: BlankLayout,
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    layout: BlankLayout,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/About.vue')
  }
]

export default routerConfig
