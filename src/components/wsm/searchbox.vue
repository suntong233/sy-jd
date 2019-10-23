<template>
  <div class="container">
    <div class="container1" ref="test">
      <div class="searchtext">
        <div @click="$router.go(-1)" class="el-icon-arrow-left"></div>
        <div class="textborder">
          <div class="el-icon-search"></div>
          <input
            @click="$router.push('/search')"
            type="text"
            :placeholder="$store.state.searchHead"
            class="textborder-input"
            style="font-size: 12px;border:0;background:none;position: relative;left:20px;width:80%;height:20px"
          />
        </div>
        <div @click="show = !show" style="font-size:24px;letter-spacing:2px;">···</div>
        <showMenu v-if="show"></showMenu>
      </div>
      <div class="option">
        <div class="first" @click="lalala()">
          综合
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="second">销量</div>
        <div class="third" @click="lalala1()">
          有货优先
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="forth" @click="drawer = true">
          筛选
          <div class="el-icon-finished"></div>
        </div>
      </div>
      <div @click="lalala" class="dropdown" v-if="show1">
        <div class="dropdown1" v-bind:class="{'clickred':isA}" @click="isA=!isA">综合</div>
        <div class="dropdown1" v-bind:class="{'clickred':isB}" @click="isB=!isB">最新上架</div>
        <div @touchstart="sortPrice(1)" class="dropdown1" v-bind:class="{'clickred':isC}" @click="isC=!isC">价格最低</div>
        <div @touchstart="sortPrice(2)" class="dropdown1" v-bind:class="{'clickred':isD}" @click="isD=!isD">价格最高</div>
        <div class="dropdown1" v-bind:class="{'clickred':isE}" @click="isE=!isE">评价最多</div>
      </div>
      <div @click="lalala1" class="dropdown-second" v-if="show2">
        <div class="dropdown-second1">有货优先</div>
        <div class="dropdown-second1">货到付款</div>
        <div class="dropdown-second1">海囤全球</div>
        <div class="dropdown-second1">促销商品</div>
        <div class="dropdown-second1">配送全球</div>
        <div class="dropdown-second1">PLUS专享促销</div>
        <div class="dropdown-second2">
          <div class="dropdown-second2-1" @click="lalala1()">取消</div>
          <div class="dropdown-second2-2" @click="lalala1()">确定</div>
        </div>
      </div>
      <div class="optionlist">
        <div class="optionlist-text">
          京东物流
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="optionlist-text">
          品牌
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="optionlist-text">
          运行内存
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="optionlist-text">
          电池容量
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="optionlist-text">
          特殊功能
          <div class="el-icon-arrow-down"></div>
        </div>
        <div class="optionlist-text">
          机身颜色
          <div class="el-icon-arrow-down"></div>
        </div>
      </div>
    </div>

    <el-drawer :size="size" :visible.sync="drawer" :direction="direction">
      <div class="drawer-title">
        <div class="drawer-title1">配送至:</div>
        <div class="drawer-title2">苏州工业园区</div>
      </div>
      <div class="divide"></div>
      <div class="drawer-second">
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
      </div>
      <div class="divide"></div>
      <div class="drawer-title-1">
        <div class="drawer-title1">分类</div>
      </div>
      <div class="divide"></div>
      <div class="drawer-second">
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
      </div>
      <div class="divide"></div>
      <div class="drawer-title-1">
        <div class="drawer-title1">分类</div>
      </div>
      <div class="divide"></div>
      <div class="drawer-second">
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
        <div class="drawer-second-list">京东物流</div>
      </div>
      <div class="dropdown-second2">
        <div class="dropdown-second2-1">取消</div>
        <div class="dropdown-second2-2">确定</div>
      </div>
    </el-drawer>
    <!-- <div @click.stop="closeMox" v-if="mox" class="mox"></div> -->
  </div>
</template>

<script>
import showMenu from "../public/showMenu.vue"; // 显示隐藏菜单
function foo(el) {
  let differ;
  if (differ) {
    if (document.documentElement.scrollTop > differ) {
      el.style.cssText = `
        transition: 500ms linear;
        transform: translateY(-86px);
        position: fixed;
      `;
    } else {
      el.style.cssText = `
      position: fixed;
        transition: 500ms linear;
      `;
    }
  }
  differ = document.documentElement.scrollTop;
}
export default {
  name: "topsearch",
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      mox: false,
      isA: false,
      isB: false,
      isC: false,
      isD: false,
      differ: [1],
      isE: false,
      drawer: false,
      direction: "rtl",
      size: "80%"
    };
  },
  methods: {
    sortPrice(n){
      this.$emit("sortprice", n)
    },
    closeMox(){
      console.log(1)
      if(this.show1){
        this.lalala1()
      }else{
        this.lalala()
      }
    },
    lalala() {
      (this.show1 = !this.show1), (this.show2 = false);
      if (this.show1 == true) {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        this.mox = true
      } else {
        document.body.style.position = "relative";
        this.mox = false
        document.body.style.overflow = "auto";
      }
    },
    lalala1() {
      (this.show2 = !this.show2), (this.show1 = false);
      if (this.show2 == true) {
        document.body.style.position = "fixed";
        this.mox = true
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.position = "relative";
        this.mox = false
        document.body.style.overflow = "auto";
      }
    },
    foo(el) {
      if (typeof this.differ == "number") {
        if (document.documentElement.scrollTop > this.differ) {
          el.style.cssText = `
            transition: 500ms linear;
            transform: translateY(-86px);
            position: fixed;
          `;
        } else {
          el.style.cssText = `
          position: fixed;
            transition: 500ms linear;
          `;
        }
      }
      this.differ = document.documentElement.scrollTop;
    },
    funnn(){
      this.foo(this.$refs.test)
    }
  },
  components: {
    showMenu
  },
  mounted() {
    window.addEventListener("scroll", this.funnn, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.funnn, false);
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 42px;
  background-color: #fff;
  /* max-width: 400px; */
}
.mox{
  position: absolute;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  z-index: 1;
}
.container1 {
  width: 100%;
  height: 200px;
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
.textborder-input {
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
.option {
  width: 100%;
  height: 40px;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  justify-content: space-around;
}
.first {
  color: #e4393c;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.second {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.third {
  color: #e4393c;
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.forth {
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
}
.optionlist {
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: scroll;
  background-color: #fff;
}
.optionlist-text {
  flex-shrink: 0;
  width: 90px;
  height: 25px;
  background-color: #f2f2f7;
  margin: 5px;
  color: #666666;
  font-size: 12px;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
.dropdown {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  position: absolute;
  z-index: 5;
}
.dropdown1 {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
}
.dropdown-second {
  width: 100%;
  z-index: 5;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.2);
  position: absolute;
}
.dropdown-second1 {
  width: 100%;
  height: 44px;
  background-color: #fff;
  border-bottom: 1px solid #f6f6f6;
  display: flex;
  align-items: center;
  font-size: 14px;
  padding-left: 5px;
}
.dropdown-second2 {
  width: 100%;
  height: 50px;
}
.dropdown-second2-1 {
  width: 50%;
  height: 100%;
  background-color: #fff;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
}
.dropdown-second2-2 {
  width: 50%;
  height: 100%;
  background-color: #e93b3d;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.clickred {
  color: red;
}
.drawer-title {
  margin-top: -30px;
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
}
.drawer-title-1 {
  width: 100%;
  height: 45px;
  padding: 10px;
  display: flex;
}
.drawer-title1 {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
}
.drawer-title2 {
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 12px;
  color: red;
}
.divide {
  width: 100%;
  height: 15px;
  background-color: #f7f7f7;
}
.drawer-second {
  width: 100%;
  height: 50px;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.drawer-second-list {
  font-size: 14px;
  width: 103px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f7f7f7;
}
</style>