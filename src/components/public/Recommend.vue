<template>
    <div class="recommend-container">
        <div class="recommendBox">
            <div class="recommendBox-title">
                <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            </div>
            <div class="recommendBox-main">
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
                        <div style="font-size:16px;color: #f23030;">￥{{ typeof item.price == "number"? item.price : item.price[0] }}</div>
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
                    groupM: "外设产品",
                    type: "鼠标",
                    id: "鼠标1",
                    name: "戴尔（DELL）MS116 有线鼠标 商务办公鼠标（黑色）",
                    price: 19.90,
                    tab: ["自营"],
                    imgUrl: "//img14.360buyimg.com/mobilecms/s270x270_jfs/t1/46776/31/5329/84614/5d316bf3E58adab00/b59c177f92f66cf1.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/46776/31/5329/84614/5d316bf3E58adab00/b59c177f92f66cf1.jpg!q80.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s720x720_jfs/t1/36146/15/14442/78039/5d22d5ecE57f0bd92/631b3a08b617e0c7.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s720x720_jfs/t1/59315/18/4402/52982/5d22d5edE049b0713/9fc701680b4841e5.jpg!q70.dpg.webp"
                    ]
                },
                {
                    groupL: "美妆护肤",
                    groupM: "当季主推",
                    type: "美白",
                    id: "美白1",
                    name: "相宜本草黑茶男士 男士乳液120g（面霜 护肤化妆品）",
                    price: 39.00,
                    tab: ["京东物流"],
                    imgUrl: "//img10.360buyimg.com/n2/s350x350_jfs/t28765/230/1349953395/85846/3a2e21e0/5cde1602N09059704.jpg!q70.jpg",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t28765/230/1349953395/85846/3a2e21e0/5cde1602N09059704.jpg!q80.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                },
                {
                    groupL: "男装",
                    groupM: "热卖选购",
                    type: "夹克",
                    id: "夹克1",
                    name: "俞兆林（YUZHAOLIN）男士连帽夹克时尚休闲外套1333黑色XL",
                    price: [106.20, 118.00],
                    tab: ["京东精选"],
                    imgUrl: "//img13.360buyimg.com/mobilecms/s270x270_jfs/t1/9073/10/14930/375368/5c6be4ebEa51e431e/034ceab7ae7fdc4b.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                },
                {
                    groupL: "电脑办公",
                    groupM: "文具耗费材",
                    type: "纸类",
                    id: "纸类2",
                    name: "自营远平条码三防热敏不干胶条码标签打印纸电子秤纸横板60mm*40mm* 500张30卷",
                    price: 271,
                    tab: ["京东物流"],
                    imgUrl: "//img14.360buyimg.com/mobilecms/s281x281_jfs/t1/33900/9/4781/96404/5cb83cc5Eb58cda25/91da93e7e8e38097.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                },
                {
                    groupL: "电脑办公",
                    groupM: "文具耗费材",
                    type: "纸类",
                    id: "纸类3",
                    name: "自营远平条码三防热敏不干胶条码标签打印纸电子秤纸横板60mm*40mm* 500张30卷",
                    price: 271,
                    tab: ["京东物流"],
                    imgUrl: "//img14.360buyimg.com/mobilecms/s281x281_jfs/t1/33900/9/4781/96404/5cb83cc5Eb58cda25/91da93e7e8e38097.jpg!q70.dpg.webp",
                    imgUrls: [
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp",
                        "//m.360buyimg.com/mobilecms/s750x750_jfs/t1/11644/2/14827/31781/5ca32922E1cec7332/ad8d64a4f85a679d.jpg!q70.dpg.webp"
                    ]
                },
                {
                    groupL: "电脑办公",
                    groupM: "文具耗费材",
                    type: "纸类",
                    id: "纸类4",
                    name: "自营远平条码三防热敏不干胶条码标签打印纸电子秤纸横板60mm*40mm* 500张30卷",
                    price: 271,
                    tab: ["京东物流"],
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
            if(tabs[0] === "自营"){
                return "//img11.360buyimg.com/jdphoto/s48x28_jfs/t18820/32/891260489/1085/d4b6cf2c/5aadf9dbN7043e607.png"
            } else if (tabs[0] === "京东物流") {
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