<template>
  <div class="sideNav">
    <!-- 上 -->
    <el-row>
      <!-- 已开通医院数量 -->
      <el-card class="box-card" shadow="nerve">
        <div slot="header" class="clearfix">
          <div>挂号须知</div>
        </div>
        <div>
          <p style="margin:3px 0">
            1. 每日8:00左右更新后七天的号源
          </p>
          <p>
            2. 可预约当天和未来1周的号源
          </p>
          <p>
            3. 请到“个人中心”查看，预约信息
          </p>
          <p>
            4. 就诊前一天16:00前，到“个人中心”--“我的预约”，可取消预约
          </p>
          <p>
            5. 如需帮助，可拨打客服4000-xxx-xxx(10:00-18:00)
          </p>
        </div>
      </el-card>
    </el-row>
    <!-- 下 -->
    <el-row style="margin-top:20px">
      <!-- 合作机构 -->
      <el-card class="box-card" shadow="nerve">
        <div slot="header" class="clearfix">
          <span>帮助中心</span>
        </div>
        <div @click="$router.push(`/process`)">
          <p style="margin-top:3px" class="help">
            1. 如何选择医院？
          </p>
          <p class="help">
            2. 如何选择医生？
          </p>
          <p class="help">
            3. 如何预约医生？
          </p>
          <p class="help">
            4. 如何进行评价？
          </p>
        </div>
      </el-card>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'sideNav',
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.box-card {
  color: rgb(153, 152, 153);
  font-size: 16px;
  padding: 0px;
}
.help {
  cursor: pointer;
  &:hover {
    color: rgb(91, 140, 255);
  }
}
</style>
