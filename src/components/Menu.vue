<template>
  <div style="width: 100%; display: flex; justify-content: space-between;">
    <div style="width: 820px">
      <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="rgb(151,39,39)"
          router
      >
        <el-menu-item index="home">首页</el-menu-item>

        <el-sub-menu index="2">
          <template #title>账户服务</template>
          <el-menu-item index="2-1">账户挂失</el-menu-item>
          <el-menu-item index="2-2">修改上挂账户</el-menu-item>
          <el-menu-item index="2-3">实名认证信息</el-menu-item>
          <el-sub-menu index="2-4">
            <template #title>信息查询</template>
            <el-menu-item index="2-4-1">账户余额查询</el-menu-item>
            <el-menu-item index="2-4-2">交易明细查询</el-menu-item>
            <el-menu-item index="2-4-3">信用报告查询</el-menu-item>
            <el-menu-item index="2-4-4">转账明细查询</el-menu-item>
            <el-menu-item index="2-4-5">缴费明细查询</el-menu-item>
            <el-menu-item index="2-4-6">存款利率查询</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-sub-menu index="3">
          <template #title>转账汇款</template>
          <el-menu-item index="personaltransfer">个人账户互转</el-menu-item>
          <el-menu-item index="innertransfer">行内转账</el-menu-item>
          <el-menu-item index="intertransfer">跨行转账</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="4">
          <template #title>贷款业务</template>
          <el-menu-item index="4-1">贷款申请</el-menu-item>
          <el-menu-item index="4-2">还款历史</el-menu-item>
          <el-menu-item index="4-3">还款计划</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="5">
          <template #title>缴费业务</template>
          <el-menu-item index="5-1">综合缴费</el-menu-item>
          <el-menu-item index="5-2">党团费用</el-menu-item>
          <el-menu-item index="5-3">就医挂号</el-menu-item>
          <el-sub-menu index="5-4">
            <template #title>生活缴费</template>
            <el-menu-item index="5-4-1">学费</el-menu-item>
            <el-menu-item index="5-4-2">校园卡充值</el-menu-item>
            <el-menu-item index="5-4-3">水电费</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>

        <el-sub-menu index="6">
          <template #title>行内理财</template>
          <el-menu-item index="6-1">理财咨询</el-menu-item>
          <el-menu-item index="6-2">定活互转</el-menu-item>
          <el-menu-item index="6-3">贵金属</el-menu-item>
          <el-menu-item index="6-4">基金</el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="7">
          <template #title>信用卡</template>
          <el-menu-item index="7-1">信用卡激活</el-menu-item>
          <el-menu-item index="7-2">信用卡挂失</el-menu-item>
          <el-menu-item index="7-3">信用卡可用额度</el-menu-item>
          <el-menu-item index="7-4">信用卡账单</el-menu-item>
          <el-menu-item index="7-5">信用卡积分</el-menu-item>
          <el-sub-menu index="7-6">
            <template #title>密码设置</template>
            <el-menu-item index="7-6-1">查询密码设置</el-menu-item>
            <el-menu-item index="7-6-2">交易密码设置</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
      </el-menu>
      <div class="h-6" />
    </div>

    <div style="flex: 1"></div>

    <div style="width: 70px; padding-top: 20px;">
      <el-dropdown class="avatar-container">
        <div class="avatar-wrapper">
          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
          <span class="el-icon-caret-bottom">{{name}}</span>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/userinfo')">用户信息</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default{
  data(){
    return{
      activeIndex:'1',
      activeIndex2:'1',
      };
    },
  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath);
    },
    async logout(){
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar'
    ])
  }
}
</script>

<style scoped>
.user_info_login {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.avatar-container {margin-right: 30px;}
.avatar-wrapper {
text-align: center;
margin-top: -25px;
position: relative;}
.user-avatar {
cursor: pointer;
width: 40px;
height: 40px;
border-radius: 10px;
}
.el-icon-caret-bottom {
cursor: pointer;
}
</style>