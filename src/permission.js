/** *
 * 根据token处理主页的访问权限问题
 */
// 权限拦截 导航守卫 路由守卫 router
import router from '@/router' // 引入路由实例
import store from '@/store' // 引入vuex store实例

// 定义白名单 不受权限控制的页面 不要验证权限的路径 可以直接访问
const whiteList = [
  '/login',
  '/reg',
  '/',
  '/doctor',
  '/hosp',
  '/process',
  '/yuyue',
  '/hospYuyue'
]
// 路由的前置守卫
router.beforeEach(async (to, from, next) => {
  // 判断是否有token
  if (store.state.token) {
    // 有token
    // if (to.path === '/yuYueInfo') {
    // 表示去的是登录页
    next() // 放行
    // }
  } else {
    // 没有token 判断是不是去预约页面
    // if (to.path === '/yuYueInfo' || to.path === '/appointment') {
    //   next('/login') // 跳转到登录页
    // }
    // 不是去预约
    // 是否在白名单中
    if (whiteList.indexOf(to.path) > -1) {
      next() // 直接放行
    } else {
      next('/login') // 跳转到登录页
    }
  }
})
