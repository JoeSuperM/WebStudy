<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之多列</h1>
      <p>通过CSS3，您能够创建多个列来对文本进行布局 - 就像报纸那样！</p>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="180">属性</th>
          <th>属性值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in columnAttrs" :for="item.name">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <h3>演示多列效果(3列-count)</h3>
        <div id="column1">{{columnMsg}} </div>
        <h3>演示多列效果(列与列缝隙-gap)</h3>
        <div id="column2">{{columnMsg}} </div>
        <h3>演示多列效果(列与列样式-style)</h3>
        <div id="column3">{{columnMsg}} </div>
        <h3>演示多列效果(列与列样式宽度-width)</h3>
        <div id="column4">{{columnMsg}} </div>
        <h3>演示多列效果(列与列样式颜色-color)</h3>
        <div id="column5">{{columnMsg}} </div>
        <h3>演示多列效果(指定元素跨越多少列-span)</h3>
        <div id="column5">
          <h2>这是标题部分，跨越了很多列的内容</h2>
          {{columnMsg}}
        </div>
        <h3>演示多列效果(指定列宽度-width)</h3>
        <div id="column6">{{columnMsg}} </div>
      </div>
      <h1>二、CSS3之用户界面</h1>
      <p>在 CSS3 中, 增加了一些新的用户界面特性来调整元素尺寸，框尺寸和外边框。</p>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="180">属性</th>
          <th>属性值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in userAttrs" :for="item.name">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>调整尺寸(Resizing)</h2>
      <p>resize属性指定一个元素是否应该由用户去调整大小。</p>
      <h2>方框大小调整(Box Sizing)</h2>
      <p>box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。</p>
      <h2>外形修饰（outline-offset ）</h2>
      <p>outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。</p>
      <h2>演示效果</h2>
      <div class="code">
        <h3>resize全面调整</h3>
        <div id="resize_both">调整属性指定一个元素是否由用户可调整大小的。</div>
        <h3>resize水平调整</h3>
        <div id="resize_hor">调整属性指定一个元素是否由用户可调整大小的。</div>
        <h3>outline-offset属性</h3>
        <div id="outline">这个div有一个轮廓边界15 px边境外的边缘。</div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div#column1 {
  -moz-column-count: 3;
  /* Firefox */
  -webkit-column-count: 3;
  /* Safari and Chrome */
  column-count: 3;
}

div#column2 {
  -moz-column-count: 3;
  /* Firefox */
  -webkit-column-count: 3;
  /* Safari and Chrome */
  column-count: 3;

  -moz-column-gap: 40px;
  /* Firefox */
  -webkit-column-gap: 40px;
  /* Safari and Chrome */
  column-gap: 40px;
}

div#column3 {
  -moz-column-count: 3;
  /* Firefox */
  -webkit-column-count: 3;
  /* Safari and Chrome */
  column-count: 3;

  -moz-column-gap: 40px;
  /* Firefox */
  -webkit-column-gap: 40px;
  /* Safari and Chrome */
  column-gap: 40px;

  -moz-column-rule-style: dotted;
  -webkit-column-rule-style: dotted;
  column-rule-style: dotted;
}

div#column4 {
  -moz-column-count: 3;
  /* Firefox */
  -webkit-column-count: 3;
  /* Safari and Chrome */
  column-count: 3;

  -moz-column-gap: 40px;
  /* Firefox */
  -webkit-column-gap: 40px;
  /* Safari and Chrome */
  column-gap: 40px;

  -moz-column-rule-style: dotted;
  -webkit-column-rule-style: dotted;
  column-rule-style: dotted;

  -moz-column-rule-width: 10px;
  -webkit-column-rule-width: 10px;
  column-rule-width: 10px;
}

div#column5 {
  -moz-column-count: 3;
  /* Firefox */
  -webkit-column-count: 3;
  /* Safari and Chrome */
  column-count: 3;

  -moz-column-gap: 40px;
  /* Firefox */
  -webkit-column-gap: 40px;
  /* Safari and Chrome */
  column-gap: 40px;

  -moz-column-rule-style: dotted;
  -webkit-column-rule-style: dotted;
  column-rule-style: dotted;

  -moz-column-rule-width: 10px;
  -webkit-column-rule-width: 10px;
  column-rule-width: 10px;

  -moz-column-rule-color: green;
  -webkit-column-rule-color: green;
  column-rule-color: green;
}

div#column5 h2 {
  column-span: all;
  -webkit-column-span: all;
  -moz-column-span: all;
}


div#column6 {
  -moz-column-gap: 40px;
  /* Firefox */
  -webkit-column-gap: 40px;
  /* Safari and Chrome */
  column-gap: 40px;

  -moz-column-rule-style: dotted;
  -webkit-column-rule-style: dotted;
  column-rule-style: dotted;

  -moz-column-rule-width: 10px;
  -webkit-column-rule-width: 10px;
  column-rule-width: 10px;

  -moz-column-rule-color: green;
  -webkit-column-rule-color: green;
  column-rule-color: green;

  column-width: 100px;
  -moz-column-width: 100px;
  /* Firefox */
  -webkit-column-width: 100px;
  /* Safari and Chrome */
}

div#resize_both {
  border: 2px solid;
  padding: 10px 40px;
  width: 300px;
  resize: both;
  overflow: auto;
}

div#resize_hor {
  border: 2px solid;
  padding: 10px 40px;
  width: 300px;
  resize: horizontal;
  overflow: auto;
}

div#outline {
  margin: 20px;
  width: 150px;
  padding: 10px;
  height: 70px;
  border: 2px solid black;
  outline: 2px solid red;
  outline-offset: 15px;
}

</style>
<script>
export default {
  name: 'CssBasic12',
  data() {
    return {
      title: 'CSS基础--多列、用户界面',
      columnMsg: '“当我年轻的时候，我梦想改变这个世界；当我成熟以后，我发现我不能够改变这个世界，我将目光缩短了些，决定只改变我的国家；当我进入暮年以后，我发现我不能够改变我们的国家，我的最后愿望仅仅是改变一下我的家庭，但是，这也不可能。当我现在躺在床上，行将就木时，我突然意识到：如果一开始我仅仅去改变我自己，然后，我可能改变我的家庭；在家人的帮助和鼓励下，我可能为国家做一些事情；然后，谁知道呢?我甚至可能改变这个世界。”',
      columnAttrs: [{
        name: 'column-count',
        value: 'number(元素内容将被划分的最佳列数。)、auto(由其他属性决定列数，比如 "column-width"。)',
        desc: '规定元素应该被分隔的列数。'
      }, {
        name: 'column-fill',
        value: 'balance(对列进行协调。浏览器应对列长度的差异进行最小化处理)、auto(按顺序对列进行填充，列长度会各有不同。)',
        desc: '规定如何填充列。'
      }, {
        name: 'column-gap',
        value: 'length(把列间的间隔设置为指定的长度)、normal(规定列间间隔为一个常规的间隔。W3C 建议的值是 1em)',
        desc: '规定列之间的间隔。'
      }, {
        name: 'column-rule',
        value: 'column-rule-width column-rule-style column-rule-color;',
        desc: '设置所有 column-rule-* 属性的简写属性。'
      }, {
        name: 'column-rule-color',
        value: '颜色值，color;',
        desc: '规定列之间规则的颜色。'
      }, {
        name: 'column-rule-style',
        value: 'none(默认，无轮廓)、dotted(点状)、dashed(虚线)、solid(实线)、double(双线)、groove(3D凹槽)、ridge(3D凸槽)、inset(3D凹边)、outset(3D凸边)',
        desc: '规定列之间规则的样式。'
      }, {
        name: 'column-rule-width',
        value: 'thin(细)、medium(中等)、thick(粗)、数值(具体px)',
        desc: '  规定列之间规则的宽度。'
      }, {
        name: 'column-span',
        value: '1(元素应横跨一列)、all(元素应横跨所有列)',
        desc: '规定元素应该横跨的列数。'
      }, {
        name: 'column-width',
        value: 'auto(由浏览器决定列宽)、length(规定列的宽度)',
        desc: '规定列的宽度。'
      }, {
        name: 'columns',
        value: 'column-width column-count;',
        desc: '规定设置 column-width 和 column-count 的简写属性。'
      }],
      userAttrs: [{
        name: 'appearance',
        value: 'normal(常规元素)|icon(图标（小图片）)|window(视口)|button(按钮)|menu(一套供用户选择的选项)|field(输入字段);',
        desc: '允许您使一个元素的外观像一个标准的用户界面元素'
      }, {
        name: 'box-sizing',
        value: 'content-box(宽度和高度分别应用到元素的内容框)|border-box(宽度和高度决定了元素的边框盒)',
        desc: '允许你以适应区域而用某种方式定义某些元素'
      }, {
        name: 'icon',
        value: 'auto(使用由浏览器提供的默认通用图标)|URL(引用列表中的一个或多个图标，列表用逗号分隔。)',
        desc: '为创作者提供了将元素设置为图标等价物的能力。'
      }, {
        name: 'nav-down',
        value: 'auto(浏览器决定导航到哪个元素)|id(被导航元素的 id)|target-name(被导航的目标框架)',
        desc: '指定在何处使用箭头向下导航键时进行导航'
      }, {
        name: 'nav-index',
        value: 'auto(由浏览器分配元素的导航键控制次序。)|number(指示元素的导航键控制次序。1 代表第一个。)',
        desc: '指定一个元素的Tab的顺序'
      }, {
        name: 'nav-left',
        value: 'auto(浏览器决定导航到哪个元素)|id(被导航元素的 id)|target-name(被导航的目标框架)',
        desc: '定在何处使用左侧的箭头导航键进行导航'
      }, {
        name: 'nav-right',
        value: 'auto(浏览器决定导航到哪个元素)|id(被导航元素的 id)|target-name(被导航的目标框架)',
        desc: '指定在何处使用右侧的箭头导航键进行导航'
      }, {
        name: 'nav-up',
        value: 'auto(浏览器决定导航到哪个元素)|id(被导航元素的 id)|target-name(被导航的目标框架)',
        desc: '指定在何处使用箭头向上导航键时进行导航'
      }, {
        name: 'outline-offset',
        value: '轮廓与边框边缘的距离',
        desc: '外轮廓修饰并绘制超出边框的边缘'
      }, {
        name: 'resize',
        value: 'none(无法调整元素的尺寸)|both(调整元素的高度和宽度)|horizontal(调整元素的宽度)|vertical(调整元素的高度)',
        desc: '指定一个元素是否是由用户调整大小'
      }]
    }
  }
}

</script>
