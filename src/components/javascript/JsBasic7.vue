<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、作用域（局部和全局）</h1>
      <p>作用域指的是您有权访问的变量集合。在 JavaScript 中有两种作用域类型：局部作用域和全局作用域</p>
      <h2>局部作用域</h2>
      <p>函数中声明的变量，会成为函数的局部变量。局部变量的作用域是局部的：只能在函数内部访问它们。</p>
      <h2>全局作用域</h2>
      <p>函数之外声明的变量，会成为全局变量。全局变量的作用域是全局的：网页的所有脚本和函数都能够访问它。</p>
      <h3>自动全局</h3>
      <p>如果为尚未声明的变量赋值，此变量会自动成为全局变量。</p>
      <p><span class="red">注意：</span>除非有意为之，否则请勿创建全局变量。全局变量（或函数）能够覆盖 window 变量（或函数）。任何函数，包括 window 对象，能够覆盖您的全局变量和函数。</p>
      <h3>变量有效期</h3>
      <p>JavaScript 变量的有效期始于其被创建时，局部变量会在函数完成时被删除，全局变量会在您关闭页面是被删除。</p>
      <h1>二、严格模式、use strict</h1>
      <p>"use strict" 是 JavaScript 1.8.5 中的新指令（ECMAScript version 5）。它不算一条语句，而是一段文字表达式，更早版本的 JavaScript 会忽略它。"use strict"; 的作用是指示 JavaScript 代码应该以“严格模式”执行。</p>
      <h2>声明严格模式</h2>
      <p>通过在脚本或函数的开头添加 "use strict"; 来声明严格模式。</p>
      <div class="code">
        <h3>在脚本开头进行声明，拥有全局作用域（脚本中的所有代码均以严格模式来执行）</h3>
        <b>"use strict";</b><br />
        x = 3.14; // 这会引发错误，因为 x 尚未声明<br />
        <h3>在函数中声明严格模式，拥有局部作用域（只有函数中的代码以严格模式执行）</h3>
        x = 3.14; // 这不会引发错误<br />
        myFunction();<br />
        <br />
        function myFunction() {<br />
        &#160;&#160;&#160;&#160;<b>"use strict";</b><br />
        &#160;&#160;&#160;&#160;y = 3.14; // 这会引发错误<br />
        }<br />
      </div>
      <h2>严格模式中不允许的事项</h2>
      <div class="code">
        <h3>在不声明变量(对象)的情况下使用变量</h3>
        <p>"use strict"; <br />
          x = 3.14; // 这将引发错误<br />
          x = {p1:10, p2:20}; // 这将引发错误
        </p>
        <h3>删除变量（或对象）是不允许的</h3>
        <p>"use strict"; <br />
          var x = 3.14;<br />
          delete x; // 这将引发错误</p>
        <h3>删除函数是不允许的</h3>
        <p>"use strict"; <br />
          function x(p1, p2) {}; <br />
          delete x; // 这将引发错误<br />
        </p>
        <h3>重复参数名是不允许的</h3>
        <p>"use strict"; <br />
          function x(p1, p2) {};
          delete x; // 这将引发错误<br />
        </p>
        <h3>八进制数值文本是不允许的</h3>
        <p>"use strict"; <br />
          var x = 010; // 这将引发错误<br />
        </p>
        <h3>转义字符是不允许的</h3>
        <p>"use strict"; <br />
          var x = \010; // 这将引发错误<br />
        </p>
        <h3>写入只读属性是不允许的</h3>
        <p>"use strict"; <br />
          var obj = {};<br />
          Object.defineProperty(obj, "x", {value:0, writable:false});<br />
          obj.x = 3.14; // 这将引发错误<br />
        </p>
        <h3>写入只能获取的属性是不允许的</h3>
        <p>"use strict"; <br />
          var obj = {get x() {return 0} };<br />
          obj.x = 3.14; // 这将引发错误<br />
        </p>
        <h3>删除不可删除的属性是不允许的</h3>
        <p>"use strict"; <br />
          delete Object.prototype; // 这将引发错误<br />
        </p>
        <h3>字符串"eval"和"arguments"不可用作变量</h3>
        <p>"use strict"; <br />
          var eval = 3.14; // 这将引发错误<br />
          var arguments = 3.14; // 这将引发错误<br />
        </p>
        <h3>with 语句是不允许的</h3>
        <p>"use strict"; <br />
          with (Math){x = cos(2)}; // 这将引发错误<br />
        </p>
        <h3>处于安全考虑，不允许 eval() 在其被调用的作用域中创建变量</h3>
        <p>"use strict"; <br />
          eval ("var x = 2");<br />
          alert (x); // 这将引发错误<br />
        </p>
        <h3>严格模式中不允许使用为未来预留的关键词。</h3>
        <p>他们是：implements、interface、let、package、private、protected、public、static、yield</p>
      </div>
      <h1>三、this关键字</h1>
      <p>JavaScript this 关键词指的是它所属的对象。</p>
      <ul>
        <li>在对象方法中，this指的是所有者对象。</li>
        <li>单独的情况下，this指的是全局对象[object Window]。严格模式下，this是全局对象</li>
        <li>在函数中，this指的是全局对象[object Window]。严格模式下，this是undefined。</li>
        <li>在事件中，this 指的是接收事件的HTML元素。</li>
      </ul>
      <h2>显示函数绑定</h2>
      <p>call() 和 apply() 方法是预定义的 JavaScript 方法。它们都可以用于将另一个对象作为参数调用对象方法。</p>
      <h1>四、let与const关键字</h1>
      <h2>let关键字，块作用域</h2>
      <p>通过 var 关键词声明的变量没有块作用域。在块{}内声明的变量可以从块之外进行访问。而通过let关键词声明拥有块作用域的变量。在块{}内声明的变量无法从块外访问</p>
      <div class="code">
        <h3>var声明</h3>
        { <br />
        &#160;&#160;&#160;&#160;var x = 10; <br />
        }<br />
        // 此处可以使用 x<br />
        <h3>let声明</h3>
        { <br />
        &#160;&#160;&#160;&#160;let x = 10; <br />
        }<br />
        // 此处不可以使用 x<br />
        <h3>var重新声明变量导致的覆盖问题</h3>
        var x = 10;<br />
        // 此处 x 为 10<br />
        { <br />
        &#160;&#160;&#160;&#160;var x = 6;<br />
        &#160;&#160;&#160;&#160;// 此处 x 为 6<br />
        }<br />
        // 此处 x 为 6<br />
        <h3>使用let解决方案</h3>
        var x = 10;<br />
        // 此处 x 为 10<br />
        { <br />
        &#160;&#160;&#160;&#160;let x = 6;<br />
        &#160;&#160;&#160;&#160;// 此处 x 为 6<br />
        }<br />
        // 此处 x 为 10<br />
      </div>
      <h3>循环作用域</h3>
      <p>如果在循环中用 let 声明了变量 i，那么只有在循环内，变量 i 才是可见的。</p>
      <div class="code">
        <p>使用var声明变量</p>
        var i = 7;<br />
        for (var i = 0; i &lt; 10; i++) {<br />
        // 一些语句<br />
        }<br />
        // 此处，i 为 10<br />
        <p>使用let声明变量</p>
        let i = 7;<br />
        for (let i = 0; i &lt; 10; i++) {<br />
        // 一些语句<br />
        }<br />
        // 此处 i 为 7<br />
      </div>
      <h3>函数作用域</h3>
      <p>在函数内声明变量时，使用 var 和 let 很相似。它们都有函数作用域</p>
      <h3>全局作用域</h3>
      <p>如果在块外声明声明，那么 var 和 let 也很相似。它们都拥有全局作用域</p>
      <p>在 HTML 中，全局作用域是 window 对象。通过 var 关键词定义的全局变量属于 window 对象,而通过 let 关键词定义的全局变量不属于 window 对象。</p>
      <div class="code">
        var carName = "porsche";<br />
        // 此处的代码可使用 window.carName<br />
        <br />
        let carName = "porsche";<br />
        // 此处的代码不可使用 window.carName<br />
      </div>
      <h3>重新声明</h3>
      <p>允许在程序的任何位置使用var重新声明JavaScript变量，而不允许在相同的作用域，或在相同的块中，通过let重新声明一个var或let变量</p>
      <div class="code">
        <p>使用var重新声明变量</p>
        var x = 10;<br />
        // 现在，x 为 10<br />
        var x = 6;<br />
        // 现在，x 为 6<br />
        <p>使用let声明变量</p>
        var x = 10; // 允许<br />
        let x = 6; // 不允许<br />
        {<br />
        &#160;&#160;&#160;&#160;var x = 10; // 允许<br />
        &#160;&#160;&#160;&#160;let x = 6; // 不允许<br />
        }<br />
        或者<br />
        let x = 10; // 允许<br />
        var x = 6; // 不允许<br />
        {
        &#160;&#160;&#160;&#160;let x = 10; // 允许<br />
        &#160;&#160;&#160;&#160;var x = 6; // 不允许<br />
        }<br />
      </div>
      <h3>提升作用域</h3>
      <p>通过var声明的变量会提升到顶端。通过let定义的变量不会被提升到顶端，在声明let变量之前就使用它会导致ReferenceError。</p>
      <div class="code">
        // 在此处，您可以使用 carName<br />
        var carName;<br />
        <br />
        // 在此处，您不可以使用 carName<br />
        let carName;<br />
      </div>
      <h2>const关键字，常量</h2>
      <p>通过const定义的变量与let变量的作用域和提升类似，但不能重新赋值，要求声明的时候立即赋值</p>
      <p>在同一作用域或块中，不允许将已有的var或let变量重新声明或重新赋值给const,</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic7',
  data() {
    return {
      title: 'JavaScript基础--作用域、严格模式、this、let、const关键字等',
    }
  }
}

</script>
