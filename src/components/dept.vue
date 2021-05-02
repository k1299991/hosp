<template>
  <div>
    <div>
      <span class="title"> 科室名称:</span>
      <!-- <span class="tag">全部</span> -->
      <el-tag
        v-for="item in deptList"
        :key="item.deptId"
        effect="plain"
        class="tag"
        v-show="item.deptGrade === 1"
        @click="updateDeptId(item.deptId)"
      >
        {{ item.deptName }}
      </el-tag>
    </div>
    <div style="margin-top:10px;">
      <span class="title">医生职称:</span>
      <el-tag
        v-for="item in doctorGarde"
        :key="item.dgId"
        effect="plain"
        class="tag"
        @click="updateDgId(item.dgId)"
      >
        {{ item.dgName }}
      </el-tag>
    </div>
  </div>
</template>

<script>
import { getDgInfo, getShouyedept } from '@/api/shouye'
export default {
  data () {
    return {
      deptList: [], // 科室名字
      doctorGarde: [] // 医生职称
    }
  },
  created () {
    this.getShouyedept()
    this.getDgInfo()
  },
  mounted () {},
  methods: {
    updateDeptId (deptId) {
      this.$emit('update:deptId', deptId)
      console.log('updateDeptId')
    },
    updateDgId (dgId) {
      this.$emit('update:dgId', dgId)
      console.log('updateDgId')
    },
    async getShouyedept () {
      this.deptList = await getShouyedept()
      console.log(this.deptList)
    },
    async getDgInfo () {
      this.doctorGarde = await getDgInfo()
      console.log(this.doctorGarde)
    }
  }
}
</script>

<style scoped lang="less">
.tag {
  border: 0;
  font-size: 16px;
  cursor: pointer;
  margin-right: 8px;
  color: rgb(153, 153, 153);
  &:hover {
    color: rgb(64, 158, 255);
  }
}
</style>
