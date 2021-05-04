import Vue from 'vue'
import Vuex from 'vuex'

/**
 * 设置Vuex容器
 */
import {
    getToken,
    setToken,
    removeToken,
    setTimeStamp,
    setUserInfo,
    removeUserInfo
} from '@/utils/auth'

import {login} from '@/api/user'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        token: getToken() || '',
        userLoginInfo: {},
        deptId: '', // 存放点击的科室
        dgId: '' // 存放点击的职称
    },
    mutations: {
        // 存放科室id
        setDeptId(state, deptId) {
            state.deptId = deptId // 设置vuex的token
            // setToken(token) // 设置本地的token
        },
        // 存放医生职称id
        setDgId(state, dgId) {
            state.dgId = dgId // 设置vuex的token
            // setToken(token) // 设置本地的token
        },
        setToken(state, token) {
            state.token = token // 设置vuex的token
            setToken(token) // 设置本地的token
        },
        // 删除token
        removeToken(state) {
            state.token = null // 删除vuex的token
            removeToken() // 删除本地的token
        },
        // 修改userLoginfo
        setUserLoginInfo(state, userinfo) {
            state.userLoginInfo = userinfo
            setUserInfo(userinfo)
        },
        removeUserLoginInfo(state) {
            state.userLoginInfo = {}
            removeUserInfo()
        }
    },
    actions: {
        // 封装登录方法
        async login(context, data) {
             try {
                // 调用登录接口
            console.log(data)
            const res = await login(data)
            console.log(res)
            // result 是 拿到账号名和密码一致的那条用户数据
            // 存入vuex中
                context.commit('setUserLoginInfo', res)
                context.commit('setToken', res.code)
                setTimeStamp() // 将此时登录的时间戳存起来 写入缓存
            } catch (err) {
                //处理错误
                console.log(err)
            }
            // return res.data;
        }
        // 登出
        // logout (context) {
        //   // 删除token
        //   context.commit('removeToken')
        //   // 删除用户资料
        //   // context.commit('removerUserInfo')
        //   // router.push('/login')
        // }
    },
    modules: {}
})
