import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button, Input } from "element-ui";
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";

window.Swiper = Swiper;
Vue.use(Button);
Vue.use(Input);

Vue.prototype.axios = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
