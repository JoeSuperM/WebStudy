<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、Window对象</h1>
      <h3>1、Window对象</h3>
      <ul>
        <li>所有浏览器都支持 window 对象。它表示浏览器窗口。</li>
        <li>所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。</li>
        <li>全局变量是 window 对象的属性。</li>
        <li>全局函数是 window 对象的方法。</li>
        <li>甚至HTML DOM的document也是 window 对象的属性之一</li>
      </ul>
      <h3>2、Window尺寸</h3>
      <p>有三种方法能够确定浏览器窗口的尺寸。</p>
      <h4>对于Internet Explorer、Chrome、Firefox、Opera 以及 Safari：</h4>
      <ul>
        <li>window.innerHeight - 浏览器窗口的内部高度(包括滚动条)</li>
        <li>window.innerWidth - 浏览器窗口的内部宽度(包括滚动条)</li>
      </ul>
      <h4>对于 Internet Explorer 8、7、6、5：</h4>
      <ul>
        <li>document.documentElement.clientHeight</li>
        <li>document.documentElement.clientWidth</li>
        <p>或者</p>
        <li>document.body.clientHeight</li>
        <li>document.body.clientWidth</li>
      </ul>
      <h4>实用的 JavaScript 方案（涵盖所有浏览器）：</h4>
      <div class="code">
        var w=window.innerWidth<br />
        &#160;&#160;|| document.documentElement.clientWidth<br />
        &#160;&#160;|| document.body.clientWidth;<br />
        <br />
        var h=window.innerHeight<br />
        &#160;&#160;|| document.documentElement.clientHeight<br />
        &#160;&#160;|| document.body.clientHeight;<br />
        <br />
        <button v-on:click="getBrowserHW">点击获取屏幕宽高</button>
        <p>{{browserHW}}</p>
      </div>
      <h3>3、其他Window方法</h3>
      <ul>
        <li>window.open() - 打开新窗口</li>
        <li>window.close() - 关闭当前窗口</li>
        <li>window.moveTo() - 移动当前窗口</li>
        <li>window.resizeTo() - 调整当前窗口的尺寸</li>
      </ul>
      <h1>二、浏览器Screen信息</h1>
      <h1>三、浏览器Navigator信息</h1>
      <p>window.navigator 对象包含有关访问者浏览器的信息。</p>
      <p><span class="red">注意：</span>来自 navigator 对象的信息具有误导性，不应该被用于检测浏览器版本，这是因为：</p>
      <ul>
        <li>Navigator数据可被浏览器使用者更改</li>
        <li>一些浏览器对测试站点会识别错误</li>
        <li>浏览器无法报告晚于浏览器发布的新操作系统</li>
      </ul>
      <div class="code">
        <button v-on:click="getNavigator">点击获取浏览器信息</button>
        <h3>当前浏览器信息：</h3>
        <span v-html="navigator" />
      </div>
      <h1>四、页面Location对象</h1>
      <p>window.location 对象用于获得当前页面的地址 (URL)，并把浏览器重定向到新的页面。</p>
      <p>window.location 对象的部分属性如下：</p>
      <ul>
        <li>location.href 属性返回当前页面的URL。</li>
        <li>location.hostname 返回 web 主机的域名</li>
        <li>location.pathname 返回当前页面的路径和文件名</li>
        <li>location.port 返回 web 主机的端口 （80 或 443）</li>
        <li>location.protocol 返回所使用的 web 协议（http: 或 https:）</li>
        <li>location.assign() 方法加载新的文档作为下一级。</li>
        <li>location.replace() 方法加载新的文档替换当前页面。</li>
      </ul>
      <div class="code">
        <button v-on:click="loadNewDoc(true)">点击加载新文档(assign)</button>
        <br /><br />
        <button v-on:click="loadNewDoc(false)">点击加载新文档(replace)</button>
        <br /><br />
        <button v-on:click="getLocation">点击显示当前Location信息</button>
        <h3>当前Location信息：</h3>
        <span v-html="location" />
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
  name: 'JsBasic11',
  data() {
    return {
      title: 'JavaScript基础--Window、Screen、Navigator、Location',
      navigator: '',
      location: '',
      browserHW: ''
    }
  },
  methods: {
    getNavigator: function() {
      var txt = "<p>浏览器代号: " + navigator.appCodeName + "</p>";
      txt += "<p>浏览器名称: " + navigator.appName + "</p>";
      txt += "<p>浏览器版本: " + navigator.appVersion + "</p>";
      txt += "<p>启用Cookies: " + navigator.cookieEnabled + "</p>";
      txt += "<p>硬件平台: " + navigator.platform + "</p>";
      txt += "<p>用户代理: " + navigator.userAgent + "</p>";
      txt += "<p>用户代理语言: " + navigator.systemLanguage + "</p>";
      this.navigator = txt;
    },
    getLocation: function() {
      var txt = "<p>location.href : " + location.href + "</p>";
      txt += "<p>location.hostname  : " + location.hostname + "</p>";
      txt += "<p>location.pathname  : " + location.pathname + "</p>";
      txt += "<p>location.port  : " + location.port + "</p>";
      txt += "<p>location.protocol   : " + location.protocol + "</p>";
      this.location = txt;
    },
    loadNewDoc: function(assign) {
      if (assign) {
        window.location.assign("https://www.runoob.com")
      } else {
        window.location.replace("https://www.runoob.com")
      }
    },
    getBrowserHW: function() {
      var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      this.browserHW = "浏览器window宽度: " + w + ", 高度: " + h + "。";
    }
  }
}

</script>
