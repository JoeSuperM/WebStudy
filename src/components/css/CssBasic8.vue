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
        <h3>演示背景裁剪</h3>
        <p>没有背景剪裁 (border-box没有定义):</p>
        <div id="clip-none">
          <h2>北京</h2>
          <p>北京，又叫北平，是中华人民共和国的首都。</p>
        </div>
        <p>定义背景裁剪background-clip: padding-box:</p>
        <div id="clip-padding">
          <h2>北京</h2>
          <p>北京，又叫北平，是中华人民共和国的首都。</p>
        </div>
        <p>定义背景裁剪background-clip: content-box:</p>
        <div id="clip-content">
          <h2>北京</h2>
          <p>北京，又叫北平，是中华人民共和国的首都。</p>
        </div>
      </div>
      <h1>三、渐变</h1>
      <p>渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。CSS3 定义了两种类型的渐变（gradients）：<br />
        <b>线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向</b><br />
        <b>径向渐变（Radial Gradients）- 由它们的中心定义</b>
      </p>
      <h2>线性渐变</h2>
      <p>创建一个线性渐变，你必须至少定义两种颜色结点。默认情况从上到下渐变，CSS渐变语法：background-image: linear-gradient(direction, color-stop1, color-stop2, ...);其中direction的值可以为to left/to right/to bottom right/...
      </p>
      <h2>角度渐变</h2>
      <p>如果你想要在渐变的方向上做更多的控制，角度是指水平线和渐变线之间的角度，逆时针方向计算。换句话说，0deg 将创建一个从下到上的渐变，90deg 将创建一个从左到右的渐变。</p>
      <img src="../../assets/gradient_degree.jpg" width="400" height="auto">
      <p><span class="red">注意</span>：很多浏览器（Chrome、Safari、firefox等）的使用了旧的标准，即0deg将创建一个从左到右的渐变，90deg 将创建一个从下到上的渐变。换算公式 90 - x = y 其中 x 为标准角度，y为非标准角度。</p>
      <h2>透明度渐变</h2>
      <p>CSS3 渐变也支持透明度（transparent），可用于创建减弱变淡的效果。为了添加透明度，我们使用 rgba()函数来定义颜色结点。rgba() 函数中的最后一个参数可以是从 0 到 1 的值，它定义了颜色的透明度：0 表示完全透明，1 表示完全不透明。</p>
      <h2>重复渐变</h2>
      <p>repeating-linear-gradient()函数用于重复线性渐变</p>
      <div class="code">
        <h3>演示线性渐变(从上到下)</h3>
        <div style="height:100px;background-image:linear-gradient(#00FF00,#0000FF,#FF0000);background-color:red;" />
        <h3>演示线性渐变(从左到右)</h3>
        <div style="height:100px;background-image:linear-gradient(to right,#00FF00,#0000FF,#FF0000);background-color:red;" />
        <h3>演示线性渐变(对角，左上到右下)</h3>
        <div style="height:100px;background-image:linear-gradient(to bottom right,#00FF00,#0000FF,#FF0000);background-color:red;" />
        <h3>演示角度渐变</h3>
        <div style="height:100px; text-align:center; background-image:linear-gradient(0deg, green, red);">0度-green到red</div>
        <br />
        <div style="height:100px; text-align:center; background-image:linear-gradient(90deg, green, red);">90度-green到red</div>
        <br />
        <div style="height:100px; text-align:center; background-image:linear-gradient(180deg, green, red);">180度-green到red</div>
        <br />
        <div style="height:100px; text-align:center; background-image:linear-gradient(-90deg, green, red);">-90度-green到red</div>
        <h3>演示透明度渐变,从0到1</h3>
        <div style="height:100px;background-image:linear-gradient(to right,rgba(0,255,0,0),rgba(0,255,0,1);" />
        <h3>演示重复渐变</h3>
        <div style="height:100px; text-align:center; color:white; background-image:repeating-linear-gradient(0deg, green 10%, red 20%);">0度-green 10%到red 20%</div>
        <br />
        <div style="height:100px; text-align:center; color:white; background-image:repeating-linear-gradient(90deg, green 7%, red 10%);">90度-green 7%到red 10%</div>
      </div>
      <h2>径向渐变</h2>
      <p>径向渐变由它的中心定义。为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。<br />语法：background-image: radial-gradient(shape size at position, start-color, ..., last-color);</p>
      <p>shape形状：它可以是值circle(圆形)或 ellipse(椭圆形,默认)。</p>
      <p>尺寸大小：closest-side、farthest-side、closest-corner、farthest-corner</p>
      <p>重复渐变：repeating-radial-gradient() 函数用于重复径向渐变</p>
      <div class="code">
        <h3>径向渐变 - 颜色结点均匀分布</h3>
        <div style="width:100px; height:100px;background-image: radial-gradient(red, green, blue);" />
        <h3>径向渐变 - 颜色结点不均匀分布</h3>
        <div style="width:100px; height:100px;background-image: radial-gradient(red 15%, green 20%, blue 50%);" />
        <h3>径向渐变 - 设置圆形渐变</h3>
        <div style="width:100px; height:100px;background-image: radial-gradient(circle, red, green, blue);" />
        <h3>径向渐变 - 不同尺寸大小</h3>
        <div style="width:200px; height:200px; color:white; background-image: radial-gradient(farthest-side at 60% 55%, red, green, blue);">farthest-side at 60% 55%</div>
        <br />
        <div style="width:200px; height:200px; color:white; background-image: radial-gradient(closest-side at 60% 55%, red, green, blue);">closest-side at 60% 55%</div>
        <br />
        <div style="width:200px; height:200px; color:white; background-image: radial-gradient(closest-corner at 60% 55%, red, green, blue);">closest-corner at 60% 55%</div>
        <br />
        <div style="width:200px; height:200px; color:white; background-image: radial-gradient(farthest-corner at 60% 55%, red, green, blue);">farthest-corner at 60% 55%</div>
        <h3>演示重复渐变</h3>
        <div style="height:250px; width:250px; text-align:center; color:white; background-image:repeating-radial-gradient(red, yellow 10%, green 15%);">red, yellow 10%, green 15%</div>
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

#clip-none {
  border: 10px dotted black;
  padding: 35px;
  background: green;
  color: white;
}

#clip-padding {
  border: 10px dotted black;
  padding: 35px;
  background: green;
  color: white;
  background-clip: padding-box;
}

#clip-content {
  border: 10px dotted black;
  padding: 35px;
  background: green;
  color: white;
  background-clip: content-box;
}

</style>
<script>
export default {
  name: 'CssBasic8',
  data() {
    return {
      title: 'CSS基础--边框、背景、渐变',
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
