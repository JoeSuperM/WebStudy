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
      }]
    }
  }
}

</script>
