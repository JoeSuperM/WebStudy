<template>
  <div class="left">
    <p id="cls_title">{{title}}</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'CSS-Basic-1'}">简介、基础、高级语法</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-2'}">元素、类、ID、属性等选择器</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-3'}">背景、文本、字体、链接</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-4'}">列表、表格、轮廓</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import '../../style/left_bar.css';

</style>
<script>
export default {
  name: 'CssBasic0',
  data() {
    return {
      title: 'CSS课程表'
    }
  }
}

</script>
