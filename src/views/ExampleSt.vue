<template>
  <div>
    <h2>st{{ test }}</h2>
    <div>{{ testArr }}</div>
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
    this.axios.get("/data/test.json").then(res => {
      console.log(res.data);
      this.testArr = res.data.arrdata;
    });
  }
};
</script>

<style scoped>
</style>