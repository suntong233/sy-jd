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
                        <img :src="item.imgUrl">
                    </div>
                    <div class="recommednBox-itemname">
                        <span>{{ item.name }}</span>
                    </div>
                    <div class="recommednBox-itemprice">
                        <div>￥ {{ item.price }}</div>
                        <div>看相似</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                    tab: ["品牌闪购", "京东物流","京东精选","京东超市","自营"],
                    imgUrl: "//img14.360buyimg.com/mobilecms/s281x281_jfs/t1/33900/9/4781/96404/5cb83cc5Eb58cda25/91da93e7e8e38097.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                }
            ]
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
        height: 180px;
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
        width: 100%;
        height: 40px;
        overflow: hidden;
    }
    .recommednBox-itemprice{
        width: 100%;
        height: 40px;
        overflow: hidden;
    }
</style>