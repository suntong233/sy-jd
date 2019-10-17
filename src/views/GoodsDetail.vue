<template>
  <div class="goodsdetail">
    商品详情： <br>
    <div style="width:100%;overflow: hidden;">
      {{ this.$store.state.goodDetails }}
    </div>
  </div>
</template>

<script>
// 商品详情
export default {
  name: "goodsdetail"
};
</script>

<style scoped>
  .goodsdetail{
    width: 100%;
  }
</style>
