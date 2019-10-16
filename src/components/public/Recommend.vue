<template>
    <div class="recommend-container">
        <div class="recommendBox">
            <div class="recommendBox-title">
                <img src="//img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png">
            </div>
            ￥
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
                <div class="recommednBox-item">

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
                    group: "手机数码",
                    type: "手机",
                    id: "手机1",
                    name: "OPPO Reno手机 【特价2199起+豪礼】",
                    price: [2199, 3499],
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

<style>
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
    }
</style>