<template>
  <div id="html-basic-page">
    <h1>演示超链接{{msg}}</h1>
    <hr />
    <a href="#label">点击进入锚点{{text}}</a>
    <br />
    <a href="https://www.galaxywind.com/">官网</a>
    <br />
    <!--blank新页面打开-->
    <a href="https://www.galaxywind.com/" target="_blank">官网Blank</a>
    <br />
    <a href="https://www.galaxywind.com/" target="_top">官网top</a>
    <br />
    <a href="mailto:joesuperm@qq.com?subject=Hello%20World&body=TestIt">发送邮件给我</a>
    <br />
    <a name="label">锚点</a><br />
    <hr />
    <h1>演示图像</h1>
    <h2>直接插入图片</h2>
    <img src="../../assets/eg_mouse.jpg" />
    <div>
      <h2>背景图片</h2>
      <p>这是一个左边图片<img src="../../assets/eg_mouse.jpg" align="left" />图片</p>
      <br />
      <p>这是一个右边图片<img src="../../assets/eg_mouse.jpg" align="right" />图片</p>
      <br />
      <p>这是一个上面图片<img src="../../assets/eg_mouse.jpg" align="top" />图片</p>
      <br />
      <p>这是一个下面图片<img src="../../assets/eg_mouse.jpg" align="bottom" />图片</p>
      <br />
      <p>这是一个中间图片<img src="../../assets/eg_mouse.jpg" align="middle" />图片</p>
      <br />
      <p>这是一个图片<img src="../../assets/eg_mouse.jpg" alt="没有加载到图片的显示" />图片</p>
      <br />
    </div>
    <h2>图片尺寸</h2>
    <img src="../../assets/eg_mouse.jpg" width="200" height="200" />
    <br />
    <img src="../../assets/eg_mouse.jpg" width="300" height="300" />
    <h2>表格</h2>
    <table border="2" cellpadding="20" cellspacing="5" background="../../assets/base2.jpg">
      <caption>这是表格标题</caption>
      <tr>
        <th>横表头1,加宽内容</th>
        <th>横表头2,加宽内容</th>
        <th>横表头3,加宽内容</th>
        <th>横表头4,加宽内容</th>
      </tr>
      <tr>
        <th>竖表头1</th>
        <td align="left">行1列2</td>
        <td>行1列3</td>
        <td>行1列4</td>
      </tr>
      <tr>
        <th>竖表头2</th>
        <td align="left" colspan="2">跨行</td>
        <td>行2列4</td>
      </tr>
      <tr>
        <th>竖表头3</th>
        <td>&nbsp;</td>
        <td align="right">行3列3</td>
        <td rowspan="2">跨列</td>
      </tr>
      <tr>
        <th>竖表头4</th>
        <td>行4列2</td>
        <td align="right">行4列3</td>
      </tr>
    </table>
    <h2>列表</h2>
    <div align="left">
      <p>无序列表</p>
      <ul type="disc">
        <li>周超(disc,默认)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ul>
      <ul type="circle">
        <li>周超(circle)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ul>
      <ul type="square">
        <li>周超(square)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ul>
      <p>有序列表</p>
      <ol type="1">
        <li>周超(类型：1，默认)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ol>
      <ol type="A">
        <li>周超(类型：A)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ol>
      <ol type="a">
        <li>周超(类型：a)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ol>
      <ol type="i">
        <li>周超(类型：i)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ol>
      <ol type="I">
        <li>周超(类型：I)</li>
        <li>余瑞梅</li>
        <li>小飞鱼</li>
      </ol>
      <dl>
        <dt>计算机</dt>
        <dd>用来计算的仪器 ... ...</dd>
        <dt>显示器</dt>
        <dd>以视觉方式显示信息的装置 ... ...</dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HtmlBasic5',
  data() {
    return {
      msg: 'Welcome to HTML基础!!!',
      text: '新的内容'
    }
  }
}

</script>
<style scoped>
#html-basic-page {
  align: "center";
  background: url("../../assets/base1.jpg");
  text-align: center;
}

</style>
