<template>
  <div class="left">
    <p id="cls_title">{{title}}</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'CSS-Basic-1'}" active-class="left_active_link">简介、基础、高级语法</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-2'}" active-class="left_active_link">元素、类、ID、属性等选择器</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-3'}" active-class="left_active_link">背景、文本、字体、链接</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-4'}" active-class="left_active_link">列表、表格、轮廓</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-5'}" active-class="left_active_link">框模型、边框、边距</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-6'}" active-class="left_active_link">定位(相对，绝对，浮动)</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-7A'}" active-class="left_active_link">对齐、尺寸、分类、光标</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-7B'}" active-class="left_active_link">导航、下拉，提示，计数器</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-7C'}" active-class="left_active_link">透明度、媒介、表单实例</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-8'}" active-class="left_active_link">CSS3-边框、背景、渐变</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-9'}" active-class="left_active_link">CSS3-文本效果、字体</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-10'}" active-class="left_active_link">CSS3-2D转换、3D转换</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-11'}" active-class="left_active_link">CSS3-过渡、动画</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-12'}" active-class="left_active_link">CSS3-多列、用户界面</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-13'}" active-class="left_active_link">CSS3-图片与按钮</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-14'}" active-class="left_active_link">CSS3-分页、框、FlexBox</router-link>
      </li>
      <li>
        <router-link :to="{name:'CSS-Basic-15'}" active-class="left_active_link">CSS3-多媒体查询</router-link>
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
