<template>
    <section>
        <div class="campuscard_box">
            <div class="campuscard_recharge_container">
                <div class="campuscard_recharge_form">
                  <h2>校园卡充值</h2>
                  <div ref="campuscardForm" :model="campuscardForm">
                    <div class="inputBox">
                        <input type="text" ref="campuscard" v-model="campuscardForm.campuscard" name="campuscard" placeholder="请输入校园卡号">
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="查询" @click="search">
                    </div>
                    <!-- 显示对应银行卡 -->
                    <div class="inputBox">
                        <input type="text" name="bankcard" placeholder="银行卡号" value={{bankcardid}}>
                    </div>
                    <!-- 输入充值金额 -->
                    <div class="inputBox">
                        <input type="text" ref="money" v-model="campuscardForm.money" name="money" placeholder="请输入充值金额">
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="确定" @click="recharge">
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from "axios";

export default{
    name:'Campuscard_recharge',
    data(){
      return{
        campuscardForm:{
          campuscard: '',
          money: '',
          bankcardid: '',
        }
      }
    },
    methods: {
      search() {
        axios.post("https://localhost:44369/api/cards/getid/?scardid="+this.campuscardForm.campuscard
                ,this.campuscardForm).then(res => {
                  console.log(res);      
        alert("银行卡号是"+res.data);
        this.campuscardForm.bankcardid=res.data;
      })
      },
      recharge() {
        axios.post("https://localhost:44369/api/cards/buyschoolbanlance/?scardid="+this.campuscardForm.campuscard
                    +"&money="+this.campuscardForm.money
                    ,this.campuscardForm).then(res => {
                      console.log(res)
        if(res.data==1){
          alert("充值成功");
        }
      })
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
.campuscard_recharge_container{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.campuscard_box{
  position: relative;
}
.campuscard_recharge_container{
  position: relative;
  width: 400px;
  height: 420px;
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
.campuscard_recharge_form{
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px;
  margin-top: 80px;
}
.campuscard_recharge_form h2{
  position: relative;
  color: #fff;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 30px;
}
.campuscard_recharge_form h2::before{
  content: '';
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 80px;
  height: 3px;
  background: #fff;
}
.campuscard_recharge_form .inputBox{
  width: 100%;
  margin-top: 20px;
}
.campuscard_recharge_form .inputBox input{
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
.campuscard_recharge_form .inputBox input::placeholder{
  color: #fff;
}
.campuscard_recharge_form .inputBox input[type="submit"]{
  background: #fff;
  color: #666;
  max-width: 100px;
  cursor: pointer;
  font-weight: 600;
}
</style>