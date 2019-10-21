<template>
  <div>
    <searchbox></searchbox>
    <indexbanner></indexbanner>
    <advertui></advertui>
  </div>
</template>

<script>
import searchbox from "../components/wsm/searchbox"
import indexbanner from "../components/wsm/indexbanner"
import advertui from "../components/wsm/advertui"
const components = {
  searchbox,
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