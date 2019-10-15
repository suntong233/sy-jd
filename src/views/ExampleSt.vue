<template>
  <div>
    <h2>st{{ test }}</h2>
    <div class="testbox1">{{ testArr }}</div>
  </div>
</template>

<script>
export default {
  name: "st",
  data() {
    return {
      test: "测试",
      testArr: []
    };
  },
  created() {
    // this.axios.get("/data/test.json").then(res => {
    //   console.log(res.data);
    //   this.testArr = res.data.arrdata;
    // });
  }
};
</script>

<style scoped>
.testbox1 {
  width: 400px;
  height: 300px;
  background-image: url(https://m.360buyimg.com/mobilecms/s1125x939_jfs/t1/68092/23/12838/57655/5da453b6Ec8d9b69d/b641dccc10e7c91a.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>