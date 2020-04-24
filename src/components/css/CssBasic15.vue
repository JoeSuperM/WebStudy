<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之多媒体查询</h1>
      <p>媒体查询可用于检测很多事情:viewport(视窗) 的宽度与高度、设备的宽度与高度、朝向 (智能手机横屏，竖屏) 以及分辨率</p>
      <p>多媒体查询语法：@media not|only mediatype and (expressions) { CSS 代码...;}</p>
      <p>如果指定的多媒体类型匹配设备类型则查询结果返回 true，文档会在匹配的设备上显示指定样式效果。除非你使用了 not 或 only 操作符，否则所有的样式会适应在所有设备上显示效果。</p>
      <ul>
        <li>not: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。</li>
        <li>only: 用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。</li>
        <li>all: 所有设备，这个应该经常看到。</li>
      </ul>
      <p>在不同的媒体上使用不同的样式：&#60;link rel=&#34;stylesheet&#34; media=&#34;mediatype and|not|only (expressions)&#34; href=&#34;print.css&#34;&#62;
      </p>
      <h2>CSS3多媒体类型</h2>
      <dl>
        <dt>all</dt>
        <dd>用于所有多媒体类型设备</dd>
        <dt>print</dt>
        <dd>用于打印机</dd>
        <dt>screen</dt>
        <dd>用于电脑屏幕，平板，智能手机等。</dd>
        <dt>speech</dt>
        <dd>用于屏幕阅读器</dd>
      </dl>
      <div class="code">
        <h3>根据屏幕宽度改变背景颜色</h3>
        <pre>
          .body {
            background-color: yellow;
          }

          @media screen and (min-width: 480px) {
            .body {
              background-color: lightgreen;
            }
          }
          </pre>
        <p>当屏幕可视窗口尺寸小于480像素时：</p>
        <a href="https://www.runoob.com/try/try.php?filename=trycss3_media_queries1">(1)修改背景颜色</a>
        <br />
        <a href="https://www.runoob.com/try/try.php?filename=trycss3_media_queries2">(2)将菜单浮动到页面左侧</a>
        <br />
        <a href="https://www.runoob.com/try/try.php?filename=trycss3_mediaqueries_ex3">(3)根据尺寸改变邮箱图标和前缀等</a>
        <br />
        <a href="https://www.runoob.com/try/try.php?filename=trycss3_mediaqueries_ex6">(4)在一个网页的侧栏上使用邮件列表链接</a>
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
  name: 'CssBasic15',
  data() {
    return {
      title: 'CSS基础--多媒体'
    }
  }
}

</script>
