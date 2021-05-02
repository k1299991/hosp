import Cookies from 'js-cookie'
// 设置token的key
const TokenKey = 'hospital-user-token' // 独一无二
// 设置时间戳的key 唯一
const timeKey = 'hospital-timestamp-key'
const UserInfo = 'hospital-userInfo'

// 1.从本地获取token
export function getToken () {
  return Cookies.get(TokenKey)
}
// 2.设置token到本地
export function setToken (token) {
  return Cookies.set(TokenKey, token)
}
// 3.从本地删除token
export function removeToken () {
  return Cookies.remove(TokenKey)
}

// 4.获取时间戳
export function getTimeStamp () {
  return Cookies.get(timeKey)
}
// 5.设置时间戳
export function setTimeStamp () {
  Cookies.set(timeKey, Date.now())
}

// 6.设置用户登录信息到本地
export function setUserInfo (userinfo) {
  return Cookies.set(UserInfo, userinfo)
}
// 7.从本地删除用户登录信息
export function removeUserInfo () {
  return Cookies.remove(UserInfo)
}
