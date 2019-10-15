<template>
<div class="container">
  <div class="searchtext">
    <div @click="$router.go(-1)" class="el-icon-arrow-left"></div>
    <div class="textborder">
      <div class="el-icon-search"></div>
      <input
        @click="$router.push('/search')"
        type="text"
        placeholder="笔记本电脑"
        class="textborder-input"
        style="font-size: 12px;border:0;background:none;position: relative;left:20px;width:80%;height:20px"
      />
    </div>
    <div @click="show = !show" style="font-size:24px;letter-spacing:2px;">···</div>
    <showMenu v-if="show"></showMenu>
  </div>
  <div>

  </div>
</div>
</template>

<script>
import showMenu from "../public/showMenu.vue";   // 显示隐藏菜单

export default {
  name: "topsearch",
  data () {
    return {
      show: false  
    }
  },
  methods: {
    
  },
  components: {
    showMenu
  }
};
</script>

<style scoped>
.container{
    width: 100%;
    height: 42px;
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
  border-bottom: #e5e5e5 1px solid;
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
.textborder-input{
  appearance: none;
  outline: none;
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