<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、位运算符</h1>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>运算符</th>
          <th>名称</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in bitCalcs">
          <td>{{item.text}}</td>
          <td>{{item.name}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <p><span class="red">注意：</span>JavaScript 使用 32 位按位运算数</p>
      <h1>二、正则表达式</h1>
      <p>正则表达式是构成搜索模式（search pattern）的字符序列,可用于执行所有类型的文本搜索和文本替换操作。</p>
      <p>语法：/pattern/modifiers;如：/Hello/i;</p>
      <h2>使用字符串方法</h2>
      <p>正则表达式常用于两个字符串方法：search() 和 replace()。</p>
      <div class="code">
        var str = "Visit W3School!";<br />
        var n = str.search("W3School"); //字符串直接匹配，返回6<br />
        var n = str.search(/w3school/i); //正则表达式匹配，返回6<br />
        <br />
        var str = "Visit Microsoft!";<br />
        var res = str.replace("Microsoft", "W3School"); <br />
        var res = str.replace(/microsoft/i, "W3School"); <br />
        <p><span class="red">注意：</span>使用正则表达式作为参数时，没有引号</p>
      </div>
      <h3>正则表达式修饰符</h3>
      <ul>
        <li>i ==>执行对大小写不敏感的匹配。</li>
        <li>g ==>执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。</li>
        <li>m ==>执行多行匹配。</li>
      </ul>
      <h3>正则表达式模式</h3>
      <p>括号用于查找一定范围的字符串:</p>
      <ul>
        <li>[abc] ==>查找方括号之间的任何字符。</li>
        <li>[0-9] ==>查找任何从 0 至 9 的数字。</li>
        <li>(x|y) ==>查找由 | 分隔的任何选项。</li>
      </ul>
      <p>元字符（Metacharacter）是拥有特殊含义的字符：</p>
      <ul>
        <li>\d ==>查找数字。</li>
        <li>\s ==>查找空白字符。</li>
        <li>\b ==>匹配单词边界。</li>
        <li>\uxxxx ==>查找以十六进制数 xxxx 规定的 Unicode 字符。</li>
      </ul>
      <p>Quantifiers 定义量词:</p>
      <ul>
        <li>n+ ==>匹配任何包含至少一个 n 的字符串。</li>
        <li>n* ==>匹配任何包含零个或多个 n 的字符串。</li>
        <li>n? ==>匹配任何包含零个或一个 n 的字符串。</li>
      </ul>
      <h3>使用RegExp对象</h3>
      <p>RegExp 对象是带有预定义属性和方法的正则表达式对象。</p>
      <p>test() 是一个正则表达式方法。它通过模式来搜索字符串，然后根据结果返回 true 或 false。</p>
      <p>exec() 方法是一个正则表达式方法。它通过指定的模式（pattern）搜索字符串，并返回已找到的文本。如果未找到匹配，则返回 null。</p>
      <div class="code">
        var patt = /e/;<br />
        patt.test("The best things in life are free!"); //结果返回：true<br />
        <br />
        /e/.exec("The best things in life are free!"); //结果返回：e<br />
      </div>
      <h1>三、错误捕获与处理</h1>
      <p>当执行 JavaScript 代码时，会发生各种错误。错误可能是程序员的编码错误，由错误输入引起的错误，或者由于其他不可预见的问题。</p>
      <ul>
        <li>try 语句使您能够测试代码块中的错误。</li>
        <li>catch 语句允许您处理错误。</li>
        <li>throw 语句允许您创建自定义错误。</li>
        <li>finally 使您能够执行代码，在 try 和 catch 之后，无论结果如何。</li>
      </ul>
      <h3>try-catch-finally语法</h3>
      <div class="code">
        try {<br />
        &#160;&#160;&#160;&#160;供测试的代码块<br />
        } catch(err) {<br />
        &#160;&#160;&#160;&#160;处理错误的代码块<br />
        } finally {<br />
        &#160;&#160;&#160;&#160;无论 try / catch 结果如何都执行的代码块<br />
        }<br />
        <p>JavaScript出错将抛出异常（抛出错误），实际上会创建带有两个属性的 Error 对象：name 和 message。</p>
        <p>使用方法如：throw "message" 或 throw 300</p>
      </div>
      <h3>Error对象</h3>
      <p>Error对象拥有2个属性，name（设置或返回错误名）和message（设置或返回错误消息（一条字符串））</p>
      <p>Error 的 name 属性可返回六个不同的值：</p>
      <ul>
        <li>EvalError ==>已在 eval() 函数中发生的错误</li>
        <li>RangeError ==>已发生超出数字范围的错误</li>
        <li>ReferenceError ==>已发生非法引用</li>
        <li>SyntaxError ==>已发生语法错误</li>
        <li>TypeError ==>已发生类型错误</li>
        <li>URIError ==>在 encodeURI() 中已发生的错误</li>
      </ul>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic6',
  data() {
    return {
      title: 'JavaScript基础--位运算符、正则表达式、异常等',
      bitCalcs: [{
        text: '&',
        name: 'AND',
        desc: '如果两位都是 1 则设置每位为 1'
      }, {
        text: '|',
        name: 'OR',
        desc: '如果两位之一为 1 则设置每位为 1'
      }, {
        text: '^',
        name: 'XOR',
        desc: '如果两位只有一位为 1 则设置每位为 1'
      }, {
        text: '~',
        name: 'NOT',
        desc: '反转所有位'
      }, {
        text: '<<',
        name: '零填充左位移',
        desc: '通过从右推入零向左位移，并使最左边的位脱落。'
      }, {
        text: '>>',
        name: '有符号右位移',
        desc: '通过从左推入最左位的拷贝来向右位移，并使最右边的位脱落。'
      }, {
        text: '>>>',
        name: '零填充右位移',
        desc: '通过从左推入零来向右位移，并使最右边的位脱落。'
      }]
    }
  }
}

</script>
