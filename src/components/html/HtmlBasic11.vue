<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、H5拖放</h1>
      <p>拖放（Drag 和 Drop）是很常见的特性。它指的是您抓取某物并拖入不同的位置。拖放是HTML5标准的组成部分：任何元素都是可拖放的。</p>
      <div class="code">
        <h3>把元素设置为可拖放的，draggable=&#34;true&#34;</h3>
        <p>&#60;img src=&#34;https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif&#34; draggable=&#34;true&#34; v-on:dragstart=&#34;drag&#34; id=&#34;drag1&#34; /&#62;</p>
        <h3>拖放的内容-ondragstart和setData()</h3>
        <p>
          <pre>
          allowDrop: function(ev) {
            ev.preventDefault();
          },
          drag: function(ev) {
            ev.dataTransfer.setData("Text", ev.target.id);
          }
        </pre>
        </p>
        <h3>拖到何处-ondragover</h3>
        <p>&#60;div id=&#34;div2&#34; v-on:drop=&#34;drop&#34; v-on:dragover=&#34;allowDrop&#34;&#62;&#60;/div&#62;</p>
        <h3>进行放置-ondrop</h3>
        <p>
          <pre>
       drop: function(ev) {
          ev.preventDefault();
          var data = ev.dataTransfer.getData("Text");
          ev.target.appendChild(document.getElementById(data));
        }
       </pre>
        </p>
        <div id="div1" v-on:drop="drop" v-on:dragover="allowDrop">
          <img draggable="true" v-on:dragstart="drag" id="drag1" src="https://www.w3school.com.cn/i/eg_dragdrop_w3school.gif">
        </div>
        <div id="div2" v-on:drop="drop" v-on:dragover="allowDrop">
        </div>
      </div>
      <h1>二、Web存储</h1>
      <p>通过本地存储（Local Storage），web 应用程序能够在用户浏览器中对数据进行本地的存储。<br />
        在HTML5之前，应用程序数据只能存储在cookie中，包括每个服务器请求。本地存储则更安全，并且可在不影响网站性能的前提下将大量数据存储于本地。<br />与cookie不同，存储限制要大得多（至少5MB），并且信息不会被传输到服务器。<br />
        本地存储经由起源地（origin）（经由域和协议）。所有页面，从起源地，能够存储和访问相同的数据。
      </p>
      <h2>HTML 本地存储对象</h2>
      <p>HTML 本地存储提供了两个在客户端存储数据的对象：<br />
        (1)window.localStorage - 存储没有截止日期的数据<br />
        (2)window.sessionStorage - 针对一个 session 来存储数据（当关闭浏览器标签页时数据会丢失）<br />
        在使用本地存储时，请检测 localStorage 和 sessionStorage 的浏览器支持：<br />
        <pre>
          if (typeof(Storage) !== "undefined") {
              // 针对 localStorage/sessionStorage 的代码
          } else {
              // 抱歉！不支持 Web Storage ..
          }
        </pre>
      </p>
      <h2>localStorage对象</h2>
      <p>localStorage对象存储的是没有截止日期的数据。当浏览器被关闭时数据不会被删除，在下一天、周或年中，都是可用的。</p>
      <div class="code">
        <p>
          <pre>
            // 存储
            localStorage.setItem("lastname", "Gates");
            // 取回
            document.getElementById("result").innerHTML = localStorage.getItem("lastname");
          </pre>
        </p>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

#div1,
#div2 {
  width: 198px;
  height: 66px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}

</style>
<script>
export default {
  name: 'HtmlBasic11',
  data() {
    return {
      title: 'HTML基础--H5拖放、Web存储、应用缓存、Workers、SSE'
    }
  },
  methods: {
    allowDrop: function(ev) {
      ev.preventDefault();
    },
    drag: function(ev) {
      ev.dataTransfer.setData("Text", ev.target.id);
    },
    drop: function(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("Text");
      ev.target.appendChild(document.getElementById(data));
    }
  }
}

</script>
