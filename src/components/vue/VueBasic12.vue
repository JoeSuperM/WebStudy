<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、安装使用方法</h1>
      <div class="code large">
        <h3>1、使用cdn</h3>
        <p>&#60;script src="https://cdn.staticfile.org/vue-resource/1.5.1/vue-resource.min.js"/&#62;</p>
        <h3>2、使用npm</h3>
        <p>$ npm install vue-resource --save-dev</p>
        <p>在main.js中加载该模块：<br />import VueResource from 'vue-resource'<br />Vue.use(VueResource)</p>
      </div>
      <h1>二、特点</h1>
      <h4>1、体积小</h4>
      <p>vue-resource非常小巧，在压缩以后只有大约12KB，服务端启用gzip压缩后只有4.5KB大小，这远比jQuery的体积要小得多。</p>
      <h4>2、支持主流的浏览器</h4>
      <p>和Vue.js一样，vue-resource除了不支持IE 9以下的浏览器，其他主流的浏览器都支持。</p>
      <h4>3、支持Promise API 和 URI Templates</h4>
      <p>Promise是ES6的特性，Promise的中文含义为“先知”，Promise对象用于异步计算。URI Templates表示URI模板，有些类似于ASP.NET MVC的路由模板。</p>
      <h4>4、支持拦截器</h4>
      <p>拦截器是全局的，拦截器可以在请求发送前和发送请求后做一些处理。拦截器在一些场景下会非常有用，比如请求发送前在headers中设置access_token，或者在请求失败时，提供共通的处理方式。</p>
      <h1>三、基本语法</h1>
      <div class="code large">
        // 基于全局Vue对象使用http<br />
        Vue.http.get('/someUrl', [options]).then(successCallback, errorCallback);<br />
        Vue.http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);<br />
        <br />
        // 在一个Vue实例内使用$http<br />
        this.$http.get('/someUrl', [options]).then(successCallback, errorCallback);<br />
        this.$http.post('/someUrl', [body], [options]).then(successCallback, errorCallback);<br />
        <h3>说明</h3>
        <p>在发送请求后，使用then方法来处理响应结果，then方法有两个参数，第一个参数是响应成功时的回调函数，第二个参数是响应失败时的回调函数。then方法的回调函数也有两种写法，第一种是传统的函数写法，第二种是更为简洁的ES 6的Lambda写法：</p>
        <p>
          // 传统写法<br />
          this.$http.get('/someUrl', [options]).then(function(response){<br />
          &#160;&#160;// 响应成功回调<br />
          }, function(response){<br />
          &#160;&#160;// 响应错误回调<br />
          });
        </p>
        <p>
          // Lambda写法<br />
          this.$http.get('/someUrl', [options]).then((response) => {<br />
          &#160;&#160;// 响应成功回调<br />
          }, (response) => {<br />
          &#160;&#160;// 响应错误回调<br />
          });
        </p>
      </div>
      <h1>四、支持HTTP方法</h1>
      <ul>
        <li>get(url, [options])</li>
        <li>head(url, [options])</li>
        <li>delete(url, [options])</li>
        <li>jsonp(url, [options])</li>
        <li>post(url, [body], [options])</li>
        <li>put(url, [body], [options])</li>
        <li>patch(url, [body], [options])</li>
      </ul>
      <h2>options对象</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="option in options">
          <td>{{option.title}}</td>
          <td>{{option.type}}</td>
          <td>{{option.desc}}</td>
        </tr>
      </table>
      <h3>emulateHTTP的作用</h3>
      <p>如果Web服务器无法处理PUT, PATCH和DELETE这种REST风格的请求，你可以启用enulateHTTP现象。启用该选项后，请求会以普通的POST方法发出，并且HTTP头信息的X-HTTP-Method-Override属性会设置为实际的HTTP方法。<br />
        Vue.http.options.emulateHTTP = true;</p>
      <h3>emulateJSON的作用</h3>
      <p>如果Web服务器无法处理编码为application/json的请求，你可以启用emulateJSON选项。启用该选项后，请求会以application/x-www-form-urlencoded作为MIME type，就像普通的HTML表单一样。<br />
        Vue.http.options.emulateJSON = true;</p>
      <h2>response对象</h2>
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>方法</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="method in methods">
          <td>{{method.title}}</td>
          <td>{{method.type}}</td>
          <td>{{method.desc}}</td>
        </tr>
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>属性</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="proprity in propritys">
          <td>{{proprity.title}}</td>
          <td>{{proprity.type}}</td>
          <td>{{proprity.desc}}</td>
        </tr>
      </table>
      <h1>五、演示效果</h1>
      <div class="code">
        <p>网络数据展示区：{{resData}}</p>
        <hr />
        <h3>1、Get请求</h3>
        <pre>
        this.$http.get('http://10.134.3.1/web_study.json')
        .then((res) => {
          this.resData = res;
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
        </pre>
        <button @click="getResData">演示Get请求</button>
        <h3>2、Post请求</h3>
        <pre>
        this.$http.post('http://10.134.3.1/web_study.json', { 'p1': 1, 'p2': 'hello' })
        .then((res) => {
          this.resData = res;
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
        </pre>
        <button @click="postResData">演示Post请求</button>
        <h3>3、Jsonp请求</h3>
        <pre>
        this.$http.jsonp('http://10.134.3.1/web_study.json')
        .then((res) => {
          this.resData = res;
          alert("Jsonp数据成功！");
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
        </pre>
        <button @click="jsonpResData">演示Jsonp请求</button>
      </div>
      <h1>六、拦截器</h1>
      <img src="../../assets/vue_resource_inteceptor.png">
      <h2>基本用法</h2>
      <div class="code">
        <pre>
Vue.http.interceptors.push((request, next) => {
    // ...
    // 请求发送前的处理逻辑
    // ...
  next((response) => {
    // ...
    // 请求发送后的处理逻辑
    // ...
    // 根据请求的状态，response参数会返回给successCallback或errorCallback
    return response
  })
})
        </pre>
        <p>在response返回给successCallback或errorCallback之前，你可以修改response中的内容，或做一些处理。</p>
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
  name: 'VueBasic12',
  data() {
    return {
      title: 'Vue基础--Ajax(Vue-Resource)',
      resData: '',
      options: [{
        title: 'url',
        type: 'string',
        desc: '请求的URL'
      }, {
        title: 'method',
        type: 'string',
        desc: "请求的HTTP方法，例如：'GET', 'POST'或其他HTTP方法"
      }, {
        title: 'body',
        type: 'Object, FormData, string',
        desc: 'request body'
      }, {
        title: 'params',
        type: 'Object',
        desc: '请求的URL参数对象'
      }, {
        title: 'headers',
        type: 'Object',
        desc: 'request headers'
      }, {
        title: 'timeout',
        type: 'number',
        desc: '单位为毫秒的请求超时时间 (0 表示无超时时间)'
      }, {
        title: 'before',
        type: 'function(request)',
        desc: '请求发送前的处理函数，类似于jQuery的beforeSend函数'
      }, {
        title: 'progress',
        type: 'function(event)',
        desc: 'ProgressEvent回调处理函数'
      }, {
        title: 'credentials',
        type: 'boolean',
        desc: '表示跨域请求时是否需要使用凭证'
      }, {
        title: 'emulateHTTP',
        type: 'boolean',
        desc: '发送PUT, PATCH, DELETE请求时以HTTP POST的方式发送，并设置请求头的X-HTTP-Method-Override'
      }, {
        title: 'emulateJSON',
        type: 'boolean',
        desc: '将request body以application/x-www-form-urlencoded content type发送'
      }],
      methods: [{ title: 'text()', type: 'string', desc: '以string形式返回response body' },
        { title: 'json()', type: 'Object', desc: '以JSON对象形式返回response body' },
        { title: 'blob()', type: 'Blob', desc: '以二进制形式返回response body' }
      ],
      propritys: [{ title: 'ok', type: 'boolean', desc: '响应的HTTP状态码在200~299之间时，该属性为true' },
        { title: 'status', type: 'number', desc: '响应的HTTP状态码' },
        { title: 'statusText', type: 'string', desc: '响应的状态文本' },
        { title: 'headers', type: 'Object', desc: '响应头' }
      ]
    }
  },
  methods: {
    getResData: function() {
      this.resData = "";
      this.$http.get('http://10.134.3.1/web_study.json')
        .then((res) => {
          this.resData = res;
          alert("Get数据成功！");
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
    },
    postResData: function() {
      this.resData = "";
      this.$http.post('http://10.134.3.1/web_study.json', { 'p1': 1, 'p2': 'hello' })
        .then((res) => {
          this.resData = res;
          alert("Post数据成功！");
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
    },
    jsonpResData: function() {
      this.resData = "";
      this.$http.jsonp('http://10.134.3.1/web_study.json')
        .then((res) => {
          this.resData = res;
          alert("Jsonp数据成功！");
        }, function(res) {
          this.resData = res;
          alert("请求发生错误：" + res.statusText);
        })
        .catch(function(error) {
          this.resData = error;
          alert(error);
        })
    }

  }
}

</script>
