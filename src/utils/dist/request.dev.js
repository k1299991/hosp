"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import store from '@/store'
// import router from '@/router'
// 4.1导入element-ui中的Message提示方法
// import { Message } from 'element-ui'
// import { getTimeStamp } from '@/utils/auth' // 导入获取时间戳的函数
// const TimeOut = 3600 // 定义超时时间
var service = _axios["default"].create({
  // 3.创建一个axios的实例
  // process.env 环境变量对象
  baseURL: 'http://192.168.15.62:3001',
  // 使用env.development中设置的基准地址
  timeout: 5000 // 设置超时时间

}); // 5.请求拦截器 -- 设置token


service.interceptors.request.use(function (config) {
  // if (store.state.token) {
  //   // 检查时间戳是否超时
  //   // 直接删除token
  // }
  return config; // 必须返回配置参数
}, // 请求错误操作
function (error) {
  return Promise.reject(error);
}); // 4.响应拦截器

service.interceptors.response.use(function (response) {
  return response.data;
}, // 响应错误
function (error) {
  return Promise.reject(error);
}); // 定义检查时间戳的函数
// function IsCheckTimeOut () {
//   var currentTime = Date.now() // 获取当前时间戳
//   var timeStamp = getTimeStamp() // 缓存时间戳
//   return (currentTime - timeStamp) / 1000 > TimeOut
// }

var _default = service; // 导出axios实例

exports["default"] = _default;