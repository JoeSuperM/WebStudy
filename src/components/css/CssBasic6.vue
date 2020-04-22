<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS定位(Positioning)</h1>
      <h2>CSS定位机制</h2>
      <p>CSS有三种基本的定位机制：普通流、浮动和绝对定位。行内框在一行中水平布置。可以使用水平内边距、边框和外边距调整它们的间距。垂直内边距、边框和外边距不影响行内框的高度。由一行形成的水平框称为行框（Line Box），行框的高度总是足以容纳它包含的所有行内框。
      </p>
      <h2>CSS position属性</h2>
      <dt>
      <dt>sattic</dt>
      <dd>元素框正常生成。块级元素生成一个矩形框，作为文档流的一部分，行内元素则会创建一个或多个行框，置于其父元素中。</dd>
      <dt>relative</dt>
      <dd>元素框偏移某个距离。元素仍保持其未定位前的形状，它原本所占的空间仍保留。</dd>
      <dt>absolute</dt>
      <dd>元素框从文档流完全删除，并相对于其包含块定位。包含块可能是文档中的另一个元素或者是初始包含块。元素原先在正常文档流中所占的空间会关闭，就好像元素原来不存在一样。元素定位后生成一个块级框，而不论原来它在正常流中生成何种类型的框。</dd>
      <dt>fixed</dt>
      <dd>元素框的表现类似于将 position 设置为 absolute，不过其包含块是视窗本身。</dd>
      </dt>
      <h2>CSS定位属性</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in positionAttrs" :key="item.attr">
          <td width="100">{{item.attr}}</td>
          <td width="350">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <h3>演示相对位置</h3>
        <p style="position:relative; left:0px">相对于正常位置的段落</p>
        <p style="position:relative; left:-20px">相对于正常位置向左移动20px</p>
        <p style="position:relative; left:20px">相对于正常位置向右移动20px</p>
        <h3>演示绝对位置</h3>
        <p style="position:absolute; left:300px; top:1920px">这是带有据对定位的段落(相对于浏览器左上角的位置(300,1920))</p>
        <h3>演示固定位置(页面左侧)</h3>
        <p style="position:fixed;left:50px; top:700px;">这是演示固定位置的文本(相对于浏览器当前位置左上角的位置(50,700))</p>
        <h3>演示浏览器溢出</h3>
        <p>overflow: auto;</p>
        <div id="overflow" style="overflow: auto;">
          这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。
        </div>
        <p>overflow:scroll;</p>
        <div id="overflow" style="overflow:scroll;">
          这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。
        </div>
        <p>overflow:hidden;</p>
        <div id="overflow" style="overflow:hidden;">
          这个属性定义溢出元素内容区的内容会如何处理。如果值为 scroll，不论是否需要，用户代理都会提供一种滚动机制。因此，有可能即使元素框中可以放下所有内容也会出现滚动条。默认值是 visible。
        </div>
        <h3>演示裁剪区域</h3>
        <img src="../../assets/logo.png" width="150" style="position:absolute;clip:rect(0px 50px 150px 0px)">
        <br /><br /><br /><br /><br /><br /><br />
        <h3>演示z-index属性(左侧logo图标)</h3>
        <img src="../../assets/logo.png" style="position:absolute; left:100px; top:2800px; z-index:-1;">
        <p>默认的 z-index 是 0。Z-index -1 拥有更低的优先级。</p>
      </div>
      <h1>二、相对与绝对定位</h1>
      <p>相对定位，通过设置垂直或水平位置，让这个元素“相对于”它的<span class="red">起点</span>进行移动。</p>
      <img src="../../assets/position_relative.gif">
      <p>绝对定位的元素的位置相对于<span class="red">最近的已定位祖先元素</span>，如果元素没有已定位的祖先元素，那么它的位置相对于<span class="red">最初的包含块</span>。即浏览器页面左上角</p>
      <img src="../../assets/position_absolute.gif">
      <h1>三、浮动定位</h1>
      <p>浮动的框可以向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。由于浮动框不在文档的普通流中，所以文档的普通流中的块框表现得就像浮动框不存在一样。</p>
      <h3>当把框1向右浮动时，它脱离文档流并且向右移动，直到它的右边缘碰到包含框的右边缘</h3>
      <img src="../../assets/position_float_1.gif">
      <h3>当框 1 向左浮动时，它脱离文档流并且向左移动，直到它的左边缘碰到包含框的左边缘。因为它不再处于文档流中，所以它不占据空间，实际上覆盖住了框 2，使框2从视图中消失。</h3>
      <p>如果把所有三个框都向左移动，那么框 1 向左浮动直到碰到包含框，另外两个框向左浮动直到碰到前一个浮动框。</p>
      <img src="../../assets/position_float_2.gif">
      <h3>如果包含框太窄，无法容纳水平排列的三个浮动元素，那么其它浮动块向下移动，直到有足够的空间。</h3>
      <p>如果浮动元素的高度不同，那么当它们向下移动时可能被其它浮动元素“卡住”</p>
      <img src="../../assets/position_float_3.gif">
      <h1>四、float属性</h1>
      <p>float属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在CSS中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。float的可能值有三种，left(向左浮动)，right(向右浮动)，none(默认值)</p>
      <p>clear属性规定元素的哪一侧不允许其他浮动元素。clear的可能值有四种，left(左侧不允许浮动元素)，right(右侧不允许浮动元素)，both(左右两侧均不允许浮动元素),none(默认值,两侧允许出现浮动元素)</p>
      <h3>行框和清理</h3>
      <p>浮动框旁边的行框被缩短，从而给浮动框留出空间，行框围绕浮动框。因此，创建浮动框可以使文本围绕图像:</p>
      <img src="../../assets/position_float_4.gif">
      <p>要想阻止行框围绕浮动框，需要对该框应用clear属性。</p>
      <img src="../../assets/position_float_5.gif">
      <p>希望让一个图片浮动到文本块的左边，并且希望这幅图片和文本包含在另一个具有背景颜色和边框的元素中</p>
      <img src="../../assets/position_float_6.gif">
      <div class="code">
        <pre>
        .news {
          background-color: gray;
          border: solid 1px black;
        }

        .news img {
          float: left;
        }

        .news p {
          float: right;
        }

        <span class="red">.clear {
          clear: both;
        }
        </span>
        &#60;div class=&#34;news&#34;&#62;
        &#60;img src=&#34;news-pic.jpg&#34; /&#62;
        &#60;p>some text&#60;/p&#62;
        <span class="red">&#60;div class=&#34;clear&#34;&#62;&#60;/div&#62;</span>
        &#60;/div&#62;
        </pre>
      </div>
      <h3>演示效果</h3>
      <div class="code">
        <h3>将带有边框和边界的图像浮动于段落的右侧</h3>
        <p>在下面的段落中，图像会浮动到右侧，并且添加了点状的边框。我们还为图像添加了边距，这样就可以把文本推离图像：上和右外边距是 0px，下外边距是 15px，而图像左侧的外边距是 20px。</p>
        <p>
          <img class="float" src="../../assets/eg_cute.gif" />
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
        </p>
        <hr />
        <h3>使段落的首字母浮动于左侧</h3>
        <p>
          <span class="float">T</span>his is some text.
          This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
          This is some text. This is some text. This is some text.
        </p>
        <p> 在下面的段落中，文本的第一个字母包含在一个 span 元素中。这个 span 元素的宽度是当前字体尺寸的 0.7 倍。span 元素的字体尺寸是 400%，行高是 80%。span 中的字母字体是 "Algerian"
        </p>
        <hr />
        <h3>创建水平菜单</h3>
        <ul>
          <li><a href="#">Link one</a></li>
          <li><a href="#">Link two</a></li>
          <li><a href="#">Link three</a></li>
          <li><a href="#">Link four</a></li>
        </ul>
        <p>
          在上面的例子中，我们把 ul 元素和 a 元素浮向左浮动。li元素显示为行内元素（元素前后没有换行）。这样就可以使列表排列成一行。ul元素的宽度是 100%，列表中的每个超链接的宽度是7em（当前字体尺寸的7倍）。我们添加了颜色和边框，以使其更漂亮。
        </p>
        <hr />
        <h3>创建无表格的首页</h3>
        <div id="table" class="container">
          <div class="header">
            <h1 class="header">W3School.com.cn</h1>
          </div>
          <div class="left">
            <p>"Never increase, beyond what is necessary, the number of entities required to explain anything." William of Ockham (1285-1349)</p>
          </div>
          <div class="content">
            <h2>Free Web Building Tutorials</h2>
            <p>At W3School.com.cn you will find all the Web-building tutorials you need,
              from basic HTML and XHTML to advanced XML, XSL, Multimedia and WAP.</p>
            <p>W3School.com.cn - The Largest Web Developers Site On The Net!</p>
          </div>
          <div class="footer">Copyright 2008 by YingKe Investment.</div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div#overflow {
  background-color: #00FFFF;
  width: 200px;
  height: 150px;
}

img.float {
  float: right;
  border: 1px dotted black;
  margin: 0px 0px 15px 20px;
}

span.float {
  float: left;
  width: 0.7em;
  font-size: 400%;
  font-family: algerian, courier;
  line-height: 80%;
}

ul {
  float: left;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

a {
  float: left;
  width: 7em;
  text-decoration: none;
  color: white;
  background-color: purple;
  padding: 0.2em 0.6em;
  border-right: 1px solid white;
}

a:hover {
  background-color: silver;
}

li {
  display: inline
}

div#table div.container {
  width: 100%;
  margin: 0px;
  border: 1px solid gray;
  line-height: 150%;
}

div#table div.header,
div#table div.footer {
  padding: 0.5em;
  color: white;
  background-color: gray;
  clear: left;
}

h1.header {
  padding: 0;
  margin: 0;
}

div#table div.left {
  float: left;
  width: 160px;
  margin: 0;
  padding: 1em;
}

div#table div.content {
  margin-left: 190px;
  border-left: 1px solid gray;
  padding: 1em;
}

</style>
<script>
export default {
  name: 'CssBasic6',
  data() {
    return {
      title: 'CSS基础--定位(相对，绝对，浮动)',
      positionAttrs: [{
        attr: 'position',
        value: 'absolute(生成绝对定位的元素，相对于static定位以外的第一个父元素进行定位。)、fixed(生成绝对定位的元素，相对于浏览器窗口进行定位)、relative(生成相对定位的元素，相对于其正常位置进行定位)、static(默认值。没有定位，元素出现在正常的流中)',
        desc: '把元素放置到一个静态的、相对的、绝对的、或固定的位置中。'
      }, {
        attr: 'top',
        value: 'auto、数值、百分比',
        desc: '定义了一个定位元素的上外边距边界与其包含块上边界之间的偏移。'
      }, {
        attr: 'right',
        value: 'auto、数值、百分比',
        desc: '定义了定位元素右外边距边界与其包含块右边界之间的偏移。'
      }, {
        attr: 'bottom',
        value: 'auto、数值、百分比',
        desc: '定义了定位元素下外边距边界与其包含块下边界之间的偏移。'
      }, {
        attr: 'left',
        value: 'auto、数值、百分比',
        desc: '定义了定位元素左外边距边界与其包含块左边界之间的偏移。'
      }, {
        attr: 'overflow',
        value: 'visible(默认，不修剪，显示元素框之外)、hidden(修剪，内容不可见)、scroll(修剪，显示滚动条)、auto(如果修剪，显示滚动条)',
        desc: '设置当元素的内容溢出其区域时发生的事情。'
      }, {
        attr: 'clip',
        value: 'shape(设置元素的形状。唯一合法的形状值是：rect (top, right, bottom, left))、auto(默认，不裁剪)',
        desc: '设置元素的形状。元素被剪入这个形状之中，然后显示出来。'
      }, {
        attr: 'vertical-align',
        value: 'baseline(默认，父元素基线上)、sub(垂直对齐文本的下标)、super(垂直对齐文本的下标)、top(顶端对齐最高元素)、text-top(定端对齐父元素字体)、middle(放置父元素总部)、bottom(顶端对齐最低元素)、text-bottom(底端对齐父元素字体)、数值()、百分比(line-height的百分比值，允许负值)',
        desc: '设置元素的垂直对齐方式。'
      }, {
        attr: 'z-index',
        value: 'auto(堆叠顺序与父元素相等)、数字(元素的堆叠顺序)',
        desc: '设置元素的堆叠顺序。'
      }]
    }
  }
}

</script>
