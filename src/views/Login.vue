<template>
    <div class = "login-container">
      <el-form ref="loginForm" :model="loginForm"  class="login-form" auto-complete="on" label-position="left">
        
        <div class = "title-container">
          <h3 class="title">登录</h3>
        </div>
        
        <el-form-item prop="username">
          <el-input
          ref = "username"
          v-model="loginForm.username"
          placeholder="Username"
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
          placeholder="Please input password"
          name="passord"
          show-password="on"/>
        </el-form-item>
        <el-button @click="login">登录</el-button>
        <el-button @click="toSignup">注册</el-button>
      </el-form>
    </div>
  </template>
  
  <script>
  import {validUsername} from "../utils/validate";
  import {store} from "../store/index.js";

  import axios from 'axios';
  
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
        axios.post("https://localhost:44369/api/users/login?phone="
                  +this.loginForm.username
                  +"&password="
                  +this.loginForm.password
                  ,this.loginForm).then(res => {
          console.log(res);
          if(res.data==1){
            this.$router.push('/')
            store.username=this.loginForm.username;
            console.log(store.username);
          }
        })
      },
      toSignup(){
        this.$router.push('/signup')
      }
    }
  }
  </script>