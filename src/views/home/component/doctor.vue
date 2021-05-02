<template>
  <div class="doctor">
    <el-row type="flex" justify="start" style="width:90%">
      <el-col>
        <el-row type="flex" justify="center" style="margin-top:20px">
          <!-- 医生图片 -->
          <el-col :offset="4">
            <el-image
              :src="url"
              fit="cover"
              style="height:200px;width:150px"
            ></el-image>
          </el-col>
        </el-row>
        <el-row type="flex" style="margin-top:20px">
          <!-- 医生姓名 -->
          <el-col style="margin-left:30px" :span="17">
            {{ itemDoct.docName }}
          </el-col>
          <el-col style="color:#737477">
            {{ itemDoct.dgName }}
          </el-col>
        </el-row>
        <el-row class="doct">
          <!-- 所属科室 -->
          {{ itemDoct.deptName }}
        </el-row>
        <el-row class="doct">
          <!-- 所属医院 -->
          {{ itemDoct.hospName }}
        </el-row>
        <el-row>
          <!-- 预约按钮 -->
          <router-link :to="`/yuyue/${itemDoct.docId}`">
            <el-button type="primary" style="margin-left:50px;margin-top:12px"
              >一键预约</el-button
            >
          </router-link>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'doctor',
  props: {
    itemDoct: {
      requried: true,
      type: Object
    }
  },
  data () {
    return {
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.doct {
  margin-left: 30px;
  margin-top: 5px;
  font-size: 14px;
  color: #737477;
}
</style>
