<template>
  <div class="hosp-name">
    <!-- 获取所有医院总数 除以3 -->
    <!-- <el-col v-for="item in 3" :key="item"> -->
    <el-row
      type="flex"
      algin="middle"
      justify="center"
      style="height:100px;margin-left:6px"
    >
      <el-col>
        <el-tag
          style="margin-right:50px"
          effect="plain"
          class="tag"
          v-for="item in hospList"
          :key="item.hospId"
          @click="$router.push(`/hospYuyue/${item.hospId}`)"
        >
          {{ item.hospName }}
          <span style="color:#f5b009;margin-left:15px">{{ item.hgName }}</span>
          <span style="color:skyblue;margin-left:5px">{{ '[医保]' }}</span>
        </el-tag>
      </el-col>
    </el-row>
    <!-- </el-col> -->
  </div>
</template>

<script>
export default {
  name: 'hosp-name',
  props: {
    hospList: {
      type: [Array, String],
      required: true
    }
  },
  data () {
    return {}
  },
  created () {
    this.see()
  },
  mounted () {},
  methods: {
    see () {
      console.log(this.hospList)
    }
  }
}
</script>

<style scoped lang="less">
.tag {
  border: 0;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
  color: #000;
  &:hover {
    color: rgb(64, 158, 255);
  }
}
</style>
