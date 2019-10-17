<template>
  <div class="bottomstyle">
    <div class="botton-first">
      <div>
        <a>登录</a>
      </div>
      <div>
        <a>注册</a>
      </div>
      <div>
        <a>客户服务</a>
      </div>
      <div style="border:0">
        <a>返回顶部</a>
      </div>
    </div>
    <div class="botton-second">
      <div>
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t16423/186/2517573622/5186/75a541f7/5ab1c0deN947bdcba.png"
          alt
        />
      </div>
      <div>
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t18550/294/898388074/6574/3a8c5413/5ab0b8e9Ne9c48331.png"
          alt
        />
      </div>
      <div>
        <img
          src="//m.360buyimg.com/mobilecms/jfs/t14581/218/2689195961/4696/203b872a/5ab1c0f2N51c3f1bb.png"
          alt
        />
      </div>
    </div>
    <div class="botton-third">
     <span>Copyright © 2004-2019 京东JD.com 版权所有</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "bottomstyle",
  methods: {}
};
</script>

<style scoped>
.bottomstyle {
  border: 1px solid #e5e5e5;
  width: 100%;
  height: 190px;
  background: #ffffff;
  margin-bottom:42px;
}
.botton-first {
  width: 100%;
  height: 30%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #d7d7d7;
}
.botton-second{
  width: 100%;
  height: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
    border-bottom: 1px solid #d7d7d7;
}
.botton-first > div {
  width: 23%;
  height: 20px;
  font-size: 15px;
  color: #848689;
  border-right: 1px solid #d7d7d7;
}
.botton-second > div {
  width: 30%;
  font-size: 15px;
}
img {
  width: 66px;
  height: auto;
}
.botton-third{
    text-align: center;
    padding: 5px;
}
.botton-third>span{
    font-size: 12px;
    color:#848689;
}
</style>