"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = getToken;
exports.setToken = setToken;
exports.removeToken = removeToken;
exports.getTimeStamp = getTimeStamp;
exports.setTimeStamp = setTimeStamp;
exports.setUserInfo = setUserInfo;
exports.removeUserInfo = removeUserInfo;

var _jsCookie = _interopRequireDefault(require("js-cookie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 设置token的key
var TokenKey = 'hospital-user-token'; // 独一无二
// 设置时间戳的key 唯一

var timeKey = 'hospital-timestamp-key';
var UserInfo = 'hospital-userInfo'; // 1.从本地获取token

function getToken() {
  return _jsCookie["default"].get(TokenKey);
} // 2.设置token到本地


function setToken(token) {
  return _jsCookie["default"].set(TokenKey, token);
} // 3.从本地删除token


function removeToken() {
  return _jsCookie["default"].remove(TokenKey);
} // 4.获取时间戳


function getTimeStamp() {
  return _jsCookie["default"].get(timeKey);
} // 5.设置时间戳


function setTimeStamp() {
  _jsCookie["default"].set(timeKey, Date.now());
} // 6.设置用户登录信息到本地


function setUserInfo(userinfo) {
  return _jsCookie["default"].set(UserInfo, userinfo);
} // 7.从本地删除用户登录信息


function removeUserInfo() {
  return _jsCookie["default"].remove(UserInfo);
}