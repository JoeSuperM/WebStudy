<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、框架</h1>
      <p>通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面。每份HTML文档称为一个框架，并且每个框架都独立于其他的框架。但是使用框架也存在坏处：跟踪更多的HTML文档和无法打印整个页面</p>
      <p>框架结构标签(frameset)定义如何将窗口分割为框架，每个frameset定义了一系列行或列，rows/columns 的值规定了每行或每列占据屏幕的面积</p>
      <h2>1、框架实例</h2>
      <div class="code">
        <h3>水平分隔的框架(可调整各个框架大小)</h3>
        <frameset cols="20%,25%,20%">
          <frame src="https://www.baidu.com/" />
          <frame src="https://www.w3school.com.cn/" />
          <frame src="https://cn.vuejs.org/" />
        </frameset>
        <h3>垂直分隔的框架(不可调整框架大小)</h3>
        <frameset rows="25%,50%,25%" noresize="noresize">
          <frame src="https://www.baidu.com/" />
          <frame src="https://www.w3school.com.cn/" />
          <frame src="https://cn.vuejs.org/" />
        </frameset>
      </div>
      <h1>二、内联框架</h1>
      <p>通过iframe标签定义内联框架，通过width和height指定宽高，通过frameborder设置边框宽度，设置为0表示移除边框</p>
      <div class="code">
        <h3>内联框架的演示</h3>
        <iframe src="https://www.baidu.com/" name="i_target" width="100%" height="300" frameborder="1" />
        <p><a href="http://www.w3school.com.cn/" target="i_target">打开链接在内联框架中</a></p>
      </div>
      <h1>三、背景</h1>
      <p>body元素拥有两个配置背景的标签。背景可以是颜色或者图像。<br />
        bgcolor属性将背景设置为某种颜色。属性值可以是十六进制数、RGB 值或颜色名。<br />
        background属性将背景设置为图像。属性值为图像的URL。如果图像尺寸小于浏览器窗口，那么图像将在整个浏览器窗口进行复制.
      </p>
      <div class="warn" style="background-color:yellow">
        <p>1、如果你打算使用背景图片，请注意一下几点：</p>
        <ul>
          <li>背景图像是否增加了页面的加载时间。推荐图像文件不应超过 10k。</li>
          <li>背景图像是否与页面中的其他图象搭配良好。</li>
          <li>背景图像是否与页面中的文字颜色搭配良好。</li>
          <li>图像在页面中平铺后，看上去还可以吗？</li>
          <li>对文字的注意力被背景图像喧宾夺主了吗？</li>
        </ul>
        <p>2、body标签中的背景颜色（bgcolor）、背景（background）和文本（text）属性在最新的HTML标准中已被废弃，推荐使用CSS来定义HTML元素的布局和显示属性</p>
      </div>
      <h1>四、脚本</h1>
      <p>JavaScript 使 HTML 页面具有更强的动态和交互性。</p>
      <h2>1、HTML script 元素</h2>
      <p>&#60;script&#62;标签用于定义客户端脚本，比如 JavaScript。script 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。必需的 type 属性规定脚本的 MIME 类型。JavaScript 最常用于图片操作、表单验证以及内容动态更新。</p>
      <h2>2、HTML noscript元素</h2>
      <p>&#60;noscript&#62; 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时。noscript 元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。只有在浏览器不支持脚本或者禁用脚本时，才会显示 noscript 元素中的内容.</p>
      <h2>3、演示JavaScript的定义</h2>
      <div class="code">
        <p>
          <pre>
          &#60;script type=&#34;text/javascript&#34;&#62;
              document.write(&#34;Hello World!&#34;)
          &#60;/script&#62;
          &#60;noscript&#62;Your browser does not support JavaScript!&#60;/noscript&#62;
          </pre>
        </p>
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
  name: 'HtmlBasic6',
  data() {
    return {
      title: 'HTML基础--框架、背景、脚本',
    }
  }
}

</script>
