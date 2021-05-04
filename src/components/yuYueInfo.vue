<template>
  <div class="yuYueInfo">
    <!-- 返回 -->
    <el-row type="flex" align="middle">
      <el-page-header @back="goBack">
        <template slot="content">
          <span style="font-size: 16px;font-weight: 500;color:rgb(245, 176, 9)">
            '{{ doctInfo.docName }}'医生的预约主页
          </span>
        </template>
      </el-page-header>
    </el-row>
    <!-- <el-row style="background-color:rgb(245, 247, 250);line-height:40px;margin-top:10px"
      >已选择的医生</el-row
    > -->
    <!-- 医生信息 -->
    <el-row
      type="flex"
      justify="center"
      :gutter="20"
      style="height:220px;border-bottom:1px solid #e8e9ea;margin:20px 0;background-color:#f5f7fa;padding-top:20px"
    >
      <el-col :span="4">
        <el-image
          :src="url"
          fit="cover"
          style="height:170px;width:140px;margin-left:30px"
        ></el-image>
      </el-col>
      <el-col :span="19">
        <!-- 医生名字 -->
        <el-row type="flex" align="middle" style="margin-top:20px">
          <span class="name">{{ doctInfo.docName }}</span>
          <el-row class="text" style="margin-left:25px">
            <span style="color:#409EFF">
              <el-tag size="mini">{{ '医' }}</el-tag>
              认证医生</span
            >
            <span style="margin-left:20px">{{ doctInfo.dgName }} /</span>
            <span>{{ doctInfo.docGender }}</span>
          </el-row>
        </el-row>
        <!-- 详情 -->
        <el-row style="margin-top:10px">
          <div class="text">
            <span>{{ doctInfo.hospName }}</span>
            <span style="margin-left:30px">{{ doctInfo.deptName }}</span>
          </div>
        </el-row>
      </el-col>
      <!-- 就诊时间 -->
      <el-col>
        <el-row style="margin-top: 80px;margin-left:50px">
          <span>预约就诊时间:</span>
          <span>{{ ` 2021/${getYuYueInfo.date}  ${getYuYueInfo.time}` }}</span>
        </el-row>
      </el-col>
    </el-row>
    <!-- 请填写预约信息 -->
    <el-row style="margin:40px 0">
      <el-col>
        <!-- 提示信息 -->
        <el-row
          type="flex"
          justify="space-between"
          style="background-color:rgb(245, 247, 250);line-height:40px"
        >
          <!-- 左 -->
          <el-col>
            <span>请填写预约信息(真实有效)</span>
            <span style="color:#c0c4cc"
              >(输入的预约信息，我们将为您保密)</span
            ></el-col
          >
          <!-- 右 -->
          <el-col :span="2">
            <span style="color:red">*</span>
            <span>为必填项</span>
          </el-col>
        </el-row>
        <!-- 表单 -->
        <el-form
          ref="formData"
          :model="formData"
          :rules="rules"
          label-width="120px"
          style="margin-top:40px;border-left:4px solid rgb(245, 247, 250);border-right:4px solid rgb(245, 247, 250)"
        >
          <el-form-item label="就诊人" prop="username">
            <el-input style="width:40%" v-model="formData.username" />
          </el-form-item>
          <el-form-item label="身份证号" prop="idCard">
            <el-input style="width:40%" v-model="formData.idCard" />
          </el-form-item>
          <el-form-item label="联系手机" prop="mobile">
            <el-input style="width:40%" v-model="formData.mobile" />
          </el-form-item>
          <el-form-item prop="checked">
            <el-checkbox v-model="formData.checked">
              <span>同意</span>
              <a
                @click="info"
                href="javascript:;"
                style="color:#409EFF;text-decoration:none"
                >《用户协议》</a
              >
            </el-checkbox>
          </el-form-item>
        </el-form>
        <!-- 提交按钮 -->
        <el-row type="flex" justify="center">
          <el-col :span="14">
            <el-button type="primary" style="width:30%" @click="btnOK"
              >提交预约单</el-button
            ></el-col
          >
        </el-row>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <footerP />
    <!-- 用户协议弹层 -->
    <el-dialog
      :visible.sync="showDialog"
      title="用户协议"
      width="60%"
      :center="true"
    >
      <div class="header">
        <h4>
          欢迎使用预约挂号移动应用系统（以下简称“本应用”），您在使用本应用提供的服务前，请仔细阅读本协议。一旦您使用了“本应用”及其相关服务，即表示您已知晓并且同意接受以下所述的条款。如果您不同意接受以下全部条款，那么您应停止使用本应用。
        </h4>
      </div>
      <div class="content">
        <div class="part1">
          <h3 class="title">一、应用说明</h3>
          <p class="sub-cont">
            1、“健康南京”预约挂号移动应用系统是经南京市卫生局认可的，并由南京市卫生局旗下12320网站提供的可对在南京市卫生局12320网站登记的各大医院门诊进行预约挂号的移动应用客户端。
          </p>
          <p class="sub-cont">
            2、您必须下载“健康南京”移动应用客户端使用“健康南京”。您在预约时需提供患者的相关信息，“健康南京”将根据您提供的以上信息向南京卫生局12320网站发出预约指令，完成预约流程。
          </p>
          <p class="sub-cont">
            3、“健康南京”将向您提供两种预约号源：<br />（1）
            当日预约号源（上午可预约当天下午）；（2） 隔日预约号源。<br />以上两种号源预约完成后，你还需在预约的就诊时间之前前往预约的医院进行取号后方可进入预约当日的排号系统。
          </p>
          <p class="sub-cont">
            4、预约挂号的结果以“健康南京”向您预留的手机号码发送的短信通知为准。
          </p>
        </div>
        <div class="part2">
          <h3 class="title">二、使用须知</h3>
          <p class="sub-cont">
            1、“健康南京”依据自愿、公平、诚实信用等原则致力于为您提供方便、快捷的挂号预约服务。
          </p>
          <p class="sub-cont">
            2、您应当确保通过预约挂号系统所提交的患者信息，包括但不限于姓名、身份证号码（或军官证号码或护照号码）、联系电话等均准确、真实、有效。一旦您预约成功，在就诊时请务必携带患者的有效身份证（或军官证、护照），否则会导致患者无法进行就诊。
          </p>
          <p class="sub-cont">3、“健康南京”每日仅向你提供三个预约席位。</p>
          <p class="sub-cont">
            4、您确认并知晓由于医院就诊工作的特殊性，在您预约成功后，可能会出现因就诊医生抢救、急诊等特殊事件从而导致您的预约时间推迟或被取消的情况（更改后的出诊时间以医院当日公布出诊日期为准）。您确认因医院原因导致您预约时间变更或取消而产生的损失与后果，包括但不限于：交通、餐饮、住宿等费用支出以及患者治疗延误等问题，均由您自行承担。
          </p>
          <p class="sub-cont">
            5、在预约成功后，如您或患者需变更或取消预约，应在预约的就诊日期前2日的中午12：00之前进行变更或取消操作（以上时间如与就诊医院的规定相冲突，以就诊医院规定为准）。
          </p>
          <p class="sub-cont">
            6、在预约成功且未及时变更的情况下，如您或患者未及时就诊，将按违约认定，如您连续三次违约，“健康南京”有权取消您或患者半年的预约挂号资格。
          </p>
          <p class="sub-cont">
            7、“健康南京”提供的“预约挂号”服务是免费的公益服务，但该免费服务仅限于挂号的预约功能，并不免除医院收取的挂号费、检查费、治疗费等费用。
          </p>
        </div>
        <div class="part3">
          <h3 class="title">三、隐私策略</h3>
          <p class="sub-cont">
            1、您知晓，您在使用“健康南京”进行预约挂号时，本应用将自动收集你填写的患者姓名、身份证号、联系方式等信息。本应用尊重您以上信息的隐私权，并将尽力保障您的信息安全，但不承担因网络传输的特殊性及第三方的泄露行为而导致的风险。
          </p>
          <p class="sub-cont">
            2、在出现以下情况时，“健康南京”将善意地披露您的信息：(1)
            执行本协议的需要；(2)
            经您同意，向第三方披露；（3）在维护和保障“健康南京”其他用户和社会公众正当利益的要求下；(4)
            与第三方合作、为您提供更完善的服务时，但该第三方在合作结束后会被立即禁止访问有关信息；(5)
            相应的法律法规或国家有权机关要求“健康南京”配合提供有关资料。
          </p>
          <p class="sub-cont">
            3、您在使用“健康南京”健康相关功能时，“健康南京”不会向任何无关第三方提供、出售、出租、分享或交易您的个人健康信息。
          </p>
        </div>
        <div class="part4">
          <h3 class="title">四、责任限制</h3>
          <p class="sub-cont">
            1、您知晓网络预约服务具有特殊性，因网络通道故障或医院信息发布不畅等原因，导致“健康南京”未及时向您发送预约结果的确认信息时，“健康南京”不承担任何责任。
          </p>
          <p class="sub-cont">
            2、您承认并同意，“健康南京”仅为移动终端应用程序，“健康南京”不保证您使用本应用以及将本应用与您的移动终端设备结合时不发生错误。
          </p>
          <p class="sub-cont">
            3、“健康南京”不保证本应用是不受干扰、没有故障的，也不对您使用的效果做任何保证。您同意由您独立承担因网站意外中断、操作或传输的迟延、手机病毒、移动网络供应商网络故障、未经授权的预约等引起的损失。同时“健康南京”也不对您使用本应用预约完成后，您与预约医院或其他第三方之间产生的一切纠纷（包括但不限于医院取号系统故障，医生诊断失误等）负责。
          </p>
        </div>
        <div class="part1">
          <h3 class="title">其他</h3>
          <p class="sub-cont">
            1、“健康南京”的技术及运营支持由南京市卫生信息中心向您提供。
          </p>
          <p class="sub-cont">
            2、“健康南京”相关线下服务由南京市卫生信息中心向您提供。
          </p>
          <p class="sub-cont">
            3、“健康南京”保留对以上条款的解释权，并保留在适当的时候对相应的条款进行修改的权利。
          </p>
          <p class="sub-cont">
            4、本协议条款的解释及适用，以及与本协议条款有关的争议，均应依照中华人民共和国法律予以处理，并以南京市浦口区人民法院为管辖法院。
          </p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { setappointInfo } from '@/api/appointment'
import { getInfoByDocId } from '@/api/doctor'
import footerP from './footer'
export default {
  name: 'yuYueInfo',
  components: {
    footerP
  },
  data () {
    return {
      doctInfo: [],
      // time: '', // 记录预约时间上午？下午？晚上？
      // 拿到路由参数 医生的id
      getYuYueInfo: this.$route.params,
      showDialog: false,
      formData: {
        username: '',
        idCard: '',
        mobile: '',
        checked: ''
      },
      rules: {
        username: [
          { required: true, message: '就诊人不能为空', trigger: 'blur' }
        ],
        idCard: [
          { required: true, message: '身份证号不能为空', trigger: 'blur' },
          {
            pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
            message: '身份证号码格式不正确',
            trigger: 'blur'
          }
        ],
        mobile: [
          { required: true, message: '手机号码不能为空', trigger: 'blur' },
          {
            pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: '手机号码格式不正确',
            trigger: 'blur'
          }
        ],
        checked: [
          {
            // type: 'array',
            required: true,
            message: '请勾选选择用户协议',
            trigger: 'blur'
          }
        ]
      },
      url:
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
    }
  },
  created () {
    this.getInfoByDocId()
  },
  mounted () {},
  methods: {
    goBack () {
      this.$router.back()
    },
    // 提交 预约表单
    async btnOK () {
     try{
        // 1.表单校验
      await this.$refs.formData.validate()
      // const time ='2021/'+ this.getYuYueInfo.date +' '+this.getYuYueInfo.time
      // const time={
      //   year:'2021/',
      //   date:this.getYuYueInfo.date,
      //   time:this.getYuYueInfo.time
      // }
      //   2.发请求 需要后端返回一个预约号码
      const res = await setappointInfo({
        // apID: '708934', // 预约号码
        userId: this.$store.state.userLoginInfo.userId,
        docId: this.getYuYueInfo.doctId,
        apName: this.formData.username,
        idCard: this.formData.idCard,
        apMobile: this.formData.mobile,
        aptime: this.handleTime(),
        visitTime: '2021/5/3 下午',
        state: 1,
        // id: '708935'
      })
      console.log(res)
      //   3.提示预约成功信息S
      //   this.$message.success('预约单提交成功,您的预约号为：12312099887')
      this.$alert(
        '您已预约成功,请前往"个人中心"查看预约详情',
        '预约单提交成功',
        {
          confirmButtonText: '确定'
        }
      )
      //   清空表单
      this.formData = {
        username: '',
        idCard: '',
        mobile: '',
        checked: false
      }
     }catch(err){
       console.log(err)
     }
    },
    // 用户协议
    info () {
      this.showDialog = true
    },
    // 拿到要预约的信息 医生、预约日期
    async getInfoByDocId () {
      try {
        // console.log(this.getDoctId)
        console.log(this.getYuYueInfo)
        const res = await getInfoByDocId(this.getYuYueInfo.doctId)
        this.doctInfo = res[0]
        console.log(this.doctInfo)
        // if()
      } catch (err) {
        console.log(err)
      }
    },
    // 处理时间
    handleTime () {
      var time = new Date()
      var year = time.getFullYear()
      var month = time.getMonth() + 1
      month = month > 9 ? month : '0' + month
      var day = time.getDate()
      day = day > 9 ? day : '0' + day
      var h = time.getHours()
      h = h > 9 ? h : '0' + h
      var m = time.getMinutes()
      m = m > 9 ? m : '0' + m
      var s = time.getSeconds()
      s = s > 9 ? s : '0' + s
      return `${year}-${month}-${day} ${h}:${m}:${s}`
    }
  }
}
</script>

<style scoped lang="less">
.name {
  font-size: 20px;
}
.text {
  font-size: 15px;
}
</style>
