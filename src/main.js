import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Input,
  Backtop,
  dialog,
  Icon,
  Checkbox,
  Carousel,
  carouselItem,
  drawer
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
Vue.use(dialog);
Vue.use(Backtop);
Vue.use(Checkbox);
Vue.use(Icon);
Vue.use(Carousel);
Vue.use(carouselItem);
Vue.use(drawer);
Vue.prototype.axios = axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  created() {
    this.$store.dispatch("getGoods");
  },
  render: h => h(App)
}).$mount("#app");
