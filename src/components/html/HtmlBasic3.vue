<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1 name="anchor">一、注释</h1>
      <p>注释标签 &#60;!-- 与 --&#62; 用于在 HTML 插入注释，提高代码可读性。</p>
      <h2>1、注释实例</h2>
      <div class="code">
        <!--这是一段注释。注释不会在浏览器中显示。-->
        <p>这是一段普通的段落，上面有注释，但是也没不会显示。</p>
        <p>
          条件注释定义只有 Internet Explorer 执行的 HTML 标签。<br />
          <pre>
            &#60;!--[if IE 8]&#62;
              .... some HTML here ....
            &#60;![endif]--&#62;
          </pre>
        </p>
      </div>
      <h1>二、CSS</h1>
      <p>CSS（指层叠样式表 (Cascading Style Sheets)），样式定义如何显示 HTML 元素，样式通常存储在样式表中，外部样式表可以极大提高工作效率，格式定义在CSS文件中。</p>
      <div class="code">
        <p>(1)外部样式表<br />
          &#160;&#160;&#60;head&#62;<br />
          &#160;&#160;&#60;link rel=&#34;stylesheet&#34; type=&#34;text/css&#34; href=&#34;mystyle.css&#34;&#62;<br />
          &#160;&#160;&#60;/head&#62;<br />
        </p>
        <p>(2)内部样式表<br />
          &#160;&#160;&#60;head&#62;<br />
          &#160;&#160;&#60;style type=&#34;text/css&#34;&#62;<br />
          &#160;&#160;&#160;&#160;body {background-color: red}<br />
          &#160;&#160;&#160;&#160;p {margin-left: 20px}<br />
          &#160;&#160;&#60;/style&#62;<br />
          &#160;&#160;&#60;/head&#62;<br />
        </p>
        <p>(3)内联样式<br />
          &#160;&#160;&#60;p style=&#34;color: red; margin-left: 20px&#34;&#62;<br />
          &#160;&#160;&#160;&#160;This is a paragraph<br />
          &#160;&#160;&#60;/p&#62;
        </p>
      </div>
      <h1>三、链接</h1>
      <p>HTML 使用超级链接与网络上的另一个文档相连。几乎可以在所有的网页中找到链接。点击链接可以从一张页面跳转到另一张页面。超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。</p>
      <p>有两种使用 &#60;a&#62; 标签的方式:<br />
        &#160;&#160;&#160;&#160;1、通过使用 href 属性 - 创建指向另一个文档的链接<br />
        &#160;&#160;&#160;&#160;2、通过使用 name 属性 - 创建文档内的书签<br />
      </p>
      <div class="code">
        <a href="https:\\www.baidu.com\">这是一个链接到百度的超链接（默认页面打开）</a>
        <br />
        <a href="https:\\www.galaxywind.com\" target="_blank">这是一个链接到银河的超链接（新页面打开）</a>
        <br />
        <a href="#anchor" target="_top">这是一个链接到顶部的超链接（锚）</a>
        <br />
        这是邮件链接：<a href="mailto:JoeSuperM@qq.com?subject=Hello%20World&body=这是内容">发送邮件给我</a>
      </div>
      <h1>四、图像</h1>
      <p>通过使用 HTML，可以在文档中显示图像。使用标签img和src属性来实现插入图表</p>
      <div class="code">
        <h3>(1)未设置对齐方式的图像：</h3>
        <p>图像(默认) <img src="../../assets/eg_cute.gif"> 在文本中</p>
        <h3>(2)已设置对齐方式的图像：</h3>
        <p>图像(bottom) <img src="../../assets/eg_cute.gif" align="bottom"> 在文本中</p>
        <p>图像(middle) <img src="../../assets/eg_cute.gif" align="middle"> 在文本中</p>
        <p>图像(middle) <img src="../../assets/eg_cute.gif" align="top"> 在文本中</p>
        <p> <img src="../../assets/eg_cute.gif" align="left">
          带有图像的一个段落。图像的 align 属性设置为 "left"。图像将浮动到文本的左侧。
        </p>
        <br /> <br />
        <p> <img src="../../assets/eg_cute.gif" align="right">
          带有图像的一个段落。图像的 align 属性设置为 "right"。图像将浮动到文本的右侧。
        </p>
        <h3>(3)设置图像的尺寸：</h3>
        <p>默认尺寸大小的图：<img src="../../assets/eg_mouse.jpg" width="50" height="50"></p>
        <p>修改尺寸为100*100的图： <img src="../../assets/eg_mouse.jpg" width="100" height="100"></p>
        <h3>(4)设置图像链接</h3>
        <a href="https:\www.galaxywind.com" target="_blank"><img src="../../assets/logo.png" border="0" width="100" height="100"></a>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
.center {
  align-items: center;
  align-content: center;
  text-align: center;
}

.content {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.code {
  padding: 5px;
  border-style: dashed;
  border-color: #0000FF;
  border-width: thin;
}

.warn {
  padding: 5px;
  border-style: solid;
  border-color: #FF0000;
  border-width: thin;
}

</style>
<script>
export default {
  name: 'HtmlBasic3',
  data() {
    return {
      title: 'HTML基础--注释、CSS、链接、图像',
    }
  }
}

</script>
