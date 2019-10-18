<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html,body{
    margin: 0 auto;
    width: 100%;
    height: 100%;
    /* max-width: 400px; */
    position: relative;
    min-width: 300px;
  }
  #app{
    width: 100%;
    height: 100%;
    min-width: 300px;
  }
</style>
