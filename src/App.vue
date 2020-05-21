<template>
  <div id="app">
    <router-view></router-view>
    <div id="container">
      <router-view name="left" id="router_left" />
      <router-view name="right" id="router_right" />
    </div>
    <div id="footer">
      <p>&#169;Copyright 2020 JoeSuperM.All rights reserved.</p>
    </div>
  </div>
</template>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
}

#container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0 auto;
}

#router_left {
  float: left;
  height: 100%;
  width: 20%;
  background-color: #333;
  min-height: 550px;
  height: 100%;
  padding-bottom: 99999px;
  margin-bottom: -99999px;
  overflow: hidden;
  display: inline;
}

#router_right {
  float: right;
  width: 80%;
  min-height: 550px;
  background-color: #EEF9FF;
  height: auto;
  text-align: left;
}

#footer {
  background-color: #0059FF;
  color: white;
  clear: both;
  text-align: center;
  padding: 1px;
}

</style>
<script>
export default {
  name: 'App'
}

</script>
