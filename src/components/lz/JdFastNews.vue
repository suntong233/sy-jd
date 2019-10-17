<template>
  <div onclick="window.open('https://h5.m.jd.com/active/faxian/list/article-list.html?ids=222455906-223580935-222218939-222373832','_self')" class="jdfastnews">
    <div class="jdfastnews_container">
      <div class="jdfastnews_container_img">
        <img src="/lz/images/jdfastnews.jpg" />
      </div>
        <el-carousel  class="animate" height="100%" direction="vertical" :autoplay="true">
            <el-carousel-item v-for="item in listData" :key="item.title">
                <div class="medium"><span class="hot">{{item.title}}</span> {{ item.content }}</div>
           </el-carousel-item>
        </el-carousel>
     <div class="jdfastnews_more">
        <div class="jdfastnews_more_container">更多</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "jdfastnews",
  data() {
      return{
            listData: [
                {title:"热门", content:"华为又放猛料鸿蒙系统即将···"},
                {title:"HOT", content:"预测iphone11销量暴跌价格···"},
                {title:"推荐", content:"新款耳机最新登场airpod即···"},
                {title:"最新", content:"最新蓝牙耳机上市saliosds···"}
            ]
      }
  }
};
</script>

<style>

.el-carousel {
    width: 100%;
    background-color: #fff;
    padding-left: 10px;
}
.el-carousel__container {
    width: 100%;
    background-color: #fff;
    
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 30px;
    margin: 0;
  }
  
  .medium {
      height: 100%;
      display: flex;
      align-items: center;
      font-size:14px;
      margin-top: 1px;
      width: 100%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
}

.jdfastnews {
  width: 100%;
  height: 30px;
  padding: 0 8px;
  margin-bottom: 15px;
}

.jdfastnews_container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
}

.jdfastnews_container_img {
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.jdfastnews_container_img img {
  width: 90%;
  height: 53%;
}

.jdfastnews_container .animate {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-overflow: ellipsis;
  overflow: hidden;
}

.jdfastnews_container .animate .hot {
  font-size: 14px;
  color: #f23030;
  font-weight: 300;
  margin-right: 2.5%;
}

.jdfastnews_more {
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jdfastnews_more_container {
  color: rgb(24, 24, 24);
  font-size: 12px;
  width: 100%;
  padding-left: 10%;
  border-left: 1px solid rgb(236, 236, 236);
}

 
</style>