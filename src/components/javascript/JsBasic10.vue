<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、计时事件</h1>
      <p>通过使用JavaScript，我们有能力做到在一个设定的时间间隔之后来执行代码，而不是在函数被调用后立即执行。我们称之为计时事件。</p>
      <p>在JavaScritp中使用计时事件是很容易的，两个关键的HTML DOM Window对象的方法如下：</p>
      <ul>
        <li>setInterval() - 间隔指定的毫秒数不停地执行指定的代码。</li>
        <li>setTimeout() - 在指定的毫秒数后执行指定代码。</li>
      </ul>
      <h2>setInterval() 方法</h2>
      <p>语法：window.setInterval("javascript function",milliseconds);</p>
      <h2>clearInterval() 方法</h2>
      <p>语法：window.clearInterval(intervalVariable)</p>
      <h2>setTimeout() 方法</h2>
      <p>语法：window.setTimeout("javascript function", milliseconds);</p>
      <h2>clearTimeout() 方法</h2>
      <p>语法：window.clearTimeout(timeoutVariable)</p>
      <h2>实例演示</h2>
      <div class="code">
        <h3>启动循环计时</h3>
        <p>var intervalVar = setInterval(function(){alert("Hello")},3000);</p>
        <button v-on:click="startInterval">点击启动循环计时</button>
        <h3>停止循环计时</h3>
        <p> clearInterval(intervalVar);</p>
        <button v-on:click="cancelInterval">点击取消循环计时</button>
        <h3>启动单次计时</h3>
        <p>var timeoutVar = setTimeout(function(){alert("Hello")},3000);</p>
        <button v-on:click="startTimeout">点击启动单次计时</button>
        <h3>停止单次计时</h3>
        <p> clearTimeout(timeoutVar);</p>
        <button v-on:click="cancelTimeout">点击取消单次计时</button>
      </div>
      <h1>二、弹窗</h1>
      <p>在 JavaScript 中创建三种消息框：警告框、确认框、提示框。</p>
      <div class="code">
        <h2>1、警告框</h2>
        <p>警告框经常用于确保用户可以得到某些信息。当警告框出现后，用户需要点击确定按钮才能继续进行操作。</p>
        <p>语法：window.alert("sometext");</p>
        <button v-on:click="clickAlert">点击弹出警告框</button>
        <h2>2、确认框</h2>
        <p>确认框通常用于验证是否接受用户操作。当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。</p>
        <p>语法：window.confirm("sometext");</p>
        <button v-on:click="clickConfirm">点击弹出确认框</button>
        <h2>3、提示框</h2>
        <p>提示框经常用于提示用户在进入页面前输入某个值。当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。</p>
        <p>语法：window.prompt("sometext","defaultvalue");</p>
        <button v-on:click="clickPrompt">点击弹出提示框</button>
      </div>
      <h1>三、Cookie</h1>
      <p>Cookie 用于存储 web 页面的用户信息。</p>
      <h2>什么是Cookie</h2>
      <p>Cookie是一些数据,存储于你电脑上的文本文件中。当web服务器向浏览器发送web页面时，在连接关闭后，服务端不会记录用户的信息。Cookie的作用就是用于解决 "如何记录客户端的用户信息":</p>
      <ul>
        <li>当用户访问 web 页面时，他的名字可以记录在 cookie 中。</li>
        <li>在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。</li>
      </ul>
      <p>Cookie以名/值对形式存储,key=value</p>
      <h2>使用JavaScript创建Cookie</h2>
      <p>JavaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。</p>
      <div class="code">
        <h4>JavaScript 中，创建 cookie 如下所示：</h4>
        <p>document.cookie="username=John Doe";</p>
        <h4>可以为cookie添加一个过期时间（以UTC或GMT时间）。默认情况下，cookie在浏览器关闭时删除：</h4>
        <p>document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT";</p>
        <h4>可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。</h4>
        <p>document.cookie="username=John Doe; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";</p>
      </div>
      <h2>使用JavaScript读取Cookie</h2>
      <p>document.cookie将以字符串的方式返回所有的cookie，类型格式：cookie1=value; cookie2=value; cookie3=value;</p>
      <h2>使用JavaScript修改Cookie</h2>
      <p>修改cookie类似于创建cookie,直接同名覆盖即可</p>
      <h2>使用JavaScript删除Cookie</h2>
      <p>设置expires参数为以前的时间即可,当您删除时不必指定cookie的值。</p>
      <p>document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";</p>
      <h2>JavaScript Cookie 实例</h2>
      <div class="code">
        <h3>设置Cookie值得函数</h3>
        <p> function setCookie(key,value,expireDay)<br />
          {<br />
          &#160;&#160;var d = new Date();<br />
          &#160;&#160;d.setTime(d.getTime()+(expireDay*24*60*60*1000));<br />
          &#160;&#160;var expires = ";expires="+d.toGMTString();<br />
          &#160;&#160;document.cookie = key + "=" + value + expires;<br />
          }
        </p>
        <h3>获取Cookie值得函数</h3>
        <p>function getCookie(key)<br />
          {<br />
          &#160;&#160;var keyStr = key + "=";<br />
          &#160;&#160;var cookies = document.cookie.split(';');<br />
          &#160;&#160;for(var i=0; i &lt; cookies.length; i++) <br />
          &#160;&#160;{<br />
          &#160;&#160;&#160;&#160;var cookie = cookies[i].trim();<br />
          &#160;&#160;&#160;&#160;if (cookie.indexOf(keyStr)==0) return cookie.substring(keyStr.length,cookie.length);<br />
          &#160;&#160;}<br />
          &#160;&#160;return "";<br />
          }
        </p>
        <h3>操作面板区域</h3>
        <p>当前保存的Cookie信息：{{cookies}}</p>
        <label>请输入KEY：</label>
        <input type="text" name="key" v-model="key">
        <br /> <br />
        <label>请输入Value：</label>
        <input type="text" name="value" v-model="value">
        <br /> <br />
        <label>请输入Expire Day(天)：</label>
        <input type="number" min="0" name="expireDay" v-model="expireDay">
        <br /> <br />
        <button v-on:click="lookCookie">查看Cookie</button>
        <button v-on:click="findCookie">查找Cookie</button>
        <button v-on:click="saveCookie">保存Cookie</button>
        <button v-on:click="deleteCookie">删除Cookie</button>
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
  name: 'JsBasic10',
  data() {
    return {
      title: 'JavaScript基础--计时事件、弹窗提示、Cookie',
      intervalVar: null,
      timeoutVar: null,
      cookies: '',
      key: 'joe',
      value: 'superm',
      expireDay: 1
    }
  },
  methods: {
    startInterval() {
      if (!this.intervalVar) {
        this.intervalVar = setInterval(function() {
          alert('每隔3秒循环提示！');
        }, 3000);
        alert('设置成功！');
      } else {
        alert('任务已经添加，请稍等！');
      }
    },
    cancelInterval() {
      if (this.intervalVar) {
        clearInterval(this.intervalVar);
        this.intervalVar = null;
        alert('取消成功！');
      }
    },
    startTimeout() {
      if (this.timeoutVar) {
        clearTimeout(this.timeoutVar);
      }
      this.timeoutVar = setTimeout(function() {
        alert('单次3秒提示！');
        timeout = null;
      }, 3000);
      alert('设置成功！');
    },
    cancelTimeout() {
      if (this.timeoutVar) {
        clearTimeout(this.timeoutVar);
        this.timeoutVar = null;
        alert('取消成功！');
      }
    },
    clickAlert: function() {
      alert("这是警告框的信息！");
    },
    clickConfirm: function() {
      var result = confirm("这是确认框的信息\n请点击相应的按钮！");
      if (result) {
        alert("你按下了\"确定\"按钮!");
      } else {
        alert("你按下了\"取消\"按钮!");
      }
    },
    clickPrompt: function() {
      var result = prompt("请输入姓名", "默认名称");
      if (result != null && result != "") {
        alert("你输入的内容为：" + result);
      } else {
        alert("你点击了取消按钮！");
      }
    },
    _setCookies(key, value, expireDay) {
      var date = new Date();
      date.setTime(date.getTime() + expireDay * 24 * 60 * 60 * 1000);
      var expires = ";expires=" + date.toGMTString();
      document.cookie = key + "=" + value + expires;
    },
    _getCookie(key) {
      var keyStr = key + "=";
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(keyStr) == 0) {
          return cookie.substring(keyStr.length, cookie.length);
        }
      }
      return "";
    },
    lookCookie: function() {
      this.cookies = document.cookie;
      this.key = '';
      this.value = '';
      this.expireDay = 1;
    },
    saveCookie: function() {
      if (!this.key) {
        alert("请输入Key的内容！");
        return;
      }
      if (!this.value) {
        alert("请输入Value的内容");
        return;
      }
      if (this.expireDay < 0) {
        alert("过期时间不允许为负数");
      }
      this._setCookies(this.key, this.value, this.expireDay);
      this.lookCookie();
      alert("保存成功！");
    },
    deleteCookie: function() {
      if (!this.key) {
        alert("请输入Key的内容！");
        return;
      }
      var value = this._getCookie(this.key);
      if (value == "") {
        alert("待删除的数据不存在！");
        return;
      }
      this._setCookies(this.key, "", 0);
      this.lookCookie();
      alert("删除成功！");
    },
    findCookie: function() {
      if (!this.key) {
        alert("请输入Key的内容！");
        return;
      }
      var value = this._getCookie(this.key);
      if (value != "") {
        alert("查询的Value为：" + value);
      } else {
        alert("对不起，没有找到对应的Value值");
      }
    }

  }
}

</script>
