<template>
  <div style="height:450px; width: 1500px; margin-top: 10px; background-color: rgb(151,39,39)">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel"
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: rgb(255,255,255);
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgb(151,39,39);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(151,59,59);
}
</style>