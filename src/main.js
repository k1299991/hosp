import Vue from 'vue'
// 导入mock文件得到接口，并发送请求测试接口
import axios from 'axios'
import './mock/mock.js'
// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入permission
import '@/permission'

// 导入全局的样式文件
import './styles/index.less'

Vue.use(ElementUI) // 注册

// axios是不能在其他组件中使用的，所以将axios改写为vue的原型属性
// 组件进行数据请求时可以用 this.$http.get(请求方式)().then()来实现
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
