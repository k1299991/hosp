<template>
  <el-card header="用户注册">
    <!-- 表单 -->
    <el-form
      ref="formData"
      label-width="120px"
      :model="formData"
      :rules="rules"
    >
      <el-form-item label="账户名" prop="userAccount">
        <el-input
          style="width:50%"
          placeholder="请输入账户名"
          v-model="formData.userAccount"
        />
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input
          style="width:50%"
          type="password"
          placeholder="请输入初次密码"
          v-model="formData.pwd"
        />
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input
          style="width:50%"
          type="password"
          placeholder="请再次确认密码"
          v-model="formData.password"
        />
      </el-form-item>
      <el-form-item label="姓名" prop="userName">
        <el-input
          style="width:50%"
          placeholder="请输入真实姓名"
          v-model="formData.userName"
        />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="formData.userGender" label="男">男</el-radio>
        <el-radio v-model="formData.userGender" label="女">女</el-radio>
      </el-form-item>
      <el-form-item label="年龄" prop="userAge">
        <el-input
          style="width:50%"
          placeholder="请输入真实年龄"
          v-model="formData.userAge"
        />
      </el-form-item>
      <el-form-item label="手机号码" prop="userMobile">
        <el-input
          style="width:50%"
          placeholder="请输入手机号"
          v-model="formData.userMobile"
        />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input
          style="width:50%"
          placeholder="请输入邮箱"
          v-model="formData.email"
        />
      </el-form-item>
      <el-form-item>
        <el-row type="flex" justify="center">
          <el-col :span="10">
            <el-button size="small" @click="btnClear">重置</el-button>
            <el-button type="primary" size="small" @click="btnReg"
              >注册</el-button
            >
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { userNameCheck, userReg } from '@/api/user'
// import { users} from '@/api/shouye'
// import axios from 'axios'
export default {
  name: 'reg',
  data () {
    const checkPwd = async (rule, value, callback) => {
      // console.log(value)
      // console.log(this.formData.pwd)
      value === this.formData.pwd
        ? callback()
        : callback(new Error('输入的两次密码不一致'))
    }
    return {
      radio: '男', // 单选框
      formData: {
        userAccount: '',
        pwd: '',
        password: '',
        userName: '',
        userGender: '',
        userAge: '',
        userMobile: '',
        email: '',
        createTime: new Date(),
        updateTime: new Date()
      },
      rules: {
        userAccount: [
          { required: true, message: '账户名不能为空', trigger: 'blur' },
          { min: 2, max: 12, message: '账户名为2-12位', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度为6-12位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { min: 6, max: 12, message: '密码长度为6-12位', trigger: 'blur' },
          {
            trigger: 'blur',
            validator: checkPwd // 自定义校验密码规则
          }
        ],
        userName: [
          { required: true, message: '姓名不能为空', trigger: 'blur' },
          { min: 1, max: 12, message: '姓名长度为2-12位', trigger: 'blur' }
        ],
        userAge: [{ required: true, message: '年龄不能为空', trigger: 'blur' }],
        userMobile: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式不正确',
            trigger: 'blur'
          }
        ],
        email: [
          // { required: true, message: '邮箱不能为空', trigger: 'blur' },
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '邮箱格式不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  // created () {
  // axios({
  //   method: 'delete',
  //   url: 'http://192.168.15.70:3001/users/1' // 直接写ID即可
  // }).then(data => {
  //   console.log(data)
  // })
  // },
  methods: {
    // 重置表单
    async btnClear () {
      this.formData = {
        userAccount: '',
        pwd: '',
        password: '',
        userName: '',
        userGender: '',
        userAge: '',
        userMobile: '',
        email: ''
      }
      // try {
      // 发请求
      // const obj = {
      //   goods_name: '苹果',
      //   price: '123'
      // }
      // ---------------使用mock-----1-----------
      // const data = await this.$http.get('/product') // 相当于使用axios发送请求
      // console.log(data)
      // const res = await this.$http.post('/reg', obj)
      // console.log(res)
      // -----------使用mock 获取模拟数据--------2----------
      // const res1 = await userReg(obj)
      // console.log(res1)
      // ----------使用 json_serve的方式------1------------
      // axios({
      //   method: 'post',
      //   url: 'http://192.168.15.70:3001/users',
      //   data: {
      //     id: '091',
      //     u_name: 'Yi只猴91'
      //   }
      // }).then(data => {
      //   console.log(data)
      // })
      // ---------------------------------------------------
      // const data = {
      //   u_name: 'zhangdhan',
      //   id: 999
      // }
      // const res = await users()
      // console.log(res)
      this.$message.success('重置成功')
      // } catch (error) {
      //   console.log(error)
      // }
    },
    // 注册
    async btnReg () {
      try {
        // 表单验证
        await this.$refs.formData.validate()
        // 发请求
        // const data = await this.$http.get('/product') // 相当于使用axios发送请求
        // console.log(data)
        // const res = await this.$http.post('/addgoods', obj)
        // console.log(res)
        const have = await userNameCheck(this.formData.userAccount)
        console.log(have)
        if (have.length === 0) {
          const uid = Math.floor(Math.random() * 10000)
          const res = await userReg({
            userAccount: this.formData.userAccount,
            password: this.formData.password,
            userName: this.formData.userName,
            userGender: this.formData.userGender,
            userAge: this.formData.userAge,
            userMobile: this.formData.userMobile,
            email: this.formData.email,
            // ...this.formData,
            id: uid,
            userId: uid,
            code: `a123${this.formData.userName}456a`
          })
          console.log(res)
          // 提示注册成功
          this.$message.success('注册成功')
          // 清空表单
          this.formData = {
            user: '',
            pwd: '',
            repwd: '',
            name: '',
            age: '',
            gender: '',
            phone: '',
            email: '',
            createTime: '',
            updateTime: ''
          }
          // this.$refs.formData.resetFields()
          // 跳转到登录页
          this.$router.push('/login')
        } else {
          this.$message.error('账户名已存在，请换一个账户名')
          Promise.reject(new Error('账户名已存在'))
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
