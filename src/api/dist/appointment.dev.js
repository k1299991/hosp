"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getappoinInfo = getappoinInfo;
exports.setappointInfo = setappointInfo;
exports.deleteAppointment = deleteAppointment;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 封装获取预约信息
 */
function getappoinInfo(id) {
  return (0, _request["default"])({
    url: "/appointment?userId=".concat(id),
    method: 'get'
  });
} // 提交预约信息


function setappointInfo(data) {
  return (0, _request["default"])({
    url: '/appointment',
    method: 'post',
    data: data
  });
} // 删除预约信息


function deleteAppointment(apId) {
  return (0, _request["default"])({
    url: "/appointment/".concat(apId),
    method: 'delete'
  });
}