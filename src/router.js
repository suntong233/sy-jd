import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/"
    },
    {
      // 主页
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue")
    },
    {
      // st测试页面
      path: "/st",
      name: "st",
      component: () => import("@/views/ExampleSt.vue")
    },
    {
      // lz测试页面
      path: "/lz",
      name: "lz",
      component: () => import("@/views/ExampleLz.vue")
    },
    {
      // wsm测试页面
      path: "/wsm",
      name: "wsm",
      component: () => import("@/views/ExampleWsm.vue")
    },
    {
      // 分类页面
      path: "/classify",
      name: "classify",
      component: () => import("@/views/Classify.vue")
    },
    {
      // 商品详情
      path: "/goods",
      name: "goods",
      component: () => import("@/views/GoodsDetail.vue")
    },
    {
      // 登录
      path: "/login",
      name: "login",
      component: () => import("@/views/Login.vue")
    },
    {
      // 搜索
      path: "/search",
      name: "search",
      component: () => import("@/views/Search.vue")
    },
    {
      // 搜索结果
      path: "/searchres",
      name: "searchres",
      component: () => import("@/views/SearchRes.vue")
    },
    {
      // 购物车
      path: "/shoppingcar",
      name: "shoppingcar",
      component: () => import("@/views/ShoppingCar.vue")
    },
    {
      // 我的
      path: "/mine",
      name: "mine",
      component: () => import("@/views/Mine.vue")
    }
  ]
});
