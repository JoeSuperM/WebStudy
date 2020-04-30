<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、日期基础</h1>
      <h2>创建Date对象</h2>
      <p>4种方法创建新的日期对象：</p>
      <ul>
        <li>new Date()</li>
        <li>new Date(year, month, day, hours, minutes, seconds, milliseconds)</li>
        <li>new Date(milliseconds)</li>
        <li>new Date(date string)</li>
      </ul>
      <h3>new Date(),当前日期和时间</h3>
      <p>new Date()的结果：Thu Apr 30 2020 11:07:12 GMT+0800 (中国标准时间)</p>
      <h3>new Date(year,month,...),指定日期和时间</h3>
      <p>7个数字分别指定年、月、日、小时、分钟、秒和毫秒（按此顺序）,年和月是必须的。</p>
      <p><span class="red">注意：</span>月份值是从0开始，到11来表示1到12月.一位和两位数的年份将被解释为19xx年</p>
      <p>var d = new Date(99, 11, 24);日期：Fri Dec 24 1999 00:00:00 GMT+0800 (中国标准时间)</p>
      <p>var d = new Date(9, 12, 25); 日期：Tue Jan 25 1910 00:00:00 GMT+0800 (中国标准时间)</p>
      <h3>new Date(dataString),日期字符串</h3>
      <p>根据指定的日期格式来创建一个日期</p>
      <h3>new Date(milliseconds),指定毫秒数</h3>
      <p>JavaScript将日期存储为自1970年1月1日 00:00:00 UTC（协调世界时）以来的毫秒数。</p>
      <h2>日期方法</h2>
      <p>期方法允许您使用本地时间或UTC通用或GMT）时间来获取和设置日期对象的年、月、日、小时、分钟、秒和毫秒。</p>
      <h3>显示日期</h3>
      <p>默认输出，toString()方法的结果：Thu Apr 30 2020 11:17:47 GMT+0800 (中国标准时间)</p>
      <p>转换为UTC字符串，toUTCString()方法的结果：Thu, 30 Apr 2020 03:17:58 GMT</p>
      <p>易读字符串，toDateString()方法的结果：Thu Apr 30 2020</p>
      <h1>二、日期格式化</h1>
      <dl>
        <dt>YYYY</dt>
        <dd>四位的年份，如2020</dd>
        <dt>MM</dt>
        <dd>两位的月份，如08,12</dd>
        <dt>DD</dt>
        <dd>两位的日期，如30,05</dd>
        <dt>HH</dt>
        <dd>两位的小时数，如21,08</dd>
        <dt>MM</dt>
        <dd>两位的分钟数，如35,09</dd>
        <dt>SS</dt>
        <dd>两位的秒数，如45</dd>
      </dl>
      <p><span class="red">注意：</span>日期和时间通过大写字母T来分隔。UTC时间通过大写字母Z来定义。</p>
      <div class="code">
        var d = new Date("2019-05-02");<br />
        //结果：Thu May 02 2019 08:00:00 GMT+0800 (中国标准时间) <br />
        <br />
        var d = new Date("2019-05"); <br />
        //结果：Wed May 01 2019 08:00:00 GMT+0800 (中国标准时间) <br />
        <br />
        var d = new Date("2019"); <br />
        //结果：Tue Jan 01 2019 08:00:00 GMT+0800 (中国标准时间) <br />
        <br />
        var d = new Date("2019-05-02T12:00:00Z"); <br />
        //结果：Thu May 02 2019 20:00:00 GMT+0800 (中国标准时间) <br />
        <br />
        var d = new Date("2015-03-25T12:00:00-06:00");//通过加+HH：MM或减 -HH：MM时间来修改相对于UTC的时间。<br />
        //结果：Thu Mar 26 2015 02:00:00 GMT+0800 (中国标准时间)<br />
        <br />
        var d = new Date("05/26/2019");<br />
        //结果：Sun May 26 2019 00:00:00 GMT+0800 (中国标准时间)<br />
        <br />
        var d = new Date("Mar 26 2019");<br />
        //结果：Tue Mar 26 2019 00:00:00 GMT+0800 (中国标准时间)<br />
      </div>
      <h1>三、获取日期方法</h1>
      <h3>日期获取方法</h3>
      <table border="1" cellpadding="5" cellspacing="0" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>方法</th>
          <th>描述</th>
        </tr>
        <tr v-for="method in getMethods">
          <td>{{method.method}}</td>
          <td>{{method.desc}}</td>
        </tr>
      </table>
      <h3>UTC日期方法</h3>
      <table border="1" cellpadding="5" cellspacing="0" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>方法</th>
          <th>描述</th>
        </tr>
        <tr v-for="method in utcMethods">
          <td>{{method.method}}</td>
          <td>{{method.desc}}</td>
        </tr>
      </table>
      <h1>四、设置日期方法</h1>
      <h3>日期设置方法</h3>
      <table border="1" cellpadding="5" cellspacing="0" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>方法</th>
          <th>描述</th>
        </tr>
        <tr v-for="method in setMethods">
          <td>{{method.method}}</td>
          <td>{{method.desc}}</td>
        </tr>
      </table>
      <h1>五、Math数学方法</h1>
      <h3>Math.round()</h3>
      <p>Math.round(x)的返回值是x四舍五入为最接近的整数</p>
      <h3>Math.pow()</h3>
      <p>Math.pow(x, y)的返回值是x的y次幂</p>
      <h3>Math.sqrt()</h3>
      <p>Math.sqrt(x)返回x的平方根</p>
      <h3>Math.abs()</h3>
      <p>Math.abs(x) 返回 x 的绝对（正）值</p>
      <h3>Math.ceil()</h3>
      <p>Math.ceil(x) 的返回值是 x 上舍入最接近的整数</p>
      <h3>Math.floor()</h3>
      <p>Math.floor(x) 的返回值是 x 下舍入最接近的整数</p>
      <h3>Math.sin()</h3>
      <p>Math.sin(x)返回角x以弧度计的正弦（介于 -1 与 1 之间的值）。</p>
      <h3>Math.cos()</h3>
      <p>Math.cos(x) 返回角 x（以弧度计）的余弦（介于 -1 与 1 之间的值）。</p>
      <h3>Math.min()和Math.max()</h3>
      <p>Math.min() 和 Math.max() 可用于查找参数列表中的最低或最高值</p>
      <h3>Math.random()</h3>
      <p>Math.random() 返回介于 0（包括） 与 1（不包括） 之间的随机数</p>
      <h3>Math常量</h3>
      <ul>
        <li>Math.E // 返回欧拉指数（Euler's number）</li>
        <li>Math.PI // 返回圆周率（PI）</li>
        <li>Math.SQRT2 // 返回 2 的平方根</li>
        <li>Math.SQRT1_2 // 返回 1/2 的平方根</li>
        <li>Math.LN2 // 返回 2 的自然对数</li>
        <li>Math.LN10 // 返回 10 的自然对数</li>
        <li>Math.LOG2E // 返回以 2 为底的 e 的对数（约等于 1.414）</li>
        <li>Math.LOG10E // 返回以 10 为底的 e 的对数（约等于0.434）</li>
      </ul>
      <h1>六、随机数的生成</h1>
      <h3>Math.random()</h3>
      <p>Math.random() 返回 0（包括） 至 1（不包括） 之间的随机数</p>
      <h3>JavaScript随机整数</h3>
      <p>Math.random()与Math.floor()一起使用用于返回随机整数。</p>
      <p>Math.floor(Math.random() * 10); // 返回 0 至 9 之间的数<br />
        Math.floor(Math.random() * 101); // 返回 0 至 100 之间的数</p>
      <h3>指定范围的随机数</h3>
      <p>返回介于 min（包括）和 max（不包括）之间的随机数：</p>
      <p>Math.floor(Math.random() * (max - min) ) + min;</p>
      <p>返回介于 min 和 max（都包括）之间的随机数：</p>
      <p>Math.floor(Math.random() * (max - min + 1) ) + min;</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'JsBasic4',
  data() {
    return {
      title: 'JavaScript基础--日期格式、获取与设置、Math等',
      getMethods: [{
        method: 'getDate()',
        desc: '以数值返回天（1-31）'
      }, {
        method: 'getDay()',
        desc: '以数值获取周名（0-6）'
      }, {
        method: 'getFullYear()',
        desc: '获取四位的年（yyyy）'
      }, {
        method: 'getHours()',
        desc: '获取小时（0-23）'
      }, {
        method: 'getMilliseconds()',
        desc: '获取毫秒（0-999）'
      }, {
        method: 'getMinutes()',
        desc: '获取分（0-59）'
      }, {
        method: 'getMonth()',
        desc: '获取月（0-11）'
      }, {
        method: 'getSeconds()',
        desc: '获取秒（0-59）'
      }, {
        method: 'getTime()',
        desc: '获取时间（从1970年1月1日至今的毫秒数）'
      }],
      utcMethods: [{
        method: 'getUTCDate()',
        desc: '以数值返回UTC天（1-31）'
      }, {
        method: 'getUTCDay()',
        desc: '以数值获取UTC周名（0-6）'
      }, {
        method: 'getUTCFullYear()',
        desc: '获取四位的UTC年（yyyy）'
      }, {
        method: 'getUTCHours()',
        desc: '获取UTC小时（0-23）'
      }, {
        method: 'getUTCMilliseconds()',
        desc: '获取UTC毫秒（0-999）'
      }, {
        method: 'getUTCMinutes()',
        desc: '获取UTC分（0-59）'
      }, {
        method: 'getUTCMonth()',
        desc: '获取UTC月（0-11）'
      }, {
        method: 'getUTCSeconds()',
        desc: '获取UTC秒（0-59）'
      }],
      setMethods: [{
        method: 'setDate()',
        desc: '以数值（1-31）设置日'
      }, {
        method: 'setFullYear()',
        desc: '设置年（可选月和日）'
      }, {
        method: 'setHours()',
        desc: '设置小时（0-23）'
      }, {
        method: 'setMilliseconds()',
        desc: '设置毫秒（0-999）'
      }, {
        method: 'stMinutes()',
        desc: '设置分（0-59）'
      }, {
        method: 'setMonth()',
        desc: '设置月（0-11）'
      }, {
        method: 'setSeconds()',
        desc: '设置秒（0-59）'
      }, {
        method: 'setTime()',
        desc: '设置时间（从1970年1月1日至今的毫秒数）'
      }]
    }
  }
}

</script>
