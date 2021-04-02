<template>
  <div class="father">
    <div class="article">
      <el-row style="padding:10px 0" v-for="item in article" :key="item.blogId" type="flex" justify="center">
        <el-col :span="18"><el-card shadow="hover">
          <div>{{item.creatTime}}</div>
          <div>{{item.title}}</div>
          <div>{{item.digest}}</div>
          <div>作者：{{item.author}}</div>
        </el-card></el-col>
      </el-row>
    </div>
    <div class="some">
      <leavemsg></leavemsg>
    </div>
  </div>
</template>

<script>
import { article } from '../utils/request'
import leavemsg from './Ly'
export default {
  components: {
    leavemsg
  },
  data () {
    return {
      // 文章页数
      pageNum: 1,
      // 文章数量
      pageSize: 10,
      // 文章列表
      article: {}
    }
  },
  created () {
    this.showArticle()
  },
  methods: {
    // 获取文章列表
    showArticle () {
      article('article/selectAll', this.pageNum, this.pageSize).then(res => {
        this.article = res.data.data.list
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.father {
  min-height: 100%;
  display: flex;
}
.article {
  background-color: rgba(0,0,0,0.2);
  flex-grow: 8;
  padding: 50px 0px;
}
.some {
  background-color: rgba(0,0,0,0.2);
  flex-grow: 2;
  padding-top: 60px;
  display: flex;
}
</style>
