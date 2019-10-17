<template>
  <div id="showmenu">
    <ul class="showmenu-container">
      <li class="showmenu-container-item" @click="swithTo('/home')">
        <div class="showmenu-img">
          <img src="/lz/images/home.png" />
        </div>
        <div class="showmenu-titile">
          <strong>首页</strong>
        </div>
      </li>

      <li class="showmenu-container-item" @click="swithTo('/search')">
        <div class="showmenu-img">
          <img src="/lz/images/classify-search.png" />
        </div>
        <div class="showmenu-titile">
          <strong>分类搜索</strong>
        </div>
      </li>

      <li class="showmenu-container-item" @click="swithTo('/shoppingcar')">
        <div class="showmenu-img">
          <img src="/lz/images/shoppingcar.png" />
        </div>
        <div class="showmenu-titile">
          <strong>购物车</strong>
        </div>
      </li>

      <li class="showmenu-container-item" @click="swithTo('/login')">
        <div class="showmenu-img">
          <img src="/lz/images/myJD.png" />
        </div>
        <div class="showmenu-titile">
          <strong>我的京东</strong>
        </div>
      </li>

      <li class="showmenu-container-item" >
        <div class="showmenu-img">
          <img src="/lz/images/browse-recorder.png" />
        </div>
        <div class="showmenu-titile">
          <strong>浏览记录</strong>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "showmenu",
  methods: {
      swithTo(path) {
          this.$router.push(path)
      }
  }
};
</script>

<style scoped>
#showmenu {
  box-sizing: border-box;
  position: absolute;
  top: 53px;
  z-index: 1000;
  right: 5%;
  max-width: 400px;
}


#showmenu:after {
 position: absolute;
    top: -5px;
    right: 5px;
    content: '';
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid rgba(0, 0, 0, 0.9);
}
.showmenu-container {
  width: 125px;
  height: 200px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.9);
  list-style: none outside none;
  list-style-type: none;
}

.showmenu-container .showmenu-container-item {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.2);
  display: flex;
}

.showmenu-img {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.showmenu-titile {
  width: 85px;
  height: 40px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.showmenu-titile strong {
    font-weight:400
}
.showmenu-img img {
  width: 15px;
  height: 15px;
}
</style>   








