<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、逻辑</h1>
      <p>JavaScript 布尔（逻辑）代表两个值之一：true 或 false。</p>
      <h2>所有具有“真实”值的即为True,反之则为False</h2>
      <div class="code">
        <h3>0（零）的布尔值为 false</h3>
        <h3>-0 （负零）的布尔值为 false</h3>
        <h3>""（空值）的布尔值为 false</h3>
        <h3>undefined 的布尔值是 false</h3>
        <h3>null 的布尔值是 false</h3>
        <h3>false 的布尔值是 false</h3>
        <h3>NaN 的布尔值是 false</h3>
      </div>
      <p><span class="red">注意：</span>不要创建布尔对象，对象是不能比较的。</p>
      <h1>二、比较与逻辑运算</h1>
      <p>三元运算符：variablename = (condition) ? value1:value2</p>
      <h2>不同类型的比较</h2>
      <p>如果将字符串与数字进行比较，那么在做比较时JavaScript会把字符串转换为数值。空字符串将被转换为 0。非数值字符串将被转换为始终为 false 的 NaN。</p>
      <div class="code">
        2 &lt; 12 // true <br />
        2 &lt; "12" // true <br />
        2 &lt; "John" // false <br />
        2 &gt; "John" // false <br />
        2 == "John"// false <br />
        "2" &lt; "12" // false <br />
        "2" &gt; "12" //true <br />
        "2" == "12" //false<br />
      </div>
      <h1>三、条件语句</h1>
      <p>条件语句用于基于不同条件执行不同的动作。</p>
      <ul>
        <li>使用 if 来规定要执行的代码块，如果指定条件为 true</li>
        <li>使用 else if 来规定要测试的新条件，如果第一个条件为 false</li>
        <li>使用 else 来规定要执行的代码块，如果相同的条件为 false</li>
        <li>使用 switch 来规定多个被执行的备选代码块</li>
      </ul>
      <h3>Swtich语法</h3>
      <div class="code">
        <pre>
          switch(表达式) {
               case n:
                  代码块
                  break;
               case n:
                  代码块
                  break;
               default:
                  默认代码块
          }
        </pre>
        <p>计算一次 switch 表达式,把表达式的值与每个 case 的值进行对比,如果存在匹配，则执行关联代码</p>
      </div>
      <p><span class="red">注意：</span>Switch-Case使用严格比较（===），值必须与要匹配的类型相同。</p>
      <h1>四、循环语句</h1>
      <p>循环可多次执行代码块。</p>
      <ul>
        <li>for - 多次遍历代码块</li>
        <li>for/in - 遍历对象属性</li>
        <li>while - 当指定条件为 true 时循环一段代码块</li>
        <li>do/while - 当指定条件为 true 时循环一段代码块</li>
      </ul>
      <h2>循环语法</h2>
      <div class="code">
        <h3>基础循环</h3>
        for (语句 1; 语句 2; 语句 3) {<br />
        &#160;&#160;&#160;&#160;要执行的代码块<br />
        }<br />
        <h3>对象循环</h3>
        for (属性 in 对象) {<br />
        &#160;&#160;&#160;&#160;//访问数据，对象[属性];<br />
        }<br />
        <h3>While循环</h3>
        while (条件) {<br />
        &#160;&#160;&#160;&#160;要执行的代码块<br />
        }<br />
        <h3>Do-While循环</h3>
        do {<br />
        &#160;&#160;&#160;&#160;要执行的代码块<br />
        }while (条件);<br />
      </div>
      <p>Js支持标签，continue 语句（不论有无标签引用）只能用于跳过一个迭代。break 语句，如果没有标签引用，只能用于跳出一个循环或一个 switch。如果有标签引用，则 break 语句可用于跳出任意代码块。</p>
      <p><span class="red">注意：</span>break 语句“跳出”循环。continue 语句“跳过”循环中的一个迭代。</p>
      <h1>五、类型转换</h1>
      <p>JavaScript 中有五种可包含值的数据类型：字符串（string）、数字（number）、布尔（boolean）、对象（object）、函数（function），有三种对象类型：对象（Object）、日期（Date）、数组（Array），同时有两种不能包含值的数据类型：null、undefined</p>
      <h3>typeof运算符</h3>
      <p>使用 typeof 运算符来确定 JavaScript 变量的数据类型。typeof 始终会返回字符串（包含运算数的类型）。</p>
      <h3>constructor属性</h3>
      <p>constructor 属性返回所有 JavaScript 变量的构造器函数。</p>
      <div class="code">
        "Bill".constructor <br />// 返回 "function String() { [native code] }"<br />
        <br />
        (3.14).constructor <br />// 返回 "function Number() { [native code] }"<br />
        <br />
        false.constructor <br />// 返回 "function Boolean() { [native code] }"<br />
        <br />
        [1,2,3,4].constructor <br />// 返回 "function Array() { [native code] }"<br />
        <br />
        {name:'Bill', age:62}.constructor <br />// 返回" function Object() { [native code] }"<br />
        <br />
        new Date().constructor <br />// 返回 "function Date() { [native code] }"<br />
        <br />
        function () {}.constructor <br />// 返回 "function Function(){ [native code] }"<br />
        <br />
        <h3>通过构造函数判断数组或日期等</h3>
        myArray.constructor === Array;<br />
        myArray.constructor.toString().indexOf("Array") > -1;<br />
        <br />
        myDate.constructor === Date;<br />
        myDate.constructor.toString().indexOf("Date") > -1;<br />
      </div>
      <h2>类型转换</h2>
      <h3>转换为字符串</h3>
      <p>全局方法 String() 能够把其他转换为字符串或者对象方法toString()</p>
      <h3>转换为数值</h3>
      <p>全局方法 Number() 可把字符串转换为数字。</p>
      <p>parseFloat() 解析字符串并返回浮点数。parseInt() 解析字符串并返回整数。</p>
      <p>一元+运算符把变量转换为数值</p>
      <div class="code">
        var y = "5"; // y 是字符串<br />
        var x = + y; // x 是数字<br />
        <br />
        var y = "Bill"; // y 是字符串<br />
        var x = + y; // x 是数字 (NaN)<br />
      </div>
      <h3>自动类型转换</h3>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>原始值</th>
          <th>转换为数字</th>
          <th>转换为字符串</th>
          <th>转换为逻辑值</th>
        </tr>
        <tr v-for="item in trans">
          <td>{{item.org}}</td>
          <td>{{item.num}}</td>
          <td>{{item.text}}</td>
          <td>{{item.bool}}</td>
        </tr>
      </table>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic5',
  data() {
    return {
      title: 'JavaScript基础--逻辑、比较、条件、类型转换等',
      trans: [{
        org: 'false',
        num: '0',
        text: '"false"',
        bool: 'false'
      }, {
        org: 'true',
        num: '1',
        text: '"true"',
        bool: 'true'
      }, {
        org: '0',
        num: '0',
        text: '"0"',
        bool: 'false'
      }, {
        org: '1',
        num: '1',
        text: '"1"',
        bool: 'true'
      }, {
        org: '"0"',
        num: '0',
        text: '"0"',
        bool: 'true'
      }, {
        org: '"000"',
        num: '0',
        text: '"000"',
        bool: 'true'
      }, {
        org: '"1"',
        num: '1',
        text: '"1"',
        bool: 'true'
      }, {
        org: 'NaN',
        num: 'NaN',
        text: '"NaN"',
        bool: 'false'
      }, {
        org: 'Infinity',
        num: 'Infinity',
        text: '"Infinity"',
        bool: 'true'
      }, {
        org: '-Infinity',
        num: '-Infinity',
        text: '"Infinity"',
        bool: 'true'
      }, {
        org: '""',
        num: '0',
        text: '""',
        bool: 'false'
      }, {
        org: '"20"',
        num: '20',
        text: '"20"',
        bool: 'true'
      }, {
        org: '"twenty"',
        num: 'NaN',
        text: '"twenty"',
        bool: 'true'
      }, {
        org: '[]',
        num: '0',
        text: '""',
        bool: 'true'
      }, {
        org: '[20]',
        num: '20',
        text: '"20"',
        bool: 'true'
      }, {
        org: '[10,20]',
        num: 'NaN',
        text: '"10,20"',
        bool: 'true'
      }, {
        org: '["twenty"]',
        num: 'NaN',
        text: '"twenty"',
        bool: 'true'
      }, {
        org: '["ten","twenty"]',
        num: 'NaN',
        text: '"ten,twenty"',
        bool: 'true'
      }, {
        org: 'function(){}',
        num: 'NaN',
        text: '"function(){}"',
        bool: 'true'
      }, {
        org: '{}',
        num: 'NaN',
        text: '"[object Object]"',
        bool: 'true'
      }, {
        org: 'null',
        num: '0',
        text: '"null"',
        bool: 'false'
      }, {
        org: 'undefined',
        num: 'NaN',
        text: '"undefined"',
        bool: 'false'
      }]
    }
  }
}

</script>
