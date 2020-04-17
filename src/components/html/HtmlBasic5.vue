<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、块与类</h1>
      <h2>1、HTML 块元素</h2>
      <p>大多数 HTML 元素被定义为块级元素或内联元素。块级元素在浏览器显示时，通常会以新行来开始（和结束）。<br />
        比如：&#60;h1&#62;、&#60;table&#62;、&#60;p&#62;、&#60;ul&#62;、&#60;div&#62;等</p>
      <h2>2、HTML 内联元素</h2>
      <p>内联元素在显示时通常不会以新行开始。<br />
        比如：&#60;b&#62;、&#60;td&#62;、&#60;a&#62;、&#60;img&#62;、&#60;span&#62;等</p>
      <h2>3、HTML &#60;div&#62; 元素</h2>
      <p>它是可用于组合其他 HTML 元素的容器。该元素没有特定含义，常用于分块或文档布局等</p>
      <h2>4、HTML &#60;span&#62; 元素</h2>
      <p>它可用作文本的容器，也没有特定含义，常用于部分文本设置样式属性。</p>
      <h2>块与类的实例</h2>
      <div class="code">
        <h3>1、利用div和style的class分类块元素</h3>
        <div class="cls_div">
          <p>这是一个分块的内容，class=cls_div</p>
        </div>
        <div class="cls_div">
          <p>这是另外一个分块的内容,class=cls_div</p>
        </div>
        <h3>2、利用span和style的class分类行内元素</h3>
        <p>这是简简单单的一行<span class="red">文字</span>，但是这个两个<span class="red">文字</span>很重要</p>
      </div>
      <h1>二、布局</h1>
      <p>网站通常以多列显示内容，利用div元素可以将网站内容分块展示</p>
      <h2>1、布局实例</h2>
      <div class="code">
        <div id="header">
          <h1>这是顶部的标题</h1>
        </div>
        <div id="nav">
          左侧选择项A<br>
          左侧选择项B<br>
          左侧选择项C<br>
        </div>
        <div id="section">
          <h1>选项A</h1>
          <p> 这是选项A情况下的介绍内容。 </p>
          <p> 最后的结束段落 </p>
        </div>
        <div id="footer">
          这是底部的授权和认证，版权等信息
        </div>
      </div>
      <h2>2、注意事项</h2>
      <div class="warn">
        <p>HTML5提供的新语义元素定义了网页的不同部分</p>
        <table border="1" cellpadding="10" cellspacing="0" width="500">
          <caption>HTML5语义元素</caption>
          <tr v-for="element in elements" :key="element.name">
            <td>{{element.name}}</td>
            <td>{{element.desc}}</td>
          </tr>
        </table>
        <p>演示通过HTML5提供的新语义元素创建多列布局</p>
        <header>
          <h1>City Gallery</h1>
        </header>
        <nav>
          London<br>
          Paris<br>
          Tokyo<br>
        </nav>
        <section>
          <h1>London</h1>
          <p>
            London is the capital city of England. It is the most populous city in the United Kingdom,
            with a metropolitan area of over 13 million inhabitants.
          </p>
          <p>
            Standing on the River Thames, London has been a major settlement for two millennia,
            its history going back to its founding by the Romans, who named it Londinium.
          </p>
        </section>
        <footer>
          Copyright W3School.com.cn
        </footer>
      </div>
      <br />
    </div>
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

.cls_div {
  background-color: black;
  color: white;
  margin: 10px;
  padding: 5px;
}

span.red {
  color: red;
  font-size: 25px;
}

#header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
}

#nav {
  line-height: 30px;
  background-color: #eeeeee;
  height: 300px;
  width: 100px;
  float: left;
  padding: 5px;
}

#section {
  width: 350px;
  float: left;
  padding: 10px;
}

#footer {
  background-color: black;
  color: white;
  clear: both;
  text-align: center;
  padding: 5px;
}

header {
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px;
}

nav {
  line-height: 30px;
  background-color: #eeeeee;
  height: 300px;
  width: 100px;
  float: left;
  padding: 5px;
}

section {
  width: 350px;
  float: left;
  padding: 10px;
}

footer {
  background-color: black;
  color: white;
  clear: both;
  text-align: center;
  padding: 5px;
}

</style>
<script>
export default {
  name: 'HtmlBasic5',
  data() {
    return {
      title: 'HTML基础--块、类、布局',
      elements: [{
          name: "header",
          desc: "定义文档或节的页眉"

        },
        {
          name: "nav",
          desc: "定义导航链接的容器"
        },
        {
          name: "section",
          desc: "定义文档中的节"
        },
        {
          name: "article",
          desc: "定义独立的自包含文章"
        },
        {
          name: "aside",
          desc: "定义内容之外的内容（比如侧栏）"
        },
        {
          name: "footer",
          desc: "定义文档或节的页脚"
        },
        {
          name: "details",
          desc: "定义额外的细节"
        },
        {
          name: "summary",
          desc: "定义 details 元素的标题"
        }
      ]
    }
  }
}

</script>
