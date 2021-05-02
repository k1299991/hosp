<template>
  <div class="Layout-container">
    <!-- 固定头部 -->
    <!-- 搜索框 -->
    <div class="header">
      <el-row
        type="flex"
        justify="space-around"
        align="middle"
        style="height: 95px"
        :gutter="30"
      >
        <el-col :span="4" :offset="1">
          <el-image :src="src" fit="contain"></el-image>
        </el-col>
        <el-col :span="13">
          <!-- <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            width="300px"
          >
          </el-input> -->
          <el-row style="margin-top: 15px;">
            <el-input
              placeholder="请输入您要查询的医院或医生名称"
              v-model="input"
              class="input-with-select"
            >
              <el-select
                v-model="select"
                slot="prepend"
                placeholder="请选择"
                class="inputselect"
              >
                <el-option label="医生" value="1"></el-option>
                <el-option label="医院" value="2"></el-option>
              </el-select>
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="search"
              ></el-button>
            </el-input>
          </el-row>
        </el-col>
        <el-col :span="7" :class="{ noshow: isToken }" style="margin-left:10px">
          <!-- 登出 -->
          <el-row>
            <span class="yeslogin ">
              {{ $store.state.userLoginInfo.userAccount }}</span
            >
            <span>欢迎使用常陵预约挂号系统！</span>
            <span @click="logout" class="nologin"> | 退出登录</span>
          </el-row>
        </el-col>
        <!-- 登录 -->
        <el-col :span="4" :class="{ noshow: !isToken }">
          <div class="nologin">
            <span @click="login">登录</span>
            <span> | </span>
            <span @click="reg">注册</span>
          </div>
        </el-col>
      </el-row>
      <!-- 导航栏 -->
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        background-color="rgb(105, 175, 255)"
        text-color="#fff"
        active-text-color="#fff"
        router
      >
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/process">预约指南</el-menu-item>
        <el-menu-item index="/hosp">找医院</el-menu-item>
        <el-menu-item index="/doctor">找医生</el-menu-item>
        <el-menu-item index="/appointment">个人中心</el-menu-item>
      </el-menu>
    </div>
    <!-- 子路由出口 -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
// import router from './router'
// import userReg from '@/views/reg'
// import { mapActions } from 'vuex'
import { removeToken } from '@/utils/auth'
import { getdoctorByName } from '@/api/doctor'
import { gethospByName } from '@/api/hosp'
export default {
  name: 'Layout',
  data () {
    return {
      input: '',
      select: '',
      src: require('@/assets/logo8.jpg'),
      fit: 'cover',
      showDialog: false
    }
  },
  computed: {
    isToken () {
      // 有token 显示欢迎信息
      return this.$store.state.token === ''
    }
    // noToken () {
    //   // 没有token 显示登录信息
    //   return this.$store.state.token !== null
    // }
  },
  created () {},
  mounted () {},
  methods: {
    // 通过输入框搜索医院或医生
    async search () {
      if (this.select === '1') {
        // 搜索医生
        const res = await getdoctorByName(this.input)
        console.log('医生数据')
        console.log(res)
      } else if (this.select === '2') {
        // 搜索医院
        const res = await gethospByName(this.input)
        console.log('医院数据')
        console.log(res)
      } else {
        console.log('请选择搜索的条件')
      }
    },
    // ...mapActions(['logout']),
    // 点击登录跳转到登录页
    login () {
      this.$router.push('/login')
    },
    // 跳转到注册页面
    reg () {
      this.$router.push('/reg')
      this.showDialog = true
    },

    // 退出登录
    logout () {
      // 调用封装的登出方法
      this.$store.state.token = ''
      removeToken()
      this.$router.push('/')
      //   // 提示成功信息
      this.$message({
        type: 'success',
        message: '退出成功!'
      })
      // try {
      //   await this.$confirm('您将退出登录, 是否继续?', '提示', {
      //     confirmButtonText: '确定',
      //     cancelButtonText: '取消'
      //   })
      //   // 调用封装的登出方法
      //   await this.logout()
      //   this.$router.push('/')
      //   // 提示成功信息
      //   await this.$message({
      //     type: 'success',
      //     message: '退出成功!'
      //   })
      // } catch (err) {
      //   this.$message({
      //     type: 'info',
      //     message: '已取消退出'
      //   })
      // }
    }
  }
}
</script>

<style scoped lang="less">
.noshow {
  display: none;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: #fff;
}
.el-menu-demo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  .el-menu-item {
    font-size: 21px;
    height: 45px;
    line-height: 45px;
  }
}
.nologin {
  font-size: 16px;
  color: #666568c4;
  cursor: pointer;
}
.yeslogin {
  font-size: 22px;
  // color: rgb(110, 186, 254);
  color: rgb(245, 176, 9);
  cursor: pointer;
  margin: 0 5px 0 10px;
}
/deep/ .inputselect {
  // padding-right: 30px;
  width: 90px !important;
}
</style>
