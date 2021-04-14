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
      <div class="tags">
        <el-tag
        v-for="item in tags"
        :key="item.id"
        closable
        @close="handleClose(item.id)">
        {{item.tagsMsg}}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { article, getTags, delTag } from '../utils/request'
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
      article: {},
      // 标签列表
      tags: {}
    }
  },
  created () {
    this.showArticle()
    this.showTags()
  },
  methods: {
    // 获取文章列表
    showArticle () {
      article('article/selectAll', this.pageNum, this.pageSize).then(res => {
        this.article = res.data.data.list
      }).catch(res => {
        console.log(res)
      })
    },
    // 获取标签
    showTags () {
      getTags().then(res => {
        this.tags = res.data.data
      }).catch(res => {
        this.$message({
          message: res.data.msg,
          type: 'error'
        })
      })
    },
    // 删除标签
    handleClose (id) {
      delTag(id).then(res => {
        this.$message({
          message: res.data.msg,
          type: 'success'
        })
      }).catch(res => {
        this.$message({
          message: res.data.msg,
          type: 'error'
        })
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
  flex-direction: column;
}
.tags {
  width: 300px;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px;
  background-color: pink;
  box-sizing: border-box;
}
</style>
