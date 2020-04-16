<template>
  <div class="left">
    <p id="cls_title">JavaScript课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'TopTableBar'}">HTML基础</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS'}"> CSS </router-link>
      </li>
      <li>
        <a href="https:\\www.baidu.com\">百度</a>
      </li>
    </ul>
  </div>
</template>
<stript>
  export default {
  }
</stript>
<style scoped>
@import '../../style/left_bar.css';

</style>
