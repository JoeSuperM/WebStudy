<template>
  <div class="left">
    <p id="cls_title">{{title}}</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'HTML-Basic-1'}" active-class="left_active_link">元素、属性、标题、段落</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-2'}" active-class="left_active_link">样式、格式化、引用、代码</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-3'}" active-class="left_active_link">注释、CSS、链接、图像</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-4'}" active-class="left_active_link">表格、列表</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-5'}" active-class="left_active_link">块、类、布局</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-6'}" active-class="left_active_link">框架、背景、脚本</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-7'}" active-class="left_active_link">路径、实体、URL、颜色</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-8'}" active-class="left_active_link">HTML表单元素</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-9'}" active-class="left_active_link">H5简介、元素、语义</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-10'}" active-class="left_active_link">H5图形、媒体</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-11'}" active-class="left_active_link">H5拖放、Web存储</router-link>
      </li>
      <li>
        <router-link :to="{name:'HTML-Basic-12'}" active-class="left_active_link">H5应用缓存、Workers、SSE</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
@import '../../style/left_bar.css';

</style>
<script>
export default {
  name: 'HtmlBasic0',
  data() {
    return {
      title: 'HTML课程表'
    }
  }
}

</script>
