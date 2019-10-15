<template>
  <div class="home">
    <searchtext></searchtext>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";   // 底部导航
import searchtext from "../components/wsm/searchtext";  // 顶部搜索
const components = {
  Tabbar,
  searchtext
};
// 分类
export default {
  name: "classify",
  data(){
    return {
      
    }
  },
  components,
  methods: {
    
  }
};
</script>

<style scoped>

</style>
