<template>
  <div class="left">
    <p id="cls_title">JavaScript课程表</p>
    <ul id="v_ul">
      <li>
        <router-link :to="{name:'Js-Basic-1'}" active-class="left_active_link">基础、变量，运算符等</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-2'}" active-class="left_active_link">函数、对象、事件、字符串</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-3'}" active-class="left_active_link">数字、数组与方法</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-4'}" active-class="left_active_link">日期格式、获取与设置、Math</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-5'}" active-class="left_active_link">逻辑、比较、条件、类型转换</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-6'}" active-class="left_active_link">位运算符、正则表达式、异常</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-7'}" active-class="left_active_link">作用域、严格模式、this关键字</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-8'}" active-class="left_active_link">Json、void、代码规范</router-link>
      </li>
      <li>
        <router-link :to="{name:'Js-Basic-9'}" active-class="left_active_link">JavaScript函数</router-link>
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
