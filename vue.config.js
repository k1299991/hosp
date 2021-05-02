/**
 * 配置参考: https://cli.vuejs.org/zh/config/
 */
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: false,
  // outputDir: 'vueDemo',
  devServer: {
    open: true,
    port: 8089,
    proxy: {
      '/': {
        target: ' http://192.168.99.102:8088/',
        changeOrigin: true
      }
    },
    overlay: {
      errors: true,
      warnings: true
    }
  }
}
