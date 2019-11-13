// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = []

const asideMenuConfig = [
  {
    path: '/profile',
    name: '详情页',
    icon: 'el-icon-tickets',
    children: [
      {
        path: '/success',
        name: '基础详情页'
      },
      {
        path: '/fail',
        name: '失败'
      }
    ]
  },
  {
    path: '/result',
    name: '结果页',
    icon: 'el-icon-circle-check-outline',
    children: [
      {
        path: '/success',
        name: '成功'
      },
      {
        path: '/fail',
        name: '失败'
      }
    ]
  },
  {
    name: 'Login',
    path: '/login',
    icon: 'home'
  },
  {
    name: 'Table',
    path: '/table',
    icon: 'home'
  },
  {
    name: 'NoAuth',
    path: '/noauth',
    icon: 'home'
  },
  {
    name: 'NotFound',
    path: '/notfound',
    icon: 'home'
  }
]

export { headerMenuConfig, asideMenuConfig }
