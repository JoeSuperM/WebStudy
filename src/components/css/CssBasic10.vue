<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之2D转换</h1>
      <p>通过 CSS3 转换，我们能够对元素进行移动、缩放、转动、拉长或拉伸。</p>
      <h2>translate()方法</h2>
      <p>通过 translate() 方法，元素从其当前位置移动，根据给定的 left（x 坐标） 和 top（y 坐标） 位置参数</p>
      <h2>rotate()方法</h2>
      <p>通过 rotate() 方法，元素顺时针旋转给定的角度。允许负值，元素将逆时针旋转。</p>
      <h2>scale()方法</h2>
      <p>通过 scale() 方法，元素的尺寸会增加或减少，根据给定的宽度（X 轴）和高度（Y 轴）参数</p>
      <h2>skew()方法</h2>
      <p>通过 skew() 方法，元素翻转给定的角度，根据给定的水平线（X 轴）和垂直线（Y 轴）参数</p>
      <h2>matrix()方法</h2>
      <p>matrix() 方法把所有 2D 转换方法组合在一起,需要六个参数，包含数学函数，允许您：旋转、缩放、移动以及倾斜元素。</p>
      <p><a href="https://c.runoob.com/codedemo/3391" target="_blank">演示各种转换效果</a></p>
      <div class="code">
        <h3>演示移动效果</h3>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal translate">这是一个移动的DIV元素:(50px, 10px)</div>
        <h3>演示旋转效果</h3>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal rotate">这是一个旋转的DIV元素:(30deg)</div>
        <h3>演示缩放效果</h3>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal scale">这是一个缩放的DIV元素:(2, 3)</div>
        <p>演示翻转效果</p>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal skew">这是一个翻转的DIV元素:(30deg, 20deg)</div>
        <p>演示matrix的效果</p>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal matrix">这是一个matrix的DIV元素:(0.866, 0.5, -0.5, 0.866, 0, 0)</div>
      </div>
      <h2>transform属性转换：(transform: none|transform-functions;)</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>函数值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in functions" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>transform-origin属性定义转换基点:(transform-origin: x-axis y-axis z-axis;)</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="80">值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in origins" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h1>二、CSS3之3D转换</h1>
      <p>SS3允许您使用3D转换来对元素进行格式化。</p>
      <h2></h2>
      <div class="code">
        <h3>演示旋转rotateX效果</h3>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal rotateX">这是一个旋转X的DIV元素:(120deg)</div>
        <div class="normal">这是一个默认的DIV元素</div>
        <div class="normal rotateY">这是一个旋转Y的DIV元素:(120deg)</div>
      </div>
      <h2>转换属性</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="150">属性</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in transAttrs" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div.normal {
  width: 100px;
  height: 75px;
  background-color: yellow;
  border: 1px solid black;
}

div.translate {
  transform: translate(50px, 10px);
  -ms-transform: translate(50px, 10px);
  /* IE 9 */
  -moz-transform: translate(50px, 10px);
  /* Firefox */
  -webkit-transform: translate(50px, 10px);
  /* Safari and Chrome */
  -o-transform: translate(50px, 10px);
  /* Opera */
}

div.rotate {
  transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  /* IE 9 */
  -moz-transform: rotate(30deg);
  /* Firefox */
  -webkit-transform: rotate(30deg);
  /* Safari and Chrome */
  -o-transform: rotate(30deg);
  /* Opera */
}

div.scale {
  margin: 100px;
  transform: scale(2, 3);
  -ms-transform: scale(2, 3);
  /* IE 9 */
  -moz-transform: scale(2, 3);
  /* Firefox */
  -webkit-transform: scale(2, 3);
  /* Safari and Chrome */
  -o-transform: scale(2, 3);
  /* Opera */
}

div.skew {
  transform: skew(30deg, 20deg);
  -ms-transform: skew(30deg, 20deg);
  /* IE 9 */
  -moz-transform: skew(30deg, 20deg);
  /* Firefox */
  -webkit-transform: skew(30deg, 20deg);
  /* Safari and Chrome */
  -o-transform: skew(30deg, 20deg);
  /* Opera */
}

div.matrix {
  transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
  -ms-transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
  /* IE 9 */
  -moz-transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
  /* Firefox */
  -webkit-transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
  /* Safari and Chrome */
  -o-transform: matrix(0.866, 0.5, -0.5, 0.866, 0, 0);
  /* Opera */
}

div.rotateX {
  transform: rotateX(120deg);
  -webkit-transform: rotateX(120deg);
  /* Safari and Chrome */
  -moz-transform: rotateX(120deg);
  /* Firefox */
}

div.rotateY {
  transform: rotateY(120deg);
  -webkit-transform: rotateY(120deg);
  /* Safari and Chrome */
  -moz-transform: rotateY(120deg);
  /* Firefox */
}

</style>
<script>
export default {
  name: 'CssBasic10',
  data() {
    return {
      title: 'CSS基础--2D、3D转换',
      functions: [{
        name: 'none',
        desc: '定义不进行转换。'
      }, {
        name: 'matrix(n,n,n,n,n,n)',
        desc: '定义 2D 转换，使用六个值的矩阵。'
      }, {
        name: 'matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)',
        desc: '定义 3D 转换，使用 16 个值的 4x4 矩阵。'
      }, {
        name: 'translate(x,y)',
        desc: '定义 2D 转换。'
      }, {
        name: 'translate3d(x,y,z)',
        desc: '定义 3D 转换。'
      }, {
        name: 'translateX(x)、translateY(y)、translateZ(z)',
        desc: '通过设置X轴、Y轴、Z轴的值来定义平移转换。'
      }, {
        name: 'scale(x,y)',
        desc: '定义 2D 缩放转换。'
      }, {
        name: 'scale3d(x,y,z)',
        desc: '定义 3D 缩放转换。'
      }, {
        name: 'scaleX(x)、scaleY(y)、scaleZ(z)',
        desc: '通过设置X轴、Y轴、Z轴的值来定义缩放转换。'
      }, {
        name: 'rotate(angle)',
        desc: '定义 2D 旋转，在参数中规定角度。'
      }, {
        name: 'rotate3d(x,y,z,angle)',
        desc: '定义 3D 旋转。'
      }, {
        name: 'rotateX(angle)、rotateY(angle)、rotateZ(angle)',
        desc: '定义沿着X轴、Y轴、Z轴的3D旋转。'
      }, {
        name: 'skew(x-angle,y-angle)',
        desc: '定义沿着 X 和 Y 轴的 2D 倾斜转换。'
      }, {
        name: 'skewX(angle)、skewY(angle)',
        desc: '定义沿着X轴、Y轴的 2D 倾斜转换。'
      }, {
        name: 'perspective(n)',
        desc: '为 3D 转换元素定义透视视图。'
      }],
      origins: [{
        name: 'x-axis',
        desc: '定义视图被置于 X 轴的何处。可能的值：left、center、right、length、%'
      }, {
        name: 'y-axis',
        desc: '定义视图被置于 Y 轴的何处。可能的值：top、center、bottom、length、%'
      }, {
        name: 'z-axis',
        desc: '定义视图被置于 Z 轴的何处。可能的值：length'
      }],
      transAttrs: [{
        name: 'transform',
        desc: '向元素应用 2D 或 3D 转换。'
      }, {
        name: 'transform-origin',
        desc: '允许你改变被转换元素的位置。'
      }, {
        name: 'transform-style',
        desc: '规定被嵌套元素如何在 3D 空间中显示。flat(子元素将不保留其 3D 位置)、preserve-3d(子元素将保留其 3D 位置。)'
      }, {
        name: 'perspective',
        desc: '规定 3D 元素的透视效果。number(元素距离视图的距离，以像素计), none(默认值。与 0 相同。不设置透视。)'
      }, {
        name: 'perspective-origin',
        desc: '规定 3D 元素的底部位置。'
      }, {
        name: 'backface-visibility',
        desc: '定义元素在不面对屏幕时是否可见。visible(背面是可见的。)、hidden(背面是不可见的。)'
      }]
    }
  }
}

</script>
