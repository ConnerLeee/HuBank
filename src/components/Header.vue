<template>
  <div class="header_wrap" id="header" style="color: rgb(50,0,0); background-color: rgb(255,255,255); border-color: rgb(0,0,0)">
<!--    头部 Top-->
    <div class="top" style="color: rgb(50,0,0); background-color: rgb(255,255,255); border-color: rgb(0,0,0)">
      <div class="fixed_width" style="color: rgb(50,0,0)">
        <div class="awraphidden" style="display: flex; justify-content: space-between; line-height: 34px; color: rgb(50,0,0); border-bottom: 1px solid #ccc">
          <div class="awrapl" style="color: rgb(50,0,0); border-color: rgb(50,0,0)">
            <a href="" class="StranLink" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px;
               height:13px; line-height:13px; display:inline-block; color: rgb(50,0,0); text-decoration: none">简中</a>
            <a href="" class="StranLink" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px;
               height:13px; line-height:13px; display:inline-block; color: rgb(50,0,0); text-decoration: none">繁中</a>
            <a href="" class="StranLink" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px;
               height:13px; line-height:13px; display:inline-block; color: rgb(50,0,0); text-decoration: none">EN</a>
            <a href="" target="_blank" class="noborder" style="border-right:0 solid #6d6d6d; padding: 0 10px 0 10px;
               font-size: 12px; height:13px; line-height:13px; display:inline-block; color: rgb(50,0,0); text-decoration: none">无障碍服务</a>
          </div>
          <div class="awrapr" style="color: rgb(50,0,0); border-color: rgb(50,0,0)">
            <a href="" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px; height: 13px;
               line-height: 13px; display: inline-block; color: rgb(50,0,0); text-decoration: none">联系我们</a>
            <a href="" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px; height: 13px;
               line-height: 13px; display: inline-block; color: rgb(50,0,0); text-decoration: none">在线客服</a>
            <a href="" style="border-right:1px solid #6d6d6d; padding: 0 10px 0 10px; font-size: 12px; height: 13px;
               line-height: 13px; display: inline-block; color: rgb(50,0,0); text-decoration: none">网点及ATM</a>
            <a href="" class="no_padding_right" style="border-right:0 solid #6d6d6d; padding: 0 10px 0 10px;
               font-size: 12px; height: 13px; line-height: 13px; display: inline-block; color: rgb(50,0,0); text-decoration: none">消费者权益保护</a>
          </div>
        </div>
      </div>
    </div>
<!--    头部 搜索-->
    <div style="display: flex; justify-content: space-between">
      <div style="height: 64px; display: flex">
        <div class="link_search" style="color: rgb(151,39,39); border-color: rgb(0,0,0); margin-left: 10px; font-size: 48px; ">Logo</div>
        <div class="telephone" style="margin-left: 15px; font-size: 16px; margin-top: 32px">24小时客户服务电话</div>
        <div class="telephone_number" style="margin-left: 10px; font-size: 16px; margin-top: 32px">12345</div>
      </div>
      <div style="margin: 10px 0; height: 32px; line-height: 32px; margin-top: 20px; margin-right: 10px; display: flex">
        <el-input v-model="search" placeholder="请输入关键词" />
        <el-button color="rgb(151,39,39)" style="height: 32px; line-height: 32px">搜索</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>