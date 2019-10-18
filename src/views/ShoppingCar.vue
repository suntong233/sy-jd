<template>
  <div class="shoppingCar">
    <Mineheader typetitle="购物车"></Mineheader>
  </div>
</template>

<script>
import Mineheader from "../components/st/MineHeader.vue";
const components = {
  Mineheader
};
// 购物车
export default {
  name: "shoppingcar",
  components
};
</script>

<style scoped>
.shoppingCar{
  width: 100%;
  height: 100%;
}
</style>
