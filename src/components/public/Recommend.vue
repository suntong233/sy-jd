<template>
    <div class="recommend-container">
        <div class="recommendBox">
            <div class="recommendBox-title">
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
                        <div @click.stop="toSearchRouter(item.type)" style="font-size:14px;color: #686868;border:1px solid #ccc;padding:2px 4px;margin-right:5px">看相似</div>
                    </div>
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
            renderData: []
        }
    },
    created () {
        this.renderData = this.$store.state.goodsData
    },
    methods: {
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
</style>