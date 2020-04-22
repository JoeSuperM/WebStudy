<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3边框</h1>
      <p>通过CSS3，您能够创建圆角边框，向矩形添加阴影，使用图片来绘制边框</p>
      <h2>圆角边框</h2>
      <p>border-radius属性用于创建圆角</p>
      <p>四个值: 第一个值为左上角，第二个值为右上角，第三个值为右下角，第四个值为左下角。<br />
        三个值: 第一个值为左上角, 第二个值为右上角和左下角，第三个值为右下角<br />
        两个值: 第一个值为左上角与右下角，第二个值为右上角与左下角<br />
        一个值： 四个圆角值相同</p>
      <img src="../../assets/border_radius_simple.png">
      <h2>边框阴影</h2>
      <p>box-shadow 用于向方框添加阴影</p>
      <h2>边框图片</h2>
      <p>border-image属性可以使用图片来创建边框</p>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in borderAttrs" :key="item.attr">
          <td width="200">{{item.attr}}</td>
          <td width="200">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <div class="code">
        <h3>圆角边框</h3>
        <div class="radius">border-radius属性允许向元素添加圆角。</div>
        <h3>边框阴影</h3>
        <div class="shadow">box-shadow属性允许向方框添加阴影</div>
        <h3>边框图片</h3>
        <div class="image" id="round">在这里，图片铺满整个边框。</div>
        <br />
        <div class="image" id="stretch">在这里，图片被拉伸以填充该区域。</div>
        <p>这是我们使用的图片：</p>
        <img src="../../assets/css3_border.png">
      </div>
      <h1>二、背景</h1>
      <p>CSS3 包含多个新的背景属性，它们提供了对背景更强大的控制。</p>
      <h2>background-image</h2>
      <p>通过background-image属性添加背景图片。不同的背景图像和图像用逗号隔开，所有的图片中显示在最顶端的为第一张。</p>
      <h2>background-size属性</h2>
      <p>background-size属性规定背景图片的尺寸。CSS3以前，背景图像大小由图像的实际大小决定。</p>
      <h2>background-origin属性</h2>
      <p>background-origin属性规定背景图片的定位区域,content-box, padding-box,和 border-box区域内可以放置背景图像。</p>
      <img src="../../assets/background-origin.gif">
      <h2>background-clip属性</h2>
      <p>background-clip背景剪裁属性是从指定位置开始绘制。</p>
      <div class="code">
        <h3>演示多张背景图效果</h3>
        <div id="backgroud">
          <h1>Lorem Ipsum Dolor</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          <p>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div.radius {
  text-align: center;
  border: 2px solid #a1a1a1;
  padding: 10px 40px;
  background: #dddddd;
  width: 350px;
  border-radius: 25px;
  -moz-border-radius: 25px;
  /* 老的 Firefox */
}

div.shadow {
  width: 300px;
  height: 100px;
  background-color: #ff9900;
  -moz-box-shadow: 10px 10px 5px #888888;
  /* 老的 Firefox */
  box-shadow: 10px 10px 5px #888888;
}

div.image {
  border: 15px solid transparent;
  width: 300px;
  padding: 10px 20px;
}

div.image#round {
  -moz-border-image: url(../../assets/css3_border.png) 30 30 round;
  /* Old Firefox */
  -webkit-border-image: url(../../assets/css3_border.png) 30 30 round;
  /* Safari and Chrome */
  -o-border-image: url(../../assets/css3_border.png) 30 30 round;
  /* Opera */
  border-image: url(../../assets/css3_border.png) 30 30 round;
}

div.image#stretch {
  -moz-border-image: url(../../assets/css3_border.png) 30 30 stretch;
  /* Old Firefox */
  -webkit-border-image: url(../../assets/css3_border.png) 30 30 stretch;
  /* Safari and Chrome */
  -o-border-image: url(../../assets/css3_border.png) 30 30 stretch;
  /* Opera */
  border-image: url(../../assets/css3_border.png) 30 30 stretch;
}

#backgroud {
  background: url(../../assets/img_flwr.gif) right bottom no-repeat, url(../../assets/paper.gif) left top repeat;
  padding: 15px;
}

</style>
<script>
export default {
  name: 'CssBasic8',
  data() {
    return {
      title: 'CSS基础--边框、背景、文本、字体',
      borderAttrs: [{
        attr: 'border-image',
        value: 'url(border.png) 30 30 round;',
        desc: '设置所有 border-image-* 属性的简写属性。'
      }, {
        attr: 'border-image-source',
        value: 'url(xx.png)',
        desc: '用在边框的图片的路径。'
      }, {
        attr: 'border-image-slice',
        value: '',
        desc: '图片边框向内偏移。'
      }, {
        attr: 'border-image-width',
        value: '',
        desc: '图片边框的宽度。'
      }, {
        attr: 'border-image-outset',
        value: '',
        desc: '边框图像区域超出边框的量。'
      }, {
        attr: 'border-image-repeat',
        value: 'repeated、rounded、stretched',
        desc: '图像边框是否应平铺(repeated)、铺满(rounded)或拉伸(stretched)。'
      }, {
        attr: 'border-radius',
        value: 'border-radius: 1-4 length|% / 1-4 length|%;',
        desc: '设置所有四个 border-*-radius 属性的简写属性。'
      }, {
        attr: 'border-top-left-radius',
        value: '数值或百分比',
        desc: '左上角的圆角'
      }, {
        attr: 'border-top-right-radius',
        value: '数值或百分比',
        desc: '右上角的圆角'
      }, {
        attr: 'border-bottom-right-radius',
        value: '数值或百分比',
        desc: '右下角的圆角'
      }, {
        attr: 'border-bottom-left-radius',
        value: '数值或百分比',
        desc: '左下角的圆角'
      }, {
        attr: 'box-shadow',
        value: 'box-shadow: h-shadow v-shadow blur spread color inset;',
        desc: '向方框添加一个或多个阴影,类似于[10px 10px 5px #0F0]'
      }, {
        attr: 'h-shadow',
        value: '',
        desc: '必需的。水平阴影的位置。允许负值'
      }, {
        attr: 'v-shadow',
        value: '',
        desc: '必需的。垂直阴影的位置。允许负值'
      }, {
        attr: 'blur',
        value: '',
        desc: '可选。模糊距离'
      }, {
        attr: 'spread',
        value: '',
        desc: '可选。阴影的大小'
      }, {
        attr: 'color',
        value: '',
        desc: '可选。阴影的颜色。'
      }, {
        attr: 'inset',
        value: '',
        desc: '可选。从外层的阴影（开始时）改变阴影内侧阴影'
      }]

    }
  }
}

</script>
