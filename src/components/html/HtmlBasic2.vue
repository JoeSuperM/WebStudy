<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、样式</h1>
      <p>style属性用于改变HTML元素的样式,提供了一种改变所有HTML元素的样式的通用方法。</p>
      <h2>1、样式实例</h2>
      <div class="code">
        <p style="font-family:verdana;color:red">这个文字为Verdana，颜色为红色</p>
        <p style="font-family:times;color:green">这个文字为Times，颜色为绿色</p>
        <p style="font-size:30px">这个文字是30px</p>
        <h3 style="background-color:yellow">这是黄色背景的H3标题</h3>
        <p style="font-family:arial;color:red;font-size:20px;background-color:yellow;text-align:center;">多种样式结合，字体:arial，颜色:红色，大小:20px,背景:黄色,对齐:居中</p>
      </div>
      <h2>2、注意事项</h2>
      <div class="warn">
        <p>(1)不推荐使用已过时的标签,比如居中内容(&#60;center&#62;)、字体(&#60;font&#62;和&#60;basefont&#62;)、删除线(&#60;s&#62;和&#60;strike&#62;)、下划线(&#60;u&#62;)</p>
        <p>(1)不推荐使用已过时的属性,比如文本的对齐方式(align)、背景颜色(bgcolor)和文本颜色(color)</p>
      </div>
      <h1>二、格式化文本</h1>
      <p>HTML定义很多供格式化输出的元素，比如粗体和斜体字。</p>
      <h2>1、格式化实例</h2>
      <div class="code">
        <h3>(1)文本格式化标签</h3>
        <b>(2)这是加粗（b）的文本</b> <br />
        <strong>(3)这是强壮（strong）的文本</strong><br />
        <big>(4)这是大（big）的文本</big><br />
        <em>(5)这是强调（emphasized）的文本</em><br />
        <i>(6)这是倾斜（italic）的文本</i><br />
        <small>(7)这是小（small）的文本</small> <br />
        (8)​这是带有下标的文本<sub>下标</sub><br />
        ​(9)这是带有上标的文本<sup>上标</sup><br />
        <br />
        <abbr title="这是缩略词内容">(10)鼠标放在文本上，可以看到title的描述，用于缩略词（abbr）</abbr>
        <br />
        <acronym title="World Wide Web">(11)WWW缩略词（acronym）</acronym>
        <br />
        <p>(12)这里样式文本<del>删除(del)</del><ins>插入(ins)</ins>的效果。</p>
      </div>
      <h1>三、引用、引用和术语</h1>
      <p>引用（Quotation）,指引用其他人的文章或话语</p>
      <h2>1、引用实例</h2>
      <div class="code">
        (1)这是长的引用：
        <blockquote>
          这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。这是长的引用。
        </blockquote>
        (2)这是短的引用： <q> 这是短的引用。 </q>
        <br /><br />
        <address>
          (3)以下一个用户地址：<br />Written by <a href="mailto:JoeSuperM@qq.com">JoeSuperM</a>.<br />
          Visit us at:<br />Galaxywind.com<br />Chendu of Sichuan <br />CHA
        </address>
        <p>(4)这是对缩写进行标记，鼠标移上去，可见title内容，比如<dfn title="World Health Organization">WHO(dfn)</dfn>成立于1948年.</p>
        <p>(5)<cite>成都(cite)</cite>，一个四川的省会城市.</p>
        <p>(6)<bdo dir="rtl">这个文本方向从右往左显示（bdo dir=rtl）</bdo></p>
        <bdo dir="ltr">(7)这个文本方向从左往右显示（bdo dir=ltr）</bdo>
      </div>
      <h1>四、计算机代码</h1>
      <p>描述计算机代码中的相关格式，如变量，代码，打字码等</p>
      <div class="code">
        <code>(1)这是计算机代码(code)<br />var person = { firstName:"Bill", lastName:"Gates", age:50, eyeColor:"blue" }</code><br />
        <kbd>(2)这是键盘输入码(kbd)<br />File | Open...</kbd><br />
        <tt>(3)这是打字机代码(tt)</tt><br />A B C D<br />
        <samp>(4)这是计算机代码样本(samp)<br />demo.example.com login: Apr 12 09:10:17</samp> <br />
        <var>(5)这是计算机变量(var)<br />E = m c<sup>2</sup></var><br />
        <pre>
          (6)这是预定义格式，     完全不改变内容（pre）
              这里是直接换行。没有使用标签。
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
  name: 'HtmlBasic2',
  data() {
    return {
      title: 'HTML基础--样式、格式化、引用、代码',
    }
  }
}

</script>
