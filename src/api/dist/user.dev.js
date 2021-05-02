"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userlogin = userlogin;
exports.userNameCheck = userNameCheck;
exports.userReg = userReg;
exports.userUpdate = userUpdate;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 封装用户登录注册 接口
 */
// 登录时调用的接口
function userlogin(data) {
  return (0, _request["default"])({
    url: "/userReg/?userAccount=".concat(data.username, "&password=").concat(data.password),
    method: 'get'
  });
} // 用户注册 先查询新用户的用户名是否


function userNameCheck(userAcount) {
  return (0, _request["default"])({
    url: "/userReg?userAccount=".concat(userAcount),
    method: 'get'
  });
} // 用户注册 添加新用户的信息到 用户表


function userReg(data) {
  return (0, _request["default"])({
    url: '/userReg',
    method: 'post',
    data: data
  });
} // 用户修改密码 修改个人信息


function userUpdate(data) {
  return (0, _request["default"])({
    url: "/userReg/".concat(data.userId),
    method: 'put',
    data: data
  });
} // 用户完善或修改个人信息
// export function upDataUserInfo (id, userIfo) {
//   return request({
//     url: `/userReg/${id}`,
//     method: 'put',
//     data: userIfo
//   })
// }