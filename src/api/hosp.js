/***
 * 封装 “医院” 相关的接口
 */
import request from '@/utils/request'
//  获取医院 所有信息
export function getHospInfo () {
  return request({
    // 找“医院”数据
    url: '/2hospitalMain',
    method: 'get'
  })
}
// 获取 医院等级
export function gethospGarde () {
  return request({
    url: '/2hospitalTab',
    method: 'get'
  })
}

// 根据医院等级获取医院数据
export function getHospById (id) {
  return request({
    url: `/2hospitalMain?hgId=${id}`,
    method: 'get'
  })
}

// 根据医院id 获取数据
export function getHosp (id) {
  return request({
    url: `/2hospitalMain?hospId=${id}`,
    method: 'get'
  })
}
// 12、根据医院名字查询医院数据
export function gethospByName (hospName) {
  return request({
    url: `/2hospitalMain?hospName_like=${hospName}`,
    method: 'get'
  })
}
