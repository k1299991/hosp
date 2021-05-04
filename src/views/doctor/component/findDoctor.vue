<template>
  <div class="findHosp">
    <!-- 上 -->
    <el-row type="flex" align="middle">
      <el-col :span="14">
        <span class="text"
          >找到符合条件的<span style="color:#e6a23c;margin:0 6px">{{
            findAllDoctor.length
          }}</span
          >名优质医生</span
        >
      </el-col>
    </el-row>
    <!-- 下 -->
    <el-divider></el-divider>
    <div class="mainHosp">
      <el-row
        type="flex"
        justify="center"
        algin="middle"
        v-for="item in findAllDoctor"
        :key="item.docId"
        style="height:220px;border-bottom:1px solid #e8e9ea;margin-top:20px"
      >
        <el-col :span="6">
          <el-image
            :src="url"
            fit="cover"
            style="height:170px;width:140px"
          ></el-image>
        </el-col>
        <el-col :span="17">
          <!-- 医生名字 -->
          <el-row type="flex" justify="center" align="middle">
            <el-col>
              <el-row type="flex" align="middle" style="margin-top:6px">
                <span class="name">{{ item.docName }}</span>
                <div class="text" style="margin-left:25px">
                  <span>{{ item.dgName }}</span>
                  <!-- <span style="margin:0 5px">/</span>
                  <span>教授,</span>
                  <span>博士生导师</span> -->
                </div>
              </el-row>
            </el-col>
          </el-row>
          <!-- 详情 -->
          <el-row style="margin-top:20px">
            <div class="text" style="margin-top:12px">
              <span>{{ item.hospName }}</span>
              <span style="margin-left:10px">({{ item.deptName }})</span>
            </div>
            <div style="margin:6px 0">
              <span class="text"
                >医院地址：<span style="font-size:14px">{{
                  item.hospadress
                }}</span></span
              >
            </div>
            <div style="margin:6px 0" class="text">
              <span>擅长诊治：</span>
              <span>{{ item.docSkill }}</span>
            </div>
          </el-row>
          <!-- 评分 -->
          <el-row type="flex" justify="center" align="middle">
            <el-col>
              <span class="text">总推荐度：</span>
              <span v-for="item in 4" :key="item" style="color:#f5b009">
                <i class="el-icon-star-on"></i>
              </span>
              <span style="color:#f5b009;margin-left:10px">{{
                item.docScore
              }}</span>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row type="flex" align="middle">
            <el-col>
              <router-link :to="`/yuyue/${item.docId}`">
                <el-button type="primary">预约挂号</el-button>
              </router-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="findAllDoctor.length"
      style="margin-left:300px;margin-top:30px"
    >
    </el-pagination>
  </div>
</template>

<script>
import {
  getDepAndDgDoctor,
  getDoct,
  getDeptDoctor,
  getAllDoctor,
  getDepAndDgHoDoctor,
  getDgHoDoctor,
  getDeptHoDoctor,
  getAllHoDoctor
} from '@/api/doctor'

export default {
  name: 'findHosp',
  props: {
    // 通过医院id找到的所有医生
    // doctorByHospId: {
    //   type: [Array, Object]
    //   // default: null
    //   // required: true
    // },
    // 表示通过点击导航栏“找医生” 获取所有医生
    all: {
      type: Number,
      default: null
    },
    fdeptId: {
      type: Number,
      default: null
    }
  },
  data () {
    return {
      // fdeptId: this.$route.params.id,
      deptId: this.$store.state.deptId,
      dgId: this.$store.state.dgId,
      findAllDoctor: [],
      checked: false,
      url:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  },
  created () {
    // this.getDoctor()
    // this.getAllDoctor()
    // this.getHospDoctor()
    this.init()
  },
  mounted () {},
  computed: {
    // oHospD () {
    //   // 有
    //   return this.doctorByHospId !== []
    // },
    sfdeptId () {
      // 有 doctor->index.vue 传过来了一个科室id
      return this.fdeptId !== 0
    },
    // 监听是否传了科室id过来
    sdeptId () {
      // 有
      return this.deptId !== null
    },
    sdgId () {
      // 有
      return this.dgId !== null
    }
  },
  methods: {
    // 0.初始
    async init () {
      // if (this.fdeptId !== null) {
      //   console.log(6666666666)
      //   this.findAllDoctor = await getDeptDoctor(this.fdeptId)
      //   return 1
      // }
      if (this.sfdeptId) {
        console.log(7777777777)
        console.log(this.fdeptId)
        console.log(this.sfdeptId)
        // this.fdeptId = parseInt(this.fdeptId)
        this.findAllDoctor = await getDeptDoctor(this.fdeptId)
      } else if (this.findAllDoctor.length !== 0) {
        console.log(888888888888)
        console.log(this.findAllDoctor)
        return 1
      } else {
        console.log(999999999999)
        this.getAllDoctor()
        return 1
      }
    },
    // 1.根据科室和职称
    async getDepAndDgDoctor () {
      try {
        if (this.sdeptId && this.sdgId) {
          console.log(100011)
          // console.log(this.$store.state.deptId)
          this.findAllDoctor = await getDepAndDgDoctor(
            this.$store.state.deptId,
            this.$store.state.dgId
          )
          console.log(this.findAllDoctor)
          console.log('deptId发请求了')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 2. 根据科室id
    async getdoctorByDeptId () {
      try {
        // if (this.fsdeptId) {
        //   this.fsdeptId = parseInt(this.fsdeptId)
        //   console.log(9999999)
        //   console.log(this.$route.params.id)
        //   this.findAllDoctor = await getDeptDoctor(this.fsdeptId)
        // } else
        if (this.sdeptId) {
          // 有点击科室
          console.log(100009)
          console.log(this.$store.state.deptId)
          this.findAllDoctor = await getDeptDoctor(this.$store.state.deptId)
          console.log(this.findAllDoctor)
          console.log('deptId发请求了')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 3.根据职称id
    async getdoctorByDgId () {
      try {
        if (this.sdgId) {
          // 有点击职称
          console.log(100010)
          console.log(this.$store.state.dgId)
          const {data} = await getDoct({dgId:this.$store.state.dgId})
          this.findAllDoctor = data
          console.log(this.findAllDoctor)
          console.log('dgId发请求了')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 4.获取所有医生
    async getAllDoctor () {
      // console.log(this.deptId)
      // console.log(this.dgId)
      try {
        this.findAllDoctor = await getAllDoctor()
        console.log(this.$store.state.deptId)
      } catch (err) {
        console.log(err)
      }
    },
    getHospDoctor (data) {
      // 1-首先会默认显示所有医生 ---表示 在“找医生首页” 所有医院的医生 ！
      // 2-其次判断是否是 在“找医院” 中 某个医院下的所有医生 ！！
      if (data) {
        this.findAllDoctor = data
        console.log('2------------2')
        console.log(data)
        console.log(this.findAllDoctor)
      }
    },
    // 1-1.根据科室和职称,医院id
    async getDepAndDgHoDoctor (hospId) {
      try {
        if (this.sdeptId && this.sdgId) {
          this.findAllDoctor = await getDepAndDgHoDoctor(
            this.$store.state.deptId,
            this.$store.state.dgId,
            hospId
          )
          console.log(this.findAllDoctor)
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 2-1. 根据科室id 医院id
    async getdoctorByDeptHoId (hospId) {
      try {
        if (this.sdeptId) {
          // 有点击科室
          this.findAllDoctor = await getDeptHoDoctor(
            this.$store.state.deptId,
            hospId
          )
          console.log(this.findAllDoctor)
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 3-1根据职称和 医院id
    async getdoctorByDgHoId (hospId) {
      try {
        if (this.sdgId) {
          this.findAllDoctor = await getDgHoDoctor(
            this.$store.state.dgId,
            hospId
          )
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 4-1 根据医院id获取所有
    async getAllHoDoctor (hospId) {
      try {
        this.findAllDoctor = await getAllHoDoctor(hospId)
        console.log(this.$store.state.deptId)
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped lang="less">
.name {
  color: rgb(80, 77, 77);
  font-size: 20px;
}
.text {
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.el-button {
  margin: 60px;
}
</style>
