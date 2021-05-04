import axios from 'axios'
import { Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// 4.1导入element-ui中的Message提示方法
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
    console.log(response.data)
    const { state,data,message} = response.data
    console.log(state)
    console.log(data)
    if(state === 200){
      return data
    }else{
      Message.error(message)
      return Promise.reject(new Error(message))
    }
    // return response.data
  },
  // 响应错误
  error => {
    return Promise.reject(error)
  }
)
export default service // 导出axios实例
