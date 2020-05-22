<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、JavaScript函数定义</h1>
      <p>JavaScript 使用关键字 function 定义函数。函数可以通过声明定义，也可以是一个表达式。</p>
      <h2>函数声明</h2>
      <div class="code large">
        function functionName(parameters) {<br />
        &#160;&#160;&#160;&#160;执行的代码<br />
        }
        <h3>实例</h3>
        function myFunction(a, b) {<br />
        &#160;&#160;&#160;&#160;return a * b;<br />
        }
      </div>
      <h2>函数表达式</h2>
      <p>avaScript 函数可以通过一个表达式定义。函数表达式可以存储在变量中:</p>
      <div class="code large">var x = function (a, b) {return a * b};</div>
      <p>在函数表达式存储在变量后，变量也可作为一个函数使用：</p>
      <div class="code large">
        var x = function (a, b) {return a * b};<br />
        var z = x(4, 3);<br />
        <p>以上函数实际上是一个 匿名函数 (函数没有名称)。函数存储在变量中，不需要函数名称，通常通过变量名来调用。</p>
      </div>
      <h2>Function() 构造函数</h2>
      <p>函数同样可以通过内置的 JavaScript 函数构造器（Function()）定义。</p>
      <div class="code large">
        var myFunction = new Function("a", "b", "return a * b");<br />
        <br />
        var x = myFunction(4, 3);<br />
        <h3>实际上，你不必使用构造函数。上面实例可以写成：</h3>
        var myFunction = function (a, b) {return a * b};<br />
        <br />
        var x = myFunction(4, 3);
      </div>
      <h2>函数提升(Hoisting)</h2>
      <p>提升（Hoisting）是 JavaScript 默认将当前作用域提升到前面去的的行为。<br />
        提升（Hoisting）应用在变量的声明与函数的声明。</p>
      <div class="code large">
        myFunction(5);<br />
        <br />
        function myFunction(y) {<br />
        &#160;&#160;&#160;&#160;return y * y;<br />
        }
      </div>
      <h2>自调用函数</h2>
      <p>函数表达式可以 "自调用"。自调用表达式会自动调用。<br />
        如果表达式后面紧跟 () ，则会自动调用。不能自调用声明的函数。</p>
      <div class="code large">
        (function () {<br />
        &#160;&#160;&#160;&#160;var x = "Hello!!"; // 我将调用自己<br />
        })<span class="red">()</span>;
        <p><span class="red">注意：</span>以上函数实际上是一个 匿名自我调用的函数 (没有函数名)。</p>
      </div>
      <h2>函数是对象</h2>
      <div class="code large">
        <h3>arguments.length 属性返回函数调用过程接收到的参数个数：</h3>
        <p>function myFunction(a, b) {<br />
          &#160;&#160;&#160;&#160;return arguments.length;<br />
          }</p>
        myFunction(2,3)//返回结果为2
        <h3>toString() 方法将函数作为一个字符串返回:</h3>
        <p>
          function myFunction(a, b) {<br />
          &#160;&#160;&#160;&#160;return a * b;<br />
          }<br />
          <br />
          var txt = myFunction.toString();
        </p>
        txt的值为function myFunction(a, b) { return a * b; }
      </div>
      <h2>箭头函数</h2>
      <p>ES6 新增了箭头函数。箭头函数表达式的语法比普通函数表达式更简洁。</p>
      <div class="code large">
        <h3>基本语法</h3>
        (参数1, 参数2, …, 参数N) => { 函数声明 }<br />
        <br />
        (参数1, 参数2, …, 参数N) => 表达式(单一)<br />
        // 相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
        <h3>当只有一个参数时，圆括号是可选的：</h3>
        (单一参数) => {函数声明}<br />
        单一参数 => {函数声明}
        <h3>没有参数的函数应该写成一对圆括号:</h3>
        () => {函数声明}
        <p><span class="red">注意：</span>箭头函数是不能提升的，所以需要在使用之前定义。<br />
          使用 const 比使用 var 更安全，因为函数表达式始终是一个常量。</p>
      </div>
      <h1>二、JavaScript函数参数</h1>
      <p>JavaScript 函数对参数的值没有进行任何的检查。</p>
      <p>函数显式参数在函数定义时列出。<br />函数隐式参数在函数调用时传递给函数真正的值。</p>
      <h2>参数规则</h2>
      <p>JavaScript 函数定义显式参数时没有指定数据类型。</p>
      <p>JavaScript 函数对隐式参数没有进行类型检测。</p>
      <p>JavaScript 函数对隐式参数的个数没有进行检测。</p>
      <h2>默认参数</h2>
      <p>ES5 中如果函数在调用时未提供隐式参数，参数会默认设置为： undefined</p>
      <div class="code">
        function myFunction(x, y) {<br />
        &#160;&#160;&#160;&#160;if (y === undefined) {<br />
        &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;y = 0;<br />
        &#160;&#160;&#160;&#160;} <br />
        &#160;&#160;&#160;&#160;return x * y;<br />
        }<br />
        var result = myFunction(4);//result的值为0
      </div>
      <h2>ES6函数可以自带参数(默认值)</h2>
      <p>ES6 支持函数带有默认参数，就判断 undefined 和 || 的操作：</p>
      <div class="code">
        function myFunction(x, y = 10) {<br />
        &#160;&#160;&#160;&#160;// y is 10 if not passed or undefined<br />
        &#160;&#160;&#160;&#160;return x + y;<br />
        }<br />
        <br />
        myFunction(0, 2) // 输出 2<br />
        myFunction(5); // 输出 15, y 参数的默认值<br />
      </div>
      <h2>arguments 对象</h2>
      <p>JavaScript 函数有个内置的对象--arguments对象。argument对象包含了函数调用的参数数组。</p>
      <div class="code">
        x = sumAll(1, 123, 500, 115, 44, 88);<br />
        <br />
        function sumAll() {<br />
        &#160;&#160;&#160;&#160;var i, sum = 0;<br />
        &#160;&#160;&#160;&#160;for (i = 0; i &lt; arguments.length; i++) {<br />
        &#160;&#160;&#160;&#160; &#160;&#160;&#160;&#160;sum += arguments[i];<br />
        &#160;&#160;&#160;&#160;}<br />
        &#160;&#160;&#160;&#160;return sum;<br />
        }
      </div>
      <h1>三、JavaScript函数调用</h1>
      <h2>作为一个函数调用</h2>
      <div class="code">
        function myFunction(a, b) {<br />
        &#160;&#160;&#160;&#160;return a * b;<br />
        }<br />
        myFunction(10, 2); // myFunction(10, 2) 返回 20<br />
        <p>以上函数不属于任何对象。但是在 JavaScript 中它始终是默认的全局对象。在 HTML 中默认的全局对象是 HTML 页面本身，所以函数是属于 HTML 页面。在浏览器中的页面对象是浏览器窗口(window 对象)。以上函数会自动变为 window 对象的函数。</p>
      </div>
      <h2>函数作为方法调用</h2>
      <p>在 JavaScript 中你可以将函数定义为对象的方法。</p>
      <h2>使用构造函数调用函数</h2>
      <p>如果函数调用前使用了 new 关键字, 则是调用了构造函数。</p>
      <h2>作为函数方法调用函数</h2>
      <p>在 JavaScript 中, 函数是对象。JavaScript 函数有它的属性和方法。<br />
        call() 和 apply() 是预定义的函数方法。 两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。</p>
      <div class="code">
        <h3>call调用</h3>
        function myFunction(a, b) {<br />
        &#160;&#160;&#160;&#160;return a * b;<br />
        }<br />
        myObject = myFunction.<span class="red">call</span>(myObject, 10, 2); // 返回 20<br />
        <h3>apply调用</h3>
        function myFunction(a, b) {<br />
        &#160;&#160;&#160;&#160;return a * b;<br />
        }<br />
        myArray = [10, 2];<br />
        myObject = myFunction.<span class="red">apply</span>(myObject, myArray); // 返回 20<br />
      </div>
      <h1>四、JavaScript闭包</h1>
      <h2>JavaScript 内嵌函数</h2>
      <p>所有函数都能访问全局变量。 实际上，在 JavaScript 中，所有函数都能访问它们上一层的作用域。
        JavaScript 支持嵌套函数。嵌套函数可以访问上一层的函数变量。 </p>
      <div class="code large">
        function add() {<br />
        &#160;&#160;&#160;&#160;var counter = 0;<br />
        &#160;&#160;&#160;&#160;function plus() {counter += 1;}
        &#160;&#160;&#160;&#160; plus(); <br />
        &#160;&#160;&#160;&#160; return counter; <br />
        }
      </div>
      <h2>JavaScript闭包</h2>
      <div class="code large">
        var add = (function () {<br />
        &#160;&#160;&#160;&#160; var counter = 0;<br />
        &#160;&#160;&#160;&#160; return function () {return counter += 1;}<br />
        })();<br />
        <br />
        add();<br />
        add();<br />
        add();<br />
        <br />
        // 计数器为 3
        <h3>实例解析</h3>
        <p>变量 add 指定了函数自我调用的返回字值。<br />
          自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。<br />
          add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。<br />
          这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。<br />
          计数器受匿名函数的作用域保护，只能通过 add 方法修改。</p>
      </div>
      <p><span class="red">注意：</span>闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic9',
  data() {
    return {
      title: 'JavaScript基础--函数'

    }
  },
  methods: {}
}

</script>
