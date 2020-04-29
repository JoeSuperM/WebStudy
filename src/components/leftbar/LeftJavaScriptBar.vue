<template>
  <div class="left">
    <p id="cls_title">JavaScript课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'Js-Basic-1'}">基础、变量，运算符等</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-2'}">函数、对象、事件、字符串</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-3'}">数字、数组、日期</router-link>
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
