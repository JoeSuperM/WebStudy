<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS简介</h1>
      <h2>CSS概述</h2>
      <ul>
        <li v-for="item in cssDescs" :key="item">{{item}}</li>
      </ul>
      <h2>CSS层叠优先级</h2>
      <p>内联样式（在 HTML 元素内部）拥有最高的优先权，这意味着它将优先于以下的样式声明：head标签中的样式声明，外部样式表中的样式声明，或者浏览器中的样式声明（缺省值）。</p>
      <ol>
        <li v-for="item in cssPors" :key="item">{{item}}</li>
      </ol>
      <h1>二、CSS基础语法</h1>
      <h3>CSS语法</h3>
      <div class="code">
        <p>CSS 规则由两个主要的部分构成：选择器，以及一条或多条声明。</p>
        <span class="red">selector {declaration1; declaration2; ... declarationN }</span>
        <p>每条声明由一个属性和一个值组成。属性（property）是您希望设置的样式属性（style attribute）。每个属性有一个值。属性和值被冒号分开。</p>
        <span class="red">selector {property: value}</span>
      </div>
      <h3>注释事项</h3>
      <div class="warn">
        <p>对于值具有不同的写法和单位的属性，注意使用规范合法的单位，如颜色，百分比之类的</p>
        <p>如果值为若干个单词，则必须加引号</p>
        <p>多个声明中，推荐换行和分号分割,同时属性和属性值对大小写不敏感</p>
      </div>
      <h1>CSS高级语法</h1>
      <h2>选择器分组</h2>
      <p>用逗号将需要分组的选择器分开,被分组的选择器就可以分享相同的声明。</p>
      <div class="code">
        <pre>
          //所有的标题都是绿色的
          h1,h2,h3,h4,h5,h6 {
            color: green;
          }
        </pre>
      </div>
      <h2>继承及其问题</h2>
      <p>根据 CSS，子元素从父元素继承属性。但是不是所有的浏览器都支持继承，比如Netscape 4。为了更好的兼容性，可以采用分组的方式适配不支持继承的浏览器。</p>
      <p>如果不需要父类继承下来的属性，可以单独重写覆盖掉指定的属性</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'CssBasic1',
  data() {
    return {
      title: 'CSS基础--简介、基础语法、高级语法',
      cssDescs: ["CSS 指层叠样式表 (Cascading Style Sheets)",
        "样式定义如何显示 HTML 元素",
        "样式通常存储在样式表中",
        "把样式添加到 HTML 4.0 中，是为了解决内容与表现分离的问题",
        "外部样式表可以极大提高工作效率",
        "外部样式表通常存储在 CSS 文件中",
        "多个样式定义可层叠为一"
      ],
      cssPors: ["浏览器缺省设置",
        "外部样式表",
        "内部样式表（位于 <head> 标签内部）",
        "内联样式（在 HTML 元素内部）"
      ]
    }
  }
}

</script>
