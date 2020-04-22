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
      <h2>使用position属性进行左和右对齐</h2>
      <p>对齐元素的方法之一是使用绝对定位(position:absolute;)</p>
      <h2>使用float属性来进行左和右对齐</h2>
      <p>对齐元素的另一种方法是使用float属性(float:right;)</p>
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
      <h2>演示效果</h2>
      <div class="code">
        <h3>改变光标</h3>
        <p>请把鼠标移动到单词上，可以看到鼠标指针发生变化：</p>
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
      <h1>四、导航栏</h1>
      <p>导航栏即链接列表</p>
      <div class="code">
        <h3>垂直导航栏</h3>
        <ul id="v_ul" style="width:200px;">
          <li><a href="https://www.baidu.com/" target="_blank">Home</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">News</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">Contact</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">About</a></li>
        </ul>
        <h3 style="clear:both;">水平导航栏</h3>
        <ul id="h_ul" style="height:auto;">
          <li><a href="https://www.baidu.com/" target="_blank">Home</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">News</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">Contact</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">About</a></li>
        </ul>
      </div>
      <h1>五、图像透明度</h1>
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
      <h1>六、媒介类型</h1>
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
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');
@import url('../../style/left_bar.css');
@import url('../../style/top_bar.css');

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

</style>
<script>
export default {
  name: 'CssBasic7',
  data() {
    return {
      title: 'CSS基础--对齐、尺寸、分类、导航、透明度、媒介等',
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
      }],
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
  }
}

</script>
