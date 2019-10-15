<template>
  <div>
    <h2>lz</h2>
  </div>
</template>

<script>

export default {
  name: "lz",
  mounted () {
    this.axios.get('/data/test.json')
  .then(function (response) {
    
    console.log(response.data.arrdata);
  })
  .catch(function (error) {
    
    console.log(error);
  })
  }
};
</script>

<style scoped>

</style>