<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="left" id="router_left" />
    <router-view name="right" id="router_right" />
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

#router_left {
  float: left;
  width: 20%;
  background-color: #ccc;
  height: 100%;
}

#router_right {
  float: right;
  width: 80%;
  background-color: #EEF9FF;
  height: 100%;
  text-align: left;
  min-height: 800px;
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
