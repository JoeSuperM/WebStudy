<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、简介</h1>
      <p>getElementById()是多个JavaScript HTML方法之一。</p>
      <h4>JavaScript可以改变HTML内容</h4>
      <p>document.getElementById("id").innerHTML = "Hello JavaScript";</p>
      <h4>JavaScript能够改变HTML属性</h4>
      <p>document.getElementById('id').src='path'</p>
      <h4>JavaScript能够改变HTML样式 (CSS)</h4>
      <p>document.getElementById("id").style.fontSize = "25px";</p>
      <h4>JavaScript能够隐藏或显示HTML元素</h4>
      <p>document.getElementById("id").style.display="none/block";</p>
      <h1>二、JavaScript使用</h1>
      <h3>&#60;script&#62;标签</h3>
      <p>在HTML中，JavaScript代码必须位于&#60;script&#62;与&#60;script/&#62;标签之间。</p>
      <p><span class="red">注意：</span>旧的JavaScript例子也许会使用type属性中:type="text/javascript"。type 属性不是必需的。JavaScript 是HTML中的默认脚本语言。</p>
      <h3>JavaScript函数与事件</h3>
      <p>JavaScript 函数是一种JavaScript代码块，它可以在调用时被执行。</p>
      <h3>head或body中的JavaScript</h3>
      <p>在HTML文档中放置任意数量的脚本。同时脚本可被放置与HTML页面的body或head部分中，或兼而有之。</p>
      <h3>外部脚本</h3>
      <p>JavaScript 文件的文件扩展名是 .js。如需使用外部脚本，可在script标签的src属性中设置脚本的名称：</p>
      <p>&#60;script src="myScript.js"&#62;&#60;/script&#62;</p>
      <p>可通过完整的URL或相对于当前网页的路径引用外部脚本：</p>
      <p>&#60;script src="/js/myScript1.js"&#62;&#60;/script&#62;</p>
      <h1>三、JavaScript输出</h1>
      <p>JavaScript 能够以不同方式“显示”数据：</p>
      <ul>
        <li>使用 window.alert() 写入警告框</li>
        <li>使用 document.write() 写入 HTML 输出</li>
        <li>使用 innerHTML 写入 HTML 元素</li>
        <li>使用 console.log() 写入浏览器控制台</li>
      </ul>
      <p><span class="red">注意：</span>在HTML文档完全加载后使用document.write()将删除所有已有的HTML</p>
      <h1>四、JavaScript语句</h1>
      <p>JavaScript 语句由值、运算符、表达式、关键词和注释构成,每条语句用分号分割，同时Js会忽略多个语句间的空格</p>
      <p>JavaScript行的最佳长度为80个字符以内，同时折行的最佳位置是在某个运算符，多个语句组成的语句块可以用花括号包裹</p>
      <h1>五、JavaScript语法</h1>
      <h3>JavaScript值</h3>
      <p>JavaScript语句定义两种类型的值：混合值和变量值。混合值被称为字面量（literal）。变量值被称为变量。</p>
      <p>在编程语言中，变量用于存储数据值。JavaScript 使用<b>var</b>关键词来声明变量。=号用于为变量赋值。</p>
      <h3>注释</h3>
      <p>双斜杠// 或 /* 与 */ 之间的代码被视为注释。注释会被忽略，不会被执行</p>
      <h3>JavaScript标识符</h3>
      <p>标识符是名称,用于命名变量（以及关键词、函数和标签）。首字符必须是字母、下划线（-）或美元符号（$）。连串的字符可以是字母、数字、下划线或美元符号。</p>
      <h3>JavaScript对大小写敏感</h3>
      <p>所有JavaScript标识符对大小写敏感。同时推荐使用以小写字母开头的驼峰命名法</p>
      <h3>JavaScript字符集</h3>
      <p>JavaScript 使用 Unicode 字符集。Unicode 覆盖世界上几乎所有的字符、标点和符号。</p>
      <h1>六、JavaScript变量与运算符</h1>
      <h4>通过var声明的变量，如果不赋值，它的值是undefined.</h4>
      <h4>重复声明同一个变量，不会丢弃它原来的值</h4>
      <h3>算数运算符</h3>
      <p>算数运算符用于对数字执行算数运算：<b class="code">+、-、*(乘)、**(取幂)、/、%、++、--</b></p>
      <h3>赋值运算符</h3>
      <p>赋值运算符向JavaScript变量赋值：<b class="code">=、+=、-=、*=、/=、%=</b></p>
      <h3>比较运算符</h3>
      <p>比较运算符用于比较值的大小，相等：<b class="code">==(等值)、===(等值等型)、!=(不等值)、!==(不等值或不等型)、&#60;、&#62;、&#60;=、&#62;=、?</b></p>
      <h3>逻辑运算符</h3>
      <p>逻辑运算符用于处理逻辑运算：<b class="code">&&、||、!</b></p>
      <h3>类型运算符</h3>
      <p>类型运算符用于判断对象类型：<b class="code">typeof(返回变量的类型)、instanceof(返回true，如果对象是对象类型的实例)</b></p>
      <h3>位运算符</h3>
      <p>位运算符处理 32 位数。该运算中的任何数值运算数都会被转换为32位的数。结果会被转换回JavaScript数。</p>
      <p>位运算符包括：<b class="code">&(与)、|(或)、~(非)、^(异或)、&#60;&#60;(零填充左位移)、&#62;&#62;(有符号右位移)、&#62;&#62;&#62;(零填充右位移)</b></p>
      <h1>七、JavaScript类型</h1>
      <p>JavaScript 变量能够保存多种数据类型：字符串值，数值，布尔值，数组，对象。</p>
      <p>JavaScript 拥有动态类型。这意味着相同变量可用作不同类型</p>
      <h3>JavaScript字符串值</h3>
      <p>字符串被单引号或双引号包裹。</p>
      <div class="code">
        var answer = "It's alright"; // 双引号内的单引号<br />
        var answer = "He is called 'Bill'"; // 双引号内的单引号<br />
        var answer = 'He is called "Bill"'; // 单引号内的双引号<br />
      </div>
      <h3>JavaScript数值</h3>
      <p>JavaScript只有一种数值类型。写数值时用不用小数点均可.超大或超小的数值可以用科学计数法来写.</p>
      <div class="code">
        var x1 = 34.00; // 带小数点<br />
        var x2 = 34; // 不带小数点<br />
        var y = 123e5; // 12300000<br />
        var z = 123e-5; // 0.00123<br />
      </div>
      <h3>JavaScript布尔值</h3>
      <p>布尔值只有两个值：true 或 false。</p>
      <h3>JavaScript 数组</h3>
      <p>JavaScript 数组用方括号书写,数组的项目由逗号分隔。数组索引从0开始</p>
      <h3>JavaScript 对象</h3>
      <p>JavaScript 对象用花括号来书写,对象属性是 name:value 对，由逗号分隔。</p>
      <h3>typeof运算符</h3>
      <p>使用JavaScript的 typeof 来确定 JavaScript 变量的类型：</p>
      <p>typeof运算符对数组返回 "object"，因为在JavaScript中数组属于对象。</p>
      <h3>Undefined、空值、Null</h3>
      <p>在JavaScript中，没有值的变量，其值是undefined。typeof 也返回 undefined。</p>
      <p>任何变量均可通过设置值为 undefined 进行清空。其类型也将是 undefined。</p>
      <p>空值与undefined不是一回事，空的字符串变量既有值也有类型。</p>
      <p>Null是"nothing"的意思，它被看做不存在的事物，数据类型为对象。</p>
      <p>undefined 与 null 的值相等，但类型不相等：</p>
      <div class="code">
        typeof undefined // undefined<br />
        typeof null // object<br />
        null === undefined // false<br />
        null == undefined // true<br />
      </div>
      <h3>原始数据与复杂数据</h3>
      <p>原始数据值是一种没有额外属性和方法的单一简单数据值，包括string，number，boolean，undefined</p>
      <div class="code">
        typeof "Bill" // 返回 "string"<br />
        typeof 3.14 // 返回 "number"<br />
        typeof true // 返回 "boolean"<br />
        typeof false // 返回 "boolean"<br />
        typeof x // 返回 "undefined" (假如 x 没有值)<br />
      </div>
      <p>复杂对象包括对象和函数，typeof运算符把对象，数组或null返回object,而将函数返回function。</p>
      <div class="code">
        typeof {name:'Bill', age:62} // 返回 "object"<br />
        typeof [1,2,3,4] // 返回 "object"<br />
        typeof null // 返回 "object"<br />
        typeof function myFunc(){} // 返回 "function"<br />
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
  name: 'JsBasic1',
  data() {
    return {
      title: 'JavaScript基础--语法、变量、运算符等',
    }
  }
}

</script>
