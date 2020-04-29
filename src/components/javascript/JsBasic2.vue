<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、JavaScript函数</h1>
      <h2>函数语法</h2>
      <p>JavaScript 函数通过 function 关键词进行定义，其后是函数名和括号 ()。函数名可包含字母、数字、下划线和美元符号（规则与变量名相同）。圆括号可包括由逗号分隔的参数：</p>
      <div class="code">
        function name(参数 1, 参数 2, 参数 3) {<br />
        &#160;&#160;&#160;&#160;要执行的代码<br />
        returun 对象;<br />
        }<br />
      </div>
      <p><span class="red">注意：</span>function_name引用的是函数对象，而function_name()引用的是函数结果。</p>
      <h1>二、JavaScript对象</h1>
      <p>对象也是变量,但是对象包含很多值，而值以名称:值对的方式来书写。JavaScript 对象是被命名值的容器。</p>
      <p>对象包含属性和方法，方法是在对象上执行的动作。在函数定义中，this 引用该函数的“拥有者”。</p>
      <p>访问对象属性，可以通过objectName.propertyName或objectName["propertyName"]来访问。访问对象的方法通过：objectName.methodName()</p>
      <div class="code">
        <pre>
          var person = {
            firstName: "Bill",
            lastName : "Gates",
            id       : 678,
            fullName : function() {
              return this.firstName + " " + this.lastName;
            }
          };
        </pre>
      </div>
      <p><span class="red">注意：</span><b>请不要把字符串、数值和布尔值声明为对象！</b>因为通过new出来的原始对象会增加代码的复杂性并降低执行速度。</p>
      <p><span class="red">注意：</span>JavaScript对象无法进行对比，比较两个JavaScript将始终返回false。</p>
      <h1>三、JavaScript事件</h1>
      <h2>HTML事件</h2>
      <p>HTML 事件可以是浏览器或用户做的某些事情。通过JavaScript代码，HTML允许您向HTML元素添加事件处理程序。</p>
      <div class="code">
        <p>使用单引号：</p>
        &#60;element event='一些 JavaScript'&#62;
        <p>使用双引号：</p>
        &#60;element event="一些 JavaScript"&#62;
      </div>
      <h2>常见的HTML事件</h2>
      <dl>
        <dt>onchange</dt>
        <dd>HTML 元素已被改变</dd>
        <dt>onclick</dt>
        <dd>用户点击了 HTML 元素</dd>
        <dt>onmouseover</dt>
        <dd>用户把鼠标移动到 HTML 元素上</dd>
        <dt>onmouseout</dt>
        <dd>用户把鼠标移开 HTML 元素</dd>
        <dt>onkeydown</dt>
        <dd>用户按下键盘按键</dd>
        <dt>onload</dt>
        <dd>浏览器已经完成页面加载</dd>
        <dt>onunload</dt>
        <dd>用户退出页面。</dd>
        <dt>onfocus</dt>
        <dd>元素获得焦点。</dd>
        <dt>onsubmit</dt>
        <dd>确认按钮被点击。</dd>
        <dt>onkeypress</dt>
        <dd>某个键盘按键被按下并松开。</dd>
      </dl>
      <h1>四、JavaScript字符串</h1>
      <p>JavaScript 字符串是引号中的零个或多个字符。</p>
      <h3>字符串长度</h3>
      <p>内建属性length可返回字符串的长度.</p>
      <h3>特殊字符,引号和斜杠</h3>
      <p>反斜杠转义字符把特殊字符转换为字符串字符：<br />
        <b class="code">\'(单引号)、\"(双引号)、\\(反斜杠)、\b(退格键)、\f(换页)、\n(新行)、\r(回车)、\t(水平制表符)、\v(垂直制表符)</b></p>
      <h3>字符串对象比较</h3>
      <div class="code">
        <p>运行代码：<br />
          var x = "Bill"; // x 是字符串<br />
          var x1 = "Bill"; // x1 是字符串<br />
          var y = new String("Bill"); // y 是对象<br />
          var y1 = new String("Bill"); // y1 是对象<br />
          var html = <br />
          "x == x1 : " + (x == x1) +"&#60;br /&#62;" + <br />
          "x === x1 : " + (x === x1) + "&#60;br /&#62;" + <br />
          "y == y1 : " + (y == y1) +"&#60;br /&#62;" + <br />
          "y === y1 : " + (y === y1) +"&#60;br /&#62;" + <br />
          "x == y : " + (x == y) + "&#60;br /&#62;" + <br />
          "x === y : " + (x === y) + "&#60;br /&#62;";<br />
        </p>
        <p>结果：<br />
          x == x1 : true<br />
          x === x1 : true<br />
          y == y1 : false<br />
          y === y1 : false<br />
          x == y : true<br />
          x === y : false
        </p>
        <p><span class="red">结论：</span>两个对象不等值也不等型，一个对象与一个基础数据可以等值当不等型，两个基础数据等值等型。</p>
      </div>
      <h3>字符串方法</h3>
      <h4>查找字符串中的字符串</h4>
      <p>indexOf()方法返回字符串中指定文本首次出现的索引（位置）</p>
      <p>lastIndexOf() 方法返回指定文本在字符串中最后一次出现的索引</p>
      <p><span class="red">注意：</span>如果未找到文本，indexOf()和lastIndexOf()均返回-1。同时两种方法都接受作为检索起始位置的第二个参数</p>
      <h4>检索字符串中的字符串</h4>
      <p>search()方法搜索特定值的字符串，并返回匹配的位置.</p>
      <p><span class="red">区别：</span>search()方法无法设置第二个开始位置参数。indexOf()方法无法设置更强大的搜索值（正则表达式）。</p>
      <h4>提取部分字符串</h4>
      <p>slice()提取字符串的某个部分并在新字符串中返回被提取的部分。该方法设置两个参数：起始索引（开始位置），终止索引（结束位置）。如果某个参数为负，则从字符串的结尾开始计数。如果省略第二个参数，则该方法将裁剪字符串的剩余部分.</p>
      <p>substring()类似于slice(),不同之处在于该方法无法接受负的索引。</p>
      <p>substr()类似于slice()。不同之处在于第二个参数规定被提取部分的长度，首个参数可以为负。</p>
      <h4>替换字符串内容</h4>
      <p>replace()方法用另一个值替换在字符串中指定的值,默认只替换首个匹配和大小写敏感，同时该方法不会改变调用它的字符串，它返回的是新字符串。</p>
      <p><span class="red">注意：</span>如果首个参数为正则表达式，则该参数不带引号</p>
      <div class="code">
        <p>简单替换</p>
        str = "Please visit Microsoft!";<br />
        var n = str.replace("Microsoft", "W3School");<br />
        //结果：Please visit W3School!<br />
        <p>替换首个匹配</p>
        str = "Please visit Microsoft and Microsoft!";<br />
        var n = str.replace("Microsoft", "W3School");<br />
        //结果：Please visit W3School and Microsoft!<br />
        <p>大小写敏感</p>
        str = "Please visit Microsoft!";<br />
        var n = str.replace("MICROSOFT", "W3School");<br />
        //结果：Please visit Microsoft!<br />
        <p>正则表达式不敏感替换</p>
        str = "Please visit Microsoft!";<br />
        var n = str.replace(/MICROSOFT/i, "W3School");<br />
        //结果：Please visit W3School!<br />
        <p>正则表达式全局替换</p>
        str = "Please visit Microsoft and Microsoft!";<br />
        var n = str.replace(/Microsoft/g, "W3School");<br />
        //结果：Please visit W3School and W3School!<br />
      </div>
      <h4>转换为大写或小写</h4>
      <p>通过toUpperCase()把字符串转换为大写,通过toLowerCase()把字符串转换为小写</p>
      <div class="code">
        var text1 = "Hello World!"; // 字符串<br />
        var text2 = text1.toUpperCase(); // text2 是被转换为大写的 text1<br />
        <br />
        var text1 = "Hello World!"; // 字符串<br />
        var text2 = text1.toLowerCase(); // text2 是被转换为小写的 text1<br />
      </div>
      <h4>字符串连接</h4>
      <p>concat()连接两个或多个字符串：</p>
      <div class="code">
        var text1 = "Hello";<br />
        var text2 = "World";<br />
        text3 = text1.concat(" ",text2);<br />
        //与下列代码功能相同<br />
        var text = "Hello" + " " + "World!";<br />
      </div>
      <h4>去除空白符</h4>
      <p>trim()方法删除字符串两端的空白符</p>
      <div class="code">
        var str = "&#160;&#160;&#160;&#160;&#160;Hello World!&#160;&#160;&#160;&#160;";<br />
        alert(str.trim());//Hello World!<br />
      </div>
      <h4>提取单个字符串</h4>
      <p>charAt()方法返回字符串中指定下标（位置）的字符串</p>
      <p>charCodeAt()方法返回字符串中指定索引的字符unicode编码</p>
      <h4>把字符串转换为数组</h4>
      <p>可以通过split()将字符串转换为数组.</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic2',
  data() {
    return {
      title: 'JavaScript基础--函数、对象、事件、字符串',
    }
  }
}

</script>
