<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、数值</h1>
      <p>JavaScript 数值始终是64位的浮点数,始终以双精度浮点数来存储。格式用64位存储数值，其中0到51存储数字（片段），52到62存储指数，63位存储符号</p>
      <h3>数字字符串</h3>
      <p>在所有数字运算中，JavaScript会尝试将字符串转换为数字</p>
      <div class="code">
        <p>除法</p>
        <p>
          var x = "100";<br />
          var y = "10";<br />
          var z = x / y; // z 将是 10
        </p>
        <p>乘法</p>
        <p>
          var x = "100";<br />
          var y = "10";<br />
          var z = x * y; // z 将是 1000
        </p>
        <p>减法</p>
        <p>
          var x = "100";<br />
          var y = "10";<br />
          var z = x - y; // z 将是 90
        </p>
        <p><span class="red">加法(特别注意)</span></p>
        <p>
          var x = "100";<br />
          var y = "10";<br />
          var z = x + y; // <b>z 将是 "10010"</b>
        </p>
      </div>
      <h3>NaN-非数值</h3>
      <p>NaN(Not a Number)属于JavaScript保留词，指示某个数不是合法数。</p>
      <p>var x = 100 / "Apple"; // x 将是 NaN（Not a Number）</p>
      <h4>检查是否NaN</h4>
      <p>使用全局JavaScript函数isNaN()来确定某个值是否是数</p>
      <p>var x = 100 / "Apple";<br />isNaN(x); // 返回 true，因为 x 不是数</p>
      <p><span class="red">注意：</span>数学运算中使用了NaN，则结果也将是NaN。NaN是数，typeof NaN返回number</p>
      <h4>Infinity越界值</h4>
      <p>Infinity（-Infinity）是JavaScript在计算数时超出最大可能数范围时返回的值。</p>
      <p>除以0（零）也会生成Infinity：<br />
        var x = 2 / 0; // x 将是 Infinity<br />
        var y = -2 / 0; // y 将是 -Infinity
      </p>
      <p><span class="red">注意：</span>Infinity是数：typeOf Infinity 返回number。</p>
      <h1>二、数值方法(Number)</h1>
      <h3>toString()方法</h3>
      <p>toString() 以字符串返回数值。所有数字方法可用于任意类型的数字（字面量、变量或表达式）</p>
      <div class="code">
        var x = 123;<br />
        x.toString(); // 从变量 x 返回 123<br />
        (123).toString(); // 从文本 123 返回 123<br />
        (100 + 23).toString(); // 从表达式 100 + 23 返回 123<br />
      </div>
      <h3>toExponential()方法</h3>
      <p>toExponential()返回字符串值，它包含已被四舍五入并使用指数计数法的数字</p>
      <div class="code">
        var x = 9.656;<br />
        x.toExponential(2); // 返回 9.66e+0<br />
        x.toExponential(4); // 返回 9.6560e+0<br />
        x.toExponential(6); // 返回 9.656000e+0<br />
      </div>
      <h3>toFixed()方法</h3>
      <p>toFixed() 返回字符串值，它包含了指定位数小数的数字</p>
      <div class="code">
        var x = 9.656;<br />
        x.toFixed(0); // 返回 10<br />
        x.toFixed(2); // 返回 9.66<br />
        x.toFixed(4); // 返回 9.6560<br />
        x.toFixed(6); // 返回 9.656000<br />
      </div>
      <h3>toPrecision()方法</h3>
      <p>toPrecision() 返回字符串值，它包含了指定长度的数字</p>
      <div class="code">
        var x = 9.656;<br />
        x.toPrecision(); // 返回 9.656<br />
        x.toPrecision(2); // 返回 9.7<br />
        x.toPrecision(4); // 返回 9.656<br />
        x.toPrecision(6); // 返回 9.65600<br />
      </div>
      <h3>valueOf()方法</h3>
      <p>valueOf()以数值返回数值</p>
      <div class="code">
        var x = 123;<br />
        x.valueOf(); // 从变量 x 返回 123<br />
        (123).valueOf(); // 从文本 123 返回 123<br />
        (100 + 23).valueOf(); // 从表达式 100 + 23 返回 123<br />
      </div>
      <h3>全局转换数值方法</h3>
      <p>JavaScript全局方法可用于将变量转换为数字：Number()方法、parseInt()方法、parseFloat()方法</p>
      <div class="code">
        <p>Number() 可用于把 JavaScript 变量转换为数值</p>
        x = true;<br />
        Number(x); // 返回 1<br />
        x = false; <br />
        Number(x); // 返回 0<br />
        x = new Date();<br />
        Number(x); // 返回 1404568027739<br />
        Number(new Date("2019-04-15")); // 返回 1506729600000<br />
        x = "10"<br />
        Number(x); // 返回 10<br />
        x = "10 20"<br />
        Number(x); // 返回 NaN<br />
        <p>parseInt()解析一段字符串并返回数值。允许空格。只返回首个数字</p>
        parseInt("10"); // 返回 10<br />
        parseInt("10.33"); // 返回 10<br />
        parseInt("10 20 30"); // 返回 10<br />
        parseInt("10 years"); // 返回 10<br />
        parseInt("years 10"); // 返回 NaN<br />
        <p>parseFloat()解析一段字符串并返回数值。允许空格。只返回首个数字</p>
        parseFloat("10"); // 返回 10<br />
        parseFloat("10.33"); // 返回 10.33<br />
        parseFloat("10 20 30"); // 返回 10<br />
        parseFloat("10 years"); // 返回 10<br />
        parseFloat("years 10"); // 返回 NaN<br />
      </div>
      <p><span class="red">注意：</span>所有JavaScript数据类型都有valueOf()和toString()方法。</p>
      <h3>数值属性</h3>
      <ul>
        <li>MAX_VALUE:返回JavaScript中可能的最大数。</li>
        <li>MIN_VALUE:返回 JavaScript 中可能的最小数。</li>
        <li>NEGATIVE_INFINITY:表示负的无穷大（溢出返回）。</li>
        <li>POSITIVE_INFINITY:表示无穷大（溢出返回）。</li>
        <li>NaN:表示非数字值（"Not-a-Number"）。</li>
      </ul>
      <h1>三、数组与方法</h1>
      <p>数组用于在单一变量中存储多个值，通过中括号生成，语法：var array-name = [item1, item2, ...];</p>
      <p>通过new关键字创建数组，var array-name = new Array(item1, item2,....);</p>
      <p>通过索引值（下标）访问数据元素，通过数组名访问整个数组，同时数组是对象，typeof array的结果是Object</p>
      <h3>数组属性和方法</h3>
      <h4>length属性</h4>
      <p>返回数组的长度</p>
      <h4>添加数组元素</h4>
      <p>推荐使用<b>push()</b>方法增加元素，同时也可以通过<b>array[array.length] = newItem</b>.</p>
      <p><span class="red">注意：</span>避免使用new Array()的方式，而是推荐使用中括号[]。</p>
      <h4>如何判断变量是数组</h4>
      <p>1、通过Array.isArray()方法，放回true就是数组</p>
      <p>2、通过自定义函数，array.constructor.toString().indexOf("Array") > -1;</p>
      <p>3、通过array instanceof Array返回true来判断</p>
      <h2>数组基础方法</h2>
      <h3>把数组转换为字符串,toString()</h3>
      <p>toString()把数组转换为数组值（逗号分隔）的字符串。</p>
      <p>join()方法也可将所有数组元素结合为一个字符串。还可以指定分隔符，join(" * ")</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.toString();//最终结果：Banana,Orange,Apple,Mango<br />
        fruits.join();//最终结果：Banana,Orange,Apple,Mango<br />
        fruits.join(" * ");//最终结果：Banana * Orange * Apple * Mango<br />
      </div>
      <h3>尾部增加删除元素，pop()和push()</h3>
      <p>pop()方法从数组中删除最后一个元素,同时将之返回</p>
      <p>push()方法（在数组结尾处）向数组添加一个新的元素,同时返回数组的长度</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        var x = fruits.pop(); // x 的值是 "Mango"<br />
        <br />
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        var x = fruits.push("Kiwi"); // 向fruits添加一个新元素,返回最终长度5<br />
      </div>
      <h3>头部增加删除(位移)元素，shift()和unshift()</h3>
      <p>shift()方法会删除首个数组元素，同时将之返回并把所有其他元素“位移”到更低的索引。</p>
      <p>unshift()方法（在开头）向数组添加新元素，返回新数组的长度,并“反向位移”旧元素</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.shift(); // 返回 "Banana"<br />
        <br />
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.unshift("Lemon"); //向fruits添加新元素"Lemon",返回最终长度5<br />
      </div>
      <h3>更改元素，通过中括号+下标访问元素</h3>
      <p>通过使用它们的索引号来访问数组元素,array[0] = item, var x = array[1]</p>
      <h3>删除元素,delete()</h3>
      <p>使用delete会在数组留下未定义(undefined)的空洞，即不改变数组长度。请使用pop()或shift()取而代之。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        delete(fruits[0]); // 把 fruits 中的首个元素改为 undefined<br />
      </div>
      <h3>拼接数组，splice()</h3>
      <p>splice(insertIndex,deleteCount,items...)方法可用于向数组添加新项,同时返回被删除的元素数组，第一个参数定义了应添加新元素的位置（拼接）,第二个参数定义应删除多少元素,其余参数定义要添加的新元素。</p>
      <p>使用splice()来删除元素，splice(0,1)=>删除第一个元素。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.splice(2, 0, "Lemon", "Kiwi");//结果：["Banana", "Orange","Lemon", "Kiwi", "Apple", "Mango"]<br />
        <br />
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.splice(2, 2, "Lemon", "Kiwi");//结果：["Banana", "Orange", "Lemon", "Kiwi"]<br />
      </div>
      <h3>合并(连接)数组,concat()</h3>
      <p>concat(arr1,arr2,...)方法通过合并（连接）现有数组来创建一个新数组,该方法不会更改现有数组，而是返回一个新数组。concat()可以使用任意数量的数组参数</p>
      <div class="code">
        var myGirls = ["Cecilie", "Lone"];<br />
        var myBoys = ["Emil", "Tobias", "Linus"];<br />
        var myChildren = myGirls.concat(myBoys); // 连接 myGirls 和 myBoys<br />
        <br />
        //连接多个数组<br />
        var arr1 = ["Cecilie", "Lone"];<br />
        var arr2 = ["Emil", "Tobias", "Linus"];<br />
        var arr3 = ["Robin", "Morgan"];<br />
        var myChildren = arr1.concat(arr2, arr3); // 将arr1、arr2 与 arr3 连接在一起<br />
      </div>
      <h3>裁剪数组，slice()</h3>
      <p>slice()方法用数组的某个片段切出新数组。第一个参数是开始位置，第二个参数结束位置(可省略，不包含)，不改变源数组。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];<br />
        var citrus = fruits.slice(3); //["Apple", "Mango"]<br />
        <br />
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];<br />
        var citrus = fruits.slice(1, 3);//结果为["Orange", "Lemon"] <br />
      </div>
      <h3>自动toString()</h3>
      <p>如果需要原始值，则JavaScript会自动把数组转换为字符串。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"]; <br />
        //结果都是一样的
        var result = "rsult : " + fruits.toString(); <br />
        var result = "rsult : " + fruits; <br />
      </div>
      <h2>数组排序方法</h2>
      <h3>数组排序，sort()</h3>
      <p>sort()方法以字母顺序对数组进行排序，改变原始内容，同时返回最新结果</p>
      <p>sort()对数值排序，提供排序函数：sort(function(a, b){xxx})</p>
      <p>当sort()函数比较两个值时，会将值发送到比较函数，并根据所返回的值（负、零或正值）对这些值进行排序。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.sort(); // 对fruits中的元素进行排序,将直接改变数组内容<br />
        <br />
        var points = [40, 100, 1, 5, 25, 10];<br />
        points.sort(function(a, b){return a - b});//最终结果：[1,5,10,25,40,100]<br />
      </div>
      <h3>反转数组，reverse()</h3>
      <p>reverse()方法反转数组中的元素。</p>
      <div class="code">
        var fruits = ["Banana", "Orange", "Apple", "Mango"];<br />
        fruits.sort(); // 对fruits中的元素进行排序<br />
        fruits.reverse(); // 反转元素顺序,最终结果：["Orange","Mango","Banana","Apple"]<br />
      </div>
      <h3>数组的最大值和最小值</h3>
      <p>使用Math.max.apply(null, array)来查找数组中的最高值</p>
      <p>使用Math.min.apply(null, array)来查找数组中的最低值</p>
      <div class="code">
        var points = [40, 100, 1, 5, 25, 10];<br />
        Math.max.apply(null, points);//结果：100<br />
        Math.min.apply(null, points);//结果：1<br />
      </div>
      <h2>数组迭代方法</h2>
      <h3>Array.forEach(function(value, index,array))迭代方法</h3>
      <p>forEach()方法为每个数组元素调用一次函数（回调函数）。回调函数三个参数分别是条目值，索引值(可省略)，数组本身(可省略)</p>
      <div class="code">
        var txt = "";<br />
        var numbers = [45, 4, 9, 16, 25];<br />
        <b>numbers.forEach(myFunction);</b><br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160;txt = txt + value + " "; <br />
        }<br />
        //可以只使用Value<br />
        function myFunction(value) {<br />
        &#160;&#160;txt = txt + value + " "; <br />
        }<br />
      </div>
      <h3>Array.map(function(value, index, array))</h3>
      <p>map()方法通过对每个数组元素执行函数来创建新数组。map()方法不会对没有值的数组元素执行函数。map()方法不会更改原始数组。</p>
      <div class="code">
        var numbers1 = [45, 4, 9, 16, 25];<br />
        var numbers2 = numbers1.map(myFunction);//最终numbers2的结果：[90,8,18,32,50]<br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160;return value * 2;<br />
        }<br />
        <br />
        function myFunction(value) {<br />
        &#160;&#160;return value * 2;<br />
        }<br />
      </div>
      <h3>Array.filter(function(value, index, array))</h3>
      <p>filter()方法创建一个包含通过测试的数组元素的新数组。</p>
      <div class="code">
        var numbers = [45, 4, 9, 16, 25];<br />
        var over18 = numbers.filter(myFunction);//结果：[45,25]<br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160;return value > 18;<br />
        }<br />
      </div>
      <h3>Array.reduce[Right](total, value, index, array)</h3>
      <p>reduce()方法在每个数组元素上运行函数，以生成（减少它）单个值,数组中从左到右工作,方法不会减少原始数组</p>
      <p>reduceRight()方法在每个数组元素上运行函数，以生成（减少它）单个值,数组中右从到左工作,方法不会减少原始数组</p>
      <p>reduce()方法能够接受一个初始值：reduce(func, 100)</p>
      <div class="code">
        //将所有元素求和<br />
        var numbers1 = [45, 4, 9, 16, 25];<br />
        var sum = numbers1.reduce(myFunction);//结果：99<br />
        var sum = numbers1.reduce(myFunction, 100);//结果：199<br />
        var sum = numbers1.reduceRight(myFunction);//结果：99<br />
        var sum = numbers1.reduceRight(myFunction, 100);//结果：199<br />
        <br />
        function myFunction(total, value, index, array) {<br />
        &#160;&#160;return total + value;<br />
        }<br />
        function myFunction(total, value) {<br />
        &#160;&#160;return total + value;<br />
        }<br />
      </div>
      <h3>Array.every(function(value, index, array))</h3>
      <p>every()方法检查所有数组值是否通过测试。</p>
      <div class="code">
        var numbers = [45, 4, 9, 16, 25];<br />
        var allOver18 = numbers.every(myFunction);//结果为false<br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160; return value > 18;<br />
        }<br />
        <br />
        function myFunction(value) {<br />
        &#160;&#160;return value > 18;<br />
        }<br />
      </div>
      <h3>Array.some(function(value, index, array))</h3>
      <p>some()方法方法检查某些数组值是否通过了测试。</p>
      <div class="code">
        var numbers = [45, 4, 9, 16, 25];<br />
        var allOver18 = numbers.some(myFunction);//结果为true<br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160; return value > 18;<br />
        }<br />
        <br />
        function myFunction(value) {<br />
        &#160;&#160;return value > 18;<br />
        }<br />
      </div>
      <h3>Array.[last]indexOf(item, start)</h3>
      <p>indexOf()方法在数组中搜索元素值并返回其位置。</p>
      <div class="code">
        var fruits = ["Apple", "Orange", "Apple", "Mango"];<br />
        var a = fruits.indexOf("Apple");//结果为0<br />
        var b = fruits.indexOf("Apple",1);//结果为2<br />
        var c = fruits.lastIndexOf("Apple")//结果为2;
      </div>
      <h3>Array.find[Index](function(value, index, array))</h3>
      <p>find()方法返回通过测试函数的第一个数组元素的值。</p>
      <p>findIndex()方法返回通过测试函数的第一个数组元素的索引。</p>
      <div class="code">
        var numbers = [4, 9, 16, 25, 29];<br />
        var first = numbers.find(myFunction);//结果是25<br />
        var first = numbers.findIndex(myFunction);//结果是3<br />
        <br />
        function myFunction(value, index, array) {<br />
        &#160;&#160;&#160;&#160;return value > 18;<br />
        }<br />
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
  name: 'JsBasic3',
  data() {
    return {
      title: 'JavaScript基础--数字，数组与方法',
    }
  }
}

</script>
