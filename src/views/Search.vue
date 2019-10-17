<template>
  <div class="home">
    <searchtextBtn></searchtextBtn>
    搜索页面：所有tab 
    <br>
    <div style="width:100%;overflow: hidden;">
      {{ this.$store.state.searchPageData }}
    </div>
  </div>
</template>

<script>
import searchtextBtn from "../components/wsm/searchtextbtn.vue";

const components = {
  searchtextBtn
}
// 搜素
export default {
  name: "search",
  components
};
</script>

<style scoped>

</style>
