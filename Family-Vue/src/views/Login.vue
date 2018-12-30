<template>
  <!--背景图-->
  <!--login框，表单+tab标签页的组合-->
  <div class="loginFrame">
    <div class="note" :style="note"></div>
    <el-form ref="AccountForm" :model="account" :rules="rules" label-position="left" label-width="0px"
             class="demo-ruleForm login-container">
      <el-form-item>
        <!--tab标签-->
        <el-tabs v-model="activeName" @tab-click="handleClick" class="users">
          <el-tab-pane label="家庭成员" name="homeOther"></el-tab-pane>
          <el-tab-pane label="家主" name="homeEast"></el-tab-pane>
          <el-tab-pane label="管理员" name="admin"></el-tab-pane>
        </el-tabs>
      </el-form-item>

      <el-form-item prop="username">
        <el-input type="text" v-model="account.username" auto-complete="on" placeholder="请输入您的账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="account.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
        <a class="forgetpwd" href="Home.vue">忘记密码</a>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        logining: false,
        account: {
          username: '',
          password: '',
        },
        note: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          backgroundImage: "url(" + require("../../dist/static/img/loginBg.jpg") + ")",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        },
        activeName: "students",
        rules: {
          username: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            //{ validator: validaePass }
          ],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            //{ validator: validaePass2 }
          ]
        },
        checked: true
      };
    },
    methods: {
      handleClick() {
        console.log("就是这么操作的!");
      }
    }
  }</script>

<style>
  body {
    background: #dfe4ed url("../../dist/static/img/loginBg.jpg") no-repeat fixed top;
  }

  .login-container {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px 80px 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    /*box-shadow: 0 0 25px #cac6c6;*/

  }

  .forgetpwd{
    float: right;
  }
</style>
