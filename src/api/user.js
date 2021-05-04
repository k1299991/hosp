/**
 * 封装用户登录注册 接口
 */
import request from '@/utils/request'
// 登录时调用的接口
export function userlogin (data) {
  return request({
    url: `/userReg/?userAccount=${data.Account}&password=${data.password}`,
    method: 'get'
  })
}
// 用户注册 先查询新用户的用户名是否
export function userNameCheck (userAcount) {
  return request({
    url: `/userReg?userAccount=${userAcount}`,
    method: 'get'
  })
}
// 用户注册 添加新用户的信息到 用户表
export function userReg (data) {
  return request({
    url: '/userReg',
    method: 'post',
    data
  })
}

export function login (data) {
  console.log(data)
  return request({
    url: '/userLogin',
    method: 'post',
    data
  })
}

// 用户修改密码 修改个人信息
export function userUpdate (data) {
  console.log(data)
  return request({
    url: `/userReg`,
    method: 'put',
    data
  })
}

// 用户完善或修改个人信息
// export function upDataUserInfo (id, userIfo) {
//   return request({
//     url: `/userReg/${id}`,
//     method: 'put',
//     data: userIfo
//   })
// }
