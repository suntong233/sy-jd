<template>
    <div class="container">
        <div class="searchtext">
            <div @click="$router.push('/home')" class="el-icon-arrow-left"></div>
            <div class="textborder">
                <div class="el-icon-search2">{{typetitle}}</div>
            </div>
            <div @click="show = !show" style="font-size:24px;letter-spacing:2px;">···</div>
            <showMenu v-if="show"></showMenu>
        </div>
    </div>
</template>

<script>
import showMenu from "../public/showMenu";   // 显示隐藏菜单

export default {
  name: "mineheader",
  props: {
    typetitle:{
      type: String,
      default: "我的京东"
    }
  },
  data () {
    return {
      show: false  
    }
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
  justify-content: center;
  width: 100%;
  height: 44px;
  display: flex;
  background-color: #fff;
  justify-content: space-evenly;
  align-items: center;
  z-index: 20000;
  border-bottom: #e5e5e5 1px solid;
  border-left: #e5e5e5 1px solid;
  border-right: #e5e5e5 1px solid;
}
.searchtext > .el-icon-arrow-left {
  font-size: 20px;
}
.textborder {
  background-color: #fff;
  border-radius: 25px;
  width: 68%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.textborder > .el-icon-search2 {
  position: relative;
  color: #666666;
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