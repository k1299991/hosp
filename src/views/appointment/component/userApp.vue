<template>
  <div>
    <el-table :data="myAppoinInfo" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="就诊日期:">
              <span>{{ props.row.visitTime }}</span>
            </el-form-item>
            <el-form-item label="医院名称:">
              <span>{{ props.row.hospName }}</span>
            </el-form-item>
            <el-form-item label="科室名称:">
              <span>{{ props.row.deptName }}</span>
            </el-form-item>
            <el-form-item label="医生:">
              <span>{{ props.row.docName }}</span>
            </el-form-item>
            <el-form-item label="预约号:">
              <span>{{ props.row.apID }}</span>
            </el-form-item>
            <el-form-item label="就诊人:">
              <span>{{ props.row.apName }}</span>
            </el-form-item>
            <el-form-item label="身份证号码:">
              <span>{{ props.row.idCard }}</span>
            </el-form-item>
            <el-form-item label="预约时间:">
              <span>{{ props.row.aptime }}</span>
            </el-form-item>
            <el-form-item label="预约状态:">
              <span>{{ props.row.state === '1' ? '已预约' : '已取消' }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="就诊日期" prop="visitTime"> </el-table-column>
      <el-table-column label="医院名称" prop="hospName"> </el-table-column>
      <el-table-column label="科室名称" prop="deptName"> </el-table-column>
      <el-table-column label="医生" prop="docName"> </el-table-column>
      <el-table-column label="就诊人" prop="apName"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handle(scope.row)"
            >取消预约</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { deleteAppointment, getappoinInfo } from '@/api/appointment'

export default {
  props: {
    myAppoinInfo: {
      required: true,
      type: [Array]
    }
  },
  data () {
    return {
    }
  },
  created () {},
  mounted () {},
  methods: {
    async handle (row) {
      console.log(row)
     try{
        // 点击取消
      await deleteAppointment(row.apID)
      this.myAppoinInfo =await getappoinInfo(
        this.$store.state.userLoginInfo.userId
      )
      console.log('您已成功取消')
      // 否则不允许取消
     }catch(err){
      console.log(err)
    }
    }
  }
}
</script>

<style scoped lang="less">
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 60%;
}
</style>
