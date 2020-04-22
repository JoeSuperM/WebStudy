<template>
  <div>
    <div id="main-top">
      <router-link :to="{name:'TopMain'}">
        <h1>{{title}}</h1>
      </router-link>
    </div>
    <div id="top">
      <ul id="h_ul">
        <li>
          <router-link :to="{name:'HTML'}">HTML</router-link>
        </li>
        <li>
          <router-link :to="{name:'CSS'}">CSS</router-link>
        </li>
        <li>
          <router-link :to="{name:'JavaScript'}">JavaScript</router-link>
        </li>
        <li>
          <router-link :to="{name:'Vue'}">Vue</router-link>
        </li>
      </ul>
    </div>
    <hr />
  </div>
</template>
<style scoped>
  @import url('../style/top_bar.css');
  #main-top {
  width: 100%;
  height: 120px;
  background-image: url('../assets/page_top.jpg');
  background-repeat: repeat;
  background-attachment: scroll;
  padding-top: 50px;
}


</style>
<script type="text/javascript">
export default {
  name: 'TopTableBar',
  data() {
    return {
      title: 'JoeSuperM学习Demo导航知识点'
    }
  }
}

</script>>
