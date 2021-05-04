<template>
    <div class="hospital-container">
        <!-- 轮播图 -->
        <el-row>
            <el-carousel height="400px" :interval="5000" arrow="always">
                <el-carousel-item v-for="(item, index) in url" :key="index">
                    <el-image
                            style="width: 100%; height: 400px"
                            :src="item"
                            fit="cover"
                    ></el-image>
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <!-- 医院推荐 -->
        <el-row style="margin-top:25px" type="flex" :gutter="20">
            <!-- 左边 -->
            <el-col>
                <!-- 导航 -->
                <el-row type="flex" justify="space-between" align="middle" class="bg">
                    <el-col>
                        <span style="padding-left:8px">医院推荐</span>
                    </el-col>
                    <el-col :span="3">
                        <!-- <router-link :to="`/hosp`"> -->
                        <span @click="$router.push(`/hosp`)" class="pointer"
                        >查看全部></span
                        >
                        <!-- </router-link> -->
                    </el-col>
                </el-row>
                <!-- 推荐栏 医院信息 -->
                <el-row
                        type="flex"
                        justify="end"
                        align="middle"
                        :gutter="20"
                        style="margin-top:25px;margin-bottom:10px"
                >
                    <el-col v-for="(item, index) in itemHosp" :key="index">
                        <hosp-recom :itemHosp="item"/>
                    </el-col>
                </el-row>
                <!-- 医院推荐信息 -->
                <hospName :hospList="hospList"/>
                <!-- 热门科室 -->
                <!-- 导航 -->
                <el-row type="flex" justify="space-between" align="middle" class="bg">
                    <el-col>
                        <span style="padding-left:8px">热门推荐</span>
                    </el-col>
                </el-row>
                <!-- 放置 科室组件 -->
                <department :deptInfo="deptList"/>
                <!-- 名师名医 -->
                <!-- 导航 -->
                <el-row type="flex" justify="space-between" align="middle" class="bg">
                    <el-col>
                        <span style="padding-left:8px">名师名医</span>
                    </el-col>
                    <el-col :span="3">
                        <!-- <router-link :to="`/doctor`"> -->
                        <!-- <span class="tag">查看全部></span> -->
                        <span @click="$router.push(`/doctor`)" class="pointer"
                        >查看全部></span
                        >
                        <!-- </router-link> -->
                    </el-col>
                </el-row>
                <!-- 名医-轮播图 -->
                <el-row>
                    <el-carousel
                            :interval="5000"
                            arrow="always"
                            height="370px"
                            :autoplay="false"
                            indicator-position="none"
                    >
                        <el-carousel-item>
                            <el-row type="flex" :gutter="20">
                                <el-col v-for="item in itemDoctor1" :key="item.docId">
                                    <!-- 放置医生插件 -->
                                    <doctor :itemDoct="item"/>
                                </el-col>
                            </el-row>
                        </el-carousel-item>
                        <el-carousel-item>
                            <el-row type="flex" :gutter="20">
                                <el-col v-for="item in itemDoctor2" :key="item.docId">
                                    <!-- 放置医生插件 -->
                                    <doctor :itemDoct="item"/>
                                </el-col>
                            </el-row>
                        </el-carousel-item>
                        <el-carousel-item>
                            <el-row type="flex" :gutter="20">
                                <el-col v-for="item in itemDoctor3" :key="item.docId">
                                    <!-- 放置医生插件 -->
                                    <doctor :itemDoct="item"/>
                                </el-col>
                            </el-row>
                        </el-carousel-item>
                    </el-carousel>
                </el-row>
                <el-divider></el-divider>
                <!-- 底部 -->
                <footerpage/>
            </el-col>
            <!-- 右边 -->
            <el-col :span="7">
                <!-- 上 -->
                <el-row>
                    <!-- 已开通医院数量 -->
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <div>常德市已开通</div>
                            <div>
                                <span class="numtext">{{ hospList.length }}</span>
                                <span>家医院</span>
                            </div>
                        </div>
                        <div style="margin:12px 0">
                            <div>可预约医生数</div>
                            <div class="numtext">{{ docList.length }}</div>
                        </div>
                        <div>
                            <div>累计服务人数</div>
                            <div class="numtext">{{ this.total }}</div>
                        </div>
                    </el-card>
                </el-row>
                <!-- 下 -->
                <el-row style="margin-top:20px">
                    <!-- 合作机构 -->
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>合作机构</span>
                        </div>
                        <div class="text item" style="height:280px">
                            <el-tag
                                    v-for="item in hospList"
                                    :key="item.hospId"
                                    effect="plain"
                                    class="tag1"
                            >
                                {{ item.hospName }}
                            </el-tag>
                        </div>
                    </el-card>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {getShouyeDoc, getShouyedept, getShouyeHosp} from '@/api/shouye'
    import hospRecom from './component/hosp-recom'
    import hospName from './component/hosp-name'
    import department from './component/departments'
    import doctor from './component/doctor'
    import footerpage from '@/components/footer'

    export default {
        components: {footerpage, doctor, department, hospName, hospRecom},
        name: 'Home',
        data() {
            return {
                hospList: '', // 存放获取到的所有医院数据
                deptList: [], // 存放所有科室
                docList: '', // 存放所有医生
                times: '', // 累计服务次数
                itemHosp: '',
                itemDoctor1: '',
                itemDoctor2: '',
                itemDoctor3: '',
                url1: [
                    require('@/assets/bgI5.jpg'),
                    require('@/assets/bgI14.jpg'),
                    require('@/assets/bgI3.jpg'),
                    require('@/assets/bgI15.jpg'),
                    require('@/assets/bgI13.jpg'),
                    require('@/assets/bgI8.jpg'),
                    require('@/assets/bgI11.jpg')
                ],
                url: [
                    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
                    'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
                    'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
                    'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
                    'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
                    'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
                ]
            }
        },
        created() {
            this.getShouyeHosp()
            this.getShouyedept()
            this.getShouyeDoc()
        },
        mounted() {
        },
        computed: {
            total: function () {
                var sum = 0
                for (var i = 0; i < this.times.length; i++) {
                    sum += this.times[i]
                }
                return sum
            }
        },
        methods: {
            // 获取医院信息
            async getShouyeHosp() {
                try{
                const res = await getShouyeHosp()
                // .then(res => {
                    // if (res.state != 200) {
                    //     this.$message.error(res.message);
                    //     return;
                    // }
                    this.hospList = res;
                    // 拿到获取到的前三个医院信息
                    // this.hospList2 = this.hospList.slice(0, 2)
                    // console.log(this.hospList)
                    // console.log(this.hospList2)
                    // 指定医院推荐的3家医院
                    this.itemHosp = [this.hospList[2], this.hospList[3], this.hospList[7]]
                    this.times = this.hospList.map(item => item.htimes)
                    console.log(this.times)

                // });
                }catch(err){
                    console.log(err)
                }

            },
            // 获取科室信息
            async getShouyedept() {
                try{
                const res = await getShouyedept()
                // .then(res => {
                    // if( res.state != 200){
                    //     this.$message.error(res.message);
                    //     return ;
                    // }
                    this.deptList=res;
                // });
                }catch(err){
                    console.log(err)
                }

            },
            // 获取医生信息
            async getShouyeDoc() {
              try{
              const res = await getShouyeDoc()
            //   .then(res => {
            //         if (res.state != 200) {
            //             this.$message.error(res.message);
            //             return;
            //         }
                    this.docList=res;
                    // 指定首页四名医生的数据
                    this.itemDoctor1 = [
                        this.docList[4],
                        this.docList[9],
                        this.docList[16],
                        this.docList[26]
                    ]
                    this.itemDoctor2 = [
                        this.docList[1],
                        this.docList[5],
                        this.docList[17],
                        this.docList[30]
                    ]
                    this.itemDoctor3 = [
                        this.docList[6],
                        this.docList[8],
                        this.docList[13],
                        this.docList[21]
                    ]

                // });
                }catch(err){
                    console.log(err)
                }

            }
        }
    }
</script>

<style scoped lang="less">
    .bg {
        margin-top: 10px;
        background-color: rgb(241, 243, 244);
        height: 40px;
        color: #737477;
        border-top: 3px solid rgb(110, 186, 254);
    }

    .pointer {
        cursor: pointer;

        &:hover {
            color: rgb(110, 186, 254);
        }
    }

    .tag {
        color: #737477;
        text-decoration: none;
        border: 0;
        font-size: 16px;
        cursor: pointer;
        margin-right: 20px;
        // color: #000;
        &:hover {
            color: rgb(110, 186, 254);
        }
    }

    .tag1 {
        color: #737477;
        text-decoration: none;
        border: 0;
        font-size: 16px;
        // cursor: pointer;
        margin-right: 20px;
        // // color: #000;
        // &:hover {
        //   color: rgb(64, 158, 255);
        // }
    }

    .numtext {
        color: #e6a23c;
        font-size: 28px;
    }

    .el-carousel__item {
        background-color: #fff;
    }
</style>
