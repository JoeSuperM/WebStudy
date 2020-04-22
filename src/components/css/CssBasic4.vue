<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、列表</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in listAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="400">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <h3>list-style-image演示</h3>
        <ul class="image">
          <li>咖啡</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <h3>list-style-type类型演示</h3>
        <ul class="none">
          <li>"none" 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="circle">
          <li>Circle 类型(outside)</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="disc">
          <li>Disc 类型(inside)</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="square">
          <li>Square 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="decimal">
          <li>Decimal 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="decimal-leading-zero">
          <li>Decimal-leading-zero 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="lower-roman">
          <li>Lower-roman 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="upper-roman">
          <li>Upper-roman 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="lower-alpha">
          <li>Lower-alpha 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="upper-alpha">
          <li>Upper-alpha 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="lower-greek">
          <li>Lower-greek 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="lower-latin">
          <li>Lower-latin 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="upper-latin">
          <li>Upper-latin 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="hebrew">
          <li>Hebrew 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="armenian">
          <li>Armenian 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="georgian">
          <li>Georgian 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="cjk-ideographic">
          <li>Cjk-ideographic 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="hiragana">
          <li>Hiragana 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="katakana">
          <li>Katakana 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="hiragana-iroha">
          <li>Hiragana-iroha 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
        <ul class="katakana-iroha">
          <li>Katakana-iroha 类型</li>
          <li>茶</li>
          <li>可口可乐</li>
        </ul>
      </div>
      <h1>二、表格</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in tableAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="400">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <h3>演示collapse,text-align,vertical-align等属性</h3>
        <table id="collapse">
          <caption style="caption-side:top;">表格标题</caption>
          <tr>
            <th>姓名</th>
            <th>性别</th>
          </tr>
          <tr>
            <td>周超</td>
            <td>男</td>
          </tr>
          <tr>
            <td>余瑞梅</td>
            <td>女</td>
          </tr>
        </table>
        <h3>演示separate,caption,color,background-color等属性</h3>
        <table id="caption">
          <caption style="caption-side:bottom;">表格标题</caption>
          <tr>
            <th width="100">姓名</th>
            <th>性别</th>
          </tr>
          <tr>
            <td>周超</td>
            <td>男</td>
          </tr>
          <tr>
            <td>余瑞梅</td>
            <td>女</td>
          </tr>
        </table>
        <h3>演示table-layout的效果</h3>
        <table style="table-layout:automatic" border="1" width="100%">
          <caption>table-layout=automatic</caption>
          <tr>
            <td width="20%">1000000000000000000000000000</td>
            <td width="40%">10000000</td>
            <td width="40%">100</td>
          </tr>
        </table>
        <br />
        <table style="table-layout:fixed;" border="1" width="100%">
          <caption>table-layout=fixed</caption>
          <tr>
            <td width="20%">1000000000000000000000000000</td>
            <td width="40%">10000000</td>
            <td width="40%">100</td>
          </tr>
        </table>
      </div>
      <h1>三、轮廓</h1>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>属性可选值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in outlineAttrs" :key="item.attr">
          <td width="180">{{item.attr}}</td>
          <td width="400">{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <h3>演示轮廓style属性</h3>
        <div id="outline">
          <p class="dotted">点状轮廓--dotted outline</p>
          <p class="dashed">虚线轮廓--dashed outline</p>
          <p class="solid">实线轮廓--solid outline</p>
          <p class="double">双线轮廓--double outline</p>
          <p class="groove">3D凹槽轮廓--groove outline</p>
          <p class="ridge">3D凸槽轮廓--ridge outline</p>
          <p class="inset">3D凹边轮廓--inset outline</p>
          <p class="outset">3D凸边轮廓--outset outline</p>
        </div>
        <h3>演示轮廓width和color属性</h3>
        <p class="thin">这是一个轮廓宽度为thin的段落</p>
        <p class="medium">这是一个轮廓宽度为medium的段落</p>
        <p class="thick">这是一个轮廓宽度为thick的段落</p>
        <p class="px8">这是一个轮廓宽度为8px的段落</p>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

ul.none {
  list-style-type: none
}

ul.circle {
  list-style-type: circle;
  list-style-position: outside;
}

ul.disc {
  list-style-type: disc;
  list-style-position: inside;
}

ul.square {
  list-style-type: square
}

ul.decimal {
  list-style-type: decimal
}

ul.decimal-leading-zero {
  list-style-type: decimal-leading-zero
}

ul.lower-roman {
  list-style-type: lower-roman
}

ul.upper-roman {
  list-style-type: upper-roman
}

ul.lower-alpha {
  list-style-type: lower-alpha
}

ul.upper-alpha {
  list-style-type: upper-alpha
}

ul.lower-greek {
  list-style-type: lower-greek
}

ul.lower-latin {
  list-style-type: lower-latin
}

ul.upper-latin {
  list-style-type: upper-latin
}

ul.hebrew {
  list-style-type: hebrew
}

ul.armenian {
  list-style-type: armenian
}

ul.georgian {
  list-style-type: georgian
}

ul.cjk-ideographic {
  list-style-type: cjk-ideographic
}

ul.hiragana {
  list-style-type: hiragana
}

ul.katakana {
  list-style-type: katakana
}

ul.hiragana-iroha {
  list-style-type: hiragana-iroha
}

ul.katakana-iroha {
  list-style-type: katakana-iroha
}

ul.image {
  list-style-image: url('../../assets/eg_arrow.gif')
}

/*表格属性*/
table#collapse {
  border-collapse: collapse;
  width: 300px;
  height: 150px;
}

table#collapse th {
  border: 1px solid black;
  text-align: left;
  vertical-align: top;

}

table#collapse td {
  border: 1px solid black;
  text-align: right;
  vertical-align: bottom;
  padding: 10px;
}

table#caption {
  border-collapse: separate;
  width: 300px;
  height: 150px;
  table-layout: fixed;
}

table#caption th,
table#caption td {
  border: 1px solid black;
  text-align: center;
  vertical-align: center;
  padding: 10px;
  background-color: green;
  color: red;
}

/*轮廓*/
div#outline {
  padding-left: 10px;
  padding-right: 10px;
}

div#outline p {
  border: red solid thin;
}

div#outline p.dotted {
  outline-style: dotted
}

div#outline p.dashed {
  outline-style: dashed
}

div#outline p.solid {
  outline-style: solid
}

div#outline p.double {
  outline-style: double
}

p#outline.groove {
  outline-style: groove
}

div#outline p.ridge {
  outline-style: ridge
}

div#outline p.inset {
  outline-style: inset
}

div#outline p.outset {
  outline-style: outset
}

p.thin {
  border: red solid thin;
  outline-style: solid;
  outline-width: thin;
  outline-color: blue;
}

p.medium {
  border: red solid thin;
  outline-style: solid;
  outline-width: medium;
  outline-color: green;
}

p.thick {
  border: red solid thin;
  outline-style: solid;
  outline-width: thick;
  outline-color: yellow;
}

p.px8 {
  border: red solid thin;
  outline-style: solid;
  outline-width: 8px;
  outline-color: black;
}

</style>
<script>
export default {
  name: 'CssBasic4',
  data() {
    return {
      title: 'CSS基础-列表、表格、轮廓',
      listAttrs: [{
        attr: 'list-style',
        value: 'square inside url(\'/i/arrow.gif\');',
        desc: '简写属性。用于把所有用于列表的属性设置于一个声明中。'
      }, {
        attr: 'list-style-image',
        value: 'none(默认，无图形显示)、URL(图像路径)',
        desc: '将图象设置为列表项标志。'
      }, {
        attr: 'list-style-position',
        value: 'inside(标记放置在文本以内，且环绕文本)、outside(默认值，标记位于文本左侧)',
        desc: '设置列表中列表项标志的位置。'
      }, {
        attr: 'list-style-type',
        value: 'none(默认，无)、disc(实心圆)、circle(空心圆)、square(实心方块)、decimal(数字)、decimal-leading-zero(0开头数字，01,02)、lower-roman(小写罗马数字i)、upper-roman(大写罗马数字I)、lower-alpha(小写英文)、upper-alpha(大写英文)、lower-greek(小写希腊)、lower-tatin(小写拉丁字母)、upper-latin(大写拉丁字母)等',
        desc: '设置列表项标志的类型。'
      }],
      tableAttrs: [{
        attr: 'border-collapse',
        value: 'separate(默认，边框会被分开。)、collapse(边框合并，忽略border-spacing和empty-cells属性)',
        desc: '设置是否把表格边框合并为单一的边框。'
      }, {
        attr: 'border-spacing',
        value: '水平+垂直距离，规定相邻单元的边框之间的距离。使用px、cm等单位。不可用负值。',
        desc: '设置分隔单元格边框的距离。'
      }, {
        attr: 'caption-side',
        value: 'top(默认，表格之上)、bottom(表格之下)',
        desc: '设置表格标题的位置。'
      }, {
        attr: 'empty-cells',
        value: 'hide(空单元不绘制边框)、show(默认，空单元绘制边框)',
        desc: '设置是否显示表格中的空单元格。'
      }, {
        attr: 'table-layout',
        value: 'automatic(默认，根据单元格内容设定)、fixed(由表格宽度和列宽设定)',
        desc: '设置显示单元、行和列的算法。'
      }],
      outlineAttrs: [{
        attr: 'outline',
        value: '#00FF00 dotted thick;',
        desc: '在一个声明中设置所有的轮廓属性。'
      }, {
        attr: 'outline-color',
        value: '颜色值，#FF00FF,rgb(100,100,100), red等',
        desc: '设置轮廓的颜色。'
      }, {
        attr: 'outline-style',
        value: 'none(默认，无轮廓)、dotted(点状)、dashed(虚线)、solid(实线)、double(双线)、groove(3D凹槽)、ridge(3D凸槽)、inset(3D凹边)、outset(3D凸边)',
        desc: '设置轮廓的样式。'
      }, {
        attr: 'outline-width',
        value: 'thin(细轮廓)、medium(默认，中轮廓)、thick(粗轮廓)、数值(轮廓值)',
        desc: '设置轮廓的宽度。'
      }]
    }
  }
}

</script>
