<template>
  <div class="carousel" style="height:450px; width: 1500px; margin-top: 10px; background-color: rgb(151,39,39)">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item v-for="item in ca_imgList" :key="item.id">
        <img style="object-fit: scale-down; width:100%; height:100% " :src="item.idView" class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return{
      ca_imgList: [
        {id:0,idView:"../assets/img/ad.png"},
        {id:1,idView:"../assets/img/ad.png"},
        {id:2,idView:"../assets/img/ad.png"},
        {id:3,idView:"../assets/img/ad.png"},
        {id:4,idView:"../assets/img/ad.png"},
        {id:5,idView:"../assets/img/ad.png"}
      ],
      screenWidth: 0
    };
  }
}
</script>

<style scoped>

</style>