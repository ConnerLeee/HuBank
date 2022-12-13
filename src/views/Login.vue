<template>
    <div class = "login-container" style="width: 100%; height: 695px; background-color: rgb(121,39,39); overflow: hidden;">
      <div class = "title-container" style="width: 400px; margin: 150px auto">
        <div class="title" style="color: rgb(255,255,255); font-size: 30px; text-align: center; padding: 30px 0;">Hu Bank 用 户 登 录</div>
        <el-form ref="loginForm" :model="loginForm" class="login-form" size="large">
          <el-form-item prop="username">
            <el-input
            ref = "username"
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
            />
          </el-form-item>

          <el-form-item prop="password">
            <el-input
            :key="passwordType"
            ref="password"
            v-model="loginForm.password"
            :type="passwordType"
            placeholder="密码"
            name="passord"
            show-password="on"
            />
          </el-form-item>

          <div style="width:100px; margin: auto">
            <el-button style="width: 100px" @click="login">登录</el-button>
          </div>
        </el-form>
      </div>
      <div style="text-align: center;">
        <el-button text @click="$router.push('/register')">没有账户？点此注册</el-button>
      </div>
    </div>
  </template>
  
  <script>
  import {validUsername} from "../utils/validate";
  import axios from "axios";
  import {store} from "../store/index";
  export default {
    name: 'Login',
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!validUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        loading: false,
        passwordType: 'password',
        redirect: undefined
      }
    },
    methods: {
      login() {
        axios.post("https://localhost:44369/api/users/login?name="
                  +this.loginForm.username
                  +"&password="
                  +this.loginForm.password
                  ,this.loginForm).then(res => {
          console.log(res);
          if(res.data==1){
            this.$router.push('/home')
            store.username=this.loginForm.username;
            store.isLogin=true;
            alert("登陆成功,欢迎"+store.username);
            console.log(store.username);
          }
          else alert("登陆失败！")
        })
      },
  }
  }
  </script>