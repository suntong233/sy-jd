<template>
<div class="container">
  <div class="searchtext">
    <div @click="$router.go(-1)" class="el-icon-arrow-left"></div>
    <div class="textborder">
      <div class="el-icon-search"></div>
      <input
        type="text"
        placeholder="笔记本电脑"
        style="outline:none;font-size: 12px;border:0;background:none;position: relative;left:20px;width:80%;height:20px"
      />
    </div>
    <div class="searchbutton" @click="tiaozhuan()">搜索</div>
  </div>
  <div>

  </div>
</div>
</template>

<script>
export default {
  name: "topsearch",
  methods: {
    tiaozhuan() {
      window.open(
        "https://so.m.jd.com/ware/search.action?keyword=%E7%AC%94%E8%AE%B0%E6%9C%AC%E7%A1%AC%E7%9B%98&searchFrom=home&sf=11&as=1"
      );
    }
  }
};
</script>

<style scoped>
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
</style>