<template>
  <div>
    <el-divider content-position="left">用户个人信息</el-divider>
    <el-form label-width="220px">
      <el-row class="inline-info">
        <el-form-item label="姓名">
          <el-input
            v-model="userInfo.name"
            class="inputW"
            style="width:300px"
          />
        </el-form-item>

        <el-form-item label="性别">
          <el-input
            v-model="userInfo.gender"
            class="inputW"
            style="width:300px"
          />
        </el-form-item>

        <el-form-item label="年龄">
          <el-input v-model="userInfo.age" class="inputW" style="width:300px" />
        </el-form-item>

        <el-form-item label="身份证号">
          <el-input
            v-model="userInfo.idCard"
            class="inputW"
            placeholder="正规身份证格式"
            style="width:300px"
          />
        </el-form-item>

        <el-form-item label="手机">
          <el-input
            v-model="userInfo.mobile"
            placeholder="11位字符"
            style="width:300px"
          />
        </el-form-item>

        <el-form-item label="邮箱">
          <el-input v-model="userInfo.email" style="width:300px" />
        </el-form-item>

        <el-row class="inline-info" type="flex" justify="center">
          <el-col :span="12"
            ><el-button>重置</el-button>
            <el-button type="primary" @click="savePersonal">保存</el-button>
          </el-col>
        </el-row>
      </el-row>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {
        name: '',
        gender: '',
        age: '',
        idCard: '',
        mobile: '',
        email: ''
      }
    }
  },
  created () {},
  mounted () {},
  methods: {
    savePersonal () {}
  }
}
</script>

<style scoped lang="less"></style>
