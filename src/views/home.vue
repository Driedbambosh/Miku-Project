<template>
  <el-container style="height: 100%">
    <el-header class="elHeader">Blog
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :router= 'true'
        background-color="#39c5bb"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="404">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="Ly">留言板</el-menu-item>
      </el-menu>
      <div class="userHead" style="display: flex; align-items: center">
          <el-avatar size="medium" :src="circleUrl"></el-avatar>
          <span class="username" style="font-size: 11px; margin: 0px 40px 0 10px">{{userName}}</span>
      </div>
    </el-header>
    <el-main class="elMain">
      <router-view></router-view>
    </el-main>
    <el-footer class="elFooter">Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      circleUrl: localStorage.getItem('headPortrait'),
      userName: localStorage.getItem('userName'),
      activeIndex: 'index'
    }
  },
  created () {
  },
  methods: {

  }
}
</script>

<style scoped>
.elHeader {
  background-color: #39c5bb !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
}
.elMain {
  height: 100%;
}
</style>
