<template>
  <div class="father">
    <div class="article">
      <el-row style="padding:10px 0" v-for="item in 20" :key="item" type="flex" justify="center">
        <el-col :span="16"><el-card shadow="hover">总是显示</el-card></el-col>
      </el-row>
    </div>
    <div class="some">

    </div>
  </div>
</template>

<script>
export default {

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
