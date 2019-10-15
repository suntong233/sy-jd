<template>
  <div class="home">
    classify
    <Tabbar></Tabbar>
    <button @click="showMenu">显示/隐藏</button>
    <showMenu v-if="show"></showMenu>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";
import showMenu from "../components/public/showMenu"
const components = {
  Tabbar,
  showMenu
};
// 分类
export default {
  name: "classify",
  data(){
    return {
      show:false
    }
  },
  components,
  methods: {
    showMenu() {
      this.show = !this.show
    }
  }
};
</script>

<style scoped>

</style>
