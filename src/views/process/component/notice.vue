<template>
  <div class="notice">
    <el-row type="flex" justify="center">
      <h3>预约挂号须知</h3>
    </el-row>
    <el-row>
      <p class="mb5">
        <b class="icon_b"><span class="fb c_black ml5">第一条：</span></b
        >六种预约渠道
      </p>
      <ul class="rule">
        <li>（1）网站</li>
        <li>（2）微信公众号</li>
        <li>（3）微信小程序</li>
        <li>（4）支付宝生活号</li>
        <li>（5）自助终端</li>
        <li>（6）12320</li>
      </ul>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二条：</span></b
        >预约挂号操作流程
      </p>
      <p class="mb20">
        <el-steps :active="6" align-center>
          <el-step title="登录" description="输入账号和密码进行登录"></el-step>
          <el-step title="选择医院" description="选择要预约的医院"></el-step>
          <el-step title="选择科室" description="选择要预约的科室"></el-step>
          <el-step title="选择医生" description="选择要预约的医生"></el-step>
          <el-step title="选择时间" description="选择预约时间"></el-step>
          <el-step
            title="预约挂号"
            description="输入预约者信息进行预约"
          ></el-step>
        </el-steps>
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第三条：</span></b
        >实名制预约，预约时需要提供真实姓名、身份证号、手机号。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第四条：</span></b
        >港澳台用户注册，需要提供《港澳居民来往内地通行证》、《台湾居民来往大陆通行证》。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第五条：</span></b
        >预约分：预约挂号、当天挂号。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第六条：</span></b
        >当天挂号不予以退号及退费
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第七条：</span></b
        >支持当天挂号的预约渠道包括微信公众号、微信小程序、支付宝生活号、自助终端。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第八条：</span></b
        >支持预约7天内号源，个别医院可预约7天以上号源。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第九条：</span></b
        >通过微信/支付宝预约的订单，需要留意微信/支付宝消息，系统不发手机短信。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十条：</span></b
        >一个身份证只能注册一个账号
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十一条：</span></b
        >一个手机号只能注册1个账号
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十二条：</span></b
        >每日预约不能超2次
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十三条：</span></b
        >每月预约不能超6次
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十四条：</span></b
        >同一天同一个科室每人只能预约一次
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十五条：</span></b
        >同一天同一个医生每人只能预约一次
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十六条：</span></b
        >同一天同一时间段每人只能预约一次
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十七条：</span></b
        >预约类型：为本人预约、为子女预约、为老人预约。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十八条：</span></b
        >为老人预约，仅限55周岁（包含55周岁）以上老人。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第十九条：</span></b
        >为老人预约，一个账号只能绑定两名老人信息。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十条：</span></b
        >为子女预约，仅限16周岁（包含16周岁）以下儿童。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十一条：</span></b
        >为子女预约，一个账号只能绑定三名子女信息。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十二条：</span></b
        >为子女/老人预约，已添加的子女/老人信息不能删除。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十三条：</span></b
        >为子女/老人预约，已添加的子女/老人信息，如姓名、身份证、手机号都可以修改，每半年可修改一次。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十四条：</span></b
        >为子女预约，子女身份证号码/出生证编号为必填。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十五条：</span></b
        >未满16岁（含16岁）的儿童账号不支持绑定其他小孩信息进行预约挂号。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十六条：</span></b
        >为贯彻落实《人民政府办公厅关于印发广州地区公立医院综合改革实施方案的通知》，对六周岁（含6岁）以下儿童的临床诊断中有创活检和探查、临床手术治疗等体现儿科医务人员技术劳务特点和价值的医疗服务项目，实行加收不超过30％的基本医疗服务价格政策。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十七条：</span></b
        >六周岁（含6岁）以下儿童医疗服务价格加收政策实行期限为5年。
      </p>
      <p class="mb20">
        <b class="icon_b"><span class="fb c_black ml5">第二十八条：</span></b
        >支付方式：微信支付、支付宝支付、网银
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第二十九条：</span></b
        >健康通订单支持跨支付渠道支付功能，如在支付宝生活号锁定了号源，可通过微信公众号支付订单。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十条：</span></b
        >取号时间：用户需要在就诊当天，在预约时间前提前30分钟取号，个别医院有个性化要求。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十一条：</span></b
        >取号凭证：取号时需要提供预约成功消息、身份证等信息。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十二条：</span></b
        >正常停诊，停诊信息系统将以手机短信的形式发给用户。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十三条：</span></b
        >临时停诊（当天停诊），预约系统不发手机短信，该突发情况需要医院门诊信息科或驻院客服自行通知用户。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十四条：</span></b
        >取消订单必须在预约就诊前，提前一天（24点前）取消订单。个别医院对订单的取消规则有个性化要求。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十五条：</span></b
        >退费分：自动退费、人工退费、停诊退费。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十六条：</span></b
        >自动退费：预付费的订单，用户成功申请退费后，费用将在7个工作日内退还至用户支付账号内。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十七条：</span></b
        >人工退费：用户成功申请退费后，如超过7个工作日退款仍未到账，用户可拔12320申诉人工退费，人工退费处理时间为7个工作日。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十八条：</span></b
        >停诊退费：当医院HIS系统向预约系统发送停诊通知后，预约系统将在7个工作日内将费用退还至用户支付账号内。如用户未收到相关退费可致电12320申诉人工退费。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第三十九条：</span></b
        >用户预约成功，既未按时取号就诊，也未提前取消订单，视为爽约。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十条：</span></b
        >爽约次数的计算从账号注册之日起累积统计。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十一条：</span></b
        >累积爽约超过3次（含3次）将列入黑名单。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十二条：</span></b
        >爽约减免机制：“取三减一”，即连续取号三次，则减免一次总爽约次数。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十三条：</span></b
        >爽约次数可以减免，但订单记录（订单标识）系统不会删除。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十四条：</span></b
        >黑名单的用户将不再享受预约挂号服务。
      </p>
      <p class="mt20">
        <b class="icon_b"><span class="fb c_black ml5">第四十五条：</span></b>
        列入黑名单三个月后，自动解除黑名单限制。
      </p>
      <!--<p class="mb20"><img src="../images/help/guahao_lc2.png" alt="" width="600" height="400"></p>-->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.mt20 {
  margin-top: 20px;
}
.fb {
  font-size: 18px;
}
.ml5 {
  margin-left: 5px;
}
</style>
