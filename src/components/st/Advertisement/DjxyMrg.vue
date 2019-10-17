<template>
    <div class="st-djxymrg" :class="{stmrg: type=='mrg'}">
        <div>
            <img style="width:100%;margin-bottom:-4px;" :src="type=='djxy'? djxy.banner : mrg.banner">
        </div>
        <div @click="toDjxy(type)" class="st-djxymrg-mainbox">
            <div class="st-djxymrg-mainboxinset">
                <div class="st-djxymrg-mainboxinset-item" :key="item.id" v-for="item in renderData">
                    <div v-if="item.dataType==1">
                        <div class="st-djxymrg-item-title">{{ item.renderData.title }}</div>
                        <div class="st-djxymrg-item-info">{{ item.renderData.info }}</div>
                        <div class="st-djxymrg-item-img">
                            <img v-lazy="item.renderData.imgurl1">
                            <img v-lazy="item.renderData.imgurl2">
                        </div>
                    </div>
                    <div class="st-djxymrg-mainboxinset-item2" v-else>
                        <div @click="toMrg(item.renderData[0])">
                            <div :style="item.renderData[0].titlestyle" class="st-djxymrg-item-title2">{{ item.renderData[0].title }}</div>
                            <div class="st-djxymrg-item-info2">{{ item.renderData[0].info }}</div>
                            <div class="st-djxymrg-item-img2">
                                <img v-lazy="item.renderData[0].url">
                            </div>
                        </div>
                        <div @click="toMrg(item.renderData[1])">
                            <div :style="item.renderData[1].titlestyle" class="st-djxymrg-item-title2">{{ item.renderData[1].title }}</div>
                            <div class="st-djxymrg-item-info2">{{ item.renderData[1].info }}</div>
                            <div class="st-djxymrg-item-img2">
                                <img v-lazy="item.renderData[1].url">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["type"],
    name: "djxyMrg",
    computed: {
        renderData(){
            return this.type=='djxy'? this.djxy.mainData : this.mrg.mainData
        }  
    },
    methods: {
        toDjxy(n){
            if(n==="djxy"){
                window.open("https://h5.m.jd.com/active/yard-channel/index.html?themeId=14767&babelChannel=356440&innerLink=%5B%7B%22matId%22%3A%221012153%22%7D%2C%7B%22matId%22%3A%221131257%22%7D%5D&themeStyle=0&innerIndex=1", "_self")
            }
        },
        toMrg(item){
            if(item.titlestyle){
                window.open(item.link,"_self")
            }
        }
    },
    data () {
        return {
            djxy: {
                banner: "//m.360buyimg.com/mobilecms/s750x80_jfs/t1/80458/35/2250/24646/5d09044cEb3c6b467/e1af43a6ea0cb5fa.png!q70.jpg.dpg",
                mainData: [
                    {
                        id: "djxy1",
                        dataType: 1,
                        renderData: {
                            title: "厨卫好物",
                            info: "装修厨卫好物大全",
                            imgurl1: "//m.360buyimg.com/mobilecms/s150x150_jfs/t24490/28/2169714162/321522/5257a2f3/5b76d73aNaa77815b.jpg!q70.jpg.dpg",
                            imgurl2: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/34665/7/10755/378672/5cf2830aE39144834/fdd65f2b6645c8cc.jpg!q70.jpg.dpg"
                        } 
                    },
                    {
                        id: "djxy2",
                        dataType: 1,
                        renderData: {
                            title: "休假旅行",
                            info: "达人必备",
                            imgurl1: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/67628/7/12396/249145/5d9c3f0bE69606166/43102d0386a4b103.jpg!q70.jpg.dpg",
                            imgurl2: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/50999/1/13587/64497/5da537dcE2867a3cb/9de44cca403e2ac6.jpg!q70.jpg.dpg"
                        }
                    },
                    {
                        id: "djxy3",
                        dataType: 2,
                        renderData: [
                            {
                                title: "清新居家",
                                info: "我爱小清新",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t19507/145/1151729355/188867/d4e5862d/5abdfef8N25938c4c.jpg!q70.jpg.dpg"
                            },
                            {
                                title: "品质生活",
                                info: "优享品质",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/77302/18/13143/240913/5da68aa6E2f554274/bf1fa747c5e60a61.jpg!q70.jpg.dpg"
                            }
                        ] 
                    },
                    {
                        id: "djxy4",
                        dataType: 2,
                        renderData: [
                            {
                                title: "美妙浴室",
                                info: "卫浴装修",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71816/7/12975/150000/5da14cb8E40c8e39b/7781a751fcaceede.jpg!q70.jpg.dpg"
                            },
                            {
                                title: "健身房",
                                info: "精彩动起来",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t29413/17/1215638434/153380/317ed9d/5cda1f4fNf987861f.jpg!q70.jpg.dpg"
                            }
                        ] 
                    }
                ]
            },
            mrg: {
                banner: "//m.360buyimg.com/mobilecms/s750x80_jfs/t1/39486/28/9224/23804/5d09048aE5127de40/eec779757a34e94d.png!q70.jpg.dpg",
                mainData: [
                    {
                        id: "mrg1",
                        dataType: 2,
                        renderData: [
                            {
                                link: "https://jddx.jd.com/m/jddnew/btyingxiao/sfstore/index.html",
                                title: "免息星球",
                                titlestyle: ` background: -webkit-linear-gradient(left,#FF2A2A,#F139D2);
                                    background: linear-gradient(90deg, #FF2A2A,#F139D2);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "白条免息狗",
                                url: "//m.360buyimg.com/n1/s150x150_jfs/t29566/227/1464891645/10350/a5b133e2/5ce20cdcNd9cdd972.jpg!q70.jpg.dpg"
                            },
                            {
                                link: "https://red.m.jd.com/",
                                title: "品牌闪购",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#FE8537,#F02B2B);
                                    background: linear-gradient(90deg, #FE8537,#F02B2B);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "享品质好物",
                                url: "//m.360buyimg.com/n1/s150x150_jfs/t18337/154/150031047/10921/90aecefc/5a60384dN46bf2eac.jpg!q70.jpg.dpg"
                            }
                        ] 
                    },
                    {
                        id: "mrg2",
                        dataType: 2,
                        renderData: [
                            {
                                link: "https://wqs.jd.com/portal/wx/seckill_m/brand.shtml?innerLink=%5B%7B%22innerAnchor%22%3A%2254294405811%22%2C%22innerExtId%22%3A%2248370%22%7D%5D",
                                title: "品牌秒杀",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#FF765C,#FF23B3);
                                    background: linear-gradient(90deg, #FF765C,#FF23B3);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "低价抢大牌",
                                url: "//m.360buyimg.com/n1/s150x150_jfs/t1/71337/28/7979/86783/5d5d0286E9d8b23f7/8fe0a59469e52569.jpg!q70.jpg.dpg"
                            },
                            {
                                link: "https://wqs.jd.com/live/list/index.shtml",
                                title: "京东直播",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#FF2A00,#FF00AF);
                                    background: linear-gradient(90deg, #FF2A00,#FF00AF);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "好货即刻买",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/76908/18/801/66093/5cef9622E297944e8/8b62a5e086c78d1c.png!q70.jpg.dpg"
                            }
                        ] 
                    },
                    {
                        id: "mrg3",
                        dataType: 2,
                        renderData: [
                            {
                                link: "https://wqs.jd.com/wxsq_project/portal/top-list/hot.html?cateid=9858",
                                title: "排行榜",
                                info: "销量排行推荐",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#D400FF,#FF320A);
                                    background: linear-gradient(90deg, #D400FF,#FF320A);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/71612/30/758/62076/5cefa5a6E2494c8c2/13aac3e0bb1b4e55.png!q70.jpg.dpg"
                            },
                            {
                                link: "https://pro.m.jd.com/mall/active/LHGZv1DrGkva1jNpUkKFuNFN6oo/index.html",
                                title: "拍拍好物",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#00C2AB,#3E94FF);
                                    background: linear-gradient(90deg, #00C2AB,#3E94FF);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "iphone 5折起",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/76945/35/760/26244/5cef9705E501242ee/c56b89c0946438ef.jpg!q70.jpg.dpg"
                            }
                        ] 
                    },
                    {
                        id: "mrg4",
                        dataType: 2,
                        renderData: [
                            {
                                link: "https://news.m.jd.com/",
                                title: "新品首发",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#FF765C,#FF23B3);
                                    background: linear-gradient(90deg, #FF765C,#FF23B3);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "vivo X27",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/25511/17/11799/79275/5c91a3fbE3575290e/ffcd261423c0b5c8.jpg!q70.jpg.dpg"
                            },
                            {
                                link: "https://m.jd.com/webportal/channel/find_quality_goods",
                                title: "发现好货",
                                titlestyle: `
                                    background: -webkit-linear-gradient(left,#2AD396,#85BB1F);
                                    background: linear-gradient(90deg, #2AD396,#85BB1F);
                                    -webkit-background-clip: text;
                                    color: transparent;`,
                                info: "教你买买买",
                                url: "//m.360buyimg.com/mobilecms/s150x150_jfs/t1/50174/30/1230/9784/5cef98bfE318f8d24/4720dc4079dd568b.jpg!q70.jpg.dpg"
                            }
                        ] 
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    .stmrg {
        padding-bottom: 5px;
    }
    .st-djxymrg{
        width: 100%;
        height: auto;
        margin-bottom: 8px;
    }
    .st-djxymrg-mainbox{
        width: 100%;
        padding: 0 8px;
    }
    .st-djxymrg-mainboxinset{
        width: 100%;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .st-djxymrg-mainboxinset-item{
        background-color: #fff;
        width: 49.9%;
        margin-top: 1px;
        padding: 6px;
    }
    .st-djxymrg-item-title{
        background: -webkit-linear-gradient(left,#45CAFF,#1471FB);
        background: linear-gradient(90deg, #45CAFF,#1471FB);
        background-clip: text;
        font-weight: 900;
        color: transparent;
    }
    .st-djxymrg-item-title2{
        background: -webkit-linear-gradient(left,#333,#333);
        background: linear-gradient(90deg, #333,#333);
        text-align: center;
        background-clip: text;
        font-weight: 700;
        color: transparent;
    }
    .st-djxymrg-item-info{
        color: rgb(124, 124, 124);
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .st-djxymrg-item-info2{
        color: rgb(124, 124, 124);
        text-align: center;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .st-djxymrg-item-img{
        margin: 5px 0;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    .st-djxymrg-item-img2{
        width: 100%;
        padding: 6px;
        display: flex;
    }
    .st-djxymrg-item-img2>img{
        width: 100%;
    }
    .st-djxymrg-item-img>img{
        width: 38%;
    }
    .st-djxymrg-mainboxinset-item2{
        display: flex;
        background-color: rgb(246,246,246);
        justify-content: space-between;
    }
    .st-djxymrg-mainboxinset-item2>div{
        background-color: #fff;
        width: 49.5%;
    }
</style>