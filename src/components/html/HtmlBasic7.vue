<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、HTML文件路径</h1>
      <p>文件路径描述了网站文件夹结构中某个文件的位置，文件路径在链接外部文件时被用到，如网页，图像，样式表和JavaScript等</p>
      <h2>1、绝对文件路径</h2>
      <p>绝对文件路径是指向一个因特网文件的完整URL.</p>
      <div class="code">
        <p>&#60;img src=&#34;https://www.w3school.com.cn/images/picture.jpg&#34;&#62;</p>
      </div>
      <h2>2、相对文件路径</h2>
      <p>相对路径指向了相对于当前页面的文件,推荐使用相对文件路径</p>
      <div class="code">
        <h3>(1)指向根目录中images文件夹</h3>
        <p>&#60;img src=&#34;/images/picture.jpg&#34;&#62;</p>
        <h3>(1)指向当前文件夹中images文件夹</h3>
        <p>&#60;img src=&#34;images/picture.jpg&#34;&#62;</p>
        <h3>(1)指向当前文件夹的上一级文件夹中images文件夹</h3>
        <p>&#60;img src=&#34;../images/picture.jpg&#34;&#62;</p>
      </div>
      <h1>二、HTML文件结构</h1>
      <h2>1、文档类型-doctype</h2>
      <p>&#60;!DOCTYPE&#62; 不是 HTML 标签。它为浏览器提供一项信息（声明），即 HTML 是用什么版本编写的。</p>
      <div class="code">
        <h3>HTML5的文档声明</h3>
        <p>&#60;!DOCTYPE html&#62;</p>
        <h3>HTML4.01的文档声明</h3>
        <p>&#60;!DOCTYPE HTML PUBLIC &#34;-//W3C//DTD HTML 4.01 Transitional//EN&#34;<br />
          &#34;http://www.w3.org/TR/html4/loose.dtd&#34;&#62;</p>
        <h3>XHTML 1.0的文档声明</h3>
        <p>&#60;!DOCTYPE html PUBLIC &#34;-//W3C//DTD XHTML 1.0 Transitional//EN&#34;<br />
          &#34;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&#34;&#62;</p>
      </div>
      <h2>2、头部元素-head元素</h2>
      <p>head元素是所有头部元素的容器,可包含脚本，指示浏览器在何处可以找到样式表，提供元信息等等。<br />
        其中包括以下标签都可以添加到head部分：&#60;title&#62;、&#60;base&#62;、&#60;link&#62;、&#60;meta&#62;、&#60;script&#62; 以及 &#60;style&#62;。</p>
      <h3>(1)title元素</h3>
      <p>title标签定义文档的标题，是所有HTML文档必须的，它可以定义定义浏览器工具栏中的标题、提供页面被添加到收藏夹时显示的标题以及显示在搜索引擎结果中的页面标题等</p>
      <div class="code">
        <p>
          <pre>
          &#60;head&#62;
              &#60;title&#62;Title of the document&#60;/title&#62;
          &#60;/head&#62;
        </pre>
        </p>
      </div>
      <h3>(2)base元素</h3>
      <p>base标签为页面上的所有链接规定默认地址或默认目标（target）</p>
      <div class="code">
        <p>
          <pre>
          &#60;head&#62;
              &#60;base href=&#34;http://www.w3school.com.cn/images/&#34; /&#62;
              &#60;base target=&#34;_blank&#34;/&#62;
          &#60;/head&#62;
        </pre>
        </p>
      </div>
      <h3>(3)link元素</h3>
      <p>link标签定义文档与外部资源之间的关系,最常用于连接样式表.</p>
      <div class="code">
        <p>
          <pre>
          &#60;head&#62;
              &#60;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;mystyle.css&#34; /&#62;
          &#60;/head&#62;
        </pre>
        </p>
      </div>
      <h3>(4)style元素</h3>
      <p>style标签用于为 HTML 文档定义样式信息。</p>
      <div class="code">
        <p>
          <pre>
          &#60;head&#62;
           &#60;style type=&#34;text/css&#34; &#62;
              body {background-color:yellow}
              p {color:blue}
           &#60;/style &#62;
          &#60;/head&#62;
        </pre>
        </p>
      </div>
      <h3>(5)meta元素</h3>
      <p>元数据（metadata）是关于数据的信息,meta标签提供关于HTML文档的元数据。元数据不会显示在页面上，但是对于机器是可读的。meta元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。</p>
      <div class="code">
        <p> meta 元素定义页面的描述</p>
        &#60;meta name=&#34;description&#34; content=&#34;Free Web tutorials on HTML, CSS, XML&#34; /&#62;
        <p>meta 元素定义页面的关键词</p>
        &#60;meta name=&#34;keywords&#34; content=&#34;HTML, CSS, XML&#34; /&#62;
      </div>
      <h3>(6)script元素</h3>
      <p>script标签用于定义客户端脚本，比如 JavaScript。</p>
      <h2>3、实体元素-body元素</h2>
      <p>文档的主要内容，供用户展示的信息</p>
      <h3>以下是一个完整的HTML文档</h3>
      <div class="code">
        <p>
          <pre>
          &#60;!DOCTYPE html&#62;
          &#60;html&#62;
          &#60;head&#62;
              &#60;title&#62;Title of the document&#60;/title&#62;
              &#60;base target=&#34;_blank&#34;/&#62;
              &#60;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;mystyle.css&#34; /&#62;
              &#60;style type=&#34;text/css&#34; &#62;
                  body {background-color:yellow}
                  p {color:blue}
              &#60;/style &#62;
              &#60;meta name=&#34;keywords&#34; content=&#34;HTML, CSS, XML&#34; /&#62;
              &#60;script&#62;document.write(&#34;Hellow World&#34;)&#60;/script&#62;
          &#60;/head&#62;
          &#60;body&#62;
           The content of the document......
          &#60;/body&#62;
          &#60;/html&#62;
          </pre>
        </p>
      </div>
      <h1>三、特殊字符，字符实体</h1>
      <p>在HTML中，某些字符是预留的，需要使用<span class="red">&#38;entity_name;</span>或者<span class="red">&#38;#entity_number;</span>的方式来展示。<br />
        使用实体名而不是数字的好处是，名称易于记忆。不过坏处是，浏览器也许并不支持所有实体名称（对实体数字的支持却很好）。</p>
      <h2>(1)不间断空格(non-breaking space)</h2>
      <p>HTML 中的常用字符实体是不间断空格(&#38;nbsp;)。浏览器总是会截短 HTML 页面中的空格。如果您在文本中写 10 个空格，在显示该页面之前，浏览器会删除它们中的 9 个。如需在页面中增加空格的数量，您需要使用 &nbsp; 字符实体。</p>
      <h2>(2)常用的字符实体</h2>
      <div class="code">
        <table border="1" width="400" cellpadding="5" cellspacing="0">
          <tr>
            <th>显示结果</th>
            <th>描述</th>
            <th>实体名称</th>
            <th>实体编号</th>
          </tr>
          <tr v-for="item in items" :key="item.desc">
            <td align="center">{{item.display}}</td>
            <td>{{item.desc}}</td>
            <td align="center">{{item.name}}</td>
            <td align="center">{{item.number}}</td>
          </tr>
        </table>
      </div>
      <h1>四、URL（统一资源定位器）</h1>
      <p>URL 可以由单词组成，比如 “w3school.com.cn”，或者是因特网协议（IP）地址：192.168.1.253。<br />
        URL遵循的语法规则:scheme://host.domain:port/path/filename</p>
      <ul>
        <li>scheme - 定义因特网服务的类型。最常见的类型是 http</li>
        <li>host - 定义域主机（http 的默认主机是 www）</li>
        <li>domain - 定义因特网域名，比如 w3school.com.cn</li>
        <li>:port - 定义主机上的端口号（http 的默认端口号是 80）</li>
        <li>path - 定义服务器上的路径（如果省略，则文档必须位于网站的根目录中）。</li>
        <li>filename - 定义文档/资源的名称</li>
      </ul>
      <h2>常见的URL Schemes</h2>
      <dl>
        <dt>http</dt>
        <dd>超文本传输协议,以http:// 开头的普通网页。不加密。</dd>
        <dt>https</dt>
        <dd>安全超文本传输协议,安全网页。加密所有信息交换。</dd>
        <dt>ftp</dt>
        <dd>文件传输协议,用于将文件下载或上传至网站。</dd>
        <dt>file</dt>
        <dd>本地计算机上的文件。</dd>
      </dl>
      <h2>URL字符编码</h2>
      <p>URL只能使用<span class="red">ASCII</span>字符集来通过因特网进行发送。由于URL常常会包含ASCII集合之外的字符，URL 必须转换为有效的 ASCII 格式。URL编码使用 "%" 其后跟随两位的十六进制数来替换非ASCII字符。URL不能包含空格。URL编码通常使用 + 来替换空格。</p>
      <h1>五、颜色</h1>
      <p>颜色由红色、绿色、蓝色混合而成。</p>
      <h2>(1)颜色值</h2>
      <p>颜色由一个十六进制符号来定义，这个符号由红色、绿色和蓝色的值组成（RGB）。每种颜色的最小值是0（十六进制：#00）。最大值是255（十六进制：#FF）。</p>
      <div class="code">
        <table border="1" cellspacing="0" cellpadding="5" width="500">
          <tr class="table_head" bgcolor="#3F3F3F">
            <th>Color</th>
            <th>Color HEX</th>
            <th>Color RGB</th>
          </tr>
          <tr v-for="color in colorValues" :key="color.hex">
            <td v-bind:bgcolor="color.hex" width="200"></td>
            <td>{{color.hex}}</td>
            <td>{{color.rgb}}</td>
          </tr>
        </table>
      </div>
      <h2>(2)颜色名</h2>
      <p>大多数的浏览器都支持颜色名集合。仅仅有 16 种颜色名被 W3C 的 HTML4.0 标准所支持。它们是：aqua, black, blue, fuchsia, gray, green, lime, maroon, navy, olive, purple, red, silver, teal, white, yellow。</p>
      <div class="code">
        <table border="1" cellpadding="5" cellspacing="0" width="500">
          <tr class="table_head" bgcolor="#3F3F3F">
            <th>颜色名</th>
            <th>Color HEX</th>
            <th>颜色效果</th>
          </tr>
          <tr v-for="color in colorNames" :key="color.name">
            <td>{{color.name}}</td>
            <td>{{color.hex}}</td>
            <td :bgcolor="color.name"></td>
          </tr>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'HtmlBasic7',
  data() {
    return {
      title: 'HTML基础--路径，实体，URL，颜色',
      colorValues: [{
          hex: "#000000",
          rgb: "rgb(0,0,0)"
        },
        {
          hex: "#FF0000",
          rgb: "rgb(255,0,0)"
        },
        {
          hex: "#00FF00",
          rgb: "rgb(0,255,0)"
        },
        {
          hex: "#0000FF",
          rgb: "rgb(0,0,255)"
        },
        {
          hex: "#FFFF00",
          rgb: "rgb(255,255,0)"
        },
        {
          hex: "#FF00FF",
          rgb: "rgb(255,0,255)"
        },
        {
          hex: "#00FFFF",
          rgb: "rgb(0,255,255)"
        },
        {
          hex: "#FFFFFF",
          rgb: "rgb(255,255,255)"
        },
        {
          hex: "#C0C0C0",
          rgb: "rgb(192,192,192)"
        }
      ],
      colorNames: [{
          name: 'aqua',
          hex: '#00FFFF'
        }, {
          name: 'black',
          hex: '#000000'
        }, {
          name: 'blue',
          hex: '#0000FF'
        }, {
          name: 'fuchsia',
          hex: '#FF00FF'
        }, {
          name: 'gray',
          hex: '#808080'
        }, {
          name: 'green',
          hex: '#008000'
        }, {
          name: 'lime',
          hex: ' #00FF00'
        }, {
          name: 'maroon',
          hex: ' #800000'
        }, {
          name: 'navy',
          hex: ' #000080'
        },
        {
          name: 'olive',
          hex: ' #808000'
        }, {
          name: 'purple',
          hex: '#800080'
        }, {
          name: 'red',
          hex: '#FF0000'
        }, {
          name: 'silver',
          hex: '#C0C0C0'
        }, {
          name: 'teal',
          hex: '#008080'
        }, {
          name: 'white',
          hex: '#FFFFFF'
        }, {
          name: 'yellow',
          hex: '#FFFF00'
        }
      ],
      items: [{
          display: " ",
          desc: "空格",
          name: "&nbsp;",
          number: "&#160;"
        },
        {
          display: "<",
          desc: "小于号",
          name: "&lt;",
          number: "&#60;"
        },
        {
          display: ">",
          desc: "大于号",
          name: "&gt;",
          number: "&#62;"
        },
        {
          display: "&",
          desc: "和号",
          name: "&amp;",
          number: "&#38;"
        },
        {
          display: '"',
          desc: "引号",
          name: "&quot;",
          number: "&#34;"
        },
        {
          display: "©",
          desc: "版权（copyright）",
          name: "&copy;",
          number: "&#169;"
        },
        {
          display: "®",
          desc: "注册商标",
          name: "&reg;",
          number: "&#174;"
        },
        {
          display: "™",
          desc: "商标",
          name: "&trade;",
          number: "&#8482;"
        },
        {
          display: "×",
          desc: "乘号",
          name: "&times;",
          number: "&#215;"
        },
        {
          display: "÷",
          desc: "除号",
          name: "&divide;",
          number: "&#247;"
        }
      ]
    }
  }
}

</script>
