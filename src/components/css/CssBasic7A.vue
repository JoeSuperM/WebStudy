<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS水平对齐</h1>
      <h2>对齐块元素</h2>
      <p>块元素指的是占据全部可用宽度的元素，并且在其前后都会换行。</p>
      <h2>使用margin属性来水平对齐</h2>
      <p>通过将左和右外边距设置为 "auto"，来对齐块元素(margin:auto;)。</p>
      <h3>块级元素居中</h3>
      <div class="block_center">水平居中块级元素 (如 div), 可以使用 margin: auto;</div>
      <h3>文本内容居中</h3>
      <div class="text_center">水平居中文本，可以使用text-align：center;</div>
      <h3>图片居中对齐(display:block;margin:0 auto;)</h3>
      <img src="../../assets/logo.png" class="img_center">
      <h2>使用position属性进行左和右对齐</h2>
      <p>对齐元素的方法之一是使用绝对定位(position:absolute;)</p>
      <p><span class="red">注意：</span>绝对定位元素会被从正常流中删除，并且能够交叠元素。</p>
      <div class="position_right">实例演示了如何使用 position 来实现右对齐:position:absolute;right:10px;</div>
      <h2>使用float属性来进行左和右对齐</h2>
      <p>对齐元素的另一种方法是使用float属性(float:right;)</p>
      <p><span class="red">注意：</span>float属性的元素会被从正常流中删除，但是后续元素可以通过clear:both来清空位置。</p>
      <div class="float_right">实例演示了使用 float 属性来实现右对齐:float:right;</div>
      <h2>组合对齐方式的实例</h2>
      <div class="code" style="clear:both;">
        <h3>垂直居中-使用padding</h3>
        <div class="ver_center">演示垂直居中的内容</div>
        <h3>水平垂直居中-使用text-align和padding</h3>
        <div class="hor_ver_center">演示水平和垂直居中的内容</div>
        <h3>垂直居中-使用line-height == height</h3>
        <div class="line_height_center">
          <p>演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容演示垂直居中的内容(line-height:100px;)</p>
        </div>
        <h3>垂直居中-使用position和transform</h3>
        <div class="position_center">
          <p>演示垂直居中的内容(positon:relative;)</p>
        </div>
        <p><span class="red">总结：</span></p>
        <p>padding：文本仍然处于容器垂直居中的位置，但是容器的height会随着文本行数的增加而增大；</p>
        <p>line-height=height：容器的height不变，line-height是文本的行间距，文本会溢出容器显示；多行文本可使用 vertical-align:middle; 来实现元素的垂直居中</p>
      </div>
      <h1>二、CSS尺寸</h1>
      <p>CSS尺寸(Dimension)属性允许你控制元素的高度和宽度。同样，它允许你增加行间距。尺寸的可能值：auto(默认,实际高度)、数值(使用 px、cm 等单位定义高度。)、百分比(基于包含它的块级对象的百分比高度。)</p>
      <table border="1" cellspacing="0" cellpadding="5" width="600">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th width="150">属性</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in dimenAttrs" :key="item.attr">
          <td>{{item.attr}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h1>三、CSS分类</h1>
      <p>CSS分类属性允许你控制如何显示元素，设置图像显示于另一元素中的何处，相对于其正常位置来定位元素，使用绝对值来定位元素，以及元素的可见度。
      </p>
      <table border="1" cellspacing="0" cellpadding="5" width="600">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th width="150">属性</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in clsAttrs" :key="item.attr">
          <td>{{item.attr}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h3>Display(显示)与Visibility(可见)</h3>
      <p>display属性设置一个元素应如何显示，visibility属性指定一个元素应可见还是隐藏。</p>
      <h4>隐藏元素（display:none或visibility:hidden）</h4>
      <p>display:none可以隐藏某个元素，且隐藏的元素不会占用任何空间，即gone的效果。</p>
      <p>visibility:hidden可以隐藏某个元素，但隐藏的元素仍需占用与未隐藏之前一样的空间，即invisible的效果。</p>
      <h3>Display - 块和内联元素</h3>
      <p>块元素是一个元素，占用了全部宽度，在前后都是换行符。而内联元素只需要必要的宽度，不强制换行。</p>
      <p>将块元素改为内联元素显示：display:inline,而将内联元素作为块元素：displ:block。注意：内联元素作为块元素后不能再内部嵌套其他块元素</p>
      <h1>四、改变光标形态</h1>
      <div class="code">
        <p>请把鼠标移动到单词上，可以看到鼠标指针发生变化：cursor:xxx</p>
        <div style="font-size:25px;line-height:40px;">
          <span style="cursor:auto"> Auto</span><br />
          <span style="cursor:crosshair"> Crosshair</span><br />
          <span style="cursor:default"> Default</span><br />
          <span style="cursor:pointer"> Pointer</span><br />
          <span style="cursor:move"> Move</span><br />
          <span style="cursor:e-resize"> e-resize</span><br />
          <span style="cursor:ne-resize"> ne-resize</span><br />
          <span style="cursor:nw-resize"> nw-resize</span><br />
          <span style="cursor:n-resize"> n-resize</span><br />
          <span style="cursor:se-resize"> se-resize</span><br />
          <span style="cursor:sw-resize"> sw-resize</span><br />
          <span style="cursor:s-resize"> s-resize</span><br />
          <span style="cursor:w-resize"> w-resize</span><br />
          <span style="cursor:text"> text</span><br />
          <span style="cursor:wait"> wait</span><br />
          <span style="cursor:help"> help</span>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');


.block_center {
  margin: auto;
  width: 80%;
  border: 2px solid green;
  padding: 10px;
}

.text_center {
  text-align: center;
  border: 2px solid green;
}

.img_center {
  display: block;
  margin: 0 auto;
}

.position_right {
  position: absolute;
  right: 10px;
  width: 300px;
  border: 3px solid green;
  padding: 10px;
}

.float_right {
  float: right;
  width: 300px;
  border: 3px solid green;
  padding: 10px;
}

.ver_center {
  padding: 40px 0;
  border: 1px solid green;
}

.hor_ver_center {
  padding: 40px 0;
  border: 1px solid green;
  text-align: center;
}

.line_height_center {
  height: 100px;
  border: 1px solid green;
  line-height: 100px;
  text-align: center;
}

/* 如果文本有多行，添加以下代码: */
.line_height_center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
}

.position_center {
  border: 1px solid green;
  height: 100px;
  position: relative;
}

.position_center p {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
<script>
export default {
  name: 'CssBasic7A',
  data() {
    return {
      title: 'CSS基础--对齐、尺寸、分类、光标',
      dimenAttrs: [{
        attr: 'height',
        desc: '设置元素的高度。'
      }, {
        attr: 'line-height',
        desc: '设置行高。'
      }, {
        attr: 'max-height',
        desc: '设置元素的最大高度。'
      }, {
        attr: 'max-width',
        desc: '设置元素的最大宽度。'
      }, {
        attr: 'min-height',
        desc: '设置元素的最小高度。'
      }, {
        attr: 'min-width',
        desc: '设置元素的最小宽度。'
      }, {
        attr: 'width',
        desc: '设置元素的宽度。'
      }],
      clsAttrs: [{
        attr: 'clear',
        desc: '设置一个元素的侧面是否允许其他的浮动元素。'
      }, {
        attr: 'cursor',
        desc: '规定当指向某元素之上时显示的指针类型。'
      }, {
        attr: 'display',
        desc: '设置是否及如何显示元素。'
      }, {
        attr: 'float',
        desc: '定义元素在哪个方向浮动。'
      }, {
        attr: 'position',
        desc: '把元素放置到一个静态的、相对的、绝对的、或固定的位置中。'
      }, {
        attr: 'visibility',
        desc: '设置元素是否可见或不可见。'
      }]
    }
  }
}

</script>
