<template>
  <div class="login-father">
    <!-- 登录背景图 -->
    <div class="backImg"></div>
    <!-- 登录栏 -->
    <div class="login-box">
      <div class="login-input">
        <span class="login-title large-style"
              style="margin-bottom: 67px">登录</span>
        <el-form class="login-message">
          <!-- 表单 -->
          <el-form-item>
            <el-input class="login-bottom"
                      placeholder="账号"
                      v-model="UserId">
            </el-input>
            <el-input class="login-bottom"
                      placeholder="密码"
                      v-model="password"
                      type="password">
            </el-input>
          </el-form-item>
          <el-form-item class="login-message">
            <div class="login-button-box">
              <el-button class="button">登录</el-button>
              <el-button class="button">注册</el-button>
            </div>
          </el-form-item>
          <a href=""
             style="text-decoration:none;color: #39c5bb; float: right">忘记密码</a>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      UserId: '',
      password: ''
    }
  }
}
</script>

<style scoped>
.large-style {
  color: #39c5bb;
  font-size: 24px;
  font-weight: 700;
}
/* 上面为通用样式 */
.login-father {
  width: 100%;
  height: 100%;
  background-color: #39c5bb;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.backImg {
  height: 100%;
  background-image: url("../assets/Login-Bgi.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  flex-grow: 5;
}
.login-box {
  background-color: #39c5bb;
  height: 100%;
  max-width: 550px;
  min-width: 550px;
  flex-grow: 2;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-input {
  width: 80%;
  height: 80%;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.login-title {
  display: block;
}
.login-message {
  width: 300px;
  margin-top: -22px;
}
.login-bottom {
  margin-bottom: 20px;
}
.login-bottom >>> .el-input__inner {
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 0px;
  width: 100%;
}
.login-button-box {
  display: flex;
  justify-content: space-between;
}
.el-input__inner {
  width: 30px;
}
.button {
  width: 140px;
  background-color: #39c5bb;
  color: white;
  font-weight: 600;
  font-size: 17px;
}
</style>
