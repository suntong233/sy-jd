<template>
  <div class="home">
    <searchbox></searchbox>
    <div class="activity">
      <div>
        点击筛选
        <img
          style="width: 45px;height: auto;"
          src="//img11.360buyimg.com/jdphoto/s90x28_jfs/t1/50544/35/13798/15234/5da7cf8cEf7e5ea76/8a9fad8c8aef6121.png"
          alt
        />活动商品
      </div>
    </div>
    <div
      class="product-list"
      v-for="item in renderData"
      :key="item.id"
      @click="toGoodsInfoRouter(item)"
    >
      <div class="product-list-img">
        <img v-lazy="item.imgUrl" />
      </div>
      <div class="product-introduce">
        <div class="product-introduce-font">
          <img
            style="width: 34px;height: auto;"
            src="//img11.360buyimg.com/jdphoto/s68x28_jfs/t1/89716/33/123/900/5da7cf92E67cf529c/5bc9e99c38192f74.png"
            alt
          />
          {{item.name}}
        </div>
        <div class="product-introduce-font1">宠物级</div>
        <div class="product-price">
          ¥ {{ typeof item.price == "number"? item.price : item.price[0] }}
          <img
            src="//img11.360buyimg.com/jdphoto/s88x28_jfs/t7318/163/1463112656/2654/47848ed8/599cf40eN04d1e4f1.png"
            alt
          />
        </div>
        <div class="product-tag">{{item.tab[0]}}</div>
        <span>123条评价</span>
        <span>好评率98%</span>
        <div class="shop">狗时代旗舰店></div>
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import BackTop from "../components/st/BackTop/NormalBack.vue"; // 回到顶部
import searchbox from "../components/wsm/searchbox"
const components = {
  BackTop,
  searchbox
};
// 搜索结果
export default {
  name: "searchres",
  data() {
    return {
      renderData: []
    };
  },
  created() {
    window.scrollTo(0, 0)
    this.renderData = [];
    for (var i in this.$store.state.goodsData) {
      if (this.$store.state.goodsData[i].type == this.$store.state.searchRes) {
        this.renderData.push(this.$store.state.goodsData[i]);
      }
    }
  },
  methods: {
    toGoodsInfoRouter(item) {
      this.$store.commit("goGoodsPage", item);
      this.$router.push("/goods");
    }
  },
  components
};
</script>

<style scoped>
.home {
  width: 100%;
  height: 1000px;
  background-color: #fff;
}
.activity {
  margin-top: 80px;
  width: 100%;
  height: 45px;
  border-top: 1px solid #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
}
.activity > div {
  width: 95%;
  height: 30px;
  background-color: #fcedeb;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #666666;
}
.product-list {
  width: 100%;
  height: 150px;
  padding: 5px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
}
.product-list-img > img {
  width: 120px;
  height: 120px;
}
.product-introduce {
  padding: 5px;
  width: 245px;
  height: 100%;
}
.product-introduce-font {
  font-size: 14px;
  width: 230px;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.product-introduce-font1 {
  color: #666666;
  font-size: 14px;
  margin: 3px 0px 1px;
}
.product-price {
  color: red;
  font-size: 15px;
}
.product-price > img {
  width: 44px;
  height: auto;
}
.product-tag {
  width: 50px;
  height: 15px;
  font-size: 3px;
  color: red;
  background-color: #fdf0f0;
  text-align: center;
  display: inline-block;
}
.product-introduce > span {
  font-size: 12px;
  color: #999999;
}
.shop {
  width: 190px;
  margin-top: 10px;
  font-size: 12px;
  color: #999999;
  float: left;
}
.el-icon-shopping-cart-2 {
  font-size: 20px;
  color: red;
  position: fixed;
  right: 15px;
}
</style>
