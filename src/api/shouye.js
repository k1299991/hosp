/**
 * 封装首页接口
 */
import request from '@/utils/request'

// ---使用mock---
export function addUserReg (data) {
  return request({
    url: '/reg',
    method: 'post',
    data
  })
}

// 模拟发请求 post ---使用json-serve
// export function users (data) {
//   return request({
//     url: 'http://192.168.15.70:3001/users',
//     method: 'post',
//     data
//   })
// }
// 请求测试
export function users () {
  return request({
    url: '/users',
    method: 'get'
  })
}
export function userReg (data) {
  return request({
    url: '/reg',
    method: 'post',
    data
  })
}
// 获取首页所有医院数据
export function getShouyeHosp () {
  return request({
    url: '/shouyeHosp',
    method: 'get'
  })
}
// 首页获取所有科室数据
export function getShouyedept () {
  return request({
    url: '/shouyeDept',
    method: 'get'
  })
}
// 首页获取所有医生数据
export function getShouyeDoc () {
  return request({
    url: '/shouyeDoct',
    method: 'get'
  })
}
// 获取医生职称数据
export function getDgInfo () {
  return request({
    url: '/doctorGarde',
    method: 'get'
  })
}

// // 用户登录
// export function login(data){
// return request({
//     url:'/login',
//     method:'post',
//     data
// })
// }
