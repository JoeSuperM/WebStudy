<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS框模型概述</h1>
      <p>CSS 框模型 (Box Model) 规定了元素框处理元素内容、内边距、边框和外边距的方式。元素框的最内部分是实际的内容，直接包围内容的是内边距。内边距呈现了元素的背景。内边距的边缘是边框。边框以外是外边距，外边距默认是透明的</p>
      <img src="../../assets/border.png">
      <p><span class="red">注意</span>：背景应用于由内容和内边距、边框组成的区域。内边距、边框和外边距都是可选的，默认值是零。</p>
      <h1>二、内边距</h1>
      <p>元素的内边距在边框和内容区之间。控制该区域最简单的属性是padding属性。padding属性接受长度值或百分比值，但不允许使用负值</p>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in paddingAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="250">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="padding:20px; outline:green solid thin;">这是一段文字,四周padding为20px</p>
        <p style="padding-left:20px; padding-right:500px; padding-bottom:10px; padding-top:30px; outline:green solid thin;">这是一段文字,左边距20px,右边距500px,上边距30px,下边距10px</p>
      </div>
      <h1>三、边框</h1>
      <p>元素的边框(border)是围绕元素内容和内边距的一条或多条线。允许配置元素边框的样式、宽度和颜色</p>
      <p><span class="red">注意</span>:边框绘制在“元素的背景之上”,元素的背景应当出现在边框的可见部分之间。</p>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in borderAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="250">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="border: medium double rgb(250,0,255)">演示一个边框效果(中等宽度的双线粉色边框)</p>
        <p style="border-left:thin red dotted; border-right:yellow dashed medium; border-top:solid green thick; border-bottom: 5px double #00FFFF">演示一个不同边框，不同样式，不同宽度的边框效果</p>
        <p style="border-top:solid green thick; border-left:4px red double;">演示只设置顶部和左侧边框的效果</p>
      </div>
      <h1>四、外边距</h1>
      <p>围绕在元素边框的空白区域是外边距。设置外边距会在元素外创建额外的“空白”。设置外边距的最简单的方法就是使用margin属性，这个属性接受任何长度单位、百分数值甚至负值。</p>
      <p><span class="red">关于值复制</span>:top right bottom left的顺序配置值，缺少则使用下面逻辑复制</p>
      <img src="../../assets/margin_copy.png">
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in marginAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="280">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="margin:20px">演示四周有margin=20px的效果</p>
        <hr />
        <p style="margin-left:50px; margin-top:40px;">演示左侧有margin=50px,顶部有margin=40px的效果</p>
      </div>
      <h1>五、外边距合并</h1>
      <p>当两个垂直外边距相遇时，它们将形成一个外边距。合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。</p>
      <p><span class="red">注意：只有普通文档流中块框的垂直外边距才会发生外边距合并。行内框、浮动框或绝对定位之间的外边距不会合并。</span></p>
      <h2>1、元素垂直相邻时</h2>
      <img src="../../assets/margin_merge_1.gif">
      <h2>2、元素包含关系时</h2>
      <img src="../../assets/margin_merge_2.gif">
      <h2>3、如果空元素存在上下边距时</h2>
      <img src="../../assets/margin_merge_3.gif">
      <h2>4、如果空元素遇到另外一个元素的外边距时</h2>
      <img src="../../assets/margin_merge_4.gif">
      <h2>5、实际使用效果，在段落中边距对比</h2>
      <img src="../../assets/margin_merge_5.gif">
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'CssBasic5',
  data() {
    return {
      title: 'CSS基础--框模型，边框，边距等',
      paddingAttrs: [{
        attr: 'padding',
        value: '10px 0.25em 2ex 20%;',
        desc: '简写属性。作用是在一个声明中设置元素的所内边距属性。'
      }, {
        attr: 'padding-bottom',
        value: '数值，百分比(相对父元素宽度)',
        desc: '设置元素的下内边距。'
      }, {
        attr: 'padding-left',
        value: '数值，百分比(相对父元素宽度)',
        desc: '设置元素的左内边距。'
      }, {
        attr: 'padding-right',
        value: '数值，百分比(相对父元素宽度)',
        desc: '设置元素的右内边距。'
      }, {
        attr: 'padding-top',
        value: '数值，百分比(相对父元素宽度)',
        desc: '设置元素的上内边距。'
      }],
      borderAttrs: [{
        attr: 'border',
        value: '5px solid red;',
        desc: '简写属性，用于把针对四个边的属性设置在一个声明。'
      }, {
        attr: 'border-style',
        value: 'none(默认，无轮廓)、dotted(点状)、dashed(虚线)、solid(实线)、double(双线)、groove(3D凹槽)、ridge(3D凸槽)、inset(3D凹边)、outset(3D凸边)',
        desc: '用于设置元素所有边框的样式，或者单独地为各边设置边框样式。'
      }, {
        attr: 'border-width',
        value: 'thin(细边框)、medium(默认，中边框)、thick(粗边框)、数值(边框值)',
        desc: '简写属性，用于为元素的所有边框设置宽度，或者单独地为各边边框设置宽度。'
      }, {
        attr: 'border-color',
        value: '颜色值，#FF00FF,rgb(100,100,100), red等',
        desc: '简写属性，设置元素的所有边框中可见部分的颜色，或为 4 个边分别设置颜色。'
      }, {
        attr: 'border-bottom',
        value: 'thick dotted #ff0000;',
        desc: '简写属性，用于把下边框的所有属性设置到一个声明中。'
      }, {
        attr: 'border-left',
        value: 'thick double #ff0000;',
        desc: '简写属性，用于把左边框的所有属性设置到一个声明中。'
      }, {
        attr: 'border-right',
        value: 'thick double #ff0000;',
        desc: '简写属性，用于把右边框的所有属性设置到一个声明中。'
      }, {
        attr: 'border-top',
        value: 'thick dotted #ff0000;',
        desc: '简写属性，用于把上边框的所有属性设置到一个声明中。'
      }, {
        attr: 'border-POSTION-TYPE',
        value: 'POSITION：left、right、top、bottom，TYPE:style、width、color',
        desc: '设置元素某个位置的某种类型'
      }],
      marginAttrs: [{
        attr: 'margin',
        value: '10px 2cm 20% auto;',
        desc: '简写属性。在一个声明中设置所有外边距属性。'
      }, {
        attr: 'margin-bottom',
        value: 'auto、数值、百分比(基于父元素宽度)',
        desc: '设置元素的下外边距。'
      }, {
        attr: 'margin-left',
        value: 'auto、数值、百分比(基于父元素宽度)',
        desc: '设置元素的左外边距。'
      }, {
        attr: 'margin-right',
        value: 'auto、数值、百分比(基于父元素宽度)',
        desc: '设置元素的右外边距。'
      }, {
        attr: 'margin-top',
        value: 'auto、数值、百分比(基于父元素宽度)',
        desc: '设置元素的上外边距。'
      }]
    }
  }
}

</script>
