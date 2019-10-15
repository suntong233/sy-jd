<template>
  <div class="tabBarContainer">
    <div @click="routerChange(item)" class="tabBar-item" v-for="item in renderList" :key="item.id">
      <img :src=" item.isChange? (item.path == $route.path ? item.showUrl : item.url) : item.url" />
    </div>
  </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      showList: 0,
      renderList: [
        {
          id: 1,
          showUrl: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",
          url:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png",
          path: "/",
          isChange: true
        },
        {
          id: 2,
          showUrl: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png",
          url:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png",
          path: "/classify",
          isChange: true
        },
        {
          id: 3,
          url:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png",
          path:
            "https://wqs.jd.com/pingou/index.shtml?sceneval=2&fromM=1&ptag=138097.1.6"
        },
        {
          id: 4,
          url:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png",
          path: "/shoppingcar"
        },
        {
          id: 5,
          showUrl: "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png",
          url:
            "https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png",
          path: "/login",
          isChange: true
        }
      ]
    };
  },
  methods: {
    routerChange(val) {
      if (val.path[0] === "h") {
        window.open(val.path);
      } else if (location.hash.slice(1) === val.path) {
        return;
      } else {
        this.$router.push(val.path);
      }
    }
  }
};
</script>

<style scoped>
.tabBarContainer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0 1px 5px rgb(150, 150, 150);
  z-index: 10000;
  /* border-top: 0.5px solid rgb(201, 201, 201); */
}
.tabBar-item {
  width: 51px;
  height: 40px;
}
.tabBar-item > img {
  width: 100%;
}
</style>