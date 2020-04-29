<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、安装方法</h1>
      <div class="code">
        <h3>1、使用cdn</h3>
        <p>&#60;script src="https://unpkg.com/axios/dist/axios.min.js"/&#62;</p>
        <p>或</p>
        <p>&#60;script src="https://cdn.staticfile.org/axios/0.18.0/axios.min.js"/&#62;</p>
        <h3>2、使用npm</h3>
        <p>$ npm install axios</p>
        <h3>3、使用yarn</h3>
        <p>$ yarn add axios</p>
      </div>
      <h2>二、简单实例</h2>
      <div class="code">
        <div>网络数据展示区：{{data}}</div>
        <hr />
        <h3>1、get方法</h3>
        <pre>
           this.$axios.get('http://10.134.3.1/test.txt')
            .then(response => (this.data = response))
            .catch(function(error) { // 请求失败处理
              alert(error);
            });
        </pre>
        <button v-on:click="simpleGet">演示简单GET方法</button>
        <h3>2、post方法</h3>
        <pre>
          this.$axios.post('http://10.134.3.1/web_study.json')
            .then(response => (this.data = response))
            .catch(function(error) { // 请求失败处理
              alert(error);
            });
        </pre>
        <button v-on:click="simplePost">演示简单POST方法</button>
        <h3>3、携带参数的请求</h3>
        <pre>
          this.$axios.post('http://10.134.3.1/web_study.json',
              { 'p1': 1, 'p2': 'hello' })
            .then(response => (this.data = response))
            .catch(function(error) { // 请求失败处理
              alert(error);
            });
        </pre>
        <button v-on:click="paramGet">演示带参GET方法</button>
        <button v-on:click="paramPost">演示带参POST方法</button>
        <h3>4、执行多个并发请求</h3>
        <pre>
          this.$axios.all([this.$axios.post("http://10.134.3.1/web_study.json"),
              this.$axios.get("http://10.134.3.1/web_study.txt")])
          .then(this.$axios.spread(function(acct, perms) {
                  console.log(acct);
                  console.log(perms);
                }));
        </pre>
        <button v-on:click="someRequest">并发请求</button>
      </div>
      <h2>三、具体配置</h2>
      <h3>请求方法的别名</h3>
      <p>官方为所有支持的请求方法提供了别名，可以直接使用别名来发起请求：</p>
      <ul>
        <li v-for="method in methods">{{method}}</li>
      </ul>
      <p><span class="red">注意：</span>在使用别名方法时，url、method、data这些属性都不必在配置中指定。</p>
      <p>处理并发请求的助手函数：axios.all(iterable)和axios.spread(callback)</p>
      <h3>创建实例</h3>
      <div class="code">
        <pre>
          axios.create([config])
          const instance = axios.create({
            baseURL: 'https://some-domain.com/api/',
            timeout: 1000,
            headers: {'X-Custom-Header': 'foobar'}
          });
        </pre>
      </div>
      <h3>请求配置项</h3>
      <p>创建请求时可用的配置选项，注意只有url是必需的。如果没有指定method，请求将默认使用get方法。</p>
      <div class="code">
        <pre>
{
  // `url` 是用于请求的服务器 URL
  url: "/user",

  // `method` 是创建请求时使用的方法
  method: "get", // 默认是 get

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对URL
  baseURL: "https://some-domain.com/api/",

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 "PUT", "POST" 和 "PATCH" 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或ArrayBuffer，或Stream
  transformRequest: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `transformResponse` 在传递给then/catch前，允许修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理

    return data;
  }],

  // `headers` 是即将被发送的自定义请求头
  headers: {"X-Requested-With": "XMLHttpRequest"},

  // `params` 是即将与请求一起发送的URL参数
  // 必须是一个无格式对象(plain object)或URLSearchParams对象
  params: {
    ID: 12345
  },

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: "brackets"})
  },

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 "PUT", "POST", 和 "PATCH"
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属：Stream
  data: {
    firstName: "Fred"
  },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求花费了超过 `timeout` 的时间，请求将被中断
  timeout: 1000,

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false, // 默认的

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个promise 应用一个有效的响应.
  adapter: function (config) {
    /* ... */
  },

  // `auth` 表示应该使用HTTP基础验证，并提供凭据
  // 这将设置一个`Authorization` 头，覆写掉现有的任意使用`headers`设置的自定义`Authorization`头
  auth: {
    username: "janedoe",
    password: "s00pers3cret"
  },

  // `responseType`表示服务器响应的数据类型，
  //可以是 "arraybuffer", "blob", "document", "json", "text", "stream"
  responseType: "json", // 默认的

  // `xsrfCookieName`是用作xsrf token的值的cookie的名称
  xsrfCookieName: "XSRF-TOKEN", // default

  // `xsrfHeaderName`是承载xsrf token的值的HTTP头的名称
  xsrfHeaderName: "X-XSRF-TOKEN", // 默认的

  // `onUploadProgress`允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `onDownloadProgress`允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // `maxContentLength` 定义允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是resolve 或reject promise 。
  //如果`validateStatus`返回 `true`(或者设置为`null`或`undefined`)，
  //promise将被resolve; 否则，promise将被rejecte
  validateStatus: function (status) {
    return status &gt;= 200 &amp;&amp; status &lt; 300; // 默认的
  },

  // `maxRedirects` 定义在node.js中follow的最大重定向数目
  // 如果设置为0，将不会follow任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent`分别在node.js中用于定义在执行http和https时使用的自定义代理。
  //允许像这样配置选项： `keepAlive`默认没有启用
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // "proxy" 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，
  //覆写掉已有的通过使用`header`设置的自定义 `Proxy-Authorization`头。
  proxy: {
    host: "127.0.0.1",
    port: 9000,
    auth: : {
      username: "mikeymike",
      password: "rapunz3l"
    }
  },

  // `cancelToken` 指定用于取消请求的cancel token
  cancelToken: new CancelToken(function (cancel) {
  })
}
        </pre>
      </div>
      <h3>响应结构</h3>
      <div class="code">
        <pre>
{
  // `data` 由服务器提供的响应
  data: {},

  // `status`  HTTP 状态码
  status: 200,

  // `statusText` 来自服务器响应的 HTTP 状态信息
  statusText: "OK",

  // `headers` 服务器响应的头
  headers: {},

  // `config` 是为请求提供的配置信息
  config: {}
}
        </pre>
      </div>
      <h3>配置的优先顺序</h3>
      <p>在 lib/defaults.js找到的库的默认值，然后是实例的defaults属性，最后是请求的config参数。后者将优先于前者。</p>
      <div class="code">
        <pre>
// 使用由库提供的配置的默认值来创建实例
// 此时超时配置的默认值是 `0`
var instance = axios.create();

// 覆写库的超时默认值
// 现在，在超时前，所有请求都会等待 2.5 秒
instance.defaults.timeout = 2500;

// 为已知需要花费很长时间的请求覆写超时设置
instance.get('/longRequest', {
  timeout: 5000
});
        </pre>
      </div>
      <h3>拦截器</h3>
      <p>在请求或响应被then或catch处理前拦截它们。</p>
      <div class="code">
        <pre>
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

 //移除拦截器逻辑
var myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
        </pre>
      </div>
      <h3>取消请求</h3>
      <p>使用cancel token取消请求。</p>
      <div class="code">
        <p>可以使用CancelToken.source 工厂方法创建 cancel token，像这样：</p>
        <pre>
var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});

// 取消请求（message 参数是可选的）
source.cancel('Operation canceled by the user.');
        </pre>
        <p>还可以通过传递一个executor函数到CancelToken的构造函数来创建 cancel token：</p>
        <pre>
var CancelToken = axios.CancelToken;
var cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // executor 函数接收一个 cancel 函数作为参数
    cancel = c;
  })
});

// 取消请求
cancel();
        </pre>
        <p><span class="red">注意：</span>可以使用同一个cancel token取消多个请求。</p>
      </div>
      <h3>附录-请求与响应</h3>
      <table border="1" cellspacing="0" cellpadding="5">
        <option>Options参数</option>
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="ops in options" :key="ops.param">
          <td>{{ops.param}}</td>
          <td>{{ops.type}}</td>
          <td>{{ops.desc}}</td>
        </tr>
      </table>
      <br />
      <table border="1" cellspacing="0" cellpadding="5" width="100%">
        <option>Response参数和方法</option>
        <tr class="table_head" bgcolor="#3f3f3f">
          <th>参数</th>
          <th>类型</th>
          <th>描述</th>
        </tr>
        <tr v-for="ops in responses" :key="ops.param">
          <td>{{ops.param}}</td>
          <td>{{ops.type}}</td>
          <td>{{ops.desc}}</td>
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
  name: 'VueBasic10',
  data() {
    return {
      title: 'Vue基础--Ajax网络请求',
      data: null,
      methods: ['axios.request(config)', 'axios.get(url[, config])',
        'axios.delete(url[, config])', 'axios.head(url[, config])',
        'axios.post(url[, data[, config]])', 'axios.put(url[, data[, config]])',
        'axios.patch(url[, data[, config]])'
      ],
      options: [{
        param: 'url',
        type: 'string',
        desc: '请求的目标URL'
      }, {
        param: 'body',
        type: 'Object, FormData, string',
        desc: '作为请求体发送的数据'
      }, {
        param: 'headers',
        type: 'Object',
        desc: '作为请求头部发送的头部对象'
      }, {
        param: 'params',
        type: 'Object',
        desc: '作为URL参数的参数对象'
      }, {
        param: 'method',
        type: 'string',
        desc: 'HTTP方法 (例如GET，POST，...)'
      }, {
        param: 'timeout',
        type: 'number',
        desc: '请求超时（单位：毫秒） (0表示永不超时)'
      }, {
        param: 'before',
        type: 'function(request)',
        desc: '在请求发送之前修改请求的回调函数'
      }, {
        param: 'progress',
        type: 'function(event)',
        desc: '用于处理上传进度的回调函数 ProgressEvent'
      }, {
        param: 'credentials',
        type: 'boolean',
        desc: '是否需要出示用于跨站点请求的凭据'
      }, {
        param: 'emulateHTTP',
        type: 'boolean',
        desc: '是否需要通过设置X-HTTP-Method-Override头部并且以传统POST方式发送PUT，PATCH和DELETE请求。'
      }, {
        param: 'emulateJSON',
        type: 'boolean',
        desc: '设置请求体的类型为application/x-www-form-urlencoded'
      }],
      responses: [{
        param: 'url',
        type: 'string',
        desc: '响应的 URL 源'
      }, {
        param: 'body',
        type: 'Object, Blob, string',
        desc: '响应体数据'
      }, {
        param: 'headers',
        type: 'Header',
        desc: '请求头部对象'
      }, {
        param: 'ok',
        type: 'boolean',
        desc: '当 HTTP 响应码为 200 到 299 之间的数值时该值为 true'
      }, {
        param: 'status',
        type: 'number',
        desc: 'HTTP 响应码'
      }, {
        param: 'statusText',
        type: 'string',
        desc: 'HTTP 响应状态'
      }, {
        param: 'text()',
        type: '约定值',
        desc: '以字符串方式返回响应体'
      }, {
        param: 'json()',
        type: '约定值',
        desc: '以格式化后的json对象方式返回响应体'
      }, {
        param: 'blob()',
        type: '约定值',
        desc: '以二进制Blob对象方式返回响应体'
      }]
    }
  },
  methods: {
    simpleGet: function() {
      /*this.$api.get('/test.txt', null, response => {
        if (response.status >= 200 && response.status < 300) {
          this.data = response.data;
        } else {
          alert(response);
        }
      })*/

      this.$axios.get('http://10.134.3.1/web_study.json')
        .then(response => (this.data = response))
        .catch(function(error) { // 请求失败处理
          alert(error);
        });
    },
    simplePost: function() {
      this.$axios.post('http://10.134.3.1/web_study.json')
        .then(response => (this.data = response))
        .catch(function(error) { // 请求失败处理
          alert(error);
        });
    },
    paramGet: function() {
      this.$axios.get('http://10.134.3.1/web_study.json', { 'p1': 1, 'p2': 'hello' })
        .then(response => (this.data = response))
        .catch(function(error) { // 请求失败处理
          alert(error);
        });
    },
    paramPost: function() {
      this.$axios.post('http://10.134.3.1/web_study.json', { 'p1': 1, 'p2': 'hello' })
        .then(response => (this.data = response))
        .catch(function(error) { // 请求失败处理
          alert(error);
        });
    },
    someRequest: function() {
      this.$axios.all([this.$axios.post("http://10.134.3.1/web_study.json"),
        this.$axios.get("http://10.134.3.1/web_study.json"),
        this.$axios.get("http://10.134.3.1/web_study.txt")
      ]).then(this.$axios.spread(function(acct, perms, test) {
        console.log(acct);
        console.log(perms);
        console.log(test);
        var array = [JSON.stringify(acct), JSON.stringify(perms), JSON.stringify(test)];
        alert(array);
      }));
    }
  }

}

</script>
