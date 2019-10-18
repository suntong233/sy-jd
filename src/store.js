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
    searchLocalData: [], // 本地存储
    // 搜索中>
    // <搜索成功界面==
    searchRes: [], // 搜索结果
    // 搜索成功界面>
    // <商品详情==
    goodDetails: [], // 商品详情的数据
    // 商品详情>
    // <购物车==
    shoppingCarModule: {
      shoppingCarList: []
    },
    // 购物车>
    // <登录模块==
    loginModule: {
      islogin: false, // 当前登录状态
      userData: [
        {
          username: "123",
          password: "123"
        }
      ]
    },
    userLogin: [] // 当前用户
    // 登录模块>
  },
  mutations: {
    // 登录方法
    loginFun(state, user) {
      state.userLogin = state.loginModule.userData.find(item => {
        if (item.username == user.username && item.password == user.password) {
          state.loginModule.islogin = true;
          return item;
        }
      });
    },
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
      if (localStorage.goodDetails) {
        state.goodDetails = JSON.parse(localStorage.goodDetails);
      }
      if (localStorage.history) {
        state.searchLocalData = JSON.parse(localStorage.history);
      }
    },
    // 跳转到搜索结果路由
    goSearchPage(state, type) {
      if (state.searchPageData.includes(type)) {
        console.log(type);
        state.searchRes = [type];
        // 本地存储
        if (localStorage.history) {
          if (state.searchLocalData.indexOf(type) < 0) {
            state.searchLocalData.push(type);
            localStorage.history = JSON.stringify(state.searchLocalData);
          }
        } else {
          state.searchLocalData.push(type);
          localStorage.setItem(
            "history",
            JSON.stringify(state.searchLocalData)
          );
        }
        // 本地存储
        console.log("跳转到了" + type + "搜索结果列表");
      } else {
        state.searchRes = ["输入错误"];
      }
    },
    // 跳转到商品详情
    goGoodsPage(state, item) {
      state.goodDetails = item;
      if (localStorage.goodDetails) {
        localStorage.goodDetails = JSON.stringify(state.goodDetails);
      } else {
        localStorage.setItem("goodDetails", JSON.stringify(state.goodDetails));
      }
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
