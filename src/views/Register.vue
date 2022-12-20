<template>
  <section>
      <div class="register_box">
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:4;"></div>
      <div class="register_container">
          <div class="register_form">
            <h2>注册</h2>
            <div ref="registerForm" :model="registerForm">
              <div class="inputBox">
                  <input type="text" ref="phone" v-model="registerForm.phone" name="phone" placeholder="请输入手机号码">
              </div>
              <div class="inputBox">
                  <input type="text" ref="username" v-model="registerForm.username" name="username" placeholder="请输入用户名">
              </div>
              <div class="inputBox">
                  <input type="password" ref="password1" v-model="registerForm.password" name="password1" placeholder="请输入密码">
              </div>
              <div class="inputBox">
                  <input type="password" ref="password2" v-model="registerForm.password2" name="password2" placeholder="请再次输入密码">
              </div>
              <div class="inputBox">
                  <input type="submit" value="注册" @click="register">
              </div>
            </div>
          </div>
      </div>
  </div>
  </section>
</template>

<script>
import axios from "axios";
import router from "../router";
import { signup } from "../api/user";
import { ElMessage } from "element-plus";

export default {
  name: 'Register',
  data() {
    return {
      registerForm: {
          phone: '',
          username: '',
          password: '',
          password2: '',
        }
    }
  },
  methods: {
    register() {
      if(this.registerForm.password==this.registerForm.password2){
        signup(this.registerForm).then(response=>{
          console.log(response)
          console.log(response.code)
          if(response.code===20002){
            this.$router.push('/login')
            ElMessage({message:"注册成功",type:"success",duration: 5 * 1000})
          }
        })
      }
        else{
          ElMessage({message:"两次密码不一致",type:"error",duration: 5 * 1000})
        }
    }
}
}
</script>

<style>
section{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(../assets/img/cumt.jpg) no-repeat;
  background-size: 100% 100%;
}
.register_container{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.register_box{
  position: relative;
}
.register_box .square{
  position: absolute;
  backdrop-filter: blur(5px);
  box-shadow: 0 10px rgba(80,80,80,0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  animation: animate 10s linear infinite;
  animation-delay: calc(-1s * var(--i));
}
@keyframes animate{
  0%,100%{
      transform: translateY(-40px);
  }
  50%{
      transform: translateY(40px);
  }
}
.register_box .square:nth-child(1){
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
}
.register_box .square:nth-child(2){
  top: 150px;
  left: -110px;
  width: 120px;
  height: 120px;
  z-index: 1;
}
.register_box .square:nth-child(3){
  bottom: 50px;
  right: -60px;
  width: 80px;
  height: 80px;
  z-index: 1;
}
.register_box .square:nth-child(4){
  bottom: -80px;
  left: 100px;
  width: 50px;
  height: 50px;
}
.register_box .square:nth-child(5){
  top: -80px;
  right: 140px;
  width: 60px;
  height: 60px;
}
.register_container{
  position: relative;
  width: 400px;
  height: 450px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 10px rgba(80,80,80,0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.register_form{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin-top: 80px;
}
.register_form h2{
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 40px;
}
.register_form h2::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 80px;
  height: 3px;
  background: #fff;
}
.register_form .inputBox{
  width: 100%;
  margin-top: 20px;
}
.register_form .inputBox input{
  /* 防止内元素溢出 */
  box-sizing: border-box;

  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  outline: none;
  padding: 10px 20px;
  border-radius: 35px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 16px;
  letter-spacing: 1px;
  color: #fff;
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
}
.register_form .inputBox input::placeholder{
  color: #fff;
}
.register_form .inputBox input[type="submit"]{
  background: #fff;
  color: #666;
  max-width: 100px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
}
</style>