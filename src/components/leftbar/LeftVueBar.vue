<template>
  <div class="left">
    <p id="cls_title">Vue课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'Vue-Basic-1'}">简介、基础语法</router-link>
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
