<template>
  <div>
    <searchtext></searchtext>
    <indexbanner></indexbanner>
    <advertui></advertui>
  </div>
</template>

<script>
import searchtext from "../components/wsm/searchtext"
import indexbanner from "../components/wsm/indexbanner"
import advertui from "../components/wsm/advertui"
const components = {
  searchtext,
  indexbanner,
  advertui
};

export default {
  name: "wsm",
 components
};
</script>

<style scoped>

</style>