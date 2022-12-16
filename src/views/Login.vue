<template>
  <section>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="color"></div>
      <div class="login_box">
      <div class="square" style="--i:0;"></div>
      <div class="square" style="--i:1;"></div>
      <div class="square" style="--i:2;"></div>
      <div class="square" style="--i:3;"></div>
      <div class="square" style="--i:4;"></div>
      <div class="login_container">
          <div class="login_form">
            <h2>登录</h2>
            <div ref="loginForm" :model="loginForm">
              <div class="inputBox">
                  <!-- v-model把输入的值传给name变量 -->
                  <input ref="username" v-model="loginForm.username" type="text" name="username" placeholder="用户名">
              </div>
              <div class="inputBox">
                  <input type="password" ref="password" v-model="loginForm.password" name="password" placeholder="密码">
              </div>
              <div class="inputBox">
                  <input type="submit" value="登录" @click="login">
              </div>
              <p class="forget">忘记密码？ <a href="#">修改密码</a></p>
              <p class="forget">没有账户？ <a href="#/register">注册账户</a></p>
            </div>
          </div>
      </div>
  </div>
  </section>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
          username: '',
          password: ''
        }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('user/login',this.loginForm).then(()=>{
        this.$router.push('/home')
      })
    },
    toRegister(){
      this.$router.push('/register')
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
  background: linear-gradient(to bottom,#f1f4f9,#dff1ff);
}
section .color{
  position: absolute;
  filter: blur(200px);
}
section .color:nth-child(1){
  top: -350px;
  width: 600px;
  height: 600px;
  background: rgb(151, 39, 39);
}
section .color:nth-child(2){
  bottom: 100px;
  left: 100px;
  width: 500px;
  height: 400px;
  background: rgb(161, 49, 49);
}
section .color:nth-child(3){
  bottom: 150px;
  right: 100px;
  width: 600px;
  height: 300px;
  background: rgb(187, 73, 73);
}
section .color:nth-child(4){
  top:-50px;
  left: 10px;
  width: 300px;
  height: 300px;
  background: rgb(85, 152, 230);
}
section .color:nth-child(5){
  top: -50px;
  right: 10px;
  width: 300px;
  height: 300px;
  background: rgb(172, 76, 76);
}
section .color:nth-child(6){
  bottom: 0;
  left: 10px;
  width: 300px;
  height: 300px;
  background: rgb(161, 49, 49);
}
section .color:nth-child(7){
  bottom: 0;
  width: 500px;
  height: 200px;
  background: rgb(161, 19, 19);
}
section .color:nth-child(8){
  bottom: 10px;
  right: 10px;
  width: 400px;
  height: 300px;
  background: rgb(76, 128, 61);
}
.login_container{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login_box{
  position: relative;
}
.login_box .square{
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
.login_box .square:nth-child(1){
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
}
.login_box .square:nth-child(2){
  top: 150px;
  left: -110px;
  width: 120px;
  height: 120px;
  z-index: 1;
}
.login_box .square:nth-child(3){
  bottom: 50px;
  right: -60px;
  width: 80px;
  height: 80px;
  z-index: 1;
}
.login_box .square:nth-child(4){
  bottom: -80px;
  left: 100px;
  width: 50px;
  height: 50px;
}
.login_box .square:nth-child(5){
  top: -80px;
  right: 140px;
  width: 60px;
  height: 60px;
}
.login_container{
  position: relative;
  width: 400px;
  height: 400px;
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
.login_form{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin-top: 80px;
}
.login_form h2{
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 40px;
}
.login_form h2::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 80px;
  height: 3px;
  background: #fff;
}
.login_form .inputBox{
  width: 100%;
  margin-top: 20px;
}
.login_form .inputBox input{
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
.login_form .inputBox input::placeholder{
  color: #fff;
}
.login_form .inputBox input[type="submit"]{
  background: #fff;
  color: #666;
  max-width: 100px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
}
.forget{
  margin-top: 5px;
  color: #fff;
}
.forget a{
  color: #fff;
  font-weight: 600;
}
</style>