import axios from 'axios'
// import store from '@/store'
// import router from '@/router'
// 4.1导入element-ui中的Message提示方法
// import { Message } from 'element-ui'
// import { getTimeStamp } from '@/utils/auth' // 导入获取时间戳的函数
// const TimeOut = 3600 // 定义超时时间

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
const service = axios.create({

  // 3.创建一个axios的实例
  // process.env 环境变量对象
  // baseURL: 'http://192.168.99.102:8089/', // 使用env.development中设置的基准地址
  baseURL: '/', // 使用env.development中设置的基准地址
  timeout: 99999 // 设置超时时间
})
// service.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 5.请求拦截器 -- 设置token
service.interceptors.request.use(
  config => {
    // if (store.state.token) {
    //   // 检查时间戳是否超时
    //   // 直接删除token
    // }
    //   if(config.method==='post' || config.method==='POST') {
    //       config.data=qs.stringify(config.data)
    //   }
    return config // 必须返回配置参数
  },
  // 请求错误操作
  error => {
    return Promise.reject(error)
  }
)

// 4.响应拦截器
service.interceptors.response.use(
  response => {
    return response.data
  },
  // 响应错误
  error => {
    return Promise.reject(error)
  }
)
// 定义检查时间戳的函数
// function IsCheckTimeOut () {
//   var currentTime = Date.now() // 获取当前时间戳
//   var timeStamp = getTimeStamp() // 缓存时间戳
//   return (currentTime - timeStamp) / 1000 > TimeOut
// }

export default service // 导出axios实例
