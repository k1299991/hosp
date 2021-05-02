import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 配置路由表
const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout'),
    children: [
      {
        path: '',
        name: 'home', // 默认子路由
        component: () => import('@/views/home')
      },
      {
        path: '/doctor/:id?',
        name: 'doctor',
        component: () => import('@/views/doctor')
      },
      {
        path: '/hosp',
        name: 'hosp',
        component: () => import('@/views/hosp')
      },
      {
        path: '/process/:id?',
        name: 'process',
        component: () => import('@/views/process')
      },
      {
        path: '/appointment',
        name: 'appointment',
        component: () => import('@/views/appointment')
      },
      {
        path: '/login',
        name: 'login', // 登录
        component: () => import('@/views/login')
      },
      {
        path: '/reg',
        name: 'reg', // 注册
        component: () => import('@/views/reg')
      },
      {
        path: '/yuyue/:id?',
        name: 'yuyue', // 医生预约
        component: () => import('@/components/yuyue')
      },
      {
        path: '/hospYuyue/:id?',
        name: 'hospYuyue', // 医院预约
        component: () => import('@/components/hospYuyue')
      },
      {
        path: '/yuYueInfo',
        name: 'yuYueInfo', // 预约信息
        component: () => import('@/components/yuYueInfo')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
