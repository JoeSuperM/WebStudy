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
      <h2>1、头部元素-head元素</h2>
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
      <h2>2、实体元素-body元素</h2>
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
      <p></p>
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
    }
  }
}

</script>
