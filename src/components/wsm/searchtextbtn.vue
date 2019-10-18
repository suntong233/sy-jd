<template>
<div>
<div class="container">
  <div class="searchtext">
    <div @click="$router.go(-1)" class="el-icon-arrow-left"></div>
    <div class="textborder">
      <div class="el-icon-search"></div>
      <input
        v-model="searchMsg"
        type="text"
        :placeholder="$store.state.searchHead"
        style="outline:none;font-size: 12px;border:0;background:none;position: relative;left:20px;width:80%;height:20px"
        @input="inputEvent"
      />
      <div @click="clearvalue()"  style="display:flex;height:42px;align-items:center;position:absolute;right:80px;" v-if="show2">
        <img   src="/lz/images/close.png">
      </div>
    </div>
    <div  class="searchbutton" @click="tiaozhuan()">搜索</div>
  </div>
  <div>
   
  </div>
</div>
<div class="result_list" v-if="show1" >
    <div @click="searchItem(item)" class="result_list_container"  v-for="item in showList" :key="item">
         <span> {{item}} </span>
    </div>
</div>

</div>
</template>

<script>
export default {
  name: "topsearch",
  data () {
    return {
      searchMsg: "",
      renderData: [],
      allTabs: [],
      showList:[],
      timer:null,
      show1:false,
      show2:false
    }
  },
  created () {
      this.$store.state.searchPageData.forEach(item=>{
        this.allTabs.push(item)
      })
  },
  methods: {
    searchItem(tab){
      this.renderData.length = 0
      this.$store.commit("goSearchPage", tab)
      this.$router.push("/searchres")
    },
    clearvalue(){
      this.searchMsg="";
      console.log(1);
      this.show2= false;
      this.showList=[];
    },
    tiaozhuan() {
      if(this.searchMsg.trim() === ""){
        return
      }
      this.$store.commit("goSearchPage", this.searchMsg)
      this.$router.push("/searchres")
    },
    inputEvent () {
      let that = this;
       if (that.searchMsg.trim().length > 0) {
                    if (that.timer) {
                        clearTimeout(that.timer)
                    }
                    that.timer = setTimeout(function () {
                         if (that.searchMsg.trim()) {
                           that.show1=true
                           that.show2=true
                            that.showList = that.allTabs.filter(function (item) {
                                if (item.includes(that.searchMsg)) {
                                    return item
                                }
                           
                            })
                        }

                        if(that.showList.length==0) {
                          that.showList.length=null
                        }

                    }, 500)

                }
                else {
                    setTimeout(function () { that.showList = []; that.show1=false; that.show2=false}, 300)
                }
    }
  }
};
</script>

<style scoped>
.search-input {
  background-color: aqua;
  height: 100%;;
}

.container{
    width: 100%;
    height: 42px;
    /* max-width: 400px; */
    background-color: #fff;
}
.searchtext {
  position: fixed;
  justify-content: center;
  top: 0;
  width: 100%;
  height: 44px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 20000;
    /* max-width: 400px; */
  border-bottom: #e5e5e5 1px solid;
  border-left: #e5e5e5 1px solid;
  border-right: #e5e5e5 1px solid;
}
.searchtext > .el-icon-arrow-left {
  font-size: 20px;
}
.textborder {
  background-color: #f7f7f7;
  border-radius: 25px;
  width: 68%;
  height: 30px;
  display: flex;
  align-items: center;
}
.textborder > .el-icon-search {
  position: relative;
  left: 10px;
  color: #b7b7b7;
}
.searchbutton {
  background: #e93b3d;
  padding: 3px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
   color: white;
  font-size: 14px;
}

.result_list {
  width: 100%;
  z-index: 999;
  padding-left:10px;
  position: absolute;
  background-color: #fff;
  top: 42px;
  
 /*  border-bottom: 1px solid red; */
}
.result_list_container {
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgb(35, 35, 35);
  font-size: 14px;
  z-index: 999;
  width: 100%;
  padding-top:10px; 
  padding-bottom: 10px;
  
 }


</style>