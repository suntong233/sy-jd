<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <!-- 这里是滑块1 -->
    <div class="Home-silderBox"></div>
    <!-- 这里是滑块2 -->
    <div class="Home-silderBox2">
      <img class="Home-silderBox2-bg" src="//m.360buyimg.com/mobilecms/s750x324_jfs/t1/67559/20/13157/30052/5da454c5E68ed4059/b5de41a3b378d476.jpg.dpg">
    </div>
    <div @click="openUrl('https://pro.m.jd.com/mall/active/4HGAy3SHDZPyRJ3XQENnud4HD62V/index.html','_self')" class="Home-banner1">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/80398/3/12992/76753/5da49112Ec426b71d/2778f6e308900f96.jpg!q70.jpg.dpg">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/62371/19/13047/94440/5da48eacE4240670c/1460f8279b205e48.jpg!q70.jpg.dpg">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/45013/35/13596/66092/5da49692Ee2aea7e5/8c30539fa5e90ac2.jpg!q70.jpg.dpg">
    </div>
    <div class="main-container">
      <!-- 京东秒杀 -->
      <FlashSale></FlashSale>
      <!-- 新人广告 东家小院 每日逛 -->
      <!-- 为你推荐 -->
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";   // 底部导航组件
import HomeHeader from "../components/st/HomeHeader.vue";  // home页面顶部组件
import FlashSale from "../components/lz/FlashSale.vue"
const components = {
  Tabbar,
  HomeHeader,
  FlashSale
};
export default {
  name: "home",
  methods: {
      openUrl(url, type){
        window.open(url, type);
      }
  },
  components
};
</script>

<style scoped>
  .home{
    width: 100%;
    height: 100%;
    background-color: #ccc;
    position: relative;
  }
  .Home-silderBox{
    width: 100%;
    padding-top: 42px;
    height: 180px;
    /* 这是滑块 ============================================= */
    background: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/68092/23/12838/57655/5da453b6Ec8d9b69d/b641dccc10e7c91a.jpg) no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
  }
  .Home-silderBox2{
    width: 100%;
    position: relative;
    height: 155px;
    overflow: hidden;
    /* 这是滑块2 ============================================= */
    background-color: rgb(104, 202, 117); 
  }
  .Home-silderBox2-bg{
    width: 100%;
    height: 100%;
  }
  .Home-banner1{
    width: 100%;
    height: 96px;
    display: flex;
    overflow: hidden;
    justify-content: space-between;
  }
  .Home-banner1>img{
    width: 30%;
    flex-grow: 1;
  }
  .main-container{
    width: 100%;
  }
</style>
