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
        @select="handleSelect"
        active-text-color="#1a5a56"
        style="border: none"
        >
        <el-menu-item index="index">首页</el-menu-item>
        <el-submenu index="404">
          <template slot="title">文章分类</template>
          <el-menu-item v-for="item in types" index="item.id" :key="item.id">{{item.typeMsg}}</el-menu-item>
        </el-submenu>
        <el-menu-item index="Ly">留言板</el-menu-item>
      </el-menu>
      <div class="userHead" style="display: flex; align-items: center">
          <el-avatar fit='fill' size="medium" :src="circleUrl"></el-avatar>
          <el-dropdown>
            <span class="username" style="color: #ffffff;font-size: 11px; margin: 0px 40px 0 10px">{{userName}}</span>
            <el-dropdown-menu title="dropdown">
              <el-dropdown-item>编辑用户设置</el-dropdown-item>
              <el-dropdown-item>发布文章</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
      </div>
    </el-header>
    <el-main class="elMain">
      <router-view></router-view>
    </el-main>
    <div class="footer">

    </div>
  </el-container>
</template>

<script>
import { get } from '../utils/request'
export default {
  data () {
    return {
      circleUrl: localStorage.getItem('headPortrait'),
      userName: localStorage.getItem('userName'),
      activeIndex: localStorage.getItem('activeIndex'),
      types: {}
    }
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'height: auto;')
  },
  created () {
    this.getTypes()
  },
  methods: {
    // 获取分类列表
    getTypes () {
      get('types/all', '').then(res => {
        this.types = res.data.data
      }).catch(res => {
        console.log(res)
      })
    },
    handleSelect (key) {
      localStorage.setItem('activeIndex', key)
    }
  }
}
</script>

<style scoped>
.elHeader {
  background-color: #39c5bb !important;
  padding: 0 230px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
}
.elMain {
  height: 100%;
  padding: 0 230px;
}
.footer {
  width: 100%;
  height: 100px;
  background-color: #39c5bb;
  opacity: 0.2;
}
</style>
