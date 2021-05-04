<template>
  <div class="hospYuyue">
    <el-row>
      <!-- 左 -->
      <el-col :span="17">
        <!-- 左上 -->
        <!-- 返回 -->
        <el-row type="flex" align="middle">
          <el-page-header @back="goBack">
            <template slot="content">
              <span
                style="font-size: 16px;font-weight: 500;color:rgb(64, 158, 255)"
              >
                '{{ oHosp.hospName }}' 主页
              </span>
            </template>
          </el-page-header>
        </el-row>
        <el-row
          type="flex"
          justify="center"
          algin="middle"
          :gutter="20"
          style="height:170px;margin-top:20px"
        >
          <el-col :span="7">
            <el-image
              :src="url"
              fit="cover"
              style="height:150px;width:100%"
            ></el-image>
          </el-col>
          <el-col :span="11">
            <!-- 医院名字 -->
            <el-row type="flex" justify="center" align="middle">
              <el-col
                ><span>{{ oHosp.hospName }}</span></el-col
              >
              <el-col
                ><span
                  class="text"
                  style="color:#fff;background-color:#f5b009;height:10px;width:20px;margin-right:10px"
                  >{{ oHosp.hgName }}</span
                ></el-col
              >
            </el-row>
            <!-- 医院电话 -->
            <el-row
              type="flex"
              align="middle"
              style="margin-top:25px"
              class="text"
            >
              <span>医院电话：</span>
              <span>{{ '123123' }}</span>
            </el-row>
            <!-- 详情 -->
            <el-row style="margin-top:8px" class="text">
              <div>
                <span
                  >医院地址：<span style="font-size:14px">{{
                    oHosp.hospadress
                  }}</span></span
                >
              </div>
              <div style="margin:8px 0">提供服务：预约挂号 / 出诊提醒</div>
              <div style="margin:8px 0" class="text">
                <el-row type="flex">
                  <div>
                    <span style="color:#f5b009;">{{ oHospDoct.length }}</span>
                    <span>位优质医生 | </span>
                  </div>
                  <div>
                    <span style="color:#f5b009;margin-left:4px">{{
                      oHosp.htimes
                    }}</span>
                    <span>人成功预约</span>
                  </div>
                </el-row>
              </div>
            </el-row>
          </el-col>
          <el-col :span="6">
            <!-- 评分 -->
            <el-row type="flex" justify="center" align="middle">
              <el-col style="color:#f5b009">
                <span v-for="item in 4" :key="item">
                  <i class="el-icon-star-on"></i>
                </span>
                <span style="margin-left:10px">{{ oHosp.hScore }}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <!-- 左下 -->
        <el-row>
          <el-tabs tab-position="top" style="height: 200px;margin-top:20px">
            <el-tab-pane label="全部医生"
              ><el-row>
                <!-- 内容 -->
                <el-container style="margin-top:15px">
                  <el-header
                    style="margin-bottom:15px;height:110px;color:rgb(85, 82, 82);border-bottom:1px solid #e8e9ea;"
                  >
                    <div>
                      <span class="title"> 科室名称:</span>
                      <span
                        :class="dtAllShow === 1 ? 'tag t' : 'tag'"
                        @click="getDeptId('10')"
                        >全部</span
                      >
                      <!-- <span class="tag">全部</span> -->
                      <span
                        v-for="item in deptList"
                        :key="item.deptId"
                        :class="dtShow === item.deptId ? 'tag t' : 'tag'"
                        v-show="item.deptGrade === 1"
                        @click="getDeptId(item.deptId)"
                      >
                        {{ item.deptName }}
                      </span>
                    </div>
                    <div style="margin-top:10px;">
                      <span class="title">医生职称:</span>
                      <span
                        :class="dgAllShow === 1 ? 'tag t' : 'tag'"
                        @click="getDgId('11')"
                        >全部</span
                      >
                      <span
                        v-for="item in doctorGarde"
                        :key="item.dgId"
                        :class="dgShow === item.dgId ? 'tag t' : 'tag'"
                        @click="getDgId(item.dgId)"
                      >
                        {{ item.dgName }}
                      </span>
                    </div>
                    <!-- 科室 医生职称 -->
                    <!-- <dept :deptId.sync="deptId" :dgId.sync="dgId" /> -->
                  </el-header>
                  <!-- <el-divider></el-divider> -->
                  <el-main>
                    <!-- 放置医生组件 -->
                    <!-- :doctorByHospId="oHospDoct" -->
                    <findDoctor ref="finds" />
                  </el-main>
                </el-container>
              </el-row>
              <!-- 分页 -->
              <!-- <el-pagination
                background
                layout="prev, pager, next"
                :total="70"
                style="margin-left:300px;margin-top:30px"
              >
              </el-pagination> -->

              <!-- 底部 -->
              <footerpage />
            </el-tab-pane>
            <el-tab-pane label="医院简介"><hospIntro /></el-tab-pane>
            <el-tab-pane label="用户评价">用户评价</el-tab-pane>
          </el-tabs>
        </el-row>
      </el-col>
      <!-- 右 -->
      <el-col :span="7">
        <side-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDgInfo, getShouyedept } from '@/api/shouye'
// import dept from '@/components/dept'
import { getDoctByHospId } from '@/api/doctor'
import { getHosp } from '@/api/hosp'
import findDoctor from '@/views/doctor/component/findDoctor'
import hospIntro from '@/components/hospIntro'
import footerpage from '@/components/footer'
import SideNav from '@/components/sideNav'
export default {
  name: 'hospYuyue',
  components: {
    // dept,
    hospIntro,
    findDoctor,
    footerpage,
    SideNav
  },
  data () {
    return {
      dtAllShow: 1, // 显示全部 科室
      dgAllShow: 1, // 显示 全部 职称
      dtShow: null, // 显示某个部门
      dgShow: null, // 显示某个职称
      fd: 0,
      deptList: [], // 科室名字
      doctorGarde: [], // 医生职称
      sDeptId: null, // 用于记录选中的科室
      sDgId: null, // 用于记录选中的医生职称
      // 接收 点击 预约挂号 路由跳转的动态参数
      hospId: this.$route.params.id,
      oHosp: '', // id 医院
      oHospDoct: [], // 该医院的所有医生
      url:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  },
  created () {
    this.getShouyedept()
    this.getDgInfo()
    this.getHosp()
    this.getDoctByHospId()
  },
  // computed: {
  //   sDeptId () {
  //     return this.sDeptId
  //   },
  //   sDgId () {
  //     return this.sDgId
  //   }
  // },
  mounted () {},
  methods: {
    // 点击科室
    getDeptId (id) {
      this.dtShow = id // 选择某一个科室
      // if(this.$route.params.id){

      // }
      // 选择全部科室
      console.log('+++++')
      console.log(this.oHosp.hospId)
      if (id === '10') {
        this.dtAllShow = 1 // 选择 全部 科室
        console.log('10')
        this.fd = 0
        if (this.fg) {
          // 没选科室 选择职称
          this.$refs.finds.getdoctorByDgHoId(this.oHosp.hospId)
        } else {
          // 没选科室 也没选 职称
          this.$refs.finds.getAllHoDoctor(this.oHosp.hospId)
        }
      } else {
        // 选择了某个科室
        this.fd = 1
        this.dtAllShow = 0
        // 记录科室的id
        this.$store.commit('setDeptId', id)
        if (this.fg) {
          // 选择了职称
          this.$refs.finds.getDepAndDgHoDoctor(this.oHosp.hospId)
        } else {
          // 没有选择职称
          // console.log(this.$store.state.deptId)
          this.$refs.finds.getdoctorByDeptHoId(this.oHosp.hospId)
        }
      }
    },
    // 点击医生职称
    getDgId (id) {
      this.dgShow = id
      if (id === '11') {
        this.dgAllShow = 1 // 选择 全部 科室
        console.log('11')
        this.fg = 0
        if (this.fd) {
          // 选科室 没选职称
          this.$refs.finds.getdoctorByDeptHoId(this.oHosp.hospId)
        } else {
          // 没选科室 也没选职称
          this.$refs.finds.getAllHoDoctor(this.oHosp.hospId)
        }
      } else {
        // 选择了某个职称
        this.fg = 1
        this.dgAllShow = 0
        // 记录职称的id
        this.$store.commit('setDgId', id)
        if (this.fd) {
          // 选择了科室
          this.$refs.finds.getDepAndDgHoDoctor(this.oHosp.hospId)
        } else {
          // 没有选择科室
          // console.log(this.$store.state.deptId)
          this.$refs.finds.getdoctorByDgHoId(this.oHosp.hospId)
        }
      }
    },
    // 返回
    goBack () {
      this.$router.back()
    },
    // 根据路由参数 获取医院数据
    async getHosp () {
      console.log(435342532432)
      console.log(this.hospId)
      this.oHosp = (await getHosp(this.hospId))[0]
      console.log(this.oHosp)
    },
    // 根据路由参数 获取该医院的所有医生数据
    async getDoctByHospId () {
      this.oHospDoct = await getDoctByHospId(this.hospId)
      this.$refs.finds.getHospDoctor(this.oHospDoct)
      console.log(this.oHospDoct)
    },
    // 点击科室
    updateDeptId (id) {
      this.sDeptId = id
      console.log(id)
      // this.$refs.findDoc.getOtherDoctor()
    },
    // 点击医生职称
    updateDgId (id) {
      this.sDgId = id
      console.log(id)
      // this.$refs.findDoc.getOtherDoctor()
    },
    // 获取科室列表
    async getShouyedept () {
      this.deptList = await getShouyedept()
      console.log(this.deptList)
    },
    // 获取医生职称
    async getDgInfo () {
      await getDgInfo().then(res => {
        // if( res.state != 200){
        //   this.$message.error(res.message);
        //   return ;
        // }
        this.doctorGarde=res;
      });
    }
  }
}
</script>

<style scoped lang="less">
.text {
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.title {
  margin-right: 10px;
  font-size: 17px;
  color: rgb(39, 38, 38);
}
.tag {
  line-height: 30px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 28px;
  color: rgb(85, 82, 82);
  &:hover {
    color: rgb(64, 158, 255);
  }
}
.t {
  color: rgb(64, 158, 255);
}
</style>
