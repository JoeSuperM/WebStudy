<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、导航栏</h1>
      <p>导航栏即链接列表,相关更多实例点击<a style="font-size:25px" href="https://www.runoob.com/css/css-navbar.html">这里</a></p>
      <div class="code">
        <h3>垂直导航栏</h3>
        <ul id="v_ul" style="width:200px;">
          <li><a href="https://www.baidu.com/" target="_blank">Home</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">News</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">Contact</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">About</a></li>
        </ul>
        <h3 style="clear:both;">水平导航栏</h3>
        <ul id="h_ul" style="height:auto;">
          <li><a href="https://www.baidu.com/" target="_blank">Home</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">News</a></li>
          <li><a href="https://www.baidu.com/" target="_blank">Contact</a></li>
          <li style="float:right;"><a style="background-color:#00CC00;" href="https://www.baidu.com/" target="_blank">About</a></li>
        </ul>
      </div>
      <h1>二、下拉列表</h1>
      <p>使用CSS创建一个鼠标移动上去后显示下拉菜单的效果。</p>
      <div class="code">
        <h3>1、基本下拉菜单</h3>
        <p><span class="red">说明：</span>.dropdown类使用position:relative, 这将设置下拉菜单的内容放置在下拉按钮(使用position:absolute)的右下角位置。<br />.dropdown-content 类中是实际的下拉菜单。默认是隐藏的，在鼠标移动到指定元素后会显示。<br />:hover 选择器用于在用户将鼠标移动到下拉按钮上时显示下拉菜单。</p>
        <div class="bs-dropdown">
          <p>鼠标移动到我这里</p>
          <div class="bs-dropdown-content">
            <p>下拉条目A</p>
            <p>下拉条目B</p>
            <p>下拉条目C</p>
          </div>
        </div>
        <h3>2、下拉菜单</h3>
        <p>创建下拉菜单，并允许用户选取列表中的某一项</p>
        <div class="btn-dropdown">
          <button class="btn-dropitem">下拉菜单</button>
          <div class="btn-dropdown-content">
            <a href="#/css/basic7/a">下拉列表A</a>
            <a href="#/css/basic7/b">下拉列表B</a>
            <a href="#/css/basic7/c">下拉列表C</a>
          </div>
        </div>
        <h3>3、下拉内容对齐方式</h3>
        <h4>float：left</h4>
        <div class="btn-dropdown" style="float
:left;">
          <button class="btn-dropitem">内容显示在左边</button>
          <div class="btn-dropdown-content" style="left:0;">
            <a href="#/css/basic7/a">下拉列表A</a>
            <a href="#/css/basic7/b">下拉列表B</a>
            <a href="#/css/basic7/c">下拉列表C</a>
          </div>
        </div>
        <h4 style="clear:both;">float：right</h4>
        <div class="btn-dropdown" style="float:right;margin-right:50px;">
          <button class="btn-dropitem">内容显示在右边</button>
          <div class="btn-dropdown-content">
            <a href="#/css/basic7/a">下拉列表A</a>
            <a href="#/css/basic7/b">下拉列表B</a>
            <a href="#/css/basic7/c">下拉列表C</a>
          </div>
        </div>
        <h4 style="clear:both;">4、导航栏下拉</h4>
        <ul id="bar_ul">
          <li><a href="#home">主页</a></li>
          <li><a href="#news">新闻</a></li>
          <div class="bar-dropdown">
            <a href="#/css/basic7/b" class="bar-dropbtn">下拉菜单</a>
            <div class="bar-dropdown-content">
              <a href="#/css/basic7/a">链接 A</a>
              <a href="#/css/basic7/b">链接 B</a>
              <a href="#/css/basic7/c">链接 C</a>
            </div>
          </div>
        </ul>
      </div>
      <h1>三、提示工具</h1>
      <p>提示工具在鼠标移动到指定元素后触发</p>
      <div class="code">
        <h3>1、基础提示框</h3>
        <p><span class="red">注意：</span>tooltip类使用position:relative,提示文本需要设置定位值position:absolute。
          <br />tooltiptext类用于实际的提示文本。模式是隐藏的，在鼠标移动到元素显示。设置了一些宽度、背景色、字体色等样式。
          <br />CSS3 border-radius 属性用于为提示框添加圆角。
          <br />:hover 选择器用于在鼠标移动到到指定元素div上时显示的提示。</p>
        <div class="bs-tooltip">鼠标移动到此处，查看提示文本
          <span class="bs-tooltip-text">这是提示文本</span>
        </div>
        <h3>2、显示在左或右侧</h3>
        <div class="bs-tooltip">鼠标移动到此处，提示文本在左侧
          <span class="bs-tooltip-text" style="top:-5px;right:105%;">这是提示文本</span>
        </div>
        <br />
        <br />
        <div class="bs-tooltip">鼠标移动到此处，提示文本在右侧
          <span class="bs-tooltip-text" style="top:-5px;left:105%;">这是提示文本</span>
        </div>
        <h3>3、显示在顶或底部</h3>
        <div class="bs-tooltip">鼠标移动到此处，提示文本在顶侧
          <span class="bs-tooltip-text bs-tooltip-text-top">这是提示文本</span>
        </div>
        <br />
        <br />
        <div class="bs-tooltip">鼠标移动到此处，提示文本在底侧
          <span class="bs-tooltip-text bs-tooltip-text-bottom">这是提示文本</span>
        </div>
        <h3>4、添加箭头</h3>
        <div class="bs-tooltip">鼠标移动到此处，提示文本在顶侧,有箭头
          <span class="bs-tooltip-text bs-tooltip-text-top bs-top-arrow">这是提示文本</span>
        </div>
        <br />
        <br />
        <div class="bs-tooltip">鼠标移动到此处，提示文本在底侧,有箭头
          <span class="bs-tooltip-text bs-tooltip-text-bottom bs-bottom-arrow">这是提示文本</span>
        </div>
        <br />
        <br />
        <div class="bs-tooltip">鼠标移动到此处，提示文本在左侧,有箭头
          <span class="bs-tooltip-text bs-left-arrow" style="top:-5px;right:105%;">这是提示文本</span>
        </div>
        <br />
        <br />
        <div class="bs-tooltip">鼠标移动到此处，提示文本在右侧,有箭头
          <span class="bs-tooltip-text bs-right-arrow" style="top:-5px;left:105%;">这是提示文本</span>
        </div>
        <h3>5、淡入淡出的效果</h3>
        <div class="bs-tooltip">鼠标移动到此处，提示文本在顶侧,有箭头,有效果
          <span class="bs-tooltip-text bs-tooltip-text-top bs-top-arrow bs-tooltip-transition">这是提示文本</span>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');
@import url('../../style/left_bar.css');
@import url('../../style/top_bar.css');

.bs-dropdown {
  position: relative;
  display: inline-block;
}

.bs-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
}

.bs-dropdown:hover .bs-dropdown-content {
  display: block;
}

/* 容器 <div> - 需要定位下拉内容 */
.btn-dropdown {
  position: relative;
  display: inline-block;
}

/* 下拉按钮样式 */
.btn-dropitem {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 0.4rem;
  border: none;
  cursor: pointer;
}

/* 下拉内容 (默认隐藏) */
.btn-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2)
}

/* 下拉菜单的链接 */
.btn-dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* 鼠标移上去后修改下拉菜单链接颜色 */
.btn-dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* 在鼠标移上去后显示下拉菜单 */
.btn-dropdown:hover .btn-dropdown-content {
  display: block;
}

/* 当下拉内容显示后修改下拉按钮的背景颜色 */
.btn-dropdown:hover .btn-dropitem {
  background-color: #3e8e41;
}

/*导航栏的下拉*/
#bar_ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

#bar_ul li {
  float: left;
}

#bar_ul li a,
.bar-dropbtn {
  display: inline-block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

#bar_ul a:hover,
.bar-dropdown:hover,
.bar-dropbtn {
  background-color: #111;
}

.bar-dropdown {
  display: inline-block;
}

.bar-dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

#bar_ul .bar-dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

#bar_ul .bar-dropdown-content a:hover {
  background-color: #f1f1f1;
}

.bar-dropdown:hover .bar-dropdown-content {
  display: block;
}

.bs-tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}

.bs-tooltip .bs-tooltip-text {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;

  /* 定位 */
  position: absolute;
  z-index: 1;
}

.bs-tooltip:hover .bs-tooltip-text {
  visibility: visible;
  opacity: 1;
}

.bs-tooltip-text-top {
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}

.bs-tooltip-text-bottom {
  width: 120px;
  top: 100%;
  left: 50%;
  margin-left: -60px;
}

.bs-top-arrow::after {
  content: " ";
  position: absolute;
  /* 提示工具顶部 */
  left: 50%;
  top: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: black transparent transparent transparent;
}

.bs-bottom-arrow::after {
  content: " ";
  position: absolute;
  /* 提示工具底部 */
  left: 50%;
  bottom: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}

.bs-left-arrow::after {
  content: " ";
  position: absolute;
  /* 提示工具左侧 */
  top: 50%;
  left: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent black;
}

.bs-right-arrow::after {
  content: " ";
  position: absolute;
  /* 提示工具左侧 */
  top: 50%;
  right: 100%;
  margin-top: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent black transparent transparent;
}

.bs-tooltip-transition {
  opacity: 0;
  transition: opacity 2s;
}

</style>
<script>
export default {
  name: 'CssBasic7B',
  data() {
    return {
      title: 'CSS基础--导航、下拉、提示'
    }
  }
}

</script>
