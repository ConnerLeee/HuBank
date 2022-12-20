<template>
  <div class="announcement" id="announcement"
       style="background: linear-gradient(to right,rgb(151,39,39),rgb(74, 162, 234));
              height: 25px;
              line-height: 25px;
              border-radius: 10px;
              margin-left: 10px;
              margin: 0 10px;
              border-bottom: 1px solid #ccc;
              display: flex">
    <div style="padding-left: 10px;
                color: rgb(255,255,255);">公告</div>
    <div style="flex: 1"></div>
    <div style="padding-right: 10px;">
      <a href=""
         style="color: rgb(255,255,255);
                text-decoration: none">更多>></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Announcement"
}
</script>

<style scoped>

</style>