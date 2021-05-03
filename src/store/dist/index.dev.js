"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _auth = require("@/utils/auth");

var _user = require("@/api/user");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 设置Vuex容器
 */
_vue["default"].use(_vuex["default"]);

var _default = new _vuex["default"].Store({
  state: {
    token: (0, _auth.getToken)() || '',
    userLoginInfo: {},
    deptId: '',
    // 存放点击的科室
    dgId: '' // 存放点击的职称

  },
  mutations: {
    // 存放科室id
    setDeptId: function setDeptId(state, deptId) {
      state.deptId = deptId; // 设置vuex的token
      // setToken(token) // 设置本地的token
    },
    // 存放医生职称id
    setDgId: function setDgId(state, dgId) {
      state.dgId = dgId; // 设置vuex的token
      // setToken(token) // 设置本地的token
    },
    setToken: function setToken(state, token) {
      state.token = token; // 设置vuex的token

      (0, _auth.setToken)(token); // 设置本地的token
    },
    // 删除token
    removeToken: function removeToken(state) {
      state.token = null; // 删除vuex的token

      (0, _auth.removeToken)(); // 删除本地的token
    },
    // 修改userLoginfo
    setUserLoginInfo: function setUserLoginInfo(state, userinfo) {
      state.userLoginInfo = userinfo;
      (0, _auth.setUserInfo)(userinfo);
    },
    removeUserLoginInfo: function removeUserLoginInfo(state) {
      state.userLoginInfo = {};
      (0, _auth.removeUserInfo)();
    }
  },
  actions: {
    // 封装登录方法
    login: function login(context, data) {
      var result;
      return regeneratorRuntime.async(function login$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap((0, _user.userlogin)(data));

            case 2:
              result = _context.sent;
              // console.log(result)
              // result 是 拿到账号名和密码一致的那条用户数据
              // 存入vuex中
              context.commit('setUserLoginInfo', result[0]); // result 就是我们要的data 响应拦截器已经处理过了
              // 调用mutations中的setToken方法

              console.log(this.userLoginInfo); // const res = { ...result }

              context.commit('setToken', result[0].code);
              console.log(result[0].code); // 写入时间戳

              (0, _auth.setTimeStamp)(); // 将此时登录的时间戳存起来 写入缓存

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    } // 登出
    // logout (context) {
    //   // 删除token
    //   context.commit('removeToken')
    //   // 删除用户资料
    //   // context.commit('removerUserInfo')
    //   // router.push('/login')
    // }

  },
  modules: {}
});

exports["default"] = _default;
