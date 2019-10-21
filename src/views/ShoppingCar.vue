<template>
  <div class="shoppingCar">
    <Mineheader typetitle="购物车"></Mineheader>
    <div v-if="!this.$store.state.loginModule.islogin" class="loginT">登录后可同步账户购物车中的商品<div @click="$router.push('/login')" class="toLogin">登录</div></div>
    <div v-if="this.$store.state.shoppingCarModule.shoppingCarList.length == 0" class="shoppingContainer-none">
      <img style="width:90px;margin-bottom:15px;" src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png">
      <div>购物车空空如也,去逛逛吧~</div>
    </div>
    <FlashSale v-if="this.$store.state.shoppingCarModule.shoppingCarList.length == 0"></FlashSale>
    <div class="shoppingContainer">
      <div class="shoppingItemsBox" v-for="item in renderData" :key="item.id">
        <div @click="selectItem(item)" class="shoppingItemsBox-shop">
          <div v-if="item.isSelect" class="sellectall"></div>
          <div v-else class="unsellectall"></div>
          <div class="shoppingItemsBox-shopcontent">
            <div v-if="item.info.groupL=='宠物生活'">
              <div style="display:inline-block;background-image: url(//wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_131a0187.png);background-size: 116px 110px;width:18px;height:13px;background-position: -61px -48px;"></div>
              宠聪宠物旗舰店
              <img style="width:13px;height:13px" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23CCC' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E">
            </div>
            <div v-else-if="item.info.groupL=='电脑办公'">
              <div style="display:inline-block;background-image: url(//wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_131a0187.png);background-size: 110px 106px;width:18px;height:13px;background-position: 0 -68px;"></div>
              京东自营
            </div>
            <div v-else>
              <img style="width:14px;height:14px" src="/images/wanggaohan.png">
              王高寒专卖店 
              <img style="width:13px;height:13px" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 20'%3E%3Cpath fill='%23CCC' fill-rule='evenodd' d='M2 20c-.8 0-1.5-.5-1.8-1.2-.3-.8-.2-1.6.4-2.2L7.2 10 .6 3.4c-.8-.8-.8-2 0-2.8.8-.8 2-.8 2.8 0l8 8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z'/%3E%3C/svg%3E"></div>
          </div>
        </div>
        <div class="shoppingItemsBox-top">
          <div @click="selectItem(item)" class="shoppingItemsBox-selectBtn">
            <div v-if="item.isSelect" class="sellectall"></div>
            <div v-else class="unsellectall"></div>
          </div>
          <div class="shoppingItemsBox-Img">
            <img @click="toGoodDetails(item.info)" v-lazy="item.info.imgUrl">
          </div>
          <div class="shoppingItemsBox-Info">
            <div @click="toGoodDetails(item.info)" class="shoppingItemsBox-Info-name">{{ item.info.name }}</div>
            <div @click="showmsg(item)" class="shoppingItemsBox-Info-type">
              {{ item.info.type }}
              <div class="shoppingItemsBox-Info-type-icon"></div>
            </div>
            <div class="shoppingItemsBox-Info-price">
              <div class="shoppingItemsBox-Info-pricence">
                ￥{{ item.info.price.length? item.info.price[0] : item.info.price }}
              </div>
              <div class="shoppingItemsBox-Info-price-control">
                <span v-if="item.amount>1" @click="deleteSc(item.id, item.amount)">-</span>
                <span @click="changeSc()">{{ item.amount }}</span>
                <span @click="addSc(item.info)">+</span>
              </div>
            </div>
          </div>
        </div>
        <div class="shoppingItemsBox-bottom">
          <div style="margin-right:15px;">移入关注</div>
          <div @click="openDelete(item)" style="margin-left:5px;">删除</div>
        </div>
      </div>
    </div>
    <div class="maybeyouwant">
      <div class="maybeyouwant-div1"></div>
      <span class="maybeyouwant-span1"></span>
      <span>可能你还想要</span>
      <span class="maybeyouwant-span2"></span>
      <div class="maybeyouwant-div2"></div>
    </div>
    <div class="maybeyouwant-container">
      <Recommend sptab="maybe"></Recommend>
    </div>
    <div @click.self="closeMsgbox" v-if="showmsgbox" class="msgBox">
      <div class="closeMsgbox-content">
        <img class="closeMsgbox-img" v-lazy="tempitem.info.imgUrl">
        <div class="closeMsgbox-info">
          <div @click="closeMsgbox" class="closeMsgbox-clos"></div>
            <div class="shoppingItemsBox-Info-pricence">
              ￥{{ tempitem.info.price.length? tempitem.info.price[0] : tempitem.info.price }}
            </div>
            <div style="margin-top:10px;color:#999;font-size:15px;">
              已选{{tempitem.info.type}}{{tempitem.amount}}个
            </div>
        </div>
        <div style="padding:20px;color:#333">颜色</div>
        <div style="padding-left:20px;color:#666;font-size:14px">
          <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">粉色</span>
          <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">绿色</span>
          <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">蓝色</span>
        </div>
        <div @click="closeMsgbox" class="closeMsgbox-confirm">确认</div>
      </div>
    </div>
    <div v-if="renderData.length!==0" class="motaiShopping">
      <div class="allselected">
        <div @click="unsellectAll"  v-if="isselectAll" class="sellectall"></div>
        <div @click="sellectAll" v-else class="unsellectall"></div>
        <div style="color:#999;font-size:12px">全选</div>
      </div>
      <div class="zongji">总计：<span style="color: #8f5331;">￥{{ allprice }}</span>元</div>
      <div class="jiesuan">去结算{{ allitems }}件</div>
    </div>
    <el-dialog
      style="positation:absolute;top:10%;"
      title="提示"
      :visible.sync="dialogVisible"
      width="80%"
      :before-close="handleClose">
      <div style="display:flex;justify-content: center;"><div class="deleteicon"></div></div>
      <div style="text-align:center">是否确认删除此商品</div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="thedelete">确 定</el-button>
      </span>
    </el-dialog>
    <div style="height:50px" ></div>
    <BackTop></BackTop>
  </div>
</template>

<script>
import Mineheader from "../components/st/MineHeader.vue";
import FlashSale from "../components/lz/FlashSale.vue";  // 京东秒杀
import Recommend from "../components/public/Recommend.vue"; // 为你推荐
import BackTop from "../components/st/BackTop/NormalBack.vue"; // 回到顶部

const components = {
  Mineheader,
  FlashSale,
  Recommend,
  BackTop
};
// 购物车
export default {
  name: "shoppingcar",
  data () {
    return {
      renderData: [],
      showmsgbox: false,
      tempitem: {},
      dialogVisible: false,
      isselectAll: true
    }
  },
  computed: {
      allitems(){
        if(this.$store.state.shoppingCarModule.shoppingCarList.length == 0){
          return 0
        } 
        let res = 0
        this.$store.state.shoppingCarModule.shoppingCarList.forEach(item=>{
          if(item.isSelect){
            res += item.amount
          }
        })
        return res
      },
      allprice(){
        if(this.$store.state.shoppingCarModule.shoppingCarList.length == 0){
          return 0
        } 
        let res = 0
        this.$store.state.shoppingCarModule.shoppingCarList.forEach(item=>{
          if(item.isSelect){
          res += (item.amount*(item.info.price.length?item.info.price[0]:item.info.price))
          }
        })
        return res
      }
  },  
  methods: {
      selectItem(item) {
        item.isSelect = !item.isSelect 
      },
      unsellectAll() {
        this.isselectAll = false
        this.renderData.forEach(item=>{
          item.isSelect = false
        })
      },
      sellectAll(){
        this.isselectAll = true
        this.renderData.forEach(item=>{
          item.isSelect = true
        })
      },
      thedelete(){
        this.$store.commit("scDel",{id: this.tempitem.id, type: "all"});
        this.dialogVisible = false
        this.$router.push("/temp")
      },
      openDelete(item){
        this.tempitem = item
        this.dialogVisible = true
      },
      handleClose(done) {
        this.dialogVisible = false
      },
      closeMsgbox(){
        this.showmsgbox = false
      },
      showmsg(item){
        this.tempitem = item
        this.showmsgbox = true
      },
      deleteSc(id,amount){
        if( amount == 1 ){
          location.reload()
        }
        this.$store.commit("scDel",{id: id, type: "one"});
      },
      changeSc(){

      },
      addSc(item){
        this.$store.commit("scAdd",item);
      },
      toGoodDetails(item){
          this.$store.commit("goGoodsPage",item);
          this.$router.push("/goods");  
      }
  },
  created () {
      window.scrollTo(0, 0)
      this.renderData = [...this.$store.state.shoppingCarModule.shoppingCarList]
  },
  components
};
</script>

<style scoped>
.shoppingCar{
  width: 100%;
  height: 100%;
  background-color: rgb(247,247,247);
}
.shoppingContainer{
  width: 100%;
  display: flex;
  flex-direction:column; 
}
.maybeyouwant{
  position: relative;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: rgb(201, 201, 201);
  display: flex;
  align-items: center;
  justify-content: center;
}
.shoppingItemsBox{
  width: 100%;
  height: 202px;
  margin: 10px 0; 
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.shoppingItemsBox:nth-of-type(1){
  margin-top: 0; 
}
.shoppingItemsBox:nth-last-of-type(1){
  margin-bottom: 0;
}
.maybeyouwant-span1{
  display: block;
  position: relative;
  margin-right: 8px;
  width: 4px;
  transform: rotate(45deg);
  background-color: rgb(201, 201, 201);
  height: 4px;
}
.maybeyouwant-div1{
  width: 10%;
  flex-grow: 1;
  background-color: rgb(201, 201, 201);
  height: 1px;
  margin-left: 10px;
}
.maybeyouwant-div2{
  width: 10%;
  flex-grow: 1;
  background-color: rgb(201, 201, 201);
  height: 1px;
  margin-right: 10px;
}
.maybeyouwant-span2{
  position: relative;
  margin-left: 8px;
  display: block;
  transform: rotate(45deg);
  width: 4px;
  background-color: rgb(201, 201, 201);
  height: 4px;
}
.shoppingItemsBox-shop{
  display: flex;
  padding-right: 10px;
  align-items: center;
  height: 30px;
  padding: 5px 0;
  position: relative;
}
.shoppingItemsBox-top{
  flex-grow: 1;
  display: flex;
  padding-right: 10px;
  align-items: center;
  position: relative;
}
.shoppingItemsBox-selectBtn{
  display: flex;
  align-items: center;
  height: 100%;
  width: 34px;
}
.shoppingItemsBox-Img{
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.shoppingItemsBox-Img>img{
  width: 100px;
  height: 100px;
}
.shoppingItemsBox-Info{
  height: 100%;
  position: absolute;
  left: 135px;
  padding: 5px 10px;
}
.shoppingItemsBox-bottom{
  display: flex;
  justify-content: flex-end;
  color: #999;
  font-size: 14px;
  padding-right: 10px;
  height: 30px;
  align-items: center;
}
.shoppingItemsBox-Info-name{
  width: 100%;
  margin-top: 5px;
  max-height: 43px;
  overflow: hidden;
  color: rgb(95, 95, 95);
}
.shoppingItemsBox-Info-type{
  position: relative;
  padding:4px 6px;
  font-size: 14px;
  color: #999;
  border-radius: 8px;
  background-color: rgb(247,247,247);
  margin: 4px 0;
}
.shoppingItemsBox-Info-type-icon{
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -5px;
  background-image: url(//wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_131a0187.png);
  background-position: -75px -68px;
  background-size: 116px 110px;
  width: 10px;
  height: 10px;
}
.shoppingItemsBox-Info-price{
  position: relative;
  padding:4px 0;
  font-size: 14px;
  height: 24px;
  margin: 2px 0;
}
.shoppingItemsBox-Info-pricence{
  color: #975541;
  font-weight: 600;
  font-size: 16px;
}
.shoppingItemsBox-Info-price-control{
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
}
.shoppingItemsBox-Info-price-control>span{
  display: inline-block;
  margin-left: 5px;
  border-radius: 4px;
  font-size: 15px;
  color: #999;
  font-weight: 600;
  text-align: center;
  line-height: 24px;
  background-color: rgb(247,247,247);
  height: 100%;
  width: 24px;
}
.msgBox{
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.closeMsgbox-content{
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 400px;
  background-color: #fff;
  animation: msgbox 500ms;
}
@keyframes msgbox{
  from{
    height: 0;
  }
  to{
    height: 400px;
  }
}
.closeMsgbox-confirm{
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 42px;
  line-height: 42px;
  background-color: #8f5331;
  color: #fff;
}
.closeMsgbox-img{
  position: absolute;
  width:100px;
  height: 100px;
  left: 20px;
  border-radius: 4px;
  top: -30px;
}
.closeMsgbox-info{
  margin-left: 120px;
  height: 70px;
  padding: 10px;
  position: relative;
}
.closeMsgbox-clos{
  position: absolute;
  top: 10px;
  right: 10px;
  width: 15px;
  height: 15px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeAgMAAABGXkYxAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURQAAAExpcQAAAAAAAIj0p4oAAAAEdFJOUyoABTO+u7yTAAAAc0lEQVQY02WPQQrAMAgE/Yz3kpcIpZJjId8Resqj0ld1Jc0e2hx0wI27yjGfCcF69tNk14QwqQPdi4kXQB0QB0RNAQ2i6ACIMAaggnNhdEwTmkKfUO8yvXwbr+mlH+CIYn5fC2lBU8ZYwRiV4XkOD/zd/gCRjlZfV3uniwAAAABJRU5ErkJggg==) no-repeat 50%;
}
.deleteicon{
    display: block;
    width: 50px;
    height: 50px;
    margin: 5px auto 10px;
    background-image: url(https://wq.360buyimg.com/fd/h5/wxsq_dev/order/images/sprite_dialog_img@2x_334edd73.png);
    background-size: 154px 102px;
    background-repeat: no-repeat;
    background-position: 0 0;
}
.motaiShopping{
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 50px;
  background-color: rgba(255, 255, 255, 0.9);
}
.zongji{
  position: absolute;
  right: 120px;
  height: 100%;
  width: 110px;
  color: rgb(128, 128, 128);
  font-size: 15px;
  text-align: center;
  line-height: 50px;
  font-weight: 600;
}
.jiesuan{
  position: absolute;
  right: 0;
  height: 100%;
  width: 110px;
  color: #fff;
  text-align: center;
  line-height: 50px;
  background-color: rgb(180, 89, 36);
}
.shoppingContainer-none{
  height: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.allselected{
  position: absolute;
  width:40px;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sellectall{
    background-image: url(//wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_131a0187.png);
    background-position: -80px -40px;
    background-size: 116px 110px;
    width: 20px;
    height: 20px;
}
.unsellectall{
    background-image: url(//wq.360buyimg.com/wxsq_trade/cart_vue/main/images/sprite.img_default_437_131a0187.png);
    background-position: 0 -48px;
    background-size: 116px 110px;
    width: 20px;
    height: 20px;
}
.maybeyouwant-container{
    width: 100%;
    background-color: rgb(246,246,246);
    position: relative;
}
.loginT{
  height: 42px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size:14px;
}
.toLogin{
  background-color: rgb(189, 70, 49);
  color: #fff;
  padding: 5px 15px;
  border-radius: 4px;
  margin-left: 10px;
}
.shoppingItemsBox-shopcontent{
  height: 100%;
  margin-left: 10px;
  font-size: 16px;
  color: #6e3b1e;
  font-weight: 700;
}
</style>
