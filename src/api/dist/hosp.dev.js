"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHospInfo = getHospInfo;
exports.gethospGarde = gethospGarde;
exports.getHospById = getHospById;
exports.getHosp = getHosp;
exports.gethospByName = gethospByName;

var _request = _interopRequireDefault(require("@/utils/request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/***
 * 封装 “医院” 相关的接口
 */
//  获取医院 所有信息
function getHospInfo() {
  return (0, _request["default"])({
    // 找“医院”数据
    url: '/2hospitalMain',
    method: 'get'
  });
} // 获取 医院等级


function gethospGarde() {
  return (0, _request["default"])({
    url: '/2hospitalTab',
    method: 'get'
  });
} // 根据医院等级获取医院数据


function getHospById(id) {
  return (0, _request["default"])({
    url: "/2hospitalMain?hgId=".concat(id),
    method: 'get'
  });
} // 根据医院id 获取数据


function getHosp(id) {
  return (0, _request["default"])({
    url: "/2hospitalMain?hospId=".concat(id),
    method: 'get'
  });
} // 12、根据医院名字查询医院数据


function gethospByName(hospName) {
  return (0, _request["default"])({
    url: "/2hospitalMain?hospName_like=".concat(hospName),
    method: 'get'
  });
}