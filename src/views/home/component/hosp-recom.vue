<template>
  <div class="hosp-recom" style="border-bottom: 1px solid #e6e5e5">
    <!-- 图片 -->
    <el-row>
      <el-image
        :src="url"
        fit="cover"
        style="height:150px;width:100%"
      ></el-image>
    </el-row>
    <!-- 医院名字 -->
    <el-row>
      <!-- <span>常德市第一人民医院</span> -->
      <el-tag
        effect="plain"
        class="tag"
        @click="$router.push(`/hospYuyue/${itemHosp.hospId}`)"
      >
        {{ itemHosp.hospName }}
      </el-tag>
      <!-- <el-tag
        v-for="item in list"
        :key="item.hospId"
        effect="plain"
        class="tag"
      >
        {{ item.hospName }}
      </el-tag> -->
    </el-row>
    <!-- 评分 -->
    <el-row type="flex" style="height:25px;margin-bottom:8px">
      <el-col style="color:#f5b009">
        <span v-for="item in 4" :key="item">
          <i class="el-icon-star-on"></i>
        </span>
        <span>{{ itemHosp.hScore }}</span>
      </el-col>
      <el-col :span="9">
        <span
          style="color:#fff;background-color:#f5b009;height:10px;width:20px;margin-right:10px"
          >{{ itemHosp.hgName }}</span
        >
        <span
          style="color:#fff;background-color:skyblue;height:10px;width:20px"
          >{{ itemHosp.hInsurance ? '医保' : '' }}</span
        >
      </el-col>
    </el-row>
    <!-- 预约人数 -->
    <el-row type="flex" justify="end" style="height:25px;margin-bottom:26px">
      <el-col :span="8">
        <span style="color:#f5b009;margin-right:2px">{{
          itemHosp.htimes
        }}</span>
        <span>人成功预约</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'hosp-recom',
  props: {
    itemHosp: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      url:
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3255438049,4286814817&fm=26&gp=0.jpg'
    }
  },
  created () {
    this.see()
  },
  mounted () {},
  methods: {
    see () {
      console.log(this.itemHosp)
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
