<template>
  <div>
    <h2>wsm</h2>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "wsm",
  created(){
    this.axios.get("/data/test.json").then(res=>{
      console.log(res.data)
    })
  }
};
</script>

<style scoped>

</style>