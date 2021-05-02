<template>
  <div class="findHosp">
    <!-- 上 -->
    <el-row type="flex" justify="center" align="middle">
      <el-col :span="14">
        <span class="text"
          >为您找到<span style="color:rgb(245, 176, 9);margin:0 8px">{{
            hospInfoById.length
          }}</span
          >家医院</span
        >
      </el-col>
      <el-col :span="2"><el-link type="primary">综合排序</el-link></el-col>
      <el-col :span="5" class="text">按累计提供服务的次数</el-col>
      <el-col :span="3"
        ><el-checkbox v-model="checked">医保定点</el-checkbox></el-col
      >
    </el-row>
    <!-- 下 -->
    <el-divider></el-divider>
    <div class="mainHosp">
      <el-row
        type="flex"
        justify="center"
        algin="middle"
        :gutter="20"
        v-for="item in hospInfoById"
        :key="item.hospId"
        style="height:170px;border-bottom:1px solid #e8e9ea;margin-top:20px"
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
              ><span>{{ item.hospName }}</span></el-col
            >
            <el-col
              ><span
                style="color:#fff;background-color:#f5b009;height:10px;width:20px;margin-right:10px"
                >{{ item.hgName }}</span
              ></el-col
            >
          </el-row>
          <!-- 评分 -->
          <el-row type="flex" justify="center" align="middle">
            <el-col style="color:#f5b009">
              <span v-for="index in 5" :key="index">
                <i class="el-icon-star-on"></i>
              </span>
              <span>{{ item.hScore }}</span>
            </el-col>
          </el-row>
          <!-- 详情 -->
          <el-row style="margin-top:20px">
            <div class="text">有优质医生2人</div>
            <div style="margin:10px 0" class="text">
              累计服务：{{ item.htimes }}次
            </div>
            <div>
              <span class="text"
                >医院地址：<span style="font-size:14px">{{
                  item.hospadress
                }}</span></span
              >
              <span style="margin-left:4px"
                ><el-link type="primary" :span="2"
                  ><i class="el-icon-location"></i>查看地图
                </el-link></span
              >
            </div>
          </el-row>
        </el-col>
        <el-col :span="6">
          <el-row type="flex" align="middle">
            <el-col>
              <!-- <router-link :to="`/hospYuyue/${item.hospId}`"> -->
              <el-button
                type="primary"
                @click="$router.push(`/hospYuyue/${item.hospId}`)"
                >预约挂号</el-button
              >
              <!-- </router-link> -->
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="hospInfoById.length"
      style="margin-left:300px;margin-top:30px"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getHospInfo, getHospById } from '@/api/hosp'
export default {
  name: 'findHosp',
  props: {
    hgId: {
      // 记录医院等级
      // required: true,
      type: Number
    },
    all: {
      // 表示是否获取全部医院
      type: [Number, String]
    }
  },
  data () {
    return {
      hospInfoById: '', // 存放根据医院等级 获取的医院数据
      checked: false,
      url:
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3757760468,3188680945&fm=26&gp=0.jpg'
    }
  },
  created () {
    this.getHospById()
  },
  mounted () {},
  methods: {
    // 根据医院等级 hgId获取医院数据
    async getHospById () {
      if (this.all) {
        //  获取所有医院的 数据
        const data = await getHospInfo()
        console.log(data)
        this.hospInfoById = data
      } else {
        //  根据传过来的医院等级id 获取对应的医院数据
        console.log(this.hgId)
        const data = await getHospById(this.hgId)
        console.log(data)
        this.hospInfoById = data
      }
    },
    // 根据医院id 去医生表中查找该医院的所有医生
    getDoctByHospId () {}
  }
}
</script>

<style scoped lang="less">
.text {
  color: rgb(153, 153, 153);
  font-size: 14px;
}
.el-button {
  margin: 60px;
}
</style>
