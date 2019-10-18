<template>
  <div :class="{ animation: renderid }" class="classifyrightcontainer">
    <div v-for="(item,index) in tabsData" :key="item + index">
        <div class="classifyright-title">{{ item }}</div>
        <div class="classifyright-content">
            <div class="classifyright-item" @click="searchType(item2.type)" v-for="(item2, index2) in tabsData2(item)" :key="item2.type + index2">
                <img style="width:60px" v-lazy="selectImg(item2.type)">
                <div class="classifyright-itemfont">{{ item2.type }}</div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["renderData","renderid"],
    methods: {
        tabsData2(item){
            return this.renderData.filter(item2=>{
                return item2.groupM == item
            })
        },
        searchType(msg){
            this.$store.commit("goSearchPage", msg)
            this.$router.push("/searchres")
        },
        selectImg(type){
            let res = this.typeIcon.filter(item=>{
                return type == item.type
            })
            if(res.length !== 0){
                return res[0].url
            }
            return "//img12.360buyimg.com/focus/s140x140_jfs/t14074/98/970407567/2153/72273815/5a17f208N6ea88eba.jpg"
        }
    },
    data () {
        return {
            ischange: true,
            typeIcon: [
                {
                    type: "狗狗活体",
                    url: "//img20.360buyimg.com/focus/s140x140_jfs/t18280/1/2656168555/9439/7cab050f/5b029068N322d822c.jpg"
                },
                {
                     type: "狗粮",
                    url: "//img14.360buyimg.com/focus/s140x140_jfs/t21478/276/192138929/12260/ac5558a9/5b029073Nfa38db85.jpg"
                },
                 {
                     type: "狗窝",
                    url: "//img20.360buyimg.com/focus/s140x140_jfs/t22255/64/191348276/12608/7c21859f/5b028f8fNf32bb5b3.jpg"
                },
                 {
                     type: "便携包",
                    url: "//img13.360buyimg.com/focus/s140x140_jfs/t21253/23/188118288/11459/4a26f115/5b028ea2Nf20ffc5d.jpg"
                },
                 {
                     type: "衣服鞋帽",
                    url: "//img11.360buyimg.com/focus/s140x140_jfs/t17686/86/2647507454/8341/cbb04d5e/5b028e97N19460b24.jpg"
                },
                 {
                     type: "美毛护肤",
                    url: "//img10.360buyimg.com/focus/s140x140_jfs/t18697/312/2669469716/10593/5a2715ee/5b029021N8bf95ce9.jpg"
                },
                 {
                     type: "宠物牵引",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t20800/4/193833916/13349/45453dfa/5b028eb1Ncccd5b56.jpg"
                },
                 {
                     type: "猫咪活体",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t21028/108/199035634/8044/8eba9a3f/5b029701N81413156.jpg"
                },
                 {
                     type: "猫咪零食",
                     url: "//img13.360buyimg.com/focus/s140x140_jfs/t21124/116/195461222/19177/4d8a1111/5b0296e4Nb92cc42c.jpg"
                },
                 {
                     type: "食具水盆",
                     url: "//img11.360buyimg.com/focus/s140x140_jfs/t18397/116/2666717344/8751/e328cc1f/5b0296b4N3568a81e.jpg"
                },
                 {
                     type: "猫窝",
                     url: "//img14.360buyimg.com/focus/s140x140_jfs/t16831/261/2616043337/11762/18e5fc0d/5b0296bbNe37611cb.jpg"
                },
                {
                     type: "小宠活体",
                     url: "//img12.360buyimg.com/focus/s140x140_jfs/t17443/350/2648616523/43700/9a7ec0f4/5b02a36eN82ac33a0.jpg"
                },
                 {
                     type: "仓鼠用品",
                     url: "//img11.360buyimg.com/focus/s140x140_jfs/t19039/199/2637109511/14688/f74278e3/5b02997dNfa9a78d8.jpg"
                },
                {
                     type: "爬行用品",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t17677/169/2602636121/12164/660aa6d8/5b029971N44882729.jpg"
                },
                  {
                     type: "轻薄本",
                     url: "//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png"
                },
                 {
                     type: "游戏本",
                     url: "//img30.360buyimg.com/focus/s140x140_jfs/t12418/24/1008907015/2867/86eb55a/5a17b971N14214c4f.jpg"
                },
                {
                     type: "键盘",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t13636/255/952363201/5216/92808140/5a16a5f6Nad15240a.jpg"
                },
                {
                     type: "组装电脑",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t14101/325/978287093/8836/e142aa53/5a17ba73N07b12f0c.jpg"
                },
                {
                     type: "移动硬盘",
                     url: "//img12.360buyimg.com/focus/s140x140_jfs/t13228/333/989759736/4764/2a312c2e/5a17ba7fN0740c051.jpg"
                },
                {
                     type: "显卡",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg"
                },
                {
                     type: "游戏台式机",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t12865/295/960489437/5723/4f38f11/5a17ba8bN911b7264.jpg"
                },
                {
                     type: "家用打印机",
                     url: "//img13.360buyimg.com/focus/s140x140_jfs/t12526/166/988611883/3419/3c7507ac/5a17ba5dN8f6ffa5e.jpg"
                },
                {
                     type: "吃鸡装备",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t16210/272/2297735843/7874/66447aee/5a9fa34bNff4ef403.jpg"
                },
                {
                     type: "曲屏显示器",
                     url: "//img30.360buyimg.com/focus/s140x140_jfs/t13798/322/988648789/3644/1adc5615/5a17ba6dNafc95373.jpg"
                },
                {
                     type: "投影机",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t13492/261/938265048/5840/b5e4bdb6/5a17ba61N61a74bc3.jpg"
                },
                {
                     type: "日本文具",
                     url: "//img14.360buyimg.com/focus/s140x140_jfs/t16102/63/2286960292/7028/d15c6bd6/5a9fa366N889aad0f.jpg"
                },
                {
                     type: "笔记本",
                     url: "//img11.360buyimg.com/focus/s140x140_jfs/t13852/288/980080912/2623/73d2a1a5/5a17b976N7ab8a3a6.jpg"
                },
                {
                     type: "平板电脑",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t13252/193/948884668/3832/2cd704d4/5a17b918N0785e503.jpg"
                },
                {
                     type: "一体机",
                     url: "//img12.360buyimg.com/focus/s140x140_jfs/t14020/291/987624955/9068/5b27e263/5a17b978N2a93f7a9.jpg"
                },
                {
                     type: "台式机",
                     url: "//img30.360buyimg.com/focus/s140x140_jfs/t13747/317/982291236/6659/4945536d/5a17b996Nba3bed32.jpg"
                },
                {
                     type: "轻薄笔记本",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t12499/273/957225674/6892/8281d4a7/5a17b962Nf77d9f6c.jpg"
                },
                 {
                     type: "二合一平板",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t11944/224/2479637242/6222/ac9759/5a17b93dN89330bb3.jpg"
                },
                 {
                     type: "u盘",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t12112/355/904591745/4308/6201dffe/5a16a5aaNdac2fe89.jpg"
                },
                 {
                     type: "键盘",
                     url: "//img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png"
                },
                 {
                     type: "鼠标垫",
                     url: "//img10.360buyimg.com/focus/s140x140_jfs/t13378/75/927818435/4870/595967f9/5a16a5b5N4075325c.jpg"
                },
                {
                     type: "电脑移动硬盘",
                     url: "//img30.360buyimg.com/focus/s140x140_jfs/t12139/119/906364755/3899/3e9bfbca/5a16a5adN67c1a043.jpg"
                },
                {
                     type: "手写板",
                     url: "//img13.360buyimg.com/focus/s140x140_jfs/t11734/189/2377033150/4145/b78bfcf/5a16a594Ncb41c95a.jpg"
                },
                {
                     type: "硬盘盒",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t13420/80/910285628/2736/5f202fd8/5a16a59eNadecac30.jpg"
                },
                {
                     type: "线缆",
                     url: "//img20.360buyimg.com/focus/s140x140_jfs/t13219/359/921087235/4445/bb62050e/5a16a592N7e614f3d.jpg"
                },
                {
                     type: "手机优盘",
                     url: "//img14.360buyimg.com/focus/s140x140_jfs/t12511/359/951124397/4655/1f4b2503/5a16a585N73dd2d73.jpg"
                },
                {
                     type: "电脑清洁",
                     url: "//img11.360buyimg.com/focus/s140x140_jfs/t14092/4/926363914/5049/8bf96ca4/5a16a57dNed5b68f6.jpg"
                },
                {
                     type: "插座",
                     url: "//img14.360buyimg.com/focus/s140x140_jfs/t12031/206/932335399/3567/d6d59ad9/5a16a578N283a0f75.jpg"
                },
                {
                     type: "键鼠套装",
                     url: "//img11.360buyimg.com/focus/s140x140_jfs/t13687/323/893934580/3715/4657a7e6/5a16a56dN9e6309e0.jpg"
                },
            ]
        }
    },
    computed: {
        tabsData(){
            return [...new Set(this.renderData.map(item=>{
                return item.groupM
            }))]
        }
    }
}
</script>

<style scoped>
    .animation {
        animation: fideBox 5s;
    }
    .classifyrightcontainer{
        width: 100%;
        height: 100%;
    }
    .classifyrightcontaineradimn {
        animation: fideBox 5s;
    }
    @keyframes fideBox{
        from{
            opacity: 0;
        }
        to{ 
            opacity: 1;
        }
    }
    .classifyright-title{
        width: 100%;
        height: 50px;
        padding-left: 10px;
        display: flex;
        align-items: center;
        font-weight: 600;
    }
    .classifyright-content{
        width: 100%;
        display: flex;
        padding: 0 10px;
        flex-wrap: wrap;
    }
    .classifyright-item{
        margin-bottom: 10px;
        width: 33.33%;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .classifyright-itemfont{
        color: #333;
        font-size: 12px;
        overflow: hidden;
    }
</style>