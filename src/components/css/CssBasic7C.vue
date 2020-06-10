<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、图像透明度</h1>
      <p>opacity属性是W3C CSS推荐标准的一部分。用于规定不透明度。从0.0（完全透明）到1.0（完全不透明）。</p>
      <div class="code">
        <h3>基础效果演示</h3>
        <p>常规图像：</p>
        <img src="../../assets/logo.png">
        <p>带有透明度的图像：</p>
        <img src="../../assets/logo.png" style="opacity:0.4;filter:alpha(opacity=40)">
        <h3>演示hover效果(将鼠标移动到图片上)</h3>
        <img id="hover" src="../../assets/logo.png">
      </div>
      <h1>二、媒介类型</h1>
      <p>媒介类型(Media Types)允许你定义以何种媒介来提交文档。文档可以被显示在显示器、纸媒介或者听觉浏览器等等。通过@media规则的方式指定媒介</p>
      <table border="1" cellspacing="0" cellpadding="5" width="600">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th width="150">媒介类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in mediaAttrs" :key="item.media">
          <td>{{item.media}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h3>演示代码</h3>
      <div class="code">
        <pre>
          &#60;style&#62;
            @media screen
            {
              p.test {font-family:verdana,sans-serif; font-size:14px}
            }

            @media print
            {
              p.test {font-family:times,serif; font-size:10px}
            }

            @media screen,print
            {
              p.test {font-weight:bold}
            }
          &#60;/style&#62;
        </pre>
      </div>
      <h1>三、表单实例</h1>
      <div class="code">
        <h3>1、使用CSS来渲染HTML的表单元素</h3>
        <div id="tb-1">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Your name..">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Your last name..">
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          <input type="submit" value="Submit" v-on:click="showMsg('Submit')">
        </div>
        <h3>2、带边框、背景、聚焦等输入框</h3>
        <div id="tb-2">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="fname">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lname">
        </div>
        <h3>3、带图标、动画的搜索框</h3>
        <div>
          <div id="tb-3">
            <label>带有图标的搜索框</label>
            <input type="text" name="search" placeholder="搜索..">
          </div>
          <div id="tb-4">
            <label>带有动画的搜索框</label>
            <br />
            <input type="text" name="search" placeholder="搜索..">
          </div>
        </div>
        <h3>4、下拉菜单</h3>
        <div id="tb-5">
          <select id="country" name="country">
            <option value="au">Australia</option>
            <option value="ca">Canada</option>
            <option value="usa">USA</option>
          </select>
        </div>
        <h3>5、按钮样式</h3>
        <a href="#/css/basic13#css-button-demo" target="_top">其他更多的按钮效果</a>
        <div id="tb-6">
          <input type="button" value="按钮">
          <input type="reset" value="重置">
          <input type="submit" value="提交">
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

img#hover {
  opacity: 0.4;
  filter: alpha(opacity=40);
  /* For IE8 and earlier */
}

img#hover:hover {
  opacity: 1.0;
  filter: alpha(opacity=100);
  /* For IE8 and earlier */
}

#tb-1 {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
}

#tb-1 input[type=text],
#tb-1 select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

#tb-1 input[type=submit] {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#tb-1 input[type=submit]:hover {
  background-color: #45a049;
}

#tb-2 input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid green;
  border-radius: 4px;
  background-color: white;
  color: red;
  font-size: 1rem;
}

#tb-2 input[type=text]:focus {
  background-color: lightgreen;
}

#tb-3 input[type=text] {
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
  background-color: white;
  background-image: url('https://static.runoob.com/images/mix/searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
}

#tb-4 input[type=text] {
  width: 40%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin: 8px 0;
  background-color: white;
  background-image: url('https://static.runoob.com/images/mix/searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
}

#tb-4 input[type=text]:focus {
  width: 100%;
}

#tb-5 select {
  width: 40%;
  padding: 16px 20px;
  border: none;
  font-size: 1.25rem;
  color: green;
  border-radius: 4px;
  background-color: #f1f1f1;
}


#tb-6 input[type=button],
#tb-6 input[type=submit],
#tb-6 input[type=reset] {
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
}

</style>
<script>
export default {
  name: 'CssBasic7C',
  data() {
    return {
      title: 'CSS基础--透明度、媒介、表单实例',
      mediaAttrs: [{
        media: 'all',
        desc: '用于所有的媒介设备。'
      }, {
        media: 'aural',
        desc: '用于语音和音频合成器。'
      }, {
        media: 'braille',
        desc: '用于盲人用点字法触觉回馈设备。'
      }, {
        media: 'embossed',
        desc: '用于分页的盲人用点字法打印机。'
      }, {
        media: 'handheld',
        desc: '用于小的手持的设备。'
      }, {
        media: 'print',
        desc: '用于打印机。'
      }, {
        media: 'projection',
        desc: '用于方案展示，比如幻灯片。'
      }, {
        media: 'screen',
        desc: '用于电脑显示器。'
      }, {
        media: 'tty',
        desc: '用于使用固定密度字母栅格的媒介，比如电传打字机和终端。'
      }, {
        media: 'tv',
        desc: '用于电视机类型的设备。'
      }]
    }
  },
  methods: {
    showMsg: function(msg) {
      alert(msg);
    }
  }
}

</script>
