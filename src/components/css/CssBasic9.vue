<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、文本效果</h1>
      <h2>文本阴影（text-shadow）</h2>
      <p>text-shadow属性适用于文本阴影,指定了水平阴影，垂直阴影，模糊的距离，以及阴影的颜色<br />语法：text-shadow: h-shadow v-shadow blur color;</p>
      <h2>盒阴影（box-shadow）</h2>
      <p>box-shadow 属性适用于盒子阴影</p>
      <h2>文本溢出属性（text-overflow）</h2>
      <p>CSS3文本溢出属性指定应向用户如何显示溢出内容,ellipsis(省略号)、clip(裁剪)</p>
      <h2>文本换行(word-wrap)</h2>
      <p>如果某个单词太长，不适合在一个区域内，它扩展到外面,自动换行属性允许您强制文本换行。break-all(拆分单词)、keep-all(不允许拆分单词)</p>
      <div class="code">
        <h3>演示文本阴影</h3>
        <h2 style="text-shadow:5px 5px 5px #FF0000;">文本阴影(text-shadow:5px 5px 5px #FF0000;)</h2>
        <h2 style="text-shadow:2px 2px 8px #FF0000;">模糊效果的文本阴影！</h2>
        <h2 style="text-shadow:0px 0px 3px #FF0000;">霓虹灯效果的文本阴影！</h2>
        <h2 style="text-shadow:2px 2px 4px #000000; color:white;">白色文本的阴影效果！</h2>
        <h3>演示盒子阴影</h3>
        <div class="card">box-shadow 属性用来可以创建纸质样式卡片</div>
        <div class="card">
          <img src="../../assets/logo.png">
        </div>
        <h3>演示文本溢出属性</h3>
        <p>text-overflow:ellipsis;</p>
        <div class="overflow" style="text-overflow:ellipsis;">这是测试文本(ellipsis)的溢出情况下如何显示的问题。</div>
        <p>text-overflow:clip;</p>
        <div class="overflow" style="text-overflow:clip;">这是测试文本(clip)的溢出情况下如何显示的问题。</div>
        <p>text-overflow:'>>';只在 Firefox 浏览器下有效</p>
        <div class="overflow" style="text-overflow:'>>';">这是测试文本(>>)的溢出情况下如何显示的问题。</div>
        <h3>演示文本换行</h3>
        <p><span class="red">word-break:keep-all</span></p>
        <p style="width:9em; border:1px solid #000000; word-break:keep-all;"> This paragraph contains some text. This line will-break-at-hyphenates.</p>
        <p><span class="red">word-break:break-all</span></p>
        <p style="width:9em; border:1px solid #000000; word-break:break-all;"> This paragraph contains some text: The lines will break at any character.</p>
      </div>
      <h1>二、字体</h1>
      <p>在 CSS3 之前，web 设计师必须使用已在用户计算机上安装好的字体。通过 CSS3，web 设计师可以使用他们喜欢的任意字体。<br />
        当您您找到或购买到希望使用的字体时，可将该字体文件存放到 web 服务器上，它会在需要时被自动下载到用户的计算机上。<br />
        您“自己的”的字体是在 CSS3<span class="red">@font-face</span>规则中定义的。</p>
      <p>在新的 @font-face 规则中，您必须首先定义字体的名称（比如 myFirstFont），然后指向该字体文件。</p>
      <h2>CSS3 字体描述符</h2>
      <table border="1" cellspacing="0" cellpadding="5">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="100">描述符</th>
          <th>值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in fontDescs" :key="item.name">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h2>演示效果</h2>
      <div class="code">
        <div id="font">
          <p>With CSS3, websites can finally use fonts other than the pre-selected "web-safe" fonts.</p>
          <p>这里使用的是<b>新字体</b>效果</p>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

@font-face {
  font-family: myFirstFont;
  src: url('https://www.w3school.com.cn/example/css3/Sansation_Light.ttf'),
    url('https://www.w3school.com.cn/example/css3/Sansation_Light.eot');
  /* IE9+ */
}

@font-face {
  font-family: myFirstFont;
  src: url('https://www.w3school.com.cn/example/css3/Sansation_Light.ttf'),
    url('https://www.w3school.com.cn/example/css3/Sansation_Light.eot');
  /* IE9+ */
  font-weight: bold;
}

div#font {
  font-family: myFirstFont;
}

div.card {
  width: 200px;
  height: 200px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

div.overflow {
  white-space: nowrap;
  width: 12em;
  overflow: hidden;
  border: 1px solid #000000;
}

</style>
<script>
export default {
  name: 'CssBasic9',
  data() {
    return {
      title: 'CSS基础--文本效果、字体',
      fontDescs: [{
        name: 'font-family',
        value: 'name',
        desc: '必需。规定字体的名称。'
      }, {
        name: 'src',
        value: 'URL',
        desc: '必需。定义字体文件的 URL。'
      }, {
        name: 'font-stretch',
        value: 'normal、condensed、ultra-condensed、extra-condensed、semi-condensed、expanded、semi-expanded、extra-expanded、ultra-expanded',
        desc: '可选。定义如何拉伸字体。默认是 "normal"。'
      }, {
        name: 'font-style',
        value: 'ormal、italic、oblique',
        desc: '可选。定义字体的样式。默认是 "normal"。'
      }, {
        name: 'font-weight',
        value: 'normal、bold、100、200、300、400、500、600、700、800、900',
        desc: '可选。定义字体的粗细。默认是 "normal"。'
      }, {
        name: 'unicode-range',
        value: 'unicode-range',
        desc: '可选。定义字体支持的 UNICODE 字符范围。默认是 "U+0-10FFFF"。'
      }]

    }
  }
}

</script>
