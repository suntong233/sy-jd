import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.axios = axios;
export default new Vuex.Store({
  state: {
    test: "tes",
    // <商品数据
    goodsData: [1]
    // 商品数据>
    // <购物车
    // 购物车>
    // <登录模块
    // 登录模块>
  },
  mutations: {
    testfun() {
      console.log(1);
    },
    InitGoods(state, goodslist) {
      state.goodsData = goodslist;
    }
  },
  actions: {
    // 异步axios引入商品数据
    getGoods(context) {
      axios.get("/data/test.json").then(res => {
        context.commit("InitGoods", res.data);
      });
    }
  }
});
