<template>
 <div>
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
                  <button @click="activeInsert(item,sonItem)" style="width: 40px;height: 20px;font-size: 12px;color: #fff;background-color: #39c5bb;border: none; border-radius: 5px">回复</button>
                </div>
              </div>
            </div>
          </div>
          <button @click="activeInsertM(item)" style="position: absolute;right:0;top: 0;width: 40px;height: 20px;font-size: 12px;color: #fff;background-color: #39c5bb;border: none; border-radius: 5px">回复</button>
     </div>
   </div>
   <!-- 回复输入框 -->
   <div>
     <el-form :model="insert" ref="ruleForm" :rules="rules" class="Ly-input">
       <el-form-item prop='lyInput' style="width: 100%">
         <el-input resize='none' class="textarea" v-model="insert.lyInput" type="textarea" :rows="3" :placeholder="defaultPlace" :validate-event="false"></el-input>
       </el-form-item>
       <div class="insertButton">
         <el-button @click="insertInput('ruleForm')" type="primary" style="border:none;border-radius: 0;background-color: #39c5bb">留言</el-button>
         <el-button @click="clean" type="primary" style="border:none;border-radius: 0;background-color: #39c5bb">清空</el-button>
       </div>
     </el-form>
   </div>
  </div>
</template>

<script>
import { leaveMsg, insertInput } from '../utils/request'
export default {
  name: 'leavemsg',
  created () {
    this.getMsg()
  },
  data () {
    return {
      levalMsg: {},
      defaultPlace: '请输入留言....',
      // 新留言信息
      insert: {
        lyInput: '',
        pid: 0,
        replyUserId: ''
      },
      rules: {
        lyInput: [
          { required: true, message: '请输入留言' }
        ]
      }
    }
  },
  methods: {
    getMsg () {
      leaveMsg().then(res => {
        this.levalMsg = res.data.data.msgVOList
      }).catch(res => {
        console.log(res)
      })
    },
    // 回复信息
    insertInput (ruleName) {
      this.$refs[ruleName].validate(valid => {
        if (valid) {
          insertInput(this.insert.lyInput, this.insert.pid, this.insert.replyUserId).then(res => {
            console.log(res)
            this.getMsg()
            this.insert.lyInput = ''
          }).catch(res => {
            console.log(res)
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    // 保存回复一级评论
    activeInsertM (item) {
      this.defaultPlace = '回复' + item.userName
      this.insert.pid = item.leaveMessageId
      this.insert.replyUserId = item.userId
    },
    // 保存回复信息
    activeInsert (item, sonItem) {
      this.defaultPlace = '回复' + sonItem.replyUserName
      this.insert.pid = item.leaveMessageId
      this.insert.replyUserId = sonItem.replyUserId
    },
    // 清空回复
    clean () {
      this.insert = {
        lyInput: '',
        pid: 0,
        replyUserId: ''
      }
      this.defaultPlace = '请输入留言....'
    }
  }
}
</script>

<style scoped>
.Lyfather {
  border-radius: 10px 10px 0 0;
  width: 300px;
  height: 430px;
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
  position: relative;
}
.Lyfather .Lymsg:last-child {
  margin-bottom: 0;
}
.Ly-input {
  width: 300px;
  height: 70px;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  display: flex;
}
.textarea >>> textarea {
  border-radius: 0;
  height: 70px !important;
}
.insertButton {
  display: flex;
  flex-direction: column;
}
.insertButton >>> .el-button+.el-button {
  margin: 0;
}
.insertButton >>> .el-button {
  height: 35px;
}
</style>
