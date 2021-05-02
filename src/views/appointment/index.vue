<template>
  <div class="appointment">
    <el-card>
      <el-tabs>
        <el-tab-pane label="我的预约">
          <!-- 放置预约组件 -->
          <user-app :myAppoinInfo="myAppion" />
        </el-tab-pane>
        <el-tab-pane label="个人信息">
          <!-- 账户管理 -->
          <!-- 放置表单 -->
          <el-divider content-position="left">登录账户信息</el-divider>
          <el-form
            ref="formData"
            :model="userInfo1"
            :rules="rules1"
            label-width="220px"
            style=" margin-top:30px"
          >
            <el-form-item label="账号">
              <el-input
                disabled
                v-model="userInfo1.userAccount"
                style="width:300px"
              />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                ref="input"
                v-model="userInfo1.password"
                style="width:300px"
                type="password"
              >
                <i
                  slot="suffix"
                  class="el-input__icon el-icon-view"
                  @click="showPwd"
                ></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="savePassword">更新</el-button>
            </el-form-item>
          </el-form>
          <!-- 个人详情组件 -->
          <!-- <user-info /> -->
          <div>
            <el-divider content-position="left"
              >用户个人信息（请完善个人信息）</el-divider
            >
            <el-form
              label-width="220px"
              ref="userformData"
              :model="userInfo"
              :rules="rules"
            >
              <el-row class="inline-info">
                <el-form-item label="姓名">
                  <el-input
                    disabled
                    v-model="userInfo.name"
                    class="inputW"
                    style="width:300px"
                  />
                </el-form-item>

                <el-form-item label="性别">
                  <el-input
                    disabled
                    v-model="userInfo.gender"
                    class="inputW"
                    style="width:300px"
                  />
                </el-form-item>

                <el-form-item label="年龄" prop="age">
                  <el-input
                    v-model="userInfo.age"
                    class="inputW"
                    style="width:300px"
                  />
                </el-form-item>

                <el-form-item label="身份证号" prop="idCard">
                  <el-input
                    v-model="userInfo.idCard"
                    class="inputW"
                    placeholder="正规身份证格式"
                    style="width:300px"
                  />
                </el-form-item>

                <el-form-item label="手机" prop="mobile">
                  <el-input
                    v-model="userInfo.mobile"
                    placeholder="11位字符"
                    style="width:300px"
                  />
                </el-form-item>

                <el-form-item label="邮箱" prop="email">
                  <el-input v-model="userInfo.email" style="width:300px" />
                </el-form-item>

                <el-row class="inline-info" type="flex" justify="center">
                  <el-col :span="12"
                    ><el-button @click="clear">重置</el-button>
                    <el-button type="primary" @click="savePersonal"
                      >保存</el-button
                    >
                  </el-col>
                </el-row>
              </el-row>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
import { userUpdate } from '@/api/user'
import { getappoinInfo } from '@/api/appointment'
import userApp from './component/userApp.vue'
// import userInfo from './component/userInfo'
export default {
  components: { userApp },
  name: 'MyAppointment',
  data () {
    return {
      // 显示密码
      show: false,
      // 个人账户所有的预约数据
      myAppion: '',
      // 账户 密码
      userInfo1: {
        userAccount: '',
        password: ''
      },
      // 账户密码的校验规则
      rules1: {
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, max: 9, message: '密码长度6-9位', trigger: 'blur' }
        ]
      },
      // 个人信息
      userInfo: {
        name: '',
        gender: '',
        age: '',
        idCard: '',
        mobile: '',
        email: ''
      },
      rules: {
        userAge: [
          {
            pattern: /^(?:[1-9][0-9]?|1[01][0-9]|140)$/,
            message: '年龄格式不正确',
            trigger: 'blur'
          }
        ],
        userMobile: [
          {
            pattern: /^1[3-9]\d{9}$/,
            message: '手机号格式不正确',
            trigger: 'blur'
          }
        ],
        email: [
          {
            pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
            message: '邮箱格式不正确',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  computed: {
    flag () {
      return this.show ? 1 : 0
    }
  },
  created () {
    this.getappoinInfo()
    this.getUserInfo()
  },
  mounted () {},
  methods: {
    showPwd () {
      if (this.$refs.input.type === 'password') {
        this.$refs.input.type = 'text'
      } else {
        this.$refs.input.type = 'password'
      }
    },
    // 根据登录者的账户id 获取用户的预约信息
    async getappoinInfo () {
      console.log(this.$store.state.userLoginInfo.userId) // 1
      this.myAppion = await getappoinInfo(
        this.$store.state.userLoginInfo.userId
      )
      console.log(this.myAppion)
    },
    // 把数据回写到个人信息栏
    getUserInfo () {
      // 1.账户名不能更改
      this.userInfo1.userAccount = this.$store.state.userLoginInfo.userAccount
      // 密码
      this.userInfo1.password = this.$store.state.userLoginInfo.password
      // -------------------------------------------------------------------------
      // 2.姓名、性别不能更改
      this.userInfo.name = this.$store.state.userLoginInfo.userName
      // 性别
      this.userInfo.gender = this.$store.state.userLoginInfo.userGender
      // 年龄
      this.userInfo.age = this.$store.state.userLoginInfo.userAge
      // 手机号
      this.userInfo.mobile = this.$store.state.userLoginInfo.userMobile
      // 邮箱
      this.userInfo.email = this.$store.state.userLoginInfo.email
      // 身份证
      this.userInfo.idCard = this.$store.state.userLoginInfo.userIdCard
    },
    async savePassword () {
      try {
        // 拿到用户的id 和通过校验的密码
        // 发请求 修改密码
        await this.$refs.formData.validate()
        // 发请求 修改密码
        const dataPwd = {
          userId: this.$store.state.userLoginInfo.userId,
          password: this.userInfo1.password,
          userAge: this.$store.state.userLoginInfo.userAge,
          userMobile: this.$store.state.userLoginInfo.userMobile,
          email: this.$store.state.userLoginInfo.email,
          userIdCard: this.$store.state.userLoginInfo.userIdCard,
          userAccount: this.$store.state.userLoginInfo.userAccount,
          userName: this.$store.state.userLoginInfo.userName,
          code: this.$store.state.token,
          userGender: this.$store.state.userLoginInfo.userGender
        }
        await userUpdate(dataPwd)
        this.$message.success('修改密码成功')
        this.$store.commit('setUserLoginInfo', dataPwd)
        console.log('修改密码成功')
        // 清空密码框
        this.userInfo1.password = ''
        // 退出
        this.$store.state.token = ''
        removeToken()
        this.$router.push('/login')
        //   // 提示成功信息
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      } catch (err) {
        console.log('修改密码出错了~~~')
        console.log(err)
      }
    },
    // 提交个人数据
    async savePersonal () {
      try {
        // 校验数据
        await this.$refs.userformData.validate()
        console.log('用户信息验证成功')
        // 校验成功 发请求
        // 把数据 存入user表中
        console.log(this.$store.state.userLoginInfo)
        const data = {
          userId: this.$store.state.userLoginInfo.userId,
          userAge: this.userInfo.age,
          userMobile: this.userInfo.mobile,
          email: this.userInfo.email,
          userIdCard: this.userInfo.idCard || '',
          userAccount: this.$store.state.userLoginInfo.userAccount,
          userName: this.$store.state.userLoginInfo.userName,
          code: this.$store.state.token,
          userGender: this.$store.state.userLoginInfo.userGender,
          password: this.$store.state.userLoginInfo.password
        }
        await userUpdate(data)
        this.$store.commit('setUserLoginInfo', data)
        console.log(this.$store.state.userLoginInfo)
        console.log('保存个人信息成功')
      } catch (err) {
        console.log('保存个人信息出错了~~~')
        console.log(err)
      }
    },
    // 重置
    clear () {}
  }
}
</script>

<style scoped lang="less"></style>
