<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、JSON</h1>
      <p>JSON 是用于存储和传输数据的格式。JSON 通常用于服务端向网页传递数据 。</p>
      <h2>JSON字符串转换为JavaScript对象--parse()</h2>
      <h3>语法：JSON.parse(text[, reviver])</h3>
      <p>text:必需， 一个有效的 JSON 字符串。<br />
        reviver: 可选，一个转换结果的函数， 将为对象的每个成员调用此函数。</p>
      <p><span class="red">注意：</span>reviver函数的参数为key和value,执行完成的标志为key===''，只能返回value，其他情况可以返回处理后的value。</p>
      <div class="code">
        JSON.parse('{"k1":1,"k2":2}', function(k,v){<br />
        &#160;&#160;if(k === ''){ return v; }<br />
        &#160;&#160;return v*2;<br />
        })<br />
        <pre>内容：<br/>{{json}}</pre>
        <button @click="parseJson">点击解析parseJSON</button>
      </div>
      <h2>JavaScript对象转换为JSON字符串--stringify()</h2>
      <h3>语法：JSON.stringify(value[, replacer[, space]])</h3>
      <p>value:必需， 要转换的 JavaScript 值（通常为对象或数组）。<br />
        replacer:可选。用于转换结果的函数或数组。如果 replacer 为函数，则 JSON.stringify 将调用该函数，并传入每个成员的键和值。使用返回值而不是原始值。如果此函数返回undefined，则排除成员。根对象的键是一个空字符串：""。如果replacer是一个数组，则仅转换该数组中具有键值的成员。成员的转换顺序与键在数组中的顺序一样。<br />
        space:可选，文本添加缩进、空格和换行符，如果space是一个数字，则返回值文本在每个级别缩进指定数目的空格，如果 space 大于 10，则文本缩进 10 个空格。space 也可以使用非数字，如：\t。
      </p>
      <p><span class="red">注意：</span>replacer函数的参数为key和value,执行完成的标志为key===''，只能返回value，其他情况可以返回处理后的value。</p>
      <div class="code">
        <p>var str = {"name":"JoeSuperM", "site":"http://www.joesuperm.com", "age":27}</p>
        <pre>只有一个参数情况：<br/>{{textNone}}</pre>
        <button @click="noneStringify">默认stringify函数</button>
        <pre>使用replacer参数(Function)情况：<br/>{{textReplacerFun}}</pre>
        <button @click="replacerFunStringify">Replacer参数(Function)的stringify函数</button>
        <pre>使用replacer参数(Array)情况：<br/>{{textReplacerArr}}</pre>
        <button @click="replacerArrStringify">Replacer参数(Array)的stringify函数</button>
        <pre>使用space参数(Number)情况：<br/>{{textSpaceNum}}</pre>
        <button @click="spaceNumStringify">space参数(Num)的stringify函数</button>
        <pre>使用space参数(Char)情况：<br/>{{textSpaceChar}}</pre>
        <button @click="spaceCharStringify">space参数(Char)的stringify函数</button>
      </div>
      <h1>二、void关键字</h1>
      <p>javascript:void(0)中最关键的是void关键字，void是JavaScript中非常重要的关键字，该操作符指定要计算一个表达式但是不返回值。</p>
      <div class="code">
        void func()<br />
        javascript:void func()<br />
        <br />
        或者<br />
        <br />
        void(func())<br />
        javascript:void(func())<br />
        <h4>当用户链接时，void(0)计算为 0，但 Javascript上没有任何效果。以下点击链接后弹出警告对话框</h4>
        &#60;a target="_self" href="javascript:void(alert('Warning!!!'))"&#62;点我!&#60;/a&#62;<br />
        <a target="_self" href="javascript:void(alert('Warning!!!'))">点我!</a>
        <h3>href="#"与href="javascript:void(0)"的区别</h3>
        <p># 包含了一个位置信息，默认的锚是#top 也就是网页的上端。而javascript:void(0), 仅仅表示一个死链接。</p>
        <a target="_self" href="javascript:void(0);">点我没有反应的!</a>
        <br />
        <a target="_self" href="#">点我定位到顶部位置!</a>
      </div>
      <h1>三、JavaScript代码规范</h1>
      <h3>1、变量名（推荐使用驼峰法来命名(camelCase)）</h3>
      <p>firstName = "John";<br />lastName = "Doe";</p>
      <h3>2、空格与运算符（运算符 ( = + - * / ) 前后需要添加空格）</h3>
      <p>var x = y + z;</p>
      <h3>3、代码缩进（使用4个空格符号来缩进代码块）</h3>
      <p>function toCelsius(fahrenheit) {<br />
        &#160;&#160;&#160;&#160;return (5 / 9) * (fahrenheit - 32);<br />
        }</p>
      <h3>4、语句规则</h3>
      <p>一条语句通常以分号作为结束符。<br />
        将左花括号放在第一行的结尾。<br />
        左花括号前添加一空格。<br />
        将右花括号独立放在一行。<br />
        不要以分号结束一个复杂的声明。</p>
      <h3>对象规则</h3>
      <p>将左花括号与类名放在同一行。<br />
        冒号与属性值间有个空格。<br />
        字符串使用双引号，数字不需要。<br />
        最后一个属性-值对后面不要添加逗号。<br />
        将右花括号独立放在一行，并以分号作为结束符号。</p>
      <h3>5、每行代码字符小于80</h3>
      <p>如果一个JavaScript语句超过了80个字符，建议在 运算符或者逗号后换行。</p>
      <h3>6、命名规则</h3>
      <p>变量和函数为小驼峰法标识, 即除第一个单词之外，其他单词首字母大写（ lowerCamelCase）<br />
        全局变量为大写 (UPPERCASE )<br />
        常量 (如 PI) 为大写 (UPPERCASE )</p>
      <h3>7、HTML载入外部JavaScript文件</h3>
      <p>使用简洁的格式载入JavaScript文件 (type属性不是必须的)</p>
      <h3>8、使用JavaScript访问HTML元素</h3>
      <p>注意大小写，否则可能出现未知的结果</p>
      <h3>9、文件扩展名</h3>
      <p>HTML 文件后缀可以是 .html (或 .htm)。<br />
        CSS 文件后缀是 .css 。<br />
        JavaScript 文件后缀是 .js 。</p>
      <h3>10、使用小写文件名</h3>
      <p>大多 Web 服务器 (Apache, Unix) 对大小写敏感： london.jpg 不能通过 London.jpg 访问。<br />
        其他 Web 服务器 (Microsoft, IIS) 对大小写不敏感： london.jpg 可以通过 London.jpg 或 london.jpg 访问。<br />
        你必须保持统一的风格，我们建议统一使用小写的文件名。</p>
      <h1>三、Input的验证API</h1>
      <div class="code">
        <h3>约束验证 DOM 方法</h3>
        <dl>
          <dt>checkValidity()</dt>
          <dd>如果 input 元素中的数据是合法的返回 true，否则返回 false。</dd>
          <dt>setCustomValidity()</dt>
          <dd>设置 input 元素的 validationMessage 属性，用于自定义错误提示信息的方法。<br />
            使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false。如果要重新判断需要取消自定义提示，方式如下：setCustomValidity('')、setCustomValidity(null)、setCustomValidity(undefined)</dd>
        </dl>
        <h3>约束验证 DOM 属性</h3>
        <dl>
          <dt>validity</dt>
          <dd>布尔属性值，返回 input 输入值是否合法</dd>
          <dt>validationMessage</dt>
          <dd>浏览器错误提示信息</dd>
          <dt>willValidate</dt>
          <dd>指定 input 是否需要验证</dd>
        </dl>
        <h3>Validity 属性</h3>
        <dl>
          <dt>customError</dt>
          <dd>设置为 true, 如果设置了自定义的 validity 信息。</dd>
          <dt>patternMismatch</dt>
          <dd>设置为 true, 如果元素的值不匹配它的模式属性。</dd>
          <dt>rangeOverflow</dt>
          <dd>设置为 true, 如果元素的值大于设置的最大值。</dd>
          <dt>rangeUnderflow</dt>
          <dd>设置为 true, 如果元素的值小于它的最小值。</dd>
          <dt>stepMismatch</dt>
          <dd>设置为 true, 如果元素的值不是按照规定的 step 属性设置。</dd>
          <dt>tooLong</dt>
          <dd>设置为 true, 如果元素的值超过了 maxLength 属性设置的长度。</dd>
          <dt>typeMismatch</dt>
          <dd>设置为 true, 如果元素的值不是预期相匹配的类型。</dd>
          <dt>valueMissing</dt>
          <dd>设置为 true，如果元素 (required 属性) 没有值。</dd>
          <dt>valid</dt>
          <dd>设置为 true，如果元素的值是合法的。</dd>
        </dl>
      </div>
      <h2>验证实例</h2>
      <div class="code">
        <p>var inpObj1 = document.getElementById("id1");</p>
        <p>inpObj1.checkValidity()<br />inpObj1.validity.rangeOverflow<br />
          inpObj1.value<br />inpObj1.setCustomValidity(''); // 取消自定义提示的方式
        </p>
        <br />
        <label>请输入数字【100,200】：</label>
        <input type="number" width="200px" min="100" max="200" id="id1">
        <button v-on:click="checkValidity1">验证</button>
        <br />
        <label>请输入数字【100,200】：</label>
        <input type="number" name="value" min="100" max="200" id="id2">
        <button v-on:click="checkValidity2">验证</button>
        <br />
        <label>请输入数字【100,~】：</label>
        <input type="number" name="value" min="100" id="id3">
        <button v-on:click="checkValidity3">验证</button>
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
  name: 'JsBasic8',
  data() {
    return {
      title: 'JavaScript基础--Json、void、验证API和代码规范等',
      json: '',
      textNone: '',
      textReplacerFun: '',
      textReplacerArr: '',
      textSpaceNum: '',
      textSpaceChar: ''
    }
  },
  methods: {
    parseJson: function() {
      var jsonText = '{"k1":1,"k2":2}';
      var jsonObj = JSON.parse(jsonText, function(k, v) {
        console.log("key = " + k + ", value = " + v);
        if (k === '') { //最后一项
          return v;
        }
        return v * 2;
      });
      //反向解析对象为字符串
      this.json = JSON.stringify(jsonObj, null, 4);
    },
    noneStringify: function() {
      var str = { "name": "JoeSuperM", "site": "http://www.joesuperm.com", "age": 27 };
      this.textNone = JSON.stringify(str);
    },
    replacerFunStringify: function() {
      var str = { "name": "JoeSuperM", "site": "http://www.joesuperm.com", "age": 27 };
      this.textReplacerFun = JSON.stringify(str, function(k, v) {
        console.log('key=' + k + ',value=' + v);
        if (k === '') {
          return v;
        } else if (k === 'age') {
          return undefined;
        }
        return '【' + v + '】';
      });
    },
    replacerArrStringify: function() {
      var str = { "name": "JoeSuperM", "site": "http://www.joesuperm.com", "age": 27 };
      var array = ['site', 'age'];
      this.textReplacerArr = JSON.stringify(str, array);
    },
    spaceNumStringify: function() {
      var str = { "name": "JoeSuperM", "site": "http://www.joesuperm.com", "age": 27 };
      this.textSpaceNum = JSON.stringify(str, null, 4);
    },
    spaceCharStringify: function() {
      var str = { "name": "JoeSuperM", "site": "http://www.joesuperm.com", "age": 27 };

      this.textSpaceChar = JSON.stringify(str, null, '\t');
    },
    checkValidity1: function() {
      var inpObj1 = document.getElementById("id1");
      if (!inpObj1.checkValidity()) {
        alert("验证失败：" + inpObj1.validationMessage);
      } else {
        alert("验证成功！");
      }
    },
    checkValidity2: function() {
      var inpObj2 = document.getElementById("id2");
      console.log(inpObj2.validity);
      if (inpObj2.validity.rangeOverflow) {
        alert("验证失败：输入的值太大");
      } else if (inpObj2.validity.rangeUnderflow) {
        alert("验证失败：输入的值太小");
      } else if (inpObj2.validity.tooLong) {
        alert("验证失败：输入的值超过最大长度");
      } else if (inpObj2.validity.typeMismatch || inpObj2.validity.badInput) {
        alert("验证失败：输入的值不是预期相匹配的类型");
      } else {
        alert("验证成功！");
      }

    },
    checkValidity3: function() {
      var inpObj3 = document.getElementById("id3");
      console.log(inpObj3.validity);
      if (!this.isNumeric(inpObj3.value)) {
        alert("验证失败：请输入数字");
      } else if (inpObj3.validity.rangeUnderflow) {
        alert("验证失败：输入的值太小");
      } else {
        alert("验证成功！");
      }
    },
    isNumeric(n) { //判断输入是否为数字
      return !isNaN(parseFloat(n)) && isFinite(n);
    }
  }
}

</script>
