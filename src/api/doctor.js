/**
 * 获取医生数据
 */
import request from '@/utils/request'
// 1.根据医院id 获取医生数据
export function getDoctByHospId (id) {
  return request({
    url: `/3doctorMain?hospId=${id}`,
    method: 'get'
  })
}

// export function getDoctByHospId (params) {
//   return request({
//     url: `/3doctorMain`,
//     method: 'get',
//     params:{hospId:id}
//   })
// }

// 2.根据医生id 获取医生个人数据
export function getInfoByDocId (id) {
  return request({
    url: `/3doctorMain?docId=${id}`,
    method: 'get'
  })
}

// 3.获取所有医生数据
export function getAllDoctor () {
  return request({
    url: '/3doctorMain',
    method: 'get'
  })
}

// 4.根据科室  获取医生数据
export function getDeptDoctor (Id) {
  return request({
    url: `/3doctorMain?deptId=${Id}`,
    method: 'get'
  })
}
// 5.根据医生职称 获取医生数据
export function getDgDoctor (dgId) {
  return request({
    url: `/3doctorMain?dgId=${dgId}`,
    method: 'get'
  })
}

// 6.根据科室和医生职称 获取医生数据
export function getDepAndDgDoctor (deptId, dgId) {
  return request({
    url: `/3doctorMain?deptId=${deptId}&dgId=${dgId}`,
    method: 'get'
  })
}

// --------------------------------------------------------
// 7.  1-1 根据科室和医生职称 医院id 获取医生数据
export function getDepAndDgHoDoctor (deptId, dgId, hospId) {
  return request({
    url: `/3doctorMain?deptId=${deptId}&dgId=${dgId}&hospId=${hospId}`,
    method: 'get'
  })
}
// 8. 2-1 根据科室 医院id  获取医生数据
export function getDeptHoDoctor (Id, hospId) {
  return request({
    url: `/3doctorMain?deptId=${Id}&hospId=${hospId}`,
    method: 'get'
  })
}
// 9. 3-1根据医生职称和医院id 获取医生数据
export function getDgHoDoctor (dgId, hospId) {
  return request({
    url: `/3doctorMain?dgId=${dgId}&hospId=${hospId}`,
    method: 'get'
  })
}
// 10. 根据医院id获取所有医生数据 --- 和1的接口一样
export function getAllHoDoctor (hospId) {
  return request({
    url: `/3doctorMain?hospId=${hospId}`,
    method: 'get'
  })
}

// 11、根据医生名字进行模糊查询
export function getdoctorByName (docName) {
  return request({
    url: `/3doctorMain?docName_like=${docName}`,
    method: 'get'
  })
}

// // 12、根据医院名字查询医院数据
// export function gethospByName (hospName) {
//   return request({
//     url: `/3doctorMain?hospName=${hospName}`,
//     method: 'get'
//   })
// }
