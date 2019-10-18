<template>
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
        />
      </div>
      <div class="searchbutton" @click="tiaozhuan()">搜索</div>
    </div>
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
export default {
  name: "topsearch",
  data() {
    return {
      searchMsg: "",
      renderData: [],
      allTabs: [],
      seen: true,
      isSearch: false,
      title: "隐藏",
      searchList: []
    };
  },

  methods: {
    searchTab(tab){
      this.$store.commit("goSearchPage", tab)
      this.$router.push("/searchres")
    },
    searchItem(tab) {
      this.renderData.length = 0;
      this.$store.commit("goSearchPage", tab);
      this.$router.push("/searchres");
    },
    tiaozhuan() {
      if (this.searchMsg.trim() === "") {
        return;
      }
      this.$store.commit("goSearchPage", this.searchMsg);
      this.$router.push("/searchres");
      this.isSearch = true;
      if (this.searchMsg !== "" && JSON.stringify(this.allTabs).indexOf(this.searchMsg) !== -1) {
        this.searchList.push(this.searchMsg);
        localStorage.setItem("history", JSON.stringify(this.searchList));
        this.searchMsg = "";
    
      }
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
    del() {
      this.searchList = [];
      this.isSearch = false;
      localStorage.removeItem("history");
    }
  },
  created() {
    this.$store.state.searchPageData.forEach(item => {
      this.allTabs.push(item);
    });
   

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
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 1000px;
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
  left: 70%;
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
  margin-top: 44px;
  margin-left: 10px;
}
.hide {
 padding-right: 2px;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
  background: #fff;
  padding-left: 13px;
}
.recentsearch {
  margin-top: 44px;
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
  /* height: 100%; */
  overflow: hidden;
  padding: 15px 15px 11px 13px;
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