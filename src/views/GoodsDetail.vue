<template>
  <div class="goodsdetail">
    <!--  商品详情： <br>
    <div style="width:100%;overflow: hidden;">
      {{ this.$store.state.goodDetails }}

    </div>-->

    <!--顶部轮播图-->
    <div class="topBanner">
      <div class="swiper-container indexlz">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/43305/30/11122/162247/5d491ed7Ec67e89e3/bf67b48a5446b97a.jpg!q70.dpg.webp"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/55653/29/6964/114052/5d491ed7Ec454bd4c/5767440fa1fbc377.jpg!q70.dpg.webp"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/52854/37/7018/100673/5d491ed7E19a2d468/94b075ec648fb3f0.jpg!q70.dpg.webp"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <!--双11图片-->
    <div class="double11">
      <img
        src="//img10.360buyimg.com/imgzone/jfs/t1/53400/12/13719/48147/5da7d5c6E10274602/1cf033bf3abcf292.png"
      />
    </div>

    <!--价格-->
    <div class="goods_price_context">
      <div class="goods_price">
        <div class="goods_price_left">
          ￥
          <span>
            <strong>{{priceleft}}</strong>.{{priceright}}
          </span>
        </div>

        <div class="goods_price_right">
          <span class="goods_price_right_left">
            <img src="/lz/images/price.png" />
            降价提醒
          </span>
          <span class="goods_price_right_right">
            <img src="/lz/images/collect.png" />
            收藏
          </span>
        </div>
      </div>
    </div>

    <!--商品描述-->
    <div class="goods_desc">
      <div class="goods_desc_container">
        <p>
          <img
            src="//img30.360buyimg.com/jdphoto/jfs/t1/75776/31/13305/900/5da86d4bEcc4c90de/e1d7f9fd9583fa14.png"
          />单人宿舍小衣柜简易布衣柜实木组装布艺木质省空间衣橱大学生家用 09A不含布套 2门 组装
        </p>
        <p>
          官方保证*极速发货*现在下单马上发货！七天无理由退换*赠送运费险*放心购*欢迎抢购
          <span>查看&gt;</span>
        </p>
      </div>
    </div>

    <!--优惠券-->
    <div class="coupon">
      <div class="coupon_container">
        <div class="coupon_container_up">
          <div>优惠</div>
          <div>
            <span class="discount">满250-70</span>
          </div>
          <div>···</div>
        </div>
        <div class="coupon_container_down">
          <div>白条</div>
          <div>3期免息</div>
          <div>···</div>
        </div>
      </div>
    </div>

    <!--已选 送至 运费-->
    <div class="coupon" style="height:31.5%;border:1px solid red">
      <div class="coupon_container">
        <div class="alreadylesect">
          <div class="coupon_container_up1">
            <div>已选</div>
            <div>
              <span style="font-size: 14px;color: #333;line-height: 22px;">
                09A不含布套,2门 组装,1个
               </span>
            </div>
            <div>···</div>
          </div>
          <div class="coupon_container_up1_desc">本商品支持保障服务,点击可选服务</div>
        </div>
        <div class="alreadylesect" style="height:47.5%">
          <div class="coupon_container_up1" style="height:25%">
            <div>送至</div>
            <div>
              <span style="font-size: 14px;color: #333;line-height: 22px;">
                北京朝阳区三环到四环之间
              </span>
            </div>
            <div>···</div>
          </div>
          <div class="coupon_container_up1_desc" style="color:#e4393c">现货</div>
          <div class="coupon_container_up1" style="height:25%">
            <div>运费</div>
            <div>
              <span style="font-size: 14px;color: #333;line-height: 22px;">
                在线支付免运费
              </span>
            </div>
            <div style="visibility:hidden">···</div>
          </div>
        </div>
        <div class="afterSale" style="height:21%;">
          <div> <span class="el-icon-circle-check"></span><span>商家发货&售后</span></div>
          <div><span class="el-icon-circle-check"></span><span>7天无理由退货</span></div>
          <div><span class="el-icon-circle-check"></span><span>送运费险</span></div>
        </div>
      </div>
    </div>

    <!---->
    <div style="width:100%;background-color:red;margin-top:50px" >123</div>
  </div>
</template>

<script>
// 商品详情
export default {
  name: "goodsdetail",
  data() {
    return {
      msg: "1999.80"
    };
  },
  computed: {
    priceleft() {
      return Math.floor(this.msg);
    },
    priceright() {
      for (let i = 0; i < this.msg.length; i++) {
        if (this.msg[i] == ".") {
          let indexPoint = i + 1;
          let a = this.msg.substring(indexPoint);
          return a;
        }
      }
    }
  },
  mounted() {
    var mySwiper = new Swiper(".indexlz", {
      pagination: {
        el: ".swiper-pagination"
      },
      autoplay: false,
      loop: true
    });
  },
  created() {
    console.log(this.$store.state.goodDetails);
  }
};
</script>

<style scoped>
.goodsdetail {
  width: 100%;
  height: 100%;
  background-color: rgb(232, 232, 237);
}

.topBanner {
  height: 43%;
}

.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-container {
  --swiper-theme-color: #e93b3d;
  /* --swiper-pagination-color: #00ff33; */ /* 两种都可以 */
}

.swiper-wrapper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
}

.double11 {
  width: 100%;
  height: 7.5%;
}

.double11 img {
  width: 100%;
  height: 100%;
}

.goods_price_context {
  width: 100%;
  height: 7.8%;
  padding: 0 8px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.goods_price {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
}

.goods_price div:nth-child(1) {
  margin-top: 8px;
}

.goods_price div:nth-child(2) {
  width: 24%;
  height: 100%;
  display: flex;
  font-size: 12px;
}

.goods_price_left {
  color: #e4393c;
  font-weight: 700;
  display: inline-block;
  padding-bottom: 10px; 
}

.goods_price_left span strong {
  font-size: 22px;
}

.goods_price_right_left {
  width: 60%;
  height: 100%;
  color: #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goods_price_right_right {
  width: 40%;
  height: 100%;
  color: #999999;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goods_desc {
  width: 100%;
  height: 13.5%;
  padding: 0 8px 10px 8px;
  background-color: #fff;
}

.goods_desc_container {
  width: 100%;
  height: 100%;
}

.goods_desc_container p:nth-child(1) {
  color: rgb(51, 51, 51);
  overflow: hidden;
  font-size: 16px;
  font-weight: bold;
  line-height: 22px;
  height: 52%;
}

.goods_desc_container p:nth-child(1) img {
  width: 10%;
  height: 36%;
  margin-right: 8px;
}

.goods_desc_container p:nth-child(2) {
  font-size: 12px;
  color: rgb(170, 168, 168);
  margin-top: 10px;
}

.goods_desc_container p:nth-child(2) span {
  color: rgb(228, 57, 60);
  border-bottom: 1px solid rgb(228, 57, 60);
}

.coupon {
  width: 100%;
  height: 13%;
  margin-top: 10px;
  background: #fff;
  padding-left: 8px;
}

.coupon_container {
  width: 100%;
  height: 100%;
}

.coupon_container_up {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
  align-items: center;
  font-size: 12px;
}

.coupon_container_up div:nth-child(2) {
  flex: 1;
  margin-left: 10px;
}

.coupon_container_up div:nth-child(1) {
  flex-shrink: 0;
  color: rgb(153, 153, 153);
}

.coupon_container_up div:nth-child(3) {
  flex-shrink: 0;
  font-size: 25px;
  color: rgb(102, 102, 102);
}

.coupon_container_down {
  width: 100%;
  height: 50%;
  padding-right: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
}

.coupon_container_down div:nth-child(2) {
  flex: 1;
  margin-left: 10px;
  color: rgb(51, 51, 51);
}

.coupon_container_down div:nth-child(1) {
  flex-shrink: 0;
  color: rgb(153, 153, 153);
}

.coupon_container_down div:nth-child(3) {
  flex-shrink: 0;
  font-size: 25px;
  color: rgb(102, 102, 102);
}



.coupon_container_up1 {
  width: 100%;
  height: 34%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 8px;
}

.coupon_container_up1_desc {
  width: 100%;
  padding-left: 8.5%;
  color: rgb(153, 153, 153)
}

.coupon_container_up1 div:nth-child(2) {
  flex: 1;
  margin-left: 10px;
}

.coupon_container_up1 div:nth-child(1) {
  flex-shrink: 0;
  color: rgb(153, 153, 153);
}

.coupon_container_up1 div:nth-child(3) {
  flex-shrink: 0;
  font-size: 25px;
  color: rgb(102, 102, 102);
}
.alreadylesect {
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #f5f5f5;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30%;
  flex-direction: column;
}

.afterSale {
  display: flex;
  justify-content: flex-start;
  align-items: center
}

.afterSale div{
  margin-left: 8px;
  font-size: 12px;
  color: rgb(153, 153, 153);
  position: relative;
  width: 25%;
  height: 38%;
}

.afterSale div span:nth-child(2) {
  position: absolute;
  left: 15px;
}
.el-icon-circle-check{
  vertical-align:center;
  color: #e93b3d;
  margin-right: 5px;
  line-height: 12px;
  position: absolute;
  bottom: 3px
}
</style>
