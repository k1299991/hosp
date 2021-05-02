<template>
  <div class="Process-container">
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏菜单 -->
        <el-menu default-active="1" class="el-menu-vertical-demo">
          <el-menu-item
            index="1"
            @click="toPage(1)"
            :class="!noticeP ? 'col' : ''"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">预约须知</span>
          </el-menu-item>
          <el-menu-item
            index="2"
            @click="toPage(2)"
            :class="!guideP ? 'col' : ''"
          >
            <i class="el-icon-menu"></i>
            <span slot="title">预约挂号指南</span>
          </el-menu-item>
          <el-menu-item
            index="3"
            @click="toPage(3)"
            :class="!comDiseasesP ? 'col' : ''"
          >
            <i class="el-icon-document"></i>
            <span slot="title">常见疾病对应科室</span>
          </el-menu-item>
          <el-menu-item
            index="4"
            @click="toPage(4)"
            :class="!comProbleP ? 'col' : ''"
          >
            <i class="el-icon-setting"></i>
            <span slot="title">常见问题</span>
          </el-menu-item>
        </el-menu>
        <!-- 侧边栏菜单 -->
      </el-aside>
      <el-main>
        <div>
          <!-- 预约须知组件 -->
          <notice :class="{ displayPage: noticeP }" />
          <!-- 预约挂号指南 -->
          <guide :class="{ displayPage: guideP }" />
          <!-- 常见疾病对应科室 -->
          <comDiseases :class="{ displayPage: comDiseasesP }" />
          <!-- 常见问题 -->
          <comProble :class="{ displayPage: comProbleP }" />
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import notice from './component/notice'
import guide from './component/guide'
import comDiseases from './component/comDiseases'
import comProble from './component/comProblem'
export default {
  name: 'ProcessPage',
  components: {
    notice,
    guide,
    comDiseases,
    comProble
  },
  data () {
    return {
      propIndex: this.$route.params.id,
      index: 1
    }
  },
  computed: {
    noticeP () {
      return this.index !== 1
    },
    guideP () {
      return this.index !== 2
    },
    comDiseasesP () {
      return this.index !== 3
    },
    comProbleP () {
      return this.index !== 4
    }
  },
  created () {},
  mounted () {},
  methods: {
    toPage (index) {
      this.index = index
    }
  }
}
</script>

<style scoped lang="less">
.el-menu-item {
  font-size: 16px;
  color: #303133;
  padding: 0 20px;
  cursor: pointer;
  transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  box-sizing: border-box;
}
.displayPage {
  display: none;
}
.col {
  color: rgb(245, 176, 9);
}
</style>
