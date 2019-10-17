<template>
  <div class="indexbanner">
    <div class="swiper-container indexwsm">
      <div onclick="window.open('https://pro.m.jd.com/mall/active/44hTZosEPy3fCTXhhwUoW6T9fNcz/index.html?extension_id=eyJhZCI6IjM2MjIiLCJjaCI6IjEiLCJzaG9wIjoiMTAwMDAwNDA2NSIsInRzIjoiMTU3MTIyNDEwNyIsInVuaXFpZCI6IntcImNsaWNrX2lkXCI6XCI1NTJlODhiYS00OWMzLTRiZTctYjk4NC02MTg2MDcyZDNlYTFcIixcIm1hdGVyaWFsX2lkXCI6XCI5NzM0MDA4MTRcIixcInBvc19pZFwiOlwiMzYyMlwiLFwic2lkXCI6XCIzOGE1ZTBkYy0wNDBjLTQyMzctOWYwOC1iYmRkYzRiY2I5MDJcIn0ifQ==&jd_pop=552e88ba-49c3-4be7-b984-6186072d3ea1&abt=2')" class="swiper-wrapper">
        <div style="padding:0 10px" class="swiper-slide">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/64884/35/12645/75271/5d9ecd56E23cdc7c9/c6afaee40d1ab1ba.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
            style="display:block;width:100%;height:100%;border-radius:8px"
          />
        </div>
        <div style="padding:0 10px" class="swiper-slide">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/76725/4/12876/109902/5da3f2c9E56f02d7c/cd7e216f3d249d09.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
            style="display:block;width:100%;height:100%;border-radius:8px"
          />
        </div>
        <div style="padding:0 10px" class="swiper-slide">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/63231/9/13147/148922/5da589f4E8d6b4b3b/cdf00f92d620b170.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
            style="display:block;width:100%;height:100%;border-radius:8px"
          />
        </div>
        <div style="padding:0 10px" class="swiper-slide">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/86323/2/64/83965/5da646c1E90a880de/f58a8903886ecf14.jpg!cr_1125x445_0_171!q70.jpg.dpg"
            alt
            style="display:block;width:100%;height:100%;border-radius:8px"
          />
        </div>
        <div style="padding:0 10px" class="swiper-slide">
          <img
            src="//m.360buyimg.com/mobilecms/s700x280_jfs/t1/51092/36/11835/138581/5d89eec9E161806d2/83a2e56cd03a6817.jpg!cc_700x280!q70.jpg.dpg"
            alt
            style="display:block;width:100%;height:100%;border-radius:8px"
          />
        </div>
      </div>
      <div class="swiper-pagination homebanner"></div>
    </div>
  </div>
</template>

<script>
import { type } from "os";
export default {
  name: "indexbanner",
  methods: {},
  mounted() {
    var mySwiper = new Swiper(".indexwsm", {
      resistanceRatio: 0,
      pagination: {
        el: ".indexbanner .swiper-pagination",
        type: "custom",
        renderCustom: function(swiper, current, total) {
          var paginationHtml = " ";
          for (var i = 0; i < total; i++) {
            // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
            if (i === current - 1) {
              paginationHtml +=
                '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
            } else {
              paginationHtml +=
                '<span class="swiper-pagination-customs"></span>';
            }
          }
          return paginationHtml;
        }
      },
      autoplay: true,
      loop: true
    });
  }
};
</script>

<style scoped>
.indexbanner {
  width: 100%;
  height: 155px;
  padding: 10px 0;
}
.swiper-container {
  position: relative;
    width: 100%;
    height: 100%;
}
/*包裹自定义分页器的div的位置等CSS样式*/
 .homebanner .swiper-pagination-custom {
  bottom: 5%;
  left: 0;
  width: 100%;
  height: 20px;
  /* background-color: red; */
  text-align: center;
}
/*自定义分页器的样式，这个你自己想要什么样子自己写*/
.homebanner .swiper-pagination-customs {
  width: 15px;
  height: 3px;
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0.3;
  /* box-shadow: 0 0 2px  #000; */
  margin: 0 5px;
  outline: 0;
}
/*自定义分页器激活时的样式表现*/
.homebanner .swiper-pagination-customs-active {
  opacity: 1;
  border: 3px solid #8e2829;
  background-color: #b6b6b6;
}
</style>