<template>
  <div class="department" style="height:200px;padding:10px 5px">
    <el-tabs v-model="activeName" @tab-click="handleClick" style="height:200px">
      <el-tab-pane label="一级科室" name="first">
        <el-tag
          v-for="item in deptInfo"
          :key="item.deptId"
          effect="plain"
          class="tag"
          v-show="item.deptGrade === 1"
          @click="$router.push(`/doctor/${item.deptId}`)"
        >
          {{ item.deptName }}
        </el-tag>
      </el-tab-pane>
      <el-tab-pane label="二级科室" name="second">
        <el-tag
          v-for="item in deptInfo"
          :key="item.deptId"
          effect="plain"
          class="tag"
          v-show="item.deptGrade === 2"
          @click="$router.push(`/doctor/${item.deptId}`)"
        >
          {{ item.deptName }}
        </el-tag>
      </el-tab-pane>
    </el-tabs>
    <!-- 方案二 -->
    <!-- <el-radio-group v-model="radio1">
      <el-radio-button label="一级科室" disabled></el-radio-button>
      <el-radio-button v-for="item in list1" :key="item.id">
        {{ item.depName }}</el-radio-button
      >
    </el-radio-group>
    <div style="margin-top: 20px">
      <el-radio-group v-model="radio2" size="medium">
        <el-radio-button label="二级科室" disabled></el-radio-button>
        <el-radio-button v-for="item in list2" :key="item.id">{{
          item.depName
        }}</el-radio-button>
      </el-radio-group>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    deptInfo: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      radio1: '',
      radio2: '',
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
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
