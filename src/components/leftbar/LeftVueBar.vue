<template>
  <div class="left">
    <p id="cls_title">Vue课程表</p>
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
<style type="text/css">
.left {
  height: 100%
}

#cls_title {
  color: #FFFFFF;
  width: 100%;
  font-weight: bold;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 0;
  padding-right: 0;
  margin: 0;
  text-decoration: none;
  background-color: #bebebe;
}

#v_ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  float: left;
  width: 100%;
  height: 100%;
  background-color: #EEEEEE;
}

#v_ul a:link,
#v_ul a:visited {
  display: block;
  font-weight: bold;
  color: #000000;
  background-color: #EEEEEE;

  text-align: left;
  padding: 10px;
  text-decoration: none;
}

#v_ul a:hover,
#v_ul a:active {
  background-color: #cc0000;
  color: #FFFFFF;
}

</style>
