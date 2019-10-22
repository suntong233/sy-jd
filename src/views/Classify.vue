<template>
  <div class="classify">
    <searchtext></searchtext>
    <div class="classifymian-container">
        <div class="classifymian-containerBox">
          <div v-autoToTop v-silder class="classifymian-left">
            <div :data-index="index" :class="{showItem: showItem == index }" @click="renderRight(item.childRen, index)" class="classifymian-left-item" v-for="(item, index) in renderData" :key="item.name">{{ item.name }}</div>
          </div>
          <div v-silder :class="{showslow : isShowslow}" class="classifymian-right">
            <ClassifyRight :renderid="renderDatarightid" :renderData="renderDataright"></ClassifyRight>
          </div>
        </div>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import ClassifyRight from "../components/st/ClassifyRight.vue"; // 右侧显示组件
import Tabbar from "../components/public/tabBar.vue";   // 底部导航
import searchtext from "../components/wsm/searchtext";  // 顶部搜索
const components = {
  Tabbar,
  searchtext,
  ClassifyRight
};
// 分类
export default {
  name: "classify",
  directives: {
      autoToTop:{
        inserted(el){
          el.addEventListener("click",(e)=>{
            let copy = el.scrollTop
            let temp = e.target.dataset.index*46
            if( copy == temp){
              return
            }
            let timer = setInterval(()=>{
              let differ3 = copy
              if(el.scrollTop < temp){
                el.scrollTop++
                copy = el.scrollTop
                if(copy == temp){
                  clearInterval(timer)
                }
                if(copy == differ3){
                  clearInterval(timer)
                }
              }else{
                clearInterval(timer)
              }
            },1)
          })
        }
      },
      silder:{
          bind(el){
          let differ = 0
          let differ2 = -10
          let count = 0
          el.addEventListener("touchstart",(e)=>{
            differ = e.changedTouches[0].clientY
            // differ2 = el.scrollTop
          },false)
          el.addEventListener("touchmove",(e)=>{
            if(e.changedTouches[0].clientY - differ > 0){
              if(el.scrollTop == 0){
                el.style.cssText=`
                  transition: 300ms ease;
                  transform:translateY(100px);
                `
              }
            }else{
              if(el.scrollTop == differ2){
                count++
                if(count >= 10){
                   el.style.cssText=`
                    transition: 300ms ease;
                    transform:translateY(-100px);
                  `
                }
              }else{
                count = 0
              }
              differ2 = el.scrollTop
            }
            differ = e.changedTouches[0].clientY
          },false)
          el.addEventListener("touchend",(e)=>{
            count = 0
            el.style.cssText=`
              transition: 300ms ease;
            `
          },false)
        }
      }
  },
  data(){
    return {
      isShowslow: true,
      showslowIndex: 0,
      renderData: [],
      renderDataright: [],
      renderDatarightid: 0,
      showItem: "init"
    }
  },
  components,
  created () {
    this.renderData = [...this.$store.state.goodsData];
    let arr1 = [];
    let resArr = [];
    this.renderData.forEach((item, index, self)=>{
      arr1.push(item.groupL)
      if(index == 0){
        resArr.push(item)
      }else if(item.type !== self[index-1].type) {
        resArr.push(item)
      }
    })
    arr1 = [...new Set(arr1)]
    let res = arr1.map(item=>{
      let tempchilren = resArr.filter(item2=>{
        return item2.groupL == item
      })
      tempchilren = tempchilren.map(item2=>{
        return {
          groupM: item2.groupM,
          type: item2.type
        }
      })
      return {
        name: item,
        childRen: tempchilren
      }
    })
    this.renderData = res
    this.renderRight(res[0].childRen, "init");
  },
  methods: {
    renderRight(item, index) {
      this.showItem = index;
      this.isShowslow = false;
      let that = this
      if(index == this.showslowIndex){
        this.isShowslow = false;
      }else{
        this.isShowslow = true;
      }
      if(index == "init"){
        this.showItem = 0;
        this.isShowslow = true;
      }
      setTimeout(function(){
        that.isShowslow = false;
      },500)
      this.showslowIndex = index
      this.renderDatarightid = index
      this.renderDataright = item
    }
  }
};
</script>

<style scoped>
  .classify{
    width: 100%;
    user-select: none;
    /* height: 100%; */
  }
  .classifymian-container{
    display: block;
    position: fixed;
    top: 0;
    bottom: 0;
    padding: 42px 0;
    width: 100%;
    height: 100%;
  }
  .classifymian-containerBox{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .classifymian-left{
    background-color: rgb(235, 226, 226);
    width: 85px;
    height: 100%;
    float: left;
    overflow: auto;
  }
  .classifymian-left::-webkit-scrollbar{
    display: none;
  }
  .classifymian-right::-webkit-scrollbar{
    display: none;
  }
  .classifymian-right{
    height: 100%;
    overflow: auto;
    overflow-x: hidden;
    flex-grow:1;
  }
  .showslow {
    animation: showSlow 500ms;
  }
  @keyframes showSlow{
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .classifymian-left-item{
    transition: 0ms ease;
    width: 100%;
    background-color: rgb(248,248,248);
    height: 46px;
    text-align: center;
    line-height: 46px;
    color: #333;
    font-size: 14px;
  }
  .showItem{
    background-color: #fff;
  }
</style>
