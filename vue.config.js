const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    config.plugins.push(
      new CopyWebpackPlugin([
        {
          from: './static', // 新增可以被index.html访问的静态文件目录,支持多个
          to: 'static',
          ignore: ['.*']
        }
      ])
    )
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      console.log('正在打包...')
    } else {
      // 为开发环境修改配置...
      console.log('启动开发环境')
    }
  },
  devServer: {
    open: process.platform === 'darwin',
    host: '127.0.0.1',
    port: 3001,
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
