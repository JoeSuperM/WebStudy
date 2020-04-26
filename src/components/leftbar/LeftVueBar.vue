<template>
  <div class="left">
    <p id="cls_title">Vue课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'Vue-Basic-1'}">简介、实例、模板语法</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-2'}">计算属性、侦听器、Style绑定</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-3'}">条件渲染、列表渲染</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-4'}">事件处理、表单输入绑定</router-link>
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
