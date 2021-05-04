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
        // target: ' http://127.0.0.1:9090/',
        // target: 'http://isst.top:9092//',
        target: 'http://isst.top:9092//',
        // target: 'http://192.168.15.62:3000',
        changeOrigin: true,
        pathRewrite: {
          ['^/' + process.env.VUE_APP_BASE_API]: ''
        }
      }
    },
    overlay: {
      errors: true,
      warnings: true
    }
  }
}
