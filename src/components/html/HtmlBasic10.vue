<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、图形--Canvas</h1>
      <p>HTML5 的 canvas 元素使用 JavaScript 在网页上绘制图像。画布是一个矩形区域，您可以控制其每一像素。canvas 拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法。</p>
      <div class="code">
        <h3>(1)创建Canvas元素</h3>
        <p>&#60;canvas id=&#34;myCanvas&#34; width=&#34;200&#34; height=&#34;100&#34;&#62;&#60;/canvas&#62;</p>
        <h3>(2)通过JavaScript来绘制</h3>
        <h4>JavaScript使用id来寻找canvas 元素</h4>
        <p>var c = document.getElementById(&#34;myCanvas&#34;);</p>
        <h4>创建Context对象,拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法</h4>
        <p>var cxt=c.getContext(&#34;2d&#34;); </p>
        <h4>配置参数，绘制图形</h4>
        <p>cxt.fillStyle=&#34;#FF0000&#34;;<br />
          cxt.fillRect(0,0,150,75); </p>
      </div>
      <h2>绘制实例</h2>
      <div class="warn">
        <canvas id="myCanvas" class="my_canvas"></canvas>
        <br />
        <button @click="clearCanvas">清空画布</button>
        <button @click="drawLine">绘制线条</button>
        <button @click="drawCircle">绘制圆形</button>
        <button @click="drawGradient">绘制渐变</button>
        <button @click="drawImage">绘制图像</button>
      </div>
      <h1>二、图像--SVG</h1>
      <h2>SVG的定义</h2>
      <ul>
        <li v-for="svg in svgs">{{svg}}</li>
      </ul>
      <h2>SVG的优势</h2>
      <ul>
        <li v-for="svg_good in svg_goods">{{svg_good}}</li>
      </ul>
      <h2>SVG嵌入到HTML页面</h2>
      <div class="code">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
          <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" height="190">
          <polygon points="100,10 40,180 190,60 10,60 160,180" style="fill:red;stroke:blue;stroke-width:3;fill-rule:evenodd;" />
        </svg>
        <br />
        <p>
          <pre>
          &lt;svg xmlns=&quot;http://www.w3.org/2000/svg&quot; version=&quot;1.1&quot; height=&quot;190&quot;&gt;
            &lt;polygon points=&quot;100,10 40,180 190,60 10,60 160,180&quot;  
                style=&quot;fill:lime;stroke:purple;stroke-width:5;fill-rule:evenodd;&quot; /&gt;
          &lt;/svg&gt;
        </pre>
        </p>
      </div>
      <h1>三、Canvas和SVG的对比</h1>
      <h2>SVG</h2>
      <p>SVG 是一种使用 XML 描述 2D 图形的语言。<br />
        SVG 基于 XML，这意味着 SVG DOM 中的每个元素都是可用的。您可以为某个元素附加 JavaScript 事件处理器。<br />
        在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。
      </p>
      <h2>Canvas</h2>
      <p>Canvas 通过 JavaScript 来绘制 2D 图形。<br />
        Canvas 是逐像素进行渲染的。在 canvas 中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。
      </p>
      <h2>Canvas与SVG的比较</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3F3F3F" align="center">
          <th>Canvas</th>
          <th>SVG</th>
        </tr>
        <tr>
          <td>
            <ul>
              <li v-for="canvas in canvas_fecs">{{canvas}}</li>
            </ul>
          </td>
          <td>
            <ul>
              <li v-for="svg in svg_fecs">{{svg}}</li>
            </ul>
          </td>
        </tr>
      </table>
      <h1>四、多媒体</h1>
      <p>多媒体来自多种不同的格式。它可以是您听到或看到的任何内容，文字、图片、音乐、音效、录音、电影、动画等等。在因特网上，您会经常发现嵌入网页中的多媒体元素，现代浏览器已支持多种多媒体格式。
      </p>
      <h2>1、多媒体格式</h2>
      <p>多媒体元素（比如视频和音频）存储于媒体文件中。确定媒体类型的最常用的方法是查看文件扩展名。</p>
      <p>视频格式：AVI(.avi)、MPEG(.mpg\.mpeg)、WMV(.wmv)、QuikTime(.mov)、Flash(.swf\.flv)、Mpeg-4(.mp4)等</p>
      <p>声音格式：MIDI(.mid\.midi)、Wave(.wav)、WMA(.wma)、MP3(.mp3\.mpga)</p>
      <h2>2、Object元素</h2>
      <p>&#60;object&#62;的作用是支持HTML助手（插件）。辅助应用程序（helper application）是可由浏览器启动的程序。辅助应用程序也称为插件。辅助程序可用于播放音频和视频（以及其他）。</p>
      <h2>3、音频</h2>
      <div class="code">
        <h3>使用embed元素</h3>
        <p>embed标签定义外部（非 HTML）内容的容器。HTML5新增的，H4无效，而且不同浏览器对音频格式支持不同</p>
        <embed height="150" width="300" src="https://www.w3school.com.cn/i/horse.mp3" />
        <h3>使用object元素</h3>
        <p>object标签也可以定义外部（非HTML）内容的容器</p>
        <object data="https://www.w3school.com.cn/i/horse.mp3" />
        <h3>使用H5 audio元素</h3>
        <p>audio元素是一个H5元素，在H4中是非法的，但在所有浏览器中都有效。</p>
        <audio controls="controls">
          <source src="https://www.w3school.com.cn/i/song.ogg" type="audio/ogg">
          <source src="https://www.w3school.com.cn/i/song.mp3" type="audio/mpeg">
          对不起，您的浏览器不支持audio元素
        </audio>
        <h3>其他方法（使用雅虎或超链接）</h3>
        <p>使用雅虎播放器，导入雅虎JS：&#60;script type=&#34;text/javascript&#34; src=&#34;http://mediaplayer.yahoo.com/js&#34;&#62;&#60;/script&#62;</p>
        使用超链接：<a href="https://www.w3school.com.cn/i/song.mp3">点击播放音乐</a>
        <h3>最好的HTML解决方法</h3>
        <p>
          <pre>
        &#60;audio controls=&#34;controls&#34;&#62;
          &#60;source src=&#34;https://www.w3school.com.cn/i/song.ogg&#34; type=&#34;audio/ogg&#34;&#62;
          &#60;source src=&#34;https://www.w3school.com.cn/i/song.mp3&#34; type=&#34;audio/mpeg&#34;&#62;
          &#60;embed height=&#34;150&#34; width=&#34;300&#34; src=&#34;https://www.w3school.com.cn/i/song.mp3&#34; /&#62;
        &#60;/audio&#62;
         </pre>
        </p>
        <audio controls="controls">
          <source src="https://www.w3school.com.cn/i/song.ogg" type="audio/ogg">
          <source src="https://www.w3school.com.cn/i/song.mp3" type="audio/mpeg">
          <embed height="150" width="300" src="https://www.w3school.com.cn/i/song.mp3" />
        </audio>
      </div>
      <h2>4、视频</h2>
      <div class="code">
        <h3>使用embed标签</h3>
        <embed src="https://www.w3school.com.cn/i/movie.swf" width="320" height="240" />
        <h3>使用object标签</h3>
        <object width="320" height="240" data="https://www.w3school.com.cn/i/movie.mp4" />
        <h3>使用video标签</h3>
        <video width="320" height="240" controls="controls" autoplay="autoplay">
          <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
          <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
          <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
        </video>
        <h3>其他方法（视频网站或超链接）</h3>
        <p>将视频上传到视频网站，然后通过embed指定路径来访问</p>
        <p>使用超链接：<a href="https://www.w3school.com.cn/i/movie.mp4">点击播放视频</a></p>
        <h3>最好的HTML解决方法</h3>
        <p>
          <pre>
          &#60;video width=&#34;320&#34; height=&#34;240&#34; controls=&#34;controls&#34; autoplay=&#34;autoplay&#34;&#62;
            &#60;source src=&#34;https://www.w3school.com.cn/i/movie.ogg&#34; type=&#34;video/ogg&#34; /&#62;
            &#60;source src=&#34;https://www.w3school.com.cn/i/movie.mp4&#34; tye=&#34;video/mp4&#34; /&#62;
            &#60;source src=&#34;https://www.w3school.com.cn/i/movie.webm&#34; type=&#34;video/webm&#34; /&#62;
            &#60;object data=&#34;https://www.w3school.com.cn/i/movie.mp4&#34; width=&#34;320&#34; height=&#34;240&#34;&#62;
              &#60;embed src=&#34;https://www.w3school.com.cn/i/movie.swf&#34; width=&#34;320&#34; height=&#34;240&#34; /&#62;
          &#60;/object&#62;
        &#60;/video&#62;
        </pre>
        </p>
        <video width="320" height="240" controls="controls" autoplay="autoplay">
          <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" />
          <source src="https://www.w3school.com.cn/i/movie.mp4" type="video/mp4" />
          <source src="https://www.w3school.com.cn/i/movie.webm" type="video/webm" />
          <object data="https://www.w3school.com.cn/i/movie.mp4" width="320" height="240">
            <embed src="https://www.w3school.com.cn/i/movie.swf" width="320" height="240" />
          </object>
        </video>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

.my_canvas {
  border-width: 1px;
  border-style: solid;
  border-color: #c3c3c3;
  width: 350px;
  height: 200px;
}

</style>
<script>
export default {
  name: 'HtmlBasic10',
  data() {
    return {
      title: 'HTML基础--H5图形、媒体',
      svgs: [
        "SVG 指可伸缩矢量图形 (Scalable Vector Graphics)",
        "SVG 用于定义用于网络的基于矢量的图形",
        "SVG 使用 XML 格式定义图形",
        "SVG 图像在放大或改变尺寸的情况下其图形质量不会有损失",
        "SVG 是万维网联盟的标准"
      ],
      svg_goods: [
        "SVG 图像可通过文本编辑器来创建和修改",
        "SVG 图像可被搜索、索引、脚本化或压缩",
        "SVG 是可伸缩的",
        "SVG 图像可在任何的分辨率下被高质量地打印",
        "SVG 可在图像质量不下降的情况下被放大"
      ],
      canvas_fecs: [
        "依赖分辨率",
        "不支持事件处理器",
        "弱的文本渲染能力",
        "能够以 .png 或 .jpg 格式保存结果图像",
        "最适合图像密集型的游戏，其中的许多对象会被频繁重绘",
      ],
      svg_fecs: [
        "不依赖分辨率",
        "支持事件处理器",
        "最适合带有大型渲染区域的应用程序（比如谷歌地图）",
        "复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）",
        "不适合游戏应用",
      ]
    }
  },
  methods: {
    clearCanvas() {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      //cxt.clearRect(0, 0, c.width, c.height);//此方法不可用
      c.height = c.height; //重置画布高度，会清空页面内容
    },
    drawLine() {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      cxt.moveTo(10, 10);
      cxt.lineTo(150, 50);
      cxt.lineTo(10, 50);
      cxt.stroke();
    },
    drawCircle() {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      cxt.fillStyle = "#FF0000";
      cxt.beginPath();
      cxt.arc(200, 50, 30, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
    },
    drawGradient() {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      var grd = cxt.createLinearGradient(0, 100, 175, 150);
      grd.addColorStop(0, "#FF0000");
      grd.addColorStop(1, "#00FF00");
      cxt.fillStyle = grd;
      cxt.fillRect(0, 100, 175, 150);
    },
    drawImage() {
      var c = document.getElementById("myCanvas");
      var cxt = c.getContext("2d");
      var img = new Image()
      img.src = "https://www.w3school.com.cn/i/ct_html5_canvas_image.gif"
      cxt.drawImage(img, 0, 0);
    }
  }
}

</script>
