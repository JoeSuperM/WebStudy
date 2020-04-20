<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、应用程序缓存</h1>
      <p>使用应用程序缓存，通过创建 cache manifest 文件，可轻松创建 web 应用的离线版本。HTML5 引入了应用程序缓存（Application Cache），这意味着可对 web 应用进行缓存，并可在没有因特网连接时进行访问。</p>
      <h3>应用程序缓存的优势</h3>
      <ol type="1">
        <li>离线浏览 - 用户可在应用离线时使用它们</li>
        <li>速度 - 已缓存资源加载得更快</li>
        <li>减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源</li>
      </ol>
      <h2>Cache Manifest基础</h2>
      <p>每个指定了manifest的页面在用户对其访问时都会被缓存。如果未指定manifest属性，则页面不会被缓存（除非在manifest文件中直接指定了该页面）。manifest文件的建议文件扩展名是：&#60;.appcache&#60;。</p>
      <p>注意：manifest文件需要设置正确的 MIME-type，即 "text/cache-manifest"。必须在 web 服务器上进行配置。</p>
      <p>如需启用应用程序缓存，请在文档的html标签中包含manifest属性：&#60;html manifest=&#34;demo.appcache&#34;&#62;</p>
      <h3>Manifest文件</h3>
      <p>manifest 文件是简单的文本文件，它告知浏览器被缓存的内容（以及不缓存的内容）。</p>
      <p>manifest 文件有三个部分:</p>
      <ul>
        <li>CACHE MANIFEST - 在此标题下列出的文件将在首次下载后进行缓存</li>
        <li>NETWORK - 在此标题下列出的文件需要与服务器的连接，且不会被缓存</li>
        <li>FALLBACK - 在此标题下列出的文件规定当页面无法访问时的回退页面（比如 404 页面）</li>
      </ul>
      <h3>CaCHE MANIFEST</h3>
      <p>第一行，CACHE MANIFEST，是必需的,当 manifest 文件被加载后，浏览器会从网站的根目录下载这三个文件。然后，无论用户何时与因特网断开连接，这些资源依然可用。</p>
      <div class="code">
        <pre>
          CACHE MANIFEST
          /theme.css
          /logo.gif
          /main.js
        </pre>
      </div>
      <h3>NETWORK和FALLBACK</h3>
      <p>NETWORK部分规定文件永远不会被缓存，且离线时是不可用的,可以使用星号来指示所有其他资源/文件都需要因特网连接.<br />
        FALLBACK部分规定如果无法建立因特网连接，则用 "offline.html" 替代 /html/ 目录中的所有文件</p>
      <div class="code">
        <pre>
          NETWORK:
          login.asp
          *

          FALLBACK:
          /html/ /offline.html
        </pre>
      </div>
      <h3>更新缓存</h3>
      <p>一旦应用被缓存，它就会保持缓存直到发生下列情况：</p>
      <ul>
        <li>用户清空浏览器缓存</li>
        <li>manifest 文件被修改（参阅下面的提示）</li>
        <li>由程序来更新应用缓存</li>
      </ul>
      <h3>完整的Cache Manifest文件</h3>
      <p>以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存只会在其 manifest 文件改变时被更新。如果您编辑了一幅图像，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。</p>
      <div class="code">
        <pre>
          CACHE MANIFEST
          # 2012-02-21 v1.0.0
          /theme.css
          /logo.gif
          /main.js

          NETWORK:
          login.asp

          FALLBACK:
          /html/ /offline.html
        </pre>
      </div>
      <h3>缓存的注意事项</h3>
      <div class="warn">
        一旦文件被缓存，则浏览器会继续展示已缓存的版本，即使您修改了服务器上的文件。为了确保浏览器更新缓存，您需要更新 manifest 文件。<br />
        注释：浏览器对缓存数据的容量限制可能不太一样（某些浏览器的限制是每个站点 5MB）。
      </div>
      <h1>二、Web Worker</h1>
      <p>Web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情：点击、选取内容等等，而此时 web worker 运行在后台。<br />
      </p>
      <h3>检测Web Worker是否支持</h3>
      <div class="code">
        <pre>
          if (typeof(Worker) !== "undefined") {
              // 是的！支持 Web worker！
          } else {
              // 抱歉！不支持 Web Worker！
          }
          </pre>
      </div>
      <h3>创建Web Worker文件</h3>
      <p>由于Web worker位于外部文件中，它们无法访问JavaScript对象：window对象、document对象、parent对象</p>
      <div class="code">
        <pre>
          var i = 0;
          function timedCount() {
              i = i + 1;
              //postMessage() 方法 - 它用于向 HTML 页面传回一段消息。
              postMessage(i);
              setTimeout("timedCount()",500);
          }
          timedCount();
        </pre>
      </div>
      <h3>创建Web Worker对象并监听事件</h3>
      <div class="code">
        <pre>
        if (typeof(w) == "undefined") {
            w = new Worker("demo_workers.js");
        }
        //添加事件接收
        w.onmessage = function(event){
            /*当 web worker 传送消息时，会执行事件监听器中的代码。来自 web worker 的数据会存储于 event.data 中。
            */
            document.getElementById("result").innerHTML = event.data;
        };
      </pre>
      </div>
      <h3>终止Web Worker和复用</h3>
      <p>当创建 web worker 后，它会继续监听消息（即使在外部脚本完成后）直到其被终止为止。<br />
        如需终止 web worker，并释放浏览器/计算机资源，请使用 terminate() 方法</p>
      <p>如果您把 worker 变量设置为 undefined，在其被终止后，可以重复使用该代码</p>
      <h3>完整的Web Worker实例代码</h3>
      <div class="code">
        <pre>
            &#60;script&#62;
              var w;
              function startWorker() {
                if (typeof(Worker) !== &#34;undefined&#34;) {
                  if (typeof(w) == &#34;undefined&#34;) {
                    w = new Worker(&#34;/example/html5/demo_workers.js&#34;);
                  }
                  w.onmessage = function(event) {
                    document.getElementById(&#34;result&#34;).innerHTML = event.data;
                  };
                } else {
                  document.getElementById(&#34;result&#34;).innerHTML = &#34;Sorry, your browser does not support Web Workers...&#34;;
                }
              }
              function stopWorker() {
                w.terminate();
              }
            &#60;/script&#62;
          </pre>
      </div>
      <div>
        <p>计数: <output id="worker_result"></output></p>
        <button v-on:click="startWorker">开始Worker</button>
        <button v-on:click="stopWorker">停止Worker</button>
      </div>
      <h1>三、Server Sent事件</h1>
      <p>Server-Sent 事件允许网页从服务器获得更新。</p>
      <h3>检测Server Sent事件支持</h3>
      <div class="code">
        <pre>
          if(typeof(EventSource) !== &#34;undefined&#34;) {
              // 是的！支持服务器发送事件！
              // 一些代码.....
          } else {
              // 抱歉！不支持服务器发送事件！
          }
        </pre>
      </div>
      <h3>接收Server-Sent事件</h3>
      <div class="code">
        <pre>
          var source = new EventSource(&#34;demo_sse.php&#34;);
          source.onmessage = function(event) {
              document.getElementById(&#34;result&#34;).innerHTML += event.data + &#34;&#60;br&#62;&#34;;
          };
        </pre>
      </div>
      <h3>EventSource对象</h3>
      <p>事件onopen，监听通往服务器的连接被打开</p>
      <p>事件onmessage，监听收到的消息</p>
      <p>事件onerror，监听发生错误</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'HtmlBasic12',
  data() {
    return {
      title: 'HTML基础--H5应用缓存、Workers、SSE',
      worker: undefined
    }
  },
  methods: {
    startWorker() {
      if (typeof(Worker) !== "undefined") {
        if (typeof(this.worker) == "undefined") {
          this.worker = new Worker("../../assets/demo_worker.js");
        }
        this.worker.onmessage = function(event) {
          document.getElementById("worker_result").innerHTML = event.data;
        };
      } else {
        document.getElementById("worker_result").innerHTML = "Sorry, your browser does not support Web Workers...";
      }
    },
    stopWorker() {
      this.worker.terminate();
      this.worker = undefined;
    }
  }
}

</script>
