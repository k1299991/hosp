"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDoctByHospId = getDoctByHospId;
exports.getInfoByDocId = getInfoByDocId;
exports.getAllDoctor = getAllDoctor;
exports.getDeptDoctor = getDeptDoctor;
exports.getDgDoctor = getDgDoctor;
exports.getDepAndDgDoctor = getDepAndDgDoctor;
exports.getDepAndDgHoDoctor = getDepAndDgHoDoctor;
exports.getDeptHoDoctor = getDeptHoDoctor;
exports.getDgHoDoctor = getDgHoDoctor;
exports.getAllHoDoctor = getAllHoDoctor;
exports.getdoctorByName = getdoctorByName;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取医生数据
 */
// 1.根据医院id 获取医生数据
function getDoctByHospId(id) {
  return (0, _request["default"])({
    url: "/3doctorMain?hospId=".concat(id),
    method: 'get'
  });
} // export function getDoctByHospId (params) {
//   return request({
//     url: `/3doctorMain`,
//     method: 'get',
//     params:{hospId:id}
//   })
// }
// 2.根据医生id 获取医生个人数据


function getInfoByDocId(id) {
  return (0, _request["default"])({
    url: "/3doctorMain?docId=".concat(id),
    method: 'get'
  });
} // 3.获取所有医生数据


function getAllDoctor() {
  return (0, _request["default"])({
    url: '/3doctorMain',
    method: 'get'
  });
} // 4.根据科室  获取医生数据


function getDeptDoctor(Id) {
  return (0, _request["default"])({
    url: "/3doctorMain?deptId=".concat(Id),
    method: 'get'
  });
} // 5.根据医生职称 获取医生数据


function getDgDoctor(dgId) {
  return (0, _request["default"])({
    url: "/3doctorMain?dgId=".concat(dgId),
    method: 'get'
  });
} // 6.根据科室和医生职称 获取医生数据


function getDepAndDgDoctor(deptId, dgId) {
  return (0, _request["default"])({
    url: "/3doctorMain?deptId=".concat(deptId, "&dgId=").concat(dgId),
    method: 'get'
  });
} // --------------------------------------------------------
// 7.  1-1 根据科室和医生职称 医院id 获取医生数据


function getDepAndDgHoDoctor(deptId, dgId, hospId) {
  return (0, _request["default"])({
    url: "/3doctorMain?deptId=".concat(deptId, "&dgId=").concat(dgId, "&hospId=").concat(hospId),
    method: 'get'
  });
} // 8. 2-1 根据科室 医院id  获取医生数据


function getDeptHoDoctor(Id, hospId) {
  return (0, _request["default"])({
    url: "/3doctorMain?deptId=".concat(Id, "&hospId=").concat(hospId),
    method: 'get'
  });
} // 9. 3-1根据医生职称和医院id 获取医生数据


function getDgHoDoctor(dgId, hospId) {
  return (0, _request["default"])({
    url: "/3doctorMain?dgId=".concat(dgId, "&hospId=").concat(hospId),
    method: 'get'
  });
} // 10. 根据医院id获取所有医生数据 --- 和1的接口一样


function getAllHoDoctor(hospId) {
  return (0, _request["default"])({
    url: "/3doctorMain?hospId=".concat(hospId),
    method: 'get'
  });
} // 11、根据医生名字进行模糊查询


function getdoctorByName(docName) {
  return (0, _request["default"])({
    url: "/3doctorMain?docName_like=".concat(docName),
    method: 'get'
  });
} // // 12、根据医院名字查询医院数据
// export function gethospByName (hospName) {
//   return request({
//     url: `/3doctorMain?hospName=${hospName}`,
//     method: 'get'
//   })
// }