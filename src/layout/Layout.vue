<template>
  <div>
    <!--    公告-->
    <Announcement />
    <!--    头部导航-->
    <Header />
    <!--      主体-->
    <div>
      <!--      菜单-->
      <div style="border-bottom: 1px solid #ccc">
        <Menu />
      </div>
      <!--      内容区域-->
      <router-view style="flex: 1"/>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Announcement from "../components/Announcement.vue";
import Menu from "../components/Menu.vue";

export default {
  name: "Layout",
  components: {
    Menu,
    Announcement,
    Header
  }
}
</script>

<style scoped>

</style>