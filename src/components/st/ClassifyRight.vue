<template>
  <div class="classifyrightcontainer">
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
            typeIcon: [
                {
                    type: "狗狗活体",
                    url: "//img20.360buyimg.com/focus/s140x140_jfs/t18280/1/2656168555/9439/7cab050f/5b029068N322d822c.jpg"
                },
                {

                }
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
    .classifyrightcontainer{
        width: 100%;
        height: 100%;
        opacity: 1;
    }
    .classifyrightcontaineradimn {
        animation: fideBox 5s;
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