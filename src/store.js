import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "tes"
  },
  mutations: {
    testfun() {
      console.log(1);
    }
  },
  actions: {
    testfun() {
      console.log(1);
    }
  }
});
