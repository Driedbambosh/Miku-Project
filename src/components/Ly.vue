<template>
  <div class="Lyfather">
    <div v-for="item in levalMsg" :key="item.leaveMessageId" class="Lymsg">
      <div class="head" style="display: flex"><div style="width: 36px; height: 36px;margin-right: 5px"><el-avatar style="margin-right: 5px" size=medium :src="item.headPortrait"></el-avatar></div>
      <!-- 评论用户信息 -->
        <div class="userMsg">
          <div style="font-weight: 700; font-size: 16px">{{item.userName}}</div>
          <div style="font-size: 12px; color: #303030">{{item.creatTime}}</div>
          <h4 style="margin: 8px 0;font-weight: 500">{{item.leaveMsg}}</h4>
          <!-- 用户回复 -->
          <div class="userBackMsg" v-if="item.replyVO.length !== 0">
            <div v-for="sonItem in item.replyVO" :key="sonItem.commentId" class="head" style="display: flex"><div style="width: 36px; height: 36px;margin-right: 5px"><el-avatar style="" size=medium :src="item.headPortrait"></el-avatar></div>
              <div class="userMsg">
                <div style="font-weight: 700; font-size: 12px">{{sonItem.userName}} <span style="font-size: 8px">回复</span>@{{sonItem.replyUserName}}</div>
                <div style="font-size: 12px; color: #303030">{{item.creatTime}}</div>
                <h4 style="margin: 8px 0">{{sonItem.commentMsg}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { leaveMsg } from '../utils/request'
export default {
  name: 'leavemsg',
  created () {
    this.getMsg()
  },
  data () {
    return {
      levalMsg: {}
    }
  },
  methods: {
    getMsg () {
      leaveMsg().then(res => {
        this.levalMsg = res.data.data.msgVOList
      }).catch(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>
.Lyfather {
  border-radius: 2%;
  width: 300px;
  height: 500px;
  background-color: rgba(255,255,255);
  padding: 10px 10px;
  box-sizing: border-box;
  overflow: auto;
}
.Lymsg {
  width: 100%;
  /* background-color: #39c5bb; */
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.Lyfather .Lymsg:last-child {
  margin-bottom: 0;
}
</style>
