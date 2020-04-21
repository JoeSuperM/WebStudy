<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、背景</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in bgAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="background-color:red">演示背景颜色</p>
        <p>其他样式，主要针对body元素，此处暂不提供演示</p>
      </div>
      <h1>二、文本</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in textAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="color:blue;">演示文本颜色(blue)</p>
        <div id="ltr">演示文本方向(ltr),Some text</div>
        <div id="rtl">演示文本方向(rtl),Some text</div>
        <p style="line-height:2">演示文本行高(2)</p>
        <p style="line-height:50%">演示文本行高(50%)</p>
        <p style="letter-spacing:10px">演示文本字符间距(10px)</p>
        <p style="letter-spacing:-2px">演示文本字符间距(-2px)</p>
        <p style="text-align:right">演示文本对齐方式(right)</p>
        <p style="text-align:center">演示文本对齐方式(center)</p>
        <p style="text-decoration:line-through">演示文本装饰效果(line-through)</p>
        <p style="text-decoration:underline">演示文本装饰效果(underline)</p>
        <p style="text-indent:10%">演示文本首行缩进(10%)</p>
        <p style="text-indent:-2%">演示文本首行缩进(-2%)</p>
        <p style="text-transform:capitalize">演示文本字母元素(capitalize)</p>
        <p style="text-transform:uppercase">演示文本字母元素(uppercase)</p>
        <p style="word-spacing:20px">演示文本单词间隔(20px),This is some text.</p>
        <p style="word-spacing:-5px">演示文本单词间隔(-5px),This is some text.</p>
        <p style="white-space:pre-wrap">演示文本空白处理(pre-wrap) 演示文本空白处理(pre-wrap)
          演示文本空白处理(pre-wrap)
        </p>
      </div>
      <h1>三、字体</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in fontAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <p style="font-family:Georgia, serif;">演示不同的字体(Georgia)</p>
        <p style="font-family: Times, TimesNR, 'New Century Schoolbook', Georgia, 'New York', serif;">演示不同的字体(Times, TimesNR, 'New Century Schoolbook', Georgia, 'New York', serif;)</p>
        <p style="font-size:10px">演示字体大小（10px）</p>
        <p style="font-size:xx-large">演示字体大小（xx-large）</p>
        <p style="font-style:italic">演示字体风格（italic）</p>
        <p style="font-style:oblique">演示字体风格（oblique）</p>
        <p style="font-variant:small-caps">演示字体变形（small-caps）和This is a paragraph</p>
        <p style="font-weight:lighter">演示字体粗细(lighter)</p>
        <p style="font-weight:900">演示字体粗细(900)</p>
        <p style="font-stretch:wider">演示字体拉伸(wider)</p>
        <p style="font-stretch:narrower">演示字体拉伸(narrower)</p>
      </div>
      <h1>四、链接</h1>
      <p>链接的特殊性在于能够根据它们所处的状态来设置它们的样式。<br />
        a:link - 普通的、未被访问的链接<br />
        a:visited - 用户已访问的链接<br />
        a:hover - 鼠标指针位于链接的上方<br />
        a:active - 链接被点击的时刻 </p>
      <p><span class="red">注意：a:hover 必须位于 a:link 和 a:visited 之后, a:active 必须位于 a:hover 之后</span></p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div#rtl {
  direction: rtl
}

div#ltr {
  direction: ltr
}

</style>
<script>
export default {
  name: 'CssBasic3',
  data() {
    return {
      title: 'CSS基础--背景、文本、字体、链接',
      bgAttrs: [{
        attr: 'background',
        value: '#00FF00 url(bgimage.gif) no-repeat fixed top;',
        desc: '简写属性，作用是将背景属性设置在一个声明中。'
      }, {
        attr: 'background-attachment',
        value: 'scroll(默认,背景跟随内容移动)、fixed(背景图像不会移动)',
        desc: '背景图像是否固定或者随着页面的其余部分滚动。'
      }, {
        attr: 'background-color',
        value: '颜色值：#00FF00、rgb(0,0,255)、gray等',
        desc: '设置元素的背景颜色。'
      }, {
        attr: 'background-image',
        value: 'URL值：url(./bg.png)',
        desc: '把图像设置为背景。'
      }, {
        attr: 'background-position',
        value: '关键字：top、bottom、left、right、center，或者两位百分比30% 50%，或者两位长度值10px 50px',
        desc: '设置背景图像的起始位置。'
      }, {
        attr: 'background-repeat',
        value: 'repeat(默认)、repeat-x、repeat-y、no-repeat',
        desc: '设置背景图像是否及如何重复。'
      }, {
        attr: 'background-size',
        value: '两位长度值，百分比，缺省值为auto，宽高：30% 100%',
        desc: '规定背景图片的尺寸。'
      }, {
        attr: 'background-origin',
        value: 'padding-box(内边距)、border-box(边框)、content-box(内容框)',
        desc: '规定背景图片的定位区域。'
      }, {
        attr: 'background-clip',
        value: 'padding-box(内边距)、border-box(边框)、content-box(内容框)',
        desc: '规定背景的绘制（裁剪）区域。'
      }],
      textAttrs: [{
        attr: 'color',
        value: '颜色值：#00FF00、rgb(0,0,255)、gray等',
        desc: '设置文本颜色'
      }, {
        attr: 'direction',
        value: 'ltr(默认，从左到右)、rtl(从右到左)',
        desc: '设置文本方向。'
      }, {
        attr: 'line-height',
        value: 'normal(默认)、数值(以字体尺寸的倍数)、百分比(以字体尺寸的百分比)、像素值',
        desc: '设置行高。'
      }, {
        attr: 'letter-spacing',
        value: 'normal(默认)、数值(可为负值)',
        desc: '设置字符间距'
      }, {
        attr: 'text-align',
        value: 'left(默认)、right(右对齐)、center(居中对齐)、justify(两端对齐)',
        desc: '对齐元素中的文本。'
      }, {
        attr: 'text-decoration',
        value: 'none(默认)、underline(文本下划线)、overline(文本上划线)、line-through(删除线)、blink(闪烁文本)',
        desc: '向文本添加修饰。'
      }, {
        attr: 'text-indent',
        value: '数值或百分比(父元素宽度的百分比)，可为负数',
        desc: '规定文本块中首行文本的缩进。'
      }, {
        attr: 'text-transform',
        value: 'none(默认)、capitalize(单词首字母大写)、uppercase(大写)、lowercase(小写)',
        desc: '控制元素中的字母。'
      }, {
        attr: 'white-space',
        value: 'normal(默认)、pre(空白保留)、nowrap(文本不换行)、pre-wrap(保留空白，正常换行)、pre-line(合并空白，保留换行符)',
        desc: '设置元素中空白的处理方式。'
      }, {
        attr: 'word-spacing',
        value: 'normal、数值，可为负值',
        desc: '设置字间距。'
      }],
      fontAttrs: [{
        attr: 'font-family',
        value: '字体名称，多个字体用逗号分割，字体由多个单词组成需要用引号包裹。"times"、"courier"、"arial"和"serif"、"sans-serif"、"cursive"、"fantasy"、"monospace"',
        desc: '设置字体系列。'
      }, {
        attr: 'font-size',
        value: 'xx-small、x-small、small、medium(默认)、large、x-large、xx-large和smaller、larger以及数值和百分比',
        desc: '设置字体的尺寸。'
      }, {
        attr: 'font-style',
        value: 'normal(默认)、italic(斜体)、oblique(倾斜)',
        desc: '设置字体风格。'
      }, {
        attr: 'font-variant',
        value: 'normal(默认)、small-caps(小型大写字母)',
        desc: '以小型大写字体或者正常字体显示文本。'
      }, {
        attr: 'font-weight',
        value: 'normal(默认)、bold(粗体)、bolder(更粗体)、lighter(更细体)、100-900(间隔100,400=normal，700=bold)',
        desc: '设置字体的粗细。'
      }, {
        attr: 'font-size-adjust',
        value: '数值，首选字体的字体尺寸*(font-size-adjust值/可用字体的aspect值)=可应用到可用字体的字体尺寸',
        desc: '当首选字体不可用时，对替换字体进行智能缩放，字体的 aspect 值比率（CSS2.1 已删除该属性。）'
      }, {
        attr: 'font-stretch',
        value: 'normal(默认)、wider(更宽)、narrower(更紧)',
        desc: '对字体进行水平拉伸。（CSS2.1 已删除该属性。）'
      }]
    }
  }
}

</script>
