<template>
  <div class="classify">
    <searchtext></searchtext>
    <div class="classifymian-container">
        <div class="classifymian-containerBox">
          <div class="classifymian-left">
            <div @click="renderRight(item.childRen, index)" class="classifymian-left-item" v-for="(item, index) in renderData" :key="item.name">{{ item.name }}</div>
          </div>
          <div class="classifymian-right">
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
  data(){
    return {
      renderData: [],
      renderDataright: [],
      renderDatarightid: 0
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
    this.renderRight(res[0].childRen, 0);
  },
  methods: {
    renderRight(item, index) {
      this.renderDatarightid = index
      this.renderDataright = item
    }
  }
};
</script>

<style scoped>
  .classify{
    width: 100%;
    height: 100%;
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
  .classifymian-left-item{
    width: 100%;
    background-color: rgb(248,248,248);
    height: 46px;
    text-align: center;
    line-height: 46px;
    color: #333;
    font-size: 14px;
  }
</style>
