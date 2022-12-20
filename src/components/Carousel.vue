<template>
  <div class="carousel_box">
    <ul class="box">
    <li class="img">
      <img src="../assets/carousel/1.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">Hu Bank</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/2.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">比安全更安全</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/3.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">最全面的业务</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/4.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">最优质的生活</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/5.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">新一代网上银行</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/6.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">您的最佳选择</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/7.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">超强HuBank在手</div>
    </li>
    <li class="img">
      <img src="../assets/carousel/8.jpg" alt="" style="height: 450px; width:725px;">
      <div class="text">所有业务都拿手</div>
    </li>
    </ul>
    <div class="color_box">
      <div class="color"></div>
      <div class="bottom">
        <div class="bottom_box">
          <div class="website_inf">法律声明 | 网站导航 | 友情链接</div>
          <div class="website_inf">服务热线 123456</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  name:'Carousel',
}
</script>

<style>
.carousel_box{
  margin-top: 10px; 
}
.img{
  float:left;
  /* 图片间距 */
  width: 186.5px;
  border-left: 1px solid #fff;
  position: relative;
  transition: all 0.5s;
}
.box{
  width: 1500px;
  height: 460px;
  margin: 3px auto;
  overflow: hidden;
}
.text{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #fff;
  background: rgba(0,0,0,0.1);
  font-size: 16px;
  font-weight: 30px;
}
.box:hover li{
  width: 120px;
}
.box li:hover{
  width: 640px;
}
.color_box{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  weight: 1500px;
}
.color_box .color{
  position: absolute;
  border-radius: 10px;
  bottom: 10px;
  left: 20px;
  width: 1500px;
  height: 45px;
  margin: 0 auto;
  background: linear-gradient(to right,rgb(151,39,39),rgb(74, 162, 234));
  z-index: -1;
}
.bottom{
  width: 1480px;
}
.website_inf{
  font-size: 12px;
  color: #fff;
}
</style>