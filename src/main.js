import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Input,
  Backtop,
  Icon,
  Carousel,
  carouselItem
} from "element-ui";
import axios from "axios";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  error: "images/error.jpg", // 错误图片时的图片样子
  loading: "images/loading.gif" // 加载中的图片样子
});

window.Swiper = Swiper;
Vue.use(Button);
Vue.use(Input);
Vue.use(Backtop);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(carouselItem);
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
