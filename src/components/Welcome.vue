<template>
  <div>
    <h1 class="center">{{ title }}</h1>
    <hr />
    <div>
      <img src="../assets/joesuperm.jpg" width="160" height="220" align="left">
      <p class="intro">姓名：周 超<br />
        性别：男<br />
        联系方式：156-8008-1615（JoeSuperM@qq.com）<br />
        工作职务：Android软件研发工程师<br />
        任职公司：深圳市银河风云网络系统股份有限公司成都分公司<br />
        居住地址：成都市西源大道1311号
      </p>
    </div>
    <div class="code">
      <p class="title">About Me</p>
      <p class="intro">&#160;&#160;&#160;&#160;我毕业于成都理工大学，今年28岁，已婚，现任职于深圳市银河风云网络系统股份有限公司成都分公司，主要从事Android和Web前端开发，工作时间5年。</p>
      <p class="title">About My Company</p>
      <p class="intro">&#160;&#160;&#160;&#160;深圳市银河风云网络系统股份有限公司是深圳市风云实业有限公司控股的股份制有限公司。公司总部在深圳，有员工300余人，本科以上学历员工占87%以上，研究生以上学历员工占32%以上。当前公司分别在深圳、成都、长沙建立了3个研发机构，同时划分华北、华南、华中、华东、西部等区域并在主要省会城市建立销售服务网点。公司现阶段主要面向政府及各行业用户提供自主研发的专用和通用型高性能路由、交换、安全平台、智慧家庭整体解决方案以及技术服务。作为新兴的拥有自主知识产权的国产数据通信设备供应商，银河风云一直以来把员工作为公司重要资源，为每位员工创造广阔的职业发展空间与舒适人性化的工作环境。银河风云将与员工一起共同成长，共同体验成功的喜悦，分享收获的果实。悟家系列秉承科技改变生活的理念，把小产品落地和大数据挖掘完美相结合，为千家万户提供一系列智能舒适、节能环保、价廉物美的智能硬件。</p>
      <p class="title">About This Project</p>
      <p class="intro">&#160;&#160;&#160;&#160;这个网站主要是通过W3School的学习，将Web开发的基础知识学习并实践落地展示的效果。本项目相当于一个学习笔记和实践操作的结合。</p>
    </div>
    <br /><br /><br /><br />
    <h2 class="center">特别感谢以下机构提供的相关知识和技术支持</h2>
    <div class="center">
      <ul>
        <li><a href="https://www.galaxywind.com/" target="_blank">银河风云</a></li>
        <li><a href="https://www.w3school.com.cn/" target="_blank">W3school</a></li>
        <li><a href="https://cn.vuejs.org/v2/guide/" target="_blank">Vue</a></li>
      </ul>
    </div>
  </div>
</template>
<style type="text/css" scoped>
@import url('../style/right_content.css');

p.title {
  font-size: 30px;
  color: green;
  font-weight: bold;
}

p.intro {
  font-size: 25px;
  text-align: left;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  font-size: 22px;
}

</style>
<script>
export default {
  data() {
    return {
      title: '欢迎审阅JoeSuperM的Web学习笔记之路'
    }
  }
}

</script>
