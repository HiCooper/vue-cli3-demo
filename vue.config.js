module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('启动生产环境')
    } else {
      // 为开发环境修改配置...
      console.log('启动开发环境')
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 8011,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changOrigin: true
      }
    },
    before: app => {}
  }
}
