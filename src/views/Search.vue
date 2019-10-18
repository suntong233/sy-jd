<template>
  <div class="home">
    <searchtextBtn></searchtextBtn>
    <div class="recently-search" v-if="isSearch">
      <div class="recentsearch">
        <span class="span1">最近搜索</span>
        <div class="el-icon-delete" @click="del"></div>
      </div>
      <div class="hotsearch-ui">
        <div v-for="item in searchList" :key="item" class="history" @click="searchTab(item)">
          <span>{{item}}</span>
        </div>
      </div>
    </div>
    <div class="hotsearch">
      <span class="span1">热门搜索</span>
      <span class="span2" @click="tab">{{title}}</span>
    </div>
    <div class="hide" v-if="seen">
      <div class="hotsearch-ui" >
        <div v-for="item in allTabs.slice(0,13)" :key="item" class="history" @click="searchTab(item)" >
        <span>{{item}}</span>
        </div>
      </div>
    </div>
     <div class="hidden" v-if="!seen">
        <div>已隐藏搜索发现</div>
      </div>
  </div>
</template>

<script>
import searchtextBtn from "../components/wsm/searchtextbtn.vue";

const components = {
  searchtextBtn
}
// 搜素
export default {
  name: "search",
  data () {
    return {
      allTabs: [],
      seen: true,
      isSearch: false,
      title: "隐藏",
      searchList: [],
      searchMsg: "",
    }
  },
  methods: {
    searchTab(tab){
      this.$store.commit("goSearchPage", tab)
      this.$router.push("/searchres")
    },
    del() {
      this.searchList = [];
      this.isSearch = false;
      this.$store.state.searchLocalData.length = 0;
      localStorage.removeItem("history");
    },
    tab() {
      if (this.title == "隐藏") {
        this.title = "显示";
        this.seen = false;
      } else {
        this.title = "隐藏";
        this.seen = true;
      }
    },
  },
  created () {
      this.$store.state.searchPageData.forEach(item=>{
        this.allTabs.push(item)
      })
      
    let history = localStorage.getItem("history");
    if (history) {
      history = JSON.parse(history);
      this.searchList = history;
      // if (this.searchList.length == 0) {
      //   this.isSearch = false;
      // }
      this.isSearch = true;
    } else {
      this.isSearch = false;
    }
  },
  components
};
</script>

<style scoped>
.hot-search {
  /* margin-top: 15px; */
  padding: 15px 15px 11px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding-left: 13px;
}
.span1 {
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
}
.span2 {
  font-size: 15px;
  color: #99a6c4;
  position: relative;
  left: 63%;
}
.hotsearch-ui {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
}
.hotsearch-ui > div {
  display: flex;
  align-items: center;
  margin-left: 12px;
  height: 25px;
  font-size: 12px;
  color: #686868;
  text-align: center;
  padding: 0 13px;
  background-color: #f0f2f5;
}
.hotsearch{
  margin-right: 10px;
  margin-left: 10px;
}
.hide {
 padding-right: 30px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  background: #fff;
  padding-left: 13px;
}
.recentsearch {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 11px;
  overflow: hidden;
}
.history {
  margin-top: 5px;
  padding-right: 10px;
  padding-bottom: 10px;
  flex-shrink: 0;
}
.recently-search {
  background: #fff;
  width: 100%;
  overflow: hidden;
  padding: 15px 30px 11px 10px;
}
.hidden {
  height: 100px;
  padding-right: 2px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  background: #fff;
  padding-left: 13px;
}

.hidden div {
  height: 30px;
  margin: 29px auto 40px;
  line-height: 30px;
  text-align: center;
  color: #999;
}
</style>
