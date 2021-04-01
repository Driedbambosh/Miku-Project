<template>
  <div class="father">
    <div class="article">
      <el-row style="padding:10px 0" v-for="item in article" :key="item.blogId" type="flex" justify="center">
        <el-col :span="16"><el-card shadow="hover">
          <div>{{item.creatTime}}</div>
          <div>{{item.title}}</div>
          <div>{{item.digest}}</div>
          <div>作者：{{item.author}}</div>
        </el-card></el-col>
      </el-row>
    </div>
    <div class="some">

    </div>
  </div>
</template>

<script>
import { article } from '../utils/request'
export default {
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
  background-color: pink;
  flex-grow: 3;
  padding: 50px 0px;
}
.some {
  background-color: green;
  flex-grow: 2;
}
</style>
