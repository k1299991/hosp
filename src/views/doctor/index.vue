<template>
  <div class="hospital-container">
    <el-row style="margin-top:25px" type="flex" :gutter="20">
      <!-- 左边 -->
      <el-col :span="17">
        <el-row>
          <!-- 内容 -->
          <el-container>
            <el-header
              style="margin-bottom:15px;height:110px;color:rgb(85, 82, 82);border-bottom:1px solid #e8e9ea;"
            >
              <!-- 放置科室 -->
              <!-- <dept /> -->
              <div>
                <span class="title"> 科室名称:</span>
                <span
                  :class="dtAllShow === 1 ? 'tag t' : 'tag'"
                  @click="getDeptId('10')"
                  >全部</span
                >
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
                  class="tag"
                  @click="getDgId(item.dgId)"
                >
                  {{ item.dgName }}
                </span>
              </div>
            </el-header>
            <!-- <el-divider></el-divider> -->
            <!-- 放置找医生组件 -->
            <el-main>
              <findDoctor ref="find" :fdeptId="FdeptId" />
            </el-main>
          </el-container>
        </el-row>
        <footerpage />
      </el-col>
      <!-- 右边 -->
      <el-col :span="7">
        <side-nav />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getDgInfo, getShouyedept } from '@/api/shouye'
// import dept from '@/components/dept'
import findDoctor from './component/findDoctor'
import footerpage from '@/components/footer'
import SideNav from '@/components/sideNav'
export default {
  name: 'Hosp',
  components: {
    // dept,
    footerpage,
    findDoctor,
    SideNav
  },
  data () {
    return {
      dtAllShow: 1, // 显示全部 科室
      dgAllShow: 1, // 显示 全部 职称
      dtShow: null, // 显示某个部门
      dgShow: null, // 显示某个职称
      fd: 0,
      fg: 0,
      FdeptId: parseInt(this.$route.params.id || '0'), // 用于记录选中的科室
      // sDgId: '', // 用于记录选中的医生职称
      // fdetpId: this.$route.params.id, // 拿到从首页选择科室 通过路由传参 的科室id
      deptList: [], // 科室名字
      doctorGarde: [], // 医生职称
      url: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],
      activeName: 'first'
    }
  },

  created () {
    this.getShouyedept()
    this.getDgInfo()
  },
  mounted () {},
  methods: {
    // 点击科室
    getDeptId (id) {
      this.dtShow = id // 选择某一个科室
      // if(this.$route.params.id){
      // }
      // 选择全部科室
      if (id === '10') {
        this.dtAllShow = 1 // 选择 全部 科室
        console.log('10')
        this.fd = 0
        if (this.fg) {
          // 没选科室 选择职称
          this.$refs.find.getdoctorByDgId()
        } else {
          // 没选科室 也没选 职称
          this.$refs.find.getAllDoctor()
        }
      } else {
        // 选择了某个科室
        this.fd = 1
        this.dtAllShow = 0
        // 记录科室的id
        this.$store.commit('setDeptId', id)
        if (this.fg) {
          // 选择了职称
          this.$refs.find.getDepAndDgDoctor()
        } else {
          // 没有选择职称
          // console.log(this.$store.state.deptId)
          this.$refs.find.getdoctorByDeptId()
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
          this.$refs.find.getdoctorByDeptId()
        } else {
          // 没选科室 也没选职称
          this.$refs.find.getAllDoctor()
        }
      } else {
        // 选择了某个职称
        this.fg = 1
        this.dgAllShow = 0
        // 记录职称的id
        this.$store.commit('setDgId', id)
        if (this.fd) {
          // 选择了科室
          this.$refs.find.getDepAndDgDoctor()
        } else {
          // 没有选择科室
          // console.log(this.$store.state.deptId)
          this.$refs.find.getdoctorByDgId()
        }
      }
    },
    // 获取科室列表
    async getShouyedept () {
      this.deptList = await getShouyedept()
      console.log(this.deptList)
    },
    // 获取医生职称
    async getDgInfo () {
       await getDgInfo().then(res => {
        if( res.state != 200){
          this.$message.error(res.message);
          return ;
        }
         this.doctorGarde=res.data;
      });

    }
  }
}
</script>

<style scoped lang="less">
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
