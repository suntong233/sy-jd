import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
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
      component: () => import("./views/Home.vue")
    },
    {
      // st测试页面
      path: "/st",
      name: "st",
      component: () => import("./views/ExampleSt.vue")
    },
    {
      // lz测试页面
      path: "/lz",
      name: "lz",
      component: () => import("./views/ExampleLz.vue")
    },
    {
      // wsm测试页面
      path: "/wsm",
      name: "wsm",
      component: () => import("./views/ExampleWsm.vue")
    }
  ]
});
