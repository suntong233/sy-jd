<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <div class="Home-silderBox">
      <!-- 这里是滑块1 -->
      <indexbanner></indexbanner>
    </div>
    <!-- 这里是滑块2 -->
    <div class="Home-silderBox2">
      <advertui @changeShowbtn="changeShowbtn" :showBtn="showBtn"></advertui>
      <div class="showBtn">
        <div v-if="showBtn">
            <img style="width:20px" src="/images/st/1.png">
        </div>
        <div v-else>
            <img style="width:20px" src="/images/st/2.png">
        </div>
      </div>
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
      <NewPerson></NewPerson>
      <DjxyMrg type="djxy"></DjxyMrg>
      <DjxyMrg type="mrg"></DjxyMrg>
      <JdFastNews></JdFastNews>
      <!-- 为你推荐 -->
      <Recommend></Recommend>
    </div>
    <Tabbar></Tabbar>

    <!-- 回到顶部 -->
    <BackTop></BackTop>
    <bottomstyle></bottomstyle>
  </div>
</template>

<script>
import Tabbar from "../components/public/tabBar.vue";   // 底部导航组件
import HomeHeader from "../components/st/HomeHeader.vue";  // home页面顶部组件
import NewPerson from "../components/st//Advertisement/BannerNewPeople.vue";  // home页面新人专享
import DjxyMrg from "../components/st/Advertisement/DjxyMrg.vue";  // 东家小院 每日逛
import BackTop from "../components/st/BackTop/NormalBack.vue"; // 回到顶部
import Recommend from "../components/public/Recommend.vue"; // 为你推荐
import FlashSale from "../components/lz/FlashSale.vue";  // 京东秒杀
import indexbanner from "../components/wsm/indexbanner";  // 首页滑块1
import advertui from "../components/wsm/advertui";  // 首页滑块2
import JdFastNews from "../components/lz/JdFastNews.vue"; // 京东快报
import bottomstyle from "../components/wsm/bottomstyle.vue"; // 首页底部

const components = {
  Tabbar,
  HomeHeader,
  NewPerson,
  DjxyMrg,
  BackTop,
  Recommend,
  Tabbar,
  HomeHeader,
  FlashSale,
  indexbanner,
  advertui,
  bottomstyle,
  JdFastNews
};
export default {
  name: "home",
  data () {
    return {
      showBtn: true  
    }
  },
  created () {
    window.scrollTo(0, 0)
  },
  methods: {
      openUrl(url, type){
        window.open(url, type);
      },
      changeShowbtn(){
        this.showBtn = !this.showBtn;
      }
  },
  components
};
</script>

<style scoped>
  .home{
    width: 100%;
    background-color: rgb(246,246,246);
    height: 100%;
    position: relative;
  }
  .Home-silderBox{
    width: 100%;
    padding-top: 42px;
    /* 这是滑块 ============================================= */
    background: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/68092/23/12838/57655/5da453b6Ec8d9b69d/b641dccc10e7c91a.jpg) no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .Home-silderBox2{
    width: 100%;
    position: relative;
    height: 155px;
    overflow: hidden;
    /* 这是滑块2 ============================================= */
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
  .Home-banner1>img:nth-child(2){
    flex-grow: 1.2;
  }
  .Home-banner1>img{
    height: 100%;
    flex-grow: 1;
  }
  .main-container{
    width: 100%;
    background-color: rgb(246,246,246);
    position: relative;
  }
  .Home-footer{
    width: 100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: #ccc;
    background-color: rgb(255, 255, 255);
    position: relative;
  }
  .showBtn{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
</style>
