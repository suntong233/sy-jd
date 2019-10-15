<template>
  <div class="home">
    login
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";
const components = {
  Tabbar
};
// 登录
export default {
  name: "login",
  components
};
</script>

<style scoped>

</style>
