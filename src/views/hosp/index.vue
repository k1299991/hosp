<template>
    <div class="hospital-container">
        <el-row style="margin-top:20px" type="flex" :gutter="20">
            <!-- 左边 -->
            <el-col :span="17">
                <!-- 返回 -->
                <span>
          <el-page-header
                  @back="goBack"
                  style="color:rgb(245, 176, 9);margin:0 8px"
          >
            <template slot="content">
              <span
                      style="font-size: 14px;font-weight: 500;color:rgb(245, 176, 9)"
              >
                查看医院
              </span>
            </template>
          </el-page-header>
        </span>
                <el-row>
                    <!-- 内容 -->
                    <el-tabs v-model="activeName">
                        <el-tab-pane label="医院级别：" disabled></el-tab-pane>
                        <el-tab-pane name="first" label="全部">
                            <findHosp :all="1"
                            />
                        </el-tab-pane>
                        <el-tab-pane
                                v-for="item in hospTab"
                                :key="item.hgId"
                                :label="item.hgName"
                        >
                            <!-- 放置医院组件 -->
                            <findHosp :hgId="item.hgId"
                            />
                        </el-tab-pane>
                        <!-- <el-tab-pane label="`{{hospTab[1].hgName}}医院`"
                          ><findHosp
                        /></el-tab-pane>
                        <el-tab-pane label="`{{hospTab[2].hgName}}医院`"
                          ><findHosp
                        /></el-tab-pane>
                        <el-tab-pane label="`{{hospTab[3].hgName}}医院`"
                          ><span>`{{hospTab[3].hgName}}医院`</span>
                          <findHosp
                        /></el-tab-pane> -->
                    </el-tabs>
                </el-row>

                <!-- 分页
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="70"
                  style="margin-left:300px;margin-top:30px"
                >
                </el-pagination> -->

                <!-- 底部 -->
                <footerpage/>
            </el-col>
            <!-- 右边 -->
            <el-col :span="7">
                <side-nav/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getHospInfo, gethospGarde} from '@/api/hosp'
    import findHosp from './component/findHosp'
    import footerpage from '@/components/footer'
    import SideNav from '@/components/sideNav'

    export default {
        name: 'Hosp',
        components: {
            footerpage,
            findHosp,
            SideNav
        },
        data() {
            return {
                hospTab: '',
                hospMain: '',
                url: [
                    'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3556703772,4194663283&fm=26&gp=0.jpg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ],
                activeName: 'first'
            }
        },
        created() {
            this.gethospGarde()
            this.getHospInfo()
        },
        mounted() {
        },
        methods: {
            goBack() {
                this.$router.back()
            },
            // 获取医院等级
            async gethospGarde() {
              console.log(123456)
                await gethospGarde().then(res => {
                    if (res.state != 200) {
                        this.$message.error(res.message);
                        return;
                    }
                    console.log(res.data)
                    this.hospTab = res.data;
                }).catch(err => {
                  console.log('获取医院等级出错了')
                  console.log(err)
                })

            },
            //  获取医院数据
            async getHospInfo() {
                const data = await getHospInfo()
                this.hospMain = data
                console.log(data)
            }
        }
    }
</script>

<style scoped lang="less"></style>
