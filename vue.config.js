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
        target: ' http://www.isst.top:9090/',
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
