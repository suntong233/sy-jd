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
          <div class="swiper-slide" v-for="item in imgArr" :key="item">
            <img v-lazy="item"/>
          </div>
         <!--  <div class="swiper-slide">
            <img
              src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/55653/29/6964/114052/5d491ed7Ec454bd4c/5767440fa1fbc377.jpg!q70.dpg.webp"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="//m.360buyimg.com/mobilecms/s843x843_jfs/t1/52854/37/7018/100673/5d491ed7E19a2d468/94b075ec648fb3f0.jpg!q70.dpg.webp"
            />
          </div> -->
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
        <div class="goods_price_left" style="font-size:18px;">
          ￥<strong>{{msg}}</strong>
         <span v-if="isShow" style="margin-left:5px;font-size:6px;color:grey;text-decoration: line-through">￥{{premsg}}</span>
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
          />{{goods_desc}}
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
    <div class="arrival">
      <div class="arrival_container">
        <div class="arrival_container_1">
          <div>已选</div>
          <div class="arrival_container_1_desc">
            1.7G粉色脚丫,1个
            <br />
            <span class="baozhang">本商品支持保障服务，点击可选服务</span>
          </div>
          <div>···</div>
        </div>

        <div class="arrival_container_2">
          <div>
            <span>送至</span>
            <br />
            <span>运费</span>
          </div>

          <div>
            <span>北京朝阳区三环到四环之间</span>

            <span style="padding:3px 0">
              <span style="color:#e4393c">现货</span>
              <span style="color:rgb(170, 168, 168);margin-left:5px;">由商家从 广西贵港市 发货</span>
            </span>

            <span>在线支付免运费</span>
          </div>

          <div>
            <span>···</span>
          </div>
        </div>

        <div class="arrival_container_3">
          <div>
            <span>
              <span class="el-icon-circle-check"></span>
              <span>商家发货&售后</span>
            </span>

            <span>
              <span class="el-icon-circle-check"></span>
              <span>7天无理由退货</span>
            </span>

            <span>
              <span class="el-icon-circle-check"></span>
              <span>送运费险</span>
            </span>
          </div>
          <div>···</div>
        </div>
      </div>
    </div>

    <div style="width:100%;height:10px;background-color: rgb(232, 232, 237);"></div>
    <!--好评-->
    <div class="evaluate">
      <div class="evaluate_1">
        <div class="evaluate_1_left">
          <span class="pingjia">评价</span>
          <span class="haoping">好评</span>
          <span class="baifenbai">100%</span>
        </div>
        <div class="evaluate_1_right">
          <span class="gong">共</span>
          <span class="wushijia" style="position:relative">
            50
            <span style="position:absolute;bottom:1px;">+</span>
          </span>
          <span class="tiao">条</span>
          <span class="dayuhao">
            <img src="/lz/images/dyh.png" />
          </span>
        </div>
      </div>
      <div class="user_tag">
        <div>容量超大(1)</div>
        <div>外形美观(2)</div>
        <div>十分好用(3)</div>
      </div>
      <div class="evaluate_2">
        <div class="evaluate_2_container">
          <div class="history_info">
            <div class="history_info_left">
              <span>
                <img
                  style="width:28px;geight:28px"
                  src="//img11.360buyimg.com/jdphoto/s40x40_jfs/t1/25255/18/10701/1678/5c89f892E78c04688/684d63c0d68e39b1.png"
                />
              </span>
              <span style="font-size:12px;margin-left:10px;">jd1234</span>
              <span style="margin-left:5px;margin-top:-2px;">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
              </span>
            </div>
            <div class="history_info_right">2019-09-07</div>
          </div>
          <div class="evaluate_2_desc">如收手二个，木头的，没有异味，安装有点点吃力，（主要是女生）很稳，没有摇晃感。会推荐需要的人，祝店家生意兴隆！</div>
          <div class="evaluate_2_img">
            <img
              src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/78224/21/9429/283165/5d733204E743f8752/0524758fddfbdc00.jpg!cc_100x100!q70.dpg.webp"
            />
            <img
              src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/76309/25/9549/234449/5d733206Eee24e668/88e1a217b0381fb1.jpg!cc_100x100!q70.dpg.webp"
            />
            <img
              src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/77327/22/9480/248861/5d733209Ef8b1108a/2208b3b0d1500137.jpg!cc_100x100!q70.dpg.webp"
            />
          </div>
        </div>
      </div>

      <div class="evaluate_2">
        <div class="evaluate_2_container">
          <div class="history_info">
            <div class="history_info_left">
              <span>
                <img
                  style="border-radius:50%;width:28px;height:28px"
                  src="//storage.360buyimg.com/i.imageUpload/7a7a6835343333303931343331343530313831303639333032_sma.jpg"
                />
              </span>
              <span style="font-size:12px;margin-left:10px;">jd1234</span>
              <span style="margin-left:5px;margin-top:-2px;">
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
                <i class="el-icon-star-on"></i>
              </span>
            </div>
            <div class="history_info_right">2019-10-07</div>
          </div>
          <div
            class="evaluate_2_desc"
          >很好的一个产品，就像小时候搭积木，只要耐下心来，一点一点装上以后，很漂亮，很牢固，运来的时候，纸箱子有一点坏了客服人员及时回答问题，服务态度很满意。一个人装上，两个共用了两个多小时。</div>
          <div class="evaluate_2_img">
            <img
              src="//img30.360buyimg.com/shaidan/s128x96_jfs/t30838/117/1592810850/121699/a9a5ad01/5ce51cbbNaa69c77e.jpg!cc_100x100!q70.dpg.webp"
            />
            <img
              src="//img30.360buyimg.com/shaidan/s128x96_jfs/t1/74437/23/1455/226086/5cfc80abEa2d53afb/3fe467e3680d31a9.jpg!cc_100x100!q70.dpg.webp"
            />
          </div>
        </div>
      </div>
      <div class="evaluate_all">
        <div class="evaluate_all_container">
          <span>查看全部评价</span>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
    </div>

    <div style="width:100%;height:10px;background-color: rgb(232, 232, 237);"></div>

    <!--问答-->
    <div class="question_answer">
      <div class="question_answer1">
        <div>问答专区</div>
        <div>
          查看全部评价
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>

      <div class="question_answer2">
        <div style="flex:1">
          <span
            style="color:#fff;border-radius:5px;padding:0 2px 0 2px;background-color:rgb(255,150,0);margin-right:2%"
          >Q</span>您好，刚才我要的衣柜，尺寸搞错
        </div>
        <div style="color:rgb(153, 153, 153)">暂无回答</div>
      </div>

      <div class="question_answer2">
        <div style="flex:1">
          <span
            style="color:#fff;border-radius:5px;padding:0 2px 0 2px;background-color:rgb(255,150,0);margin-right:2%"
          >Q</span>你好，这个衣柜有1.3m 吗？
        </div>
        <div style="color:rgb(153, 153, 153)">暂无回答</div>
      </div>
    </div>

    <div style="width:100%;height:10px;background-color: rgb(232, 232, 237);"></div>
    <!--店铺-->
    <div class="business">
      <div class="business_son1">
        <img
          style="width:90px;height:30px"
          src="//img12.360buyimg.com/cms/jfs/t1/30564/15/13266/23443/5cb9980eE3bb739fc/aa2cd2e12af2421b.jpg!q70.dpg.webp"
        />
        <span style="margin-right:5px">华哩哩旗舰店</span>
        <img
          style="width:60px;height:15px"
          src="//img11.360buyimg.com/jdphoto/s112x28_jfs/t1/34687/34/7550/4081/5cd14247E09fbbaf1/8ba9682b55f4a61d.png"
        />
      </div>
      <div class="business_son2">
        <div>
          <div>
            <span>11489</span>
            <span style="color:grey">粉丝人数</span>
          </div>
          <div>
            <span>33</span>
            <span style="color:grey">全部商品</span>
          </div>
        </div>
        <div class="business_son2_right">
            <span style="color: #999;"> 评价 <span style="color: #18c461;">8.68 | 低</span></span>
            <span style="color: #999;"> 物流 <span style="color: #e4393c;">9.66 | 高</span></span>
            <span style="color: #999;"> 售后 <span style="color: #e4393c;">9.20 | 高</span></span>
           
            </div>
      </div>
      <div class="business_son3">
        <div>
          <span>
            <i class="el-icon-star-off"></i>
          </span>
          <span>关注店铺</span>
        </div>
        <div>
          <span>
            <i class="el-icon-s-shop"></i>
          </span>
          <span>进入店铺</span>
        </div>
      </div>
    </div>
    <!--  -->
  </div>
</template>

<script>
// 商品详情
export default {
  name: "goodsdetail",
  data() {
    return {
      msg: "",
      imgArr:[],
      goods_desc:"",
      premsg:"",
      isShow:false
    };
  },
 /*  computed: {
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
  }, */
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
    this.imgArr =  this.$store.state.goodDetails.imgUrls

    if(typeof(this.$store.state.goodDetails.price) == "number") {
        this.msg = this.$store.state.goodDetails.price
    } else {
      this.msg = this.$store.state.goodDetails.price[0]
      this.premsg = this.$store.state.goodDetails.price[1]
      this.isShow = true
    }
    console.log(this.msg)
    
    this.goods_desc = this.$store.state.goodDetails.name
    console.log(this.goods_desc)
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
  height: 400px;
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
  height: 55px;
}

.double11 img {
  width: 100%;
  height: 100%;
}

.goods_price_context {
  width: 100%;
  height: 57px;
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
  height: 99px;
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
  margin-bottom: -3px;
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
  margin-top: 10px;
  background: #fff;
  padding-left: 8px;
  height: 95px;
}

.coupon1 {
  width: 100%;
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
  color: rgb(153, 153, 153);
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
  align-items: center;
}

.afterSale div {
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
.el-icon-circle-check {
  vertical-align: center;
  color: #e93b3d;
  margin-right: 5px;
  line-height: 12px;
  position: absolute;
  bottom: 6px;
}

.arrival {
  margin-top: 10px;
  background-color: #fff;
  padding-left: 8px;
  font-size: 12px;
}

.arrival_container_1 {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  padding: 10px 8px 10px 0;
  line-height: 18px;
}

.arrival_container_1 div:nth-child(1) {
  flex-shrink: 0;
  color: rgb(153, 153, 153);
}

.arrival_container_1 div:nth-child(2) {
  flex: 1;
  margin-left: 10px;
}

.arrival_container_1 div:nth-child(3) {
  flex-shrink: 0;
  color: rgb(102, 102, 102);
  font-size: 25px;
}

.arrival_container_1_desc {
  font-size: 13px;
}

.baozhang {
  font-size: 12px;
  color: #8f8787;
}

.arrival_container_2 {
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  padding: 15px 8px 15px 0;
}

.arrival_container_2 div:nth-child(1) {
  flex-shrink: 0;
  color: rgb(153, 153, 153);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.arrival_container_2 div:nth-child(2) {
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
}

.arrival_container_2 div:nth-child(3) {
  flex-shrink: 0;
  color: rgb(102, 102, 102);
  font-size: 25px;
  display: flex;
  margin-top: -10px;
}

.arrival_container_3 {
  display: flex;
  justify-content: space-between;
  padding: 10px 8px 4px 0;
  position: relative;
}

.arrival_container_3 div:nth-child(1) {
  color: rgb(153, 153, 153);
  font-size: 12px;
  display: flex;
  justify-content: space-between;
}
.arrival_container_3 div:nth-child(1) span:nth-child(1) {
  margin-bottom: 6px;
}

.arrival_container_3 div:nth-child(1) span span:nth-child(2) {
  margin-left: 15px;
}

.arrival_container_3 div:nth-child(1) span {
  margin-right: 5px;
}

.arrival_container_3 div:nth-child(2) {
  color: rgb(102, 102, 102);
  font-size: 25px;
  margin-top: -10px;
}

.evaluate {
  width: 100%;
  background: #fff;
}

.evaluate_1 {
  display: flex;
  padding: 13px 8px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #f5f5f5;
}
.evaluate_1 div:nth-child(1) {
  width: 30%;
}

.pingjia {
  font-size: 16px;
  color: #333;
  font-weight: 500;
}

.haoping {
  color: #e4393c;
  font-size: 12px;
  margin-left: 13%;
}

.baifenbai {
  color: #e4393c;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5%;
}

.evaluate_1 div:nth-child(2) {
  font-size: 12px;
  width: 20%;
  display: flex;
  justify-content: flex-end;
  color: rgb(154, 154, 154);
  align-items: center;
  line-height: 22px;
}

.gong {
  margin-right: 6%;
}

.wushijia {
  margin-right: 16%;
}

.tiao {
  margin-right: 6%;
}

.dayuhao {
  display: inline-block;
  display: flex;
  align-items: center;
}
.dayuhao img {
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.evaluate_2 {
  width: 100%;
  padding-left: 8px;
  background-color: #fff;
}

.evaluate_2_container {
  width: 100%;
  padding: 16px 8px 16px 0;
  border-bottom: 1px solid #f5f5f5;
}

.history_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.history_info_right {
  font-size: 12px;
  color: rgb(154, 154, 154);
  display: flex;
  justify-content: center;
  align-items: center;
}

.history_info_left {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-icon-star-on {
  color: #e93b3d;
}

.evaluate_2_desc {
  font-size: 14px;
  color: rgb(51, 51, 51);
  margin-top: 10px;
}
.evaluate_2_img {
  margin-top: 10px;
}

.evaluate_2_img img {
  margin-right: 8px;
}

.user_tag {
  padding: 15px 8px 0px 8px;
  display: flex;
  font-size: 12px;
}

.user_tag div {
  padding: 10px;
  background-color: rgb(253, 240, 240);
  border-radius: 5px;
  margin-right: 3%;
  color: rgb(102, 102, 102);
}

.evaluate_all {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.evaluate_all_container {
  border: 1px solid rgb(237, 237, 237);
  border-radius: 20px;
  font-size: 12px;
  padding: 5px 3px 5px 8px;
  color: rgb(102, 102, 102);
}

.question_answer {
  width: 100%;
}

.question_answer1 {
  width: 100%;
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgb(75, 61, 61);
  border-bottom: 1px solid #f5f5f5;
}

.question_answer1 div:nth-child(2) {
  color: rgb(102, 102, 102);
}

.question_answer2 {
  width: 100%;
  padding: 10px 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: rgb(75, 61, 61);
}

.business {
  padding: 8px;
  width: 100%;
}

.business_son1 {
  display: flex;
  align-items: center;
  font-size: 12px;
}

.business_son1 img:nth-child(1) {
  margin-right: 8px;
}

.business_son3 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.business_son3 div {
  border: 1px solid #c5bdbd;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  font-size: 12px;
}

.business_son2 {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
}

.business_son2 div:nth-child(1) {
  width: 75%;
  display: flex;
}

.business_son2 div:nth-child(1) div {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
}

.business_son2 div:nth-child(1) div:nth-child(1) {
   border-right: 1px solid #f5f5f5
}

.business_son2_right {
  width: 25%;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-end
}
</style>
