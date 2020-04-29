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
      title: 'JavaScript基础--数字，数组，日期等',
    }
  }
}

</script>
