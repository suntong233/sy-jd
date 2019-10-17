<template>
    <div class="recommend-container">
        <div class="recommendBox">
            <div class="recommendBox-title">
                <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            </div>
            <div class="recommendBox-main">
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div class="recommednBox-item"></div>
                <div v-for="item in renderData" :key="item.id" class="recommednBox-item">
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
                        <div style="font-size:16px;color: #f23030;">￥{{ item.price }}</div>
                        <div style="font-size:14px;color: #686868;border:1px solid #ccc;padding:2px 4px;margin-right:5px">看相似</div>
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
            renderData: [
                {
                    groupL: "电脑办公",
                    groupM: "文具耗费材",
                    type: "纸类",
                    id: "纸类1",
                    name: "自营远平条码三防热敏不干胶条码标签打印纸电子秤纸横板60mm*40mm* 500张30卷",
                    price: 271,
                    tab: ["京东物流","京东精选","自营"],
                    imgUrl: "//img14.360buyimg.com/mobilecms/s281x281_jfs/t1/33900/9/4781/96404/5cb83cc5Eb58cda25/91da93e7e8e38097.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                }
            ]
        }
    },
    methods: {
        selectImg(tabs){
            if(tabs[1] === "自营"){
                return "//img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png"
            } else if (tabs[1] === "京东物流") {
                return "//img11.360buyimg.com/jdphoto/s98x28_jfs/t16411/341/2502946085/2662/c4af0771/5aadf9daN1916b3f2.png"
            } else {
                return "//img11.360buyimg.com/jdphoto/s100x28_jfs/t15376/77/2643750731/2688/443ac7d3/5aadf9daNc1b92ee6.png"
            }
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
        width: 100%;
        height: 160px;
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