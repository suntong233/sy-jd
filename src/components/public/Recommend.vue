<template>
    <div class="recommend-container">
        <div class="recommendBox">
            <div v-if="sptab!=='maybe'" class="recommendBox-title">
                <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            </div>
            <div class="recommendBox-main">
                <div @click="toGoodsInfoRouter(item)" v-for="item in renderData" :key="item.id" class="recommednBox-item">
                    <div class="recommednBox-itemImg">
                        <img v-lazy="item.imgUrl">
                    </div>
                    <div class="recommednBox-itemname">
                        <div style="height:50%;float:left;margin:0 3px">
                            <img style="height:100%" v-if="item.tab.length !== 0" :src="selectImg(item.tab)">
                        </div>
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="recommednBox-itemprice">
                        <div style="font-size:16px;color: #f23030;">￥{{ typeof item.price == "number"? item.price : item.price[0] }}</div>
                        <div v-if="sptab!=='maybe'" @click.stop="toSearchRouter(item.type)" style="font-size:14px;color: #686868;border:1px solid #ccc;padding:2px 4px;margin-right:5px">看相似</div>
                        <div @click.stop="showAdd(item)" v-else class="joinShoppingCar"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showMsg">
            <div @click.self="closeMsgbox" v-if="showMsg" class="msgBox">
                <div class="closeMsgbox-content">
                    <img class="closeMsgbox-img" v-lazy="trmpAddData.imgUrl">
                    <div class="closeMsgbox-info">
                    <div @click="closeMsgbox" class="closeMsgbox-clos"></div>
                        <div class="shoppingItemsBox-Info-pricence">
                        ￥{{ trmpAddData.price.length? trmpAddData.price[0] : trmpAddData.price }}
                        </div>
                        <div style="margin-top:10px;color:#999;font-size:15px;">
                        已选{{trmpAddData.type}}1个
                        </div>
                    </div>
                    <div style="padding:20px;color:#333">颜色</div>
                    <div style="padding-left:20px;color:#666;font-size:14px">
                    <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">粉色</span>
                    <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">绿色</span>
                    <span style="padding:5px 10px;background:rgb(247,247,247);margin-right:15px;border-radius:6px;">蓝色</span>
                    </div>
                    <div @click="closeMsgbox('add')" class="closeMsgbox-confirm">添加入购物车</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// 组件：为你推荐item
export default {
    name: "recommend",
    data () {
        return {
            renderData: [],
            showMsg: false,
            trmpAddData: []
        }
    },
    props: ["sptab"],
    created () {
        this.renderData = this.$store.state.goodsData
    },
    methods: {
        closeMsgbox(msg){
            this.showMsg = false;
            if(msg=="add"){
                this.scAdd(this.trmpAddData)
                this.$router.push("/temp")
            }
        },
        showAdd(item){
            this.trmpAddData = item
            this.showMsg = true;
        },
        selectImg(tabs){
            if(tabs[0] === "自营"){
                return "//img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png"
            } else if (tabs[0] === "京东物流") {
                return "//img11.360buyimg.com/jdphoto/s98x28_jfs/t16411/341/2502946085/2662/c4af0771/5aadf9daN1916b3f2.png"
            } else {
                return "//img11.360buyimg.com/jdphoto/s100x28_jfs/t15376/77/2643750731/2688/443ac7d3/5aadf9daNc1b92ee6.png"
            }
        },
        // 跳转到搜索成功页面 调用vuex的搜索模块的 goSearchPage 并传入type
        toSearchRouter(type) {
            this.$store.commit("goSearchPage",type);
            this.$router.push("/searchres");
        },
        // 跳转到商品详情页面 调用vuex的商品模块的 goGoodsPage 并传入item
        toGoodsInfoRouter(item) {
            this.$store.commit("goGoodsPage",item);
            this.$router.push("/goods");
            // this.scAdd(item)
            // this.scDel({id: item.id, type: "one"})
        },
        // 添加到购物车
        scAdd(item){
            this.$store.commit("scAdd",item);
        },
        // 删除购物车某个数据
        scDel(deleInfo){
            this.$store.commit("scDel",deleInfo);
        }
    }
}
</script>

<style scoped>
    .recommend-container{
        width: 100%;
        padding: 0 8px;
        background-color: rgb(246,246,246);
    }
    .recommendBox-title > img {
        width: 100%;
        margin-bottom: -2px;
    }
    .recommendBox-main{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .recommednBox-item{
        background-color: #fff;
        width: 49.5%;
        margin-bottom: 4px;
        height: 260px;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        align-items: center;
    }
    .recommednBox-itemImg{
        width: 168px;
        height: 168px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
    }
    .recommednBox-itemImg>img{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%,-50%);
    }
    .recommednBox-itemname{
        font-size: 13px;
        color: #232326;
        padding: 3px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top:3px;
        width: 100%;
        height: 40px;
        overflow: hidden;
    }
    .recommednBox-itemprice{
        width: 100%;
        height: 40px;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
        padding: 3px;
        align-items: center;
    }
    .joinShoppingCar{
        width: 30px;
        height: 24px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAOVBMVEUAAADqPD7qOz/vP0DqOz3rPD7qOz7qPD3pOz7qPD7qOz7qPT/qOz3qPD3pPD3rPT/tO0H/RkbpOz36jkSnAAAAEnRSTlMA5Ekd3V2eqphzYjzy0Lx+Kwtw+iurAAAAbElEQVQoz63QSw7DIAwA0XFISz79+v6HbSW28WyS2VkWPAHnyn/N1xvSLTtSy8Cas2icu5frPvCqdeBVu+NfDH+C4QsYvvnLPyD4Awx/geGrf3sDwd8g+AJU+Nx3rmuKmA6nUWRGMclaLj/fD/9IGxUTc5duAAAAAElFTkSuQmCC) no-repeat 50%;
        background-size: 15px;
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
</style>