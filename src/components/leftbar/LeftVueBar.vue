<template>
  <div class="left">
    <p id="cls_title">Vue课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'Vue-Basic-1'}" active-class="left_active_link">简介、实例、模板语法</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-2'}" active-class="left_active_link">计算属性、侦听器、Style绑定</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-3'}" active-class="left_active_link">条件渲染、列表渲染</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-4'}" active-class="left_active_link">事件处理、表单输入绑定</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-5'}" active-class="left_active_link">组件基础</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-6'}" active-class="left_active_link">组件注册、Prop类型与验证</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-7'}" active-class="left_active_link">自定义事件、自定义指令，插槽</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-8'}" active-class="left_active_link">动态与异步组件，边界情况</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-9'}" active-class="left_active_link">过渡与动画</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-10'}" active-class="left_active_link">Ajax网络请求</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-12'}" active-class="left_active_link">Vue-Resource网络请求</router-link>
      </li>
      <li>
        <router-link :to="{name:'Vue-Basic-11'}" active-class="left_active_link">Vue路由配置</router-link>
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
