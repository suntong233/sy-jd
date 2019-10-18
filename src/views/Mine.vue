<template>
  <div class="Mine">
    <Mineheader></Mineheader>
    我的
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";
import Mineheader from "../components/st/MineHeader.vue";
const components = {
  Tabbar,
  Mineheader
};
// 我的
export default {
  name: "mine",
  created () {
    if(!this.$store.state.loginModule.islogin){
      this.$router.push("/login")
    }
  },
  components
};
</script>

<style scoped>
  .Mine{
    width: 100%;
    height: 100%;
    background-color: rgb(247,247,247);
  }
</style>