<template>
  <div class="login">
    <el-card class="loginCard">
      <div slot="header" class="clearfix">
        <span style="font-size:'16px';color:'#000'">预约挂号用户登录系统</span>
      </div>
      <el-form
        ref="formData"
        :model="formData"
        :rules="rules"
        class="login-form"
        auto-complete="on"
        label-position="left"
      >
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            prefix-icon="el-icon-user-solid"
            placeholder="请输入账号"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            prefix-icon="el-icon-lock"
            placeholder="请输入密码"
            name="password"
            type="password"
            tabindex="2"
            auto-complete="on"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="loginBtn"
            style="width:100%;margin-bottom:30px;font-size:20px"
            @click="handleLogin"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import { userlogin } from '@/api/user'
import { mapActions } from 'vuex' // 引入vuex的辅助函数mapActions
export default {
  name: 'login',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '账户名不能为空', trigger: 'blur' },
          { min: 2, max: 12, message: '账户名为2-12位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度为6-12位', trigger: 'blur' }
        ]
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    ...mapActions(['login']),
    // 登录
    async handleLogin () {
      // 校验表单
      try {
        await this.$refs.formData.validate()
        // 验证通过 发送请求
        await this.login(this.formData).then(res => {
          if( res.state != 200){
            this.$message.error(res.message);
            return ;
          }
          this.$router.push('/')
        });



      } catch (err) {
        console.log(err)
      }
      // 校验成功 调用接口
      // 查找用户是否已注册
      // 1.若已注册 且密码正确 返回数据到前台 包括一个token 把token存在本地
      // 在预约挂号时 先判断 本地是否 有token 有token则允许访问
      // 没有 token 失效 提示用户重新登录
      // const data = await userlogin(formData)
      // 2.若没有注册，提示用户 去注册 并跳转到注册页面
    }
  }
}
</script>

<style scoped lang="less">
.loginBtn {
  background-color: rgb(133, 187, 248);
  color: #fff;
}
.login {
  // background: url('~@/assets/login.jpg');
  // background-position: center; // 位置设为充满整个屏幕
  // background: rgb(197, 196, 196);
  background: url('~@/assets/bgI2.jpg');
  background-position: center;
  height: 600px;
  .loginCard {
    width: 520px;
    // margin: 0 auto;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-form {
      position: relative;
      width: 420px;
      max-width: 100%;
      margin: 0 auto;
      overflow: hidden;
    }
  }
  .el-card {
    border: 0;
    // border: 1px solid #ebeef5;
    // background-color: #fff;
    color: rgb(133, 187, 248);
    transition: 0.3s;
    font-size: 30px;
    span {
      padding-left: 87px;
    }
  }
}
</style>
