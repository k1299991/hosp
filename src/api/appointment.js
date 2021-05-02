/**
 * 封装获取预约信息
 */
import request from '@/utils/request'
export function getappoinInfo (id) {
  return request({
    url: `/appointment?userId=${id}`,
    method: 'get'
  })
}

// 提交预约信息
export function setappointInfo (data) {
  return request({
    url: '/appointment',
    method: 'post',
    data
  })
}

// 删除预约信息
export function deleteAppointment (apId) {
  return request({
    url: `/appointment/${apId}`,
    method: 'delete'
  })
}
