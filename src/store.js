import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vue.prototype.axios = axios;
export default new Vuex.Store({
  state: {
    test: "tes",
    // <商品数据==
    goodsData: [1], // 所有数据
    // 商品数据>
    // <搜索中==
    searchHead: "狗狗活体",
    searchPageData: [], // 搜索页面的所有标签
    // 搜索中>
    // <搜索成功界面==
    searchRes: [], // 搜索结果
    // 搜索成功界面>
    // <商品详情==
    goodDetails: [] // 商品详情的数据
    // 商品详情>
    // <购物车==
    // 购物车>
    // <登录模块==
    // 登录模块>
  },
  mutations: {
    testfun() {
      console.log(1);
    },
    // 初始化方法
    InitGoods(state, goodslist) {
      state.goodsData = goodslist; // 初始化所有商品数据
      goodslist.map(item => {
        state.searchPageData.push(item.type);
      });
      state.searchPageData = [...new Set(state.searchPageData)]; // 初始化获取所有商品的类型数据 赋值给搜索中
    },
    // 跳转到搜索结果路由
    goSearchPage(state, type) {
      if (state.searchPageData.includes(type)) {
        state.searchRes = [type];
        console.log("跳转到了" + type + "搜索结果列表");
      } else {
        state.searchRes = ["输入错误"];
      }
    },
    // 跳转到商品详情
    goGoodsPage(state, item) {
      state.goodDetails = item;
      console.log("跳转到了" + item.type + "的商品详情");
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
