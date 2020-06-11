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
      title: 'JavaScript基础--计时事件、弹窗提示',
      intervalVar: null,
      timeoutVar: null,
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
    }
  }
}

</script>
