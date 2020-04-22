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
      <li>
        <router-link :to="{name:'CSS-Basic-5'}">框模型、边框、边距</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-6'}">定位(相对，绝对，浮动)</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-7'}">对齐、尺寸、分类、导航、透明度、媒介等</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-8'}">CSS3-边框、背景、文本、字体</router-link>
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
