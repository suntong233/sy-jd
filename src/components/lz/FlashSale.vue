<template>
  <div class="flashsale">
    <div class="flashsale_up">
      <div class="flashsale_up_ms" @click="catmore">
        <img src="/lz/images/ms.png" />
      </div>

      <div class="flashsale_up_time" style="width:60px;">16点场</div>

      <div class="flashsale_up_countdown">
          <div class="flashsale_up_countdown_item">
                {{hour}}
          </div>
          <span class="flashsale_up_countdown_item_span">:</span>

           <div class="flashsale_up_countdown_item">
               {{minutes}}
          </div>
          <span class="flashsale_up_countdown_item_span">:</span>

           <div class="flashsale_up_countdown_item">
                {{second}}
          </div>
         
     </div>

      <div class="flashsale_up_more_ms" @click="catmore">
        更多秒杀
        <div class="flashsale_up_more_ms_circle">
          <img src="/lz/images/right.png" />
        </div>
      </div>
    </div>
    <div class="flashsale_down">
      <div class="flashsale_down_container">
        <div class="item" v-for="(item) in flashsale_list" :key="item.id" @click="catmore">
          <div class="item_up">
            <img :src="item.img" />
          </div>
          <div class="item_down">
            <span class="nowprice">
               <span>￥</span>
              <span class="nowprice_number">{{item.nowPrice}}</span>
            </span>
            <span class="preprice">
              <span>￥</span>
              <span class="preprice-number">{{item.prePrice}}</span>
            </span>
          </div>
        </div>
        <div class="cat_more">
          <div class="circle" @click="catmore">
            <img src="/lz/images/left.png" />
          </div>查看更多
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlashSale",
  data() {
    return {
      day:'',
      hour:'',
      minutes:'',
      second:'',
      flashsale_list: [
        {
          id: 1,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t2491/181/2574460450/105743/229f26b4/570f173aN1a621481.jpg.dpg",
          nowPrice: 5998,
          prePrice: 8999
        },
        {
          id: 2,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/77107/16/12806/122156/5da415d9E9ca34dfc/a2f355e248b471c4.png.webp",
          nowPrice: 109,
          prePrice: 129
        },
        {
          id: 3,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/55987/14/12716/86190/5d9c37e6E0f1ba2a3/c350ba85d31877e0.jpg.dpg",
          nowPrice: 185,
          prePrice: 429
        },
        {
          id: 4,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/68592/12/2824/498668/5d102226E180583a5/fa253799ab67feb0.jpg.dpg",
          nowPrice: 48.8,
          prePrice: 54.9
        },
        {
          id: 5,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/34108/33/7080/220825/5cc01becEc9cd2853/8c6a07fbbe88aaf5.jpg.dpg",
          nowPrice: 3899,
          prePrice: 4199
        },
        {
          id: 6,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/65633/23/12667/180634/5d9ea477E3bf834a5/1660bd2ba16cc93c.jpg.dpg",
          nowPrice: 188,
          prePrice: 626
        },
        {
          id: 7,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/70411/34/12553/83600/5d9db4b7E87f2b179/6499d8b36f41163d.jpg.dpg",
          nowPrice: 129,
          prePrice: 169
        },
        {
          id: 8,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/81933/40/12556/203739/5d9d69bdE83520ab1/4c589c648cd4cd0a.jpg.dpg",
          nowPrice: 89,
          prePrice: 209
        },
        {
          id: 9,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t1/61394/7/12425/108292/5d9d3af3Ecb71120c/9f7c8e1ec38189b3.jpg.dpg",
          nowPrice: 79,
          prePrice: 128
        },
        {
          id: 10,
          img:
            "//img14.360buyimg.com/n1/s150x150_jfs/t13231/167/907633607/191495/debb9c6/5a16ae95N69bd64ec.jpg.dpg",
          nowPrice: 109,
          prePrice: 189
        }
      ]
    };
  },

  created() {
    this.countTime()
  },

  methods:{
    countTime: function() {
      let now = new Date().getTime()
      let future = new Date("2019-11-11 00:00:00").getTime()
      let diff = future - now
       if (diff >= 0) {
        this.day = Math.floor(diff / 1000 / 60 / 60 / 24) 
        this.hour = Math.floor((diff / 1000 / 60 / 60) % 24) 
        this.minutes = Math.floor((diff / 1000 / 60) % 60)
        this.second = Math.floor((diff / 1000) % 60)
    
        this.hour = this.hour < 10 ? "0" + this.hour : this.hour
        this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes
        this.second = this.second < 10 ? "0" + this.second : this.second
      }
      setTimeout(this.countTime, 1000)
    },

    catmore() {
      window.open("https://wqs.jd.com/portal/wx/seckill_m/index.shtml?st=1")
    }
  }
};
</script>

<style scoped>
.flashsale {
  width: 100%;
  height: 165px;
  padding: 0 8px;
}

.flashsale_up {
  position: relative;
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  background-color: #fff;
}

.flashsale_up_ms {
  height: 37px;
  width: 90px;
  padding: 0 5px;
  background-color: #fff;
}

.flashsale_up_time {
  font-size: 12px;
  color: #232326;
  padding: 0 5px;
  font-weight: 700;
  display: block;
  margin-right: 6px;
}

.flashsale_up_countdown {
    font-size: 10px;
}

.flashsale_up_countdown {
  width: 66px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.flashsale_up_countdown_item {
    width: 18px;
    height: 16px;
    border: 1px solid rgb(239, 239, 239);
    display: flex;
    /* justify-content: center; */
    align-items: center;
}

.flashsale_up_countdown_item_span {
    width: 6px;
    line-height: 16px;
    height: 16px;
    font-size: 12px;
    text-align: center;
    color:#232326 ;
}
.flashsale_up_more_ms {
  position: absolute;
  right: 10px;
  color: #f23030;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 65px;
}

.flashsale_down {
  height: 126px;
  overflow-x: scroll;
  border-radius: 0 0 8px 8px;
}

.flashsale_down_container {
  padding-left: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
}

.flashsale_down::-webkit-scrollbar {
  display: none;
}

.flashsale_down_container .item {
  width: 84.3px;
  height: 100%;
  background-color: #fff;
  cursor: pointer;
}

.flashsale_down_container .item .item_up {
  width: 100%;
  height: 73px;
  text-align: center;
}

.flashsale_up_more_ms_circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e93b3d;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flashsale_up_more_ms_circle img {
  width: 10px;
  height: 10px;
}

.flashsale_down_container .item .item_up img {
  width: 73px;
  height: 100%;
}

.flashsale_down_container .item .item_down {
  width: 100%;
  height: 43px;
  text-align: center;
  display: flex;
  flex-direction: column;
}

.flashsale_down_container .item .item_down .nowprice {
  margin-top: 10px;
  display: block;
  color: #e93b3d;
  font-size: 16px;
  line-height: 16px;
  height: 16px;
  text-align: center;
  font-weight: bold
}

.flashsale_down_container .item .item_down .preprice {
  color: #999;
  font-size: 12px;
  line-height: 12px;
  margin: 4px 0 11px;
  text-align: center;
  padding: 0 2px;
  display: inline-block;
  text-decoration: line-through;
}

.flashsale_down_container .cat_more {
  margin: 0 0 0 20px;
  padding: 5px 0;
  text-align: center;
  width: 22px;
  text-align: center;
  color: rgb(100, 95, 95);
  font-size: 12px;
  height: 90px;
  background-color: #f5f5f5;
  margin-right: 10px;
}

.flashsale_down_container .cat_more .circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #e93b3d;
  margin: 0 auto;;
  display: flex;
  align-items: center;
  justify-content: center
}
</style>