<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、图像透明度</h1>
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
      <h1>二、媒介类型</h1>
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

</style>
<script>
export default {
  name: 'CssBasic7C',
  data() {
    return {
      title: 'CSS基础--透明度、媒介',
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
