<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、H5简介</h1>
      <h2>1、HTML5含义</h2>
      <p>HTML5 是最新的HTML标准。</p>
      <p>HTML5 是专门为承载丰富的web内容而设计的，并且无需额外插件。</p>
      <p>HTML5 拥有新的语义、图形以及多媒体元素。</p>
      <p>HTML5 提供的新元素和新的API简化了web应用程序的搭建。</p>
      <p>HTML5 是跨平台的，被设计为在不同类型的硬件（PC、平板、手机、电视机等等）之上运行。</p>
      <h2>2、HTML5的新内容</h2>
      <h3>(1)新的文档类型声明（DOCTYPE），默认编码UTF-8</h3>
      <h3>(2)新的属性用法</h3>
      <p>属性如果是布尔类型，可以只写属性名，属性值可以没有引号，可以是单引号，也可以是双引号。</p>
      <h3>(3)HTML5的新特性</h3>
      <ul>
        <li v-for="fecture in fectures">{{fecture}}</li>
      </ul>
      <h3>(4)HTML5被删除的元素</h3>
      <ul>
        <li v-for="delEle in delEles">{{delEle}}</li>
      </ul>
      <h1>二、H5浏览器支持</h1>
      <p>所有现代浏览器都支持 HTML5。所有浏览器，不论新旧，都会自动把未识别元素当做行内元素来处理。</p>
      <h2>创建自定义元素</h2>
      <p>1、通过head里面的style元素，定义一个自定义的风格myStyle</p>
      <p>2、然后在head里面的script元素中写一句代码：document.createElecment(&#34;myStyle&#34;)</p>
      <p>3、可以在body元素中直接使用该自定义的元素&#60;myStyle&#62;这是新风格内容元素&#60;/myStyle&#62;</p>
      <h2>兼容老的IE浏览器</h2>
      <div class="code">
        <p>
          <pre>
          &#60;head&#62;
            //Internet Explorer 8 以及更早的版本，不允许对未知元素添加样式，采用Shiv解决方案
            &#60;!--[if lt IE 9]&#62;
            &#60;script src=&#34;http://html5shiv.googlecode.com/svn/trunk/html5.js&#34;&#62;&#60;/script&#62;
            &#60;![endif]--&#62;
            &#60;style&#62;
              //将HTML5的元素定义为块级元素
              header, section, footer, aside, nav, main, article, figure {
                  display: block;
              }
            &#60;/style&#62;
          &#60;/head&#62;
        </pre>
        </p>
      </div>
      <h1>三、H5新元素</h1>
      <h2>新的语义/结构元素</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>标签</th>
          <th>描述</th>
        </tr>
        <tr v-for="label in labels" :key="label.name">
          <td>{{label.name}}</td>
          <td>{{label.desc}}</td>
        </tr>
      </table>
      <h2>新的表单元素</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>标签</th>
          <th>描述</th>
        </tr>
        <tr v-for="element in elemets" :key="element.name">
          <td>{{element.name}}</td>
          <td>{{element.desc}}</td>
        </tr>
      </table>
      <h2>新的输入类型</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>标签</th>
          <th>描述</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li v-for="type in types">{{type}}</li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="attr in attrs">{{attr}}</li>
            </ul>
          </td>
        </tr>
      </table>
      <h2>新的图像</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>标签</th>
          <th>描述</th>
        </tr>
        <tr v-for="image in images" :key="image.name">
          <td>{{image.name}}</td>
          <td>{{image.desc}}</td>
        </tr>
      </table>
      <h2>新的媒介元素</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>标签</th>
          <th>描述</th>
        </tr>
        <tr v-for="media in medias" :key="media.name">
          <td>{{media.name}}</td>
          <td>{{media.desc}}</td>
        </tr>
      </table>
      <h1>四、代码约定</h1>
      <div class="warn">
        <h3>(1)正确的文档类型,始终在文件首行声明&#60;!DOCTYPE html&#60;</h3>
        <h3>(2)使用小写元素名,尽管允许大小写混写，但是元素推荐全小写</h3>
        <h3>(3)关闭所有HTML元素,尽管某些元素可以不必关闭，但是推荐关闭所有的元素</h3>
        <h3>(4)关闭空的HTML元素,尽管关闭空元素是可选的</h3>
        <h3>(5)使用小写属性名,尽管允许大小写混写，但是元素推荐全小写</h3>
        <h3>(6)属性值加引号,尽管H5允许不加引号的属性值</h3>
        <h3>(7)添加必需的属性，比如图像alt属性和尺寸</h3>
        <h3>(8)等号两边不需要空格</h3>
        <h3>(9)避免长代码行,不超过80个字符</h3>
        <h3>(10)空行和缩进,对代码分层次，方便阅读和理解</h3>
        <h3>(11)不省略html，body，head等基础元素</h3>
        <h3>(12)尽量添加meta元素</h3>
        <h3>(13)规范合理的添加注释</h3>
        <h3>(14)对style和js文件尽量采用外部导入，规范编写</h3>
        <h3>(15)使用小写文件名和规范文件扩展名</h3>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div.warn>h3 {
  color: blue;
}

</style>
<script>
export default {
  name: 'HtmlBasic8',
  data() {
    return {
      title: 'HTML基础--H5简介，元素，语义',
      fectures: ['新的语义元素，比如 <header>, <footer>, <article>, and <section>。',
        '新的表单控件，比如数字、日期、时间、日历和滑块。',
        '强大的图像支持（借由 <canvas> 和 <svg>）',
        '强大的多媒体支持（借由 <video> 和 <audio>）',
        '强大的新 API，比如用本地存储取代 cookie。'
      ],
      delEles: ['<acronym>',
        '<applet>', '<basefont>',
        '<big>', '<center>',
        '<dir>', '<font>',
        '<frame>', '<frameset>',
        '<noframes>', '<strike>', '<tt>'
      ],
      types: [
        'color', 'date', 'datetime', 'datetime-local', 'email', 'month', 'number',
        'range', 'search', 'tel', 'time', 'url', 'week'
      ],
      attrs: [
        'autocomplete', 'autofocus', 'form', 'formaction', 'formenctype', 'formmethod',
        'formnovalidate', 'formtarget', 'height 和 width', 'list', 'min 和 max', 'multiple',
        'pattern (regexp)', 'placeholder', 'required', 'step'
      ],
      elemets: [{
        name: '<datalist>',
        desc: '定义输入控件的预定义选项。'
      }, {
        name: '<keygen>',
        desc: '定义键对生成器字段（用于表单）。'
      }, {
        name: '<output>',
        desc: '定义计算结果。'
      }],
      images: [{
        name: '<canvas>',
        desc: '定义使用 JavaScript 的图像绘制。'
      }, {
        name: '<svg>',
        desc: '定义使用 SVG 的图像绘制。'
      }],
      medias: [{
        name: '<audio>',
        desc: '定义声音或音乐内容。',
      }, {
        name: '<video>',
        desc: '定义视频或影片内容。',
      }, {
        name: '<embed>',
        desc: '定义外部应用程序的容器（比如插件）。',
      }, {
        name: '<source>',
        desc: '定义 <video> 和 <audio> 的来源。',
      }, {
        name: '<track>',
        desc: '定义 <video> 和 <audio> 的轨道。',
      }],
      labels: [{
        name: '<article>',
        desc: '定义文档内的文章。'
      }, {
        name: '<aside>',
        desc: '定义页面内容之外的内容。'
      }, {
        name: '<bdi>',
        desc: '定义与其他文本不同的文本方向。'
      }, {
        name: '<details>',
        desc: '定义用户可查看或隐藏的额外细节。'
      }, {
        name: '<dialog>',
        desc: '定义对话框或窗口。'
      }, {
        name: '<figcaption>',
        desc: '定义 <figure> 元素的标题。'
      }, {
        name: '<figure>',
        desc: '定义自包含内容，比如图示、图表、照片、代码清单等等。'
      }, {
        name: '<footer>',
        desc: '定义文档或节的页脚。'
      }, {
        name: '<header>',
        desc: '定义文档或节的页眉。'
      }, {
        name: '<main>',
        desc: '定义文档的主内容。'
      }, {
        name: '<mark>',
        desc: '定义重要或强调的内容。'
      }, {
        name: '<menuitem>',
        desc: '定义用户能够从弹出菜单调用的命令/菜单项目。'
      }, {
        name: '<meter>',
        desc: '定义已知范围（尺度）内的标量测量。'
      }, {
        name: '<nav>',
        desc: '定义文档内的导航链接。'
      }, {
        name: '<progress>',
        desc: '定义任务进度。'
      }, {
        name: '<rp>',
        desc: '定义在不支持 ruby 注释的浏览器中显示什么。'
      }, {
        name: '<rt>',
        desc: '定义关于字符的解释/发音（用于东亚字体）。'
      }, {
        name: '<ruby>',
        desc: '定义 ruby 注释（用于东亚字体）。'
      }, {
        name: '<section>',
        desc: '定义文档中的节。'
      }, {
        name: '<summary>',
        desc: '定义 <details> 元素的可见标题。'
      }, {
        name: '<time>',
        desc: '定义日期/时间。'
      }, {
        name: '<wbr>',
        desc: '定义可能的折行（line-break）。'
      }]
    }
  }
}

</script>
