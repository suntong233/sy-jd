<template>
  <div class="home">
    <searchtextBtn></searchtextBtn>
    <div @click="searchTab(item)" v-for="item in allTabs" :key="item">{{item}}</div>
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
  data () {
    return {
      allTabs: []  
    }
  },
  methods: {
    searchTab(tab){
      this.$store.commit("goSearchPage", tab)
      this.$router.push("/searchres")
    }
  },
  created () {
      this.$store.state.searchPageData.forEach(item=>{
        this.allTabs.push(item)
      })
  },
  components
};
</script>

<style scoped>

</style>
