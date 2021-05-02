"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]); // 配置路由表


var routes = [{
  path: '/',
  name: 'layout',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('@/layout'));
    });
  },
  children: [{
    path: '',
    name: 'home',
    // 默认子路由
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/home'));
      });
    }
  }, {
    path: '/doctor/:id?',
    name: 'doctor',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/doctor'));
      });
    }
  }, {
    path: '/hosp',
    name: 'hosp',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/hosp'));
      });
    }
  }, {
    path: '/process/:id?',
    name: 'process',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/process'));
      });
    }
  }, {
    path: '/appointment',
    name: 'appointment',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/appointment'));
      });
    }
  }, {
    path: '/login',
    name: 'login',
    // 登录
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/login'));
      });
    }
  }, {
    path: '/reg',
    name: 'reg',
    // 注册
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/views/reg'));
      });
    }
  }, {
    path: '/yuyue/:id?',
    name: 'yuyue',
    // 医生预约
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/yuyue'));
      });
    }
  }, {
    path: '/hospYuyue/:id?',
    name: 'hospYuyue',
    // 医院预约
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/hospYuyue'));
      });
    }
  }, {
    path: '/yuYueInfo',
    name: 'yuYueInfo',
    // 预约信息
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('@/components/yuYueInfo'));
      });
    }
  }]
}];
var router = new _vueRouter["default"]({
  routes: routes
});
var _default = router;
exports["default"] = _default;