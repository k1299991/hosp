<template>
  <div class="yuyue">
    <!-- 返回 -->
    <el-row type="flex" align="middle">
      <el-page-header @back="goBack">
        <template slot="content">
          <span style="font-size: 16px;font-weight: 500;color:rgb(245, 176, 9)">
            '{{ doctInfo.docName }}'医生--个人主页
          </span>
        </template>
      </el-page-header>
    </el-row>
    <!-- 医生介绍 -->
    <el-row>
      <h4>医生介绍</h4>
      <el-row
        type="flex"
        justify="center"
        algin="middle"
        :gutter="20"
        style="height:220px;border-bottom:1px solid #e8e9ea;margin-top:20px;background-color:#f5f7fa;padding-top:20px"
      >
        <el-col :span="4">
          <el-image
            :src="url"
            fit="cover"
            style="height:170px;width:140px"
          ></el-image>
        </el-col>
        <el-col>
          <!-- 医生名字 -->
          <el-row type="flex" justify="center" align="middle">
            <el-col>
              <el-row type="flex" align="middle" style="margin-top:6px">
                <span class="name">{{ doctInfo.docName }}</span>
                <el-row class="text" style="margin-left:25px">
                  <span style="color:#409EFF">
                    <el-tag size="mini" v-if="doctInfo.hInsurance">{{
                      '医'
                    }}</el-tag>
                    认证医生</span
                  >
                  <span style="margin-left:20px">{{ doctInfo.dgName }} /</span>
                  <span>{{ doctInfo.docGender }}</span>
                </el-row>
              </el-row>
            </el-col>
          </el-row>
          <!-- 评分 -->
          <el-row
            type="flex"
            justify="center"
            align="middle"
            style="margin-top:10px"
          >
            <el-col>
              <span v-for="item in 4" :key="item" style="color:#f5b009">
                <i class="el-icon-star-on"></i>
              </span>
              <span style="color:#f5b009;margin-left:10px">{{
                doctInfo.docScore
              }}</span>
            </el-col>
          </el-row>
          <!-- 详情 -->
          <el-row style="margin-top:15px">
            <div class="text" style="margin-top:12px">
              <span>{{ doctInfo.hospName }}</span>
              <span style="margin-left:10px">{{ doctInfo.deptName }}</span>
            </div>

            <div style="margin:6px 0" class="text">
              <span>擅长诊治：</span>
              <span>{{ doctInfo.docSkill }}</span>
            </div>
            <div style="margin:6px 0">
              <span class="text"
                >医院地址：<span style="font-size:14px">{{
                  doctInfo.hospadress
                }}</span></span
              >
            </div>
          </el-row>
        </el-col>
      </el-row>
    </el-row>
    <el-row :gutter="20">
      <!-- 左 -->
      <el-col :span="17">
        <!-- 选择就诊时间 -->
        <el-row style="margin-top:20px">
          <h4>选择就诊时间</h4>
          <el-table
            :data="tableData1"
            height="410"
            style="width: 100%;font-size:16px"
          >
            <el-table-column
              prop="date"
              label="日期"
              width="180"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="morning"
              label="上午"
              width="180"
              align="center"
            >
              <template slot-scope="scope">
                <div
                  slot="reference"
                  class="name-wrapper"
                  v-if="scope.row.morning !== ''"
                >
                  <el-tag
                    size="medium"
                    effect="dark"
                    @click="yuYue(scope.row.date, '上午')"
                    style="cursor: pointer"
                    >{{ scope.row.morning }}</el-tag
                  >
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="afternoon" label="下午" align="center">
              <template slot-scope="scope">
                <div
                  slot="reference"
                  class="name-wrapper"
                  v-if="scope.row.afternoon !== ''"
                >
                  <el-tag
                    size="medium"
                    effect="dark"
                    @click="yuYue(scope.row.date, '下午')"
                    style="cursor: pointer"
                    >{{ scope.row.afternoon }}</el-tag
                  >
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="night" label="晚上" align="center">
              <template slot-scope="scope">
                <div
                  slot="reference"
                  class="name-wrapper"
                  v-if="scope.row.night !== ''"
                >
                  <el-tag
                    size="medium"
                    effect="dark"
                    @click="yuYue(scope.row.date, '晚上')"
                    style="cursor: pointer"
                    >{{ scope.row.night }}</el-tag
                  >
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
        <!-- 执业经历 -->
        <el-row style="margin-top:40px">
          <div>
            <h4>执业经历</h4>
          </div>
          <div>
            <p>
              从1995到至今武汉同济医院;华中科技大学同济医学院外科学博士；美国加州大学洛杉矶分校（UCLA医学中心泌尿外科博士后
            </p>
          </div>
        </el-row>
        <!-- 底部 -->
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
import SideNav from '@/components/sideNav'
import { getInfoByDocId } from '@/api/doctor'
import footerpage from '@/components/footer'
export default {
  name: 'yuyue',
  components: {
    SideNav,
    footerpage
  },
  data () {
    return {
      nowTime: new Date(),
      // weekTime: [],
      doctId: this.$route.params.id, // 获取医生id
      doctInfo: '', // 医生数据 对象的形式
      workTime: '',
      tableData1: [],
      url:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      // tableData: [
      //   {
      //     date: '04/24',
      //     morning: '',
      //     afternoon: '可预约',
      //     night: ''
      //   },
      //   {
      //     date: '04/25',
      //     morning: '',
      //     afternoon: '可预约',
      //     night: ''
      //   },
      //   {
      //     date: '04/26',
      //     morning: '',
      //     afternoon: '',
      //     night: ''
      //   },
      //   {
      //     date: '04/27',
      //     morning: '可预约',
      //     afternoon: '',
      //     night: ''
      //   },
      //   {
      //     date: '04/28',
      //     morning: '',
      //     afternoon: '',
      //     night: '可预约'
      //   },
      //   {
      //     date: '04/29',
      //     morning: '可预约',
      //     afternoon: '',
      //     night: '可预约'
      //   },
      //   {
      //     date: '04/30',
      //     morning: '',
      //     afternoon: '可预约',
      //     night: ''
      //   }
      // ]
    }
  },
  created () {
    this.getInfoByDocId()
  },
  mounted () {},
  methods: {
    // 根据医生id获取医生数据
    async getInfoByDocId () {
      this.doctInfo = (await getInfoByDocId(this.doctId))[0]
      console.log(this.doctInfo)
      const weekTime = []
      // 计算出后七天的日期
      for (var i = 0, jj = 0; i < 7; i++, jj += 86400) {
        // 把每一天的时间转成毫秒数
        var thistime = +this.nowTime + jj * 1000
        // 当天毫秒数 转化成日期格式
        thistime = new Date(thistime)
        // 拿到月、日
        weekTime.push(`${thistime.getMonth() + 1}/${thistime.getDate()}`)
      }
      console.log(weekTime)
      // 拿到医生的上班时间
      this.workTime = this.doctInfo.time
      console.log(this.workTime)
      // 把字符串切割成数组
      const arr1 = this.workTime.split(',')
      const lastTime = []
      console.log(arr1)
      arr1.forEach(item => {
        // 把 001 切割 形成一个新的数组 [0,0,1]
        lastTime.push(item.split(''))
      })
      console.log(lastTime)
      var morning
      var afternoon
      var night
      for (var j = 0; j < 7; j++) {
        // for (var j = 0; j < 3; j++) {
        if (lastTime[j][0] === '0') {
          morning = ''
        } else {
          morning = '可预约'
        }
        if (lastTime[j][1] === '0') {
          afternoon = ''
        } else {
          afternoon = '可预约'
        }
        if (lastTime[j][2] === '0') {
          night = ''
        } else {
          night = '可预约'
        }
        // }
        this.tableData1.push({
          date: weekTime[j],
          morning: morning,
          afternoon: afternoon,
          night: night
        })
        console.log(this.tableData1)
      }
    },
    goBack () {
      this.$router.back()
    },
    yuYue (date, time) {
      // this.$router.push(`/yuYueInfo/${this.doctId}`)
      // console.log(row)
      // const data = {
      //   doctId: this.doctId,
      //   row: row
      // }
      this.$router.push({
        name: 'yuYueInfo',
        params: {
          doctId: this.doctId,
          date: date,
          time: time
        }
      })
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
</style>
