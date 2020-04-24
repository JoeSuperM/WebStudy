<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之分页</h1>
      <p>如果网站存在多个页面，就需要采用分页来为每个页面导航。常用的方式是采用列表+超链接的形式。</p>
      <h2>演示实际效果</h2>
      <div class="code">
        <h3>点击及鼠标悬停分页样式</h3>
        <ul class="page">
          <li><a href="http://www.baidu.com/">«</a></li>
          <li><a href="http://www.baidu.com/">1</a></li>
          <li><a href="http://www.baidu.com/">2</a></li>
          <li><a href="http://www.baidu.com/" class="active">3</a></li>
          <li><a href="http://www.baidu.com/">4</a></li>
          <li><a href="http://www.baidu.com/">5</a></li>
          <li><a href="http://www.baidu.com/">»</a></li>
        </ul>
        <h3>圆角分页样式</h3>
        <ul class="page round">
          <li><a href="http://www.baidu.com/">«</a></li>
          <li><a href="http://www.baidu.com/">1</a></li>
          <li><a href="http://www.baidu.com/">2</a></li>
          <li><a href="http://www.baidu.com/" class="active">3</a></li>
          <li><a href="http://www.baidu.com/">4</a></li>
          <li><a href="http://www.baidu.com/">5</a></li>
          <li><a href="http://www.baidu.com/">»</a></li>
        </ul>
        <h3>边框分页样式</h3>
        <ul class="page border">
          <li><a href="http://www.baidu.com/">«</a></li>
          <li><a href="http://www.baidu.com/">1</a></li>
          <li><a href="http://www.baidu.com/">2</a></li>
          <li><a href="http://www.baidu.com/" class="active">3</a></li>
          <li><a href="http://www.baidu.com/">4</a></li>
          <li><a href="http://www.baidu.com/">5</a></li>
          <li><a href="http://www.baidu.com/">»</a></li>
        </ul>
        <h3>圆角边框分页样式</h3>
        <ul class="page border r-border">
          <li><a href="http://www.baidu.com/">«</a></li>
          <li><a href="http://www.baidu.com/">1</a></li>
          <li><a href="http://www.baidu.com/">2</a></li>
          <li><a href="http://www.baidu.com/" class="active">3</a></li>
          <li><a href="http://www.baidu.com/">4</a></li>
          <li><a href="http://www.baidu.com/">5</a></li>
          <li><a href="http://www.baidu.com/">»</a></li>
        </ul>
        <h3>分页间隔与字体大小分页样式</h3>
        <ul class="page border r-border margin">
          <li><a href="http://www.baidu.com/">«</a></li>
          <li><a href="http://www.baidu.com/">1</a></li>
          <li><a href="http://www.baidu.com/">2</a></li>
          <li><a href="http://www.baidu.com/" class="active">3</a></li>
          <li><a href="http://www.baidu.com/">4</a></li>
          <li><a href="http://www.baidu.com/">5</a></li>
          <li><a href="http://www.baidu.com/">»</a></li>
        </ul>
        <h3>层级关系分页样式</h3>
        <ul class="level">
          <li><a href="http://www.baidu.com/">首页</a></li>
          <li><a href="http://www.baidu.com/">文章</a></li>
          <li><a href="http://www.baidu.com/">201205</a></li>
          <li><a href="http://www.baidu.com/">02</a></li>
          <li>当前的文章</li>
        </ul>
      </div>
      <h1>二、框大小</h1>
      <p>CSS3 box-sizing 属性可以设置width和height属性中包含了padding(内边距)和border(边框)。默认情况下(不使用box-sizing属性)，元素的宽度与高度计算方式如下:</p>
      <p><span class="red">width(宽) + padding(内边距) + border(边框) = 元素实际宽度</span></p>
      <p><span class="red">height(高) + padding(内边距) + border(边框) = 元素实际高度</span></p>
      <div class="code">
        <h3>演示两个同样大小的框效果(width=300,height=100)</h3>
        <div style="width:300px;height:100px;border:1px solid blue;">这个是个较小的框(width为300px,height为100px)</div>
        <br />
        <div style="width:300px;height:100px; padding:20px;border:1px solid blue;">这个是个较大的框(width为300px,height为100px,padding=20px)</div>
        <h3>演示box-sizing为border-box的情况</h3>
        <div style="width:300px;height:100px; padding:20px;border:1px solid blue; box-sizing:border-box;">这个是个较大的框(width为300px,height为100px,padding=20px)</div>
        <h3>演示box-sizing为content-box的情况</h3>
        <div style="width:300px;height:100px; padding:20px;border:1px solid blue; box-sizing:content-box;">这个是个较大的框(width为300px,height为100px,padding=20px)</div>
      </div>
      <h1>三、弹性盒子</h1>
      <p>CSS3弹性盒(Flexible Box或flexbox)，是一种当页面需要适应不同的屏幕大小以及设备类型时确保元素拥有恰当的行为的布局方式。<br />弹性盒子由弹性容器(Flex container)和弹性子元素(Flex item)组成。<br />
        弹性容器通过设置 display 属性的值为 flex 或 inline-flex将其定义为弹性容器。<br />
        弹性容器内包含了一个或多个弹性子元素。
      </p>
      <p><span class="red">注意：</span> 弹性容器外及弹性子元素内是正常渲染的。弹性盒子只定义了弹性子元素如何在弹性容器内布局。弹性子元素通常在弹性盒子内一行显示。默认情况每个容器只有一行。
      </p>
      <h2>flex-direction属性</h2>
      <p>flex-direction 属性指定了弹性子元素在父容器中的位置。</p>
      <p>语法：flex-direction: row | row-reverse | column | column-reverse </p>
      <dl>
        <dt>row</dt>
        <dd>横向从左到右排列（左对齐），默认的排列方式。</dd>
        <dt>row-reverse</dt>
        <dd>反转横向排列（右对齐，从后往前排，最后一项排在最前面。</dd>
        <dt>column</dt>
        <dd>纵向排列。</dd>
        <dt>column-reverse</dt>
        <dd>反转纵向排列，从后往前排，最后一项排在最上面。</dd>
      </dl>
      <h2>justify-content属性</h2>
      <p>内容对齐（justify-content）属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。</p>
      <p>语法：justify-content: flex-start | flex-end | center | space-between | space-around</p>
      <dl>
        <dt>flex-start</dt>
        <dd>弹性项目向行头紧挨着填充。这个是默认值。第一个弹性项的main-start外边距边线被放置在该行的main-start边线，而后续弹性项依次平齐摆放。</dd>
        <dt>flex-end</dt>
        <dd>弹性项目向行尾紧挨着填充。第一个弹性项的main-end外边距边线被放置在该行的main-end边线，而后续弹性项依次平齐摆放。</dd>
        <dt>center</dt>
        <dd>弹性项目居中紧挨着填充。（如果剩余的自由空间是负的，则弹性项目将在两个方向上同时溢出）。</dd>
        <dt>space-between</dt>
        <dd>弹性项目平均分布在该行上。如果剩余空间为负或者只有一个弹性项，则该值等同于flex-start。否则，第1个弹性项的外边距和行的main-start边线对齐，而最后1个弹性项的外边距和行的main-end边线对齐，然后剩余的弹性项分布在该行上，相邻项目的间隔相等。</dd>
        <dt>space-around</dt>
        <dd>弹性项目平均分布在该行上，两边留有一半的间隔空间。如果剩余空间为负或者只有一个弹性项，则该值等同于center。否则，弹性项目沿该行分布，且彼此间隔相等（比如是20px），同时首尾两边和弹性容器之间留有一半的间隔（1/2*20px=10px）。</dd>
      </dl>
      <img src="../../assets/justify-content.jpg" width="800" height="500">
      <h2>align-items属性</h2>
      <p>align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。</p>
      <p>语法：align-items: flex-start | flex-end | center | baseline | stretch</p>
      <dl>
        <dt>flex-start</dt>
        <dd>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</dd>
        <dt>flex-end</dt>
        <dd>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</dd>
        <dt>center</dt>
        <dd>弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</dd>
        <dt>baseline</dt>
        <dd>如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。</dd>
        <dt>stretch</dt>
        <dd>如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</dd>
      </dl>
      <h2>flex-warp属性</h2>
      <p>flex-wrap 属性用于指定弹性盒子的子元素换行方式。</p>
      <p>语法：flex-wrap: nowrap|wrap|wrap-reverse</p>
      <dl>
        <dt>nowrap</dt>
        <dd>默认，弹性容器为单行。该情况下弹性子项可能会溢出容器。</dd>
        <dt>wrap</dt>
        <dd>弹性容器为多行。该情况下弹性子项溢出的部分会被放置到新行，子项内部会发生断行</dd>
        <dt>wrap-reverse</dt>
        <dd>反转wrap排列。</dd>
      </dl>
      <h2>align-content属性</h2>
      <p>align-content 属性用于修改 flex-wrap 属性的行为。类似于align-items, 但它不是设置弹性子元素的对齐，而是设置各个行的对齐。</p>
      <p>语法：align-content: flex-start | flex-end | center | space-between | space-around | stretch</p>
      <dl>
        <dt>stretch</dt>
        <dd>默认。各行将会伸展以占用剩余的空间。</dd>
        <dt>flex-start</dt>
        <dd>各行向弹性盒容器的起始位置堆叠。</dd>
        <dt>flex-end</dt>
        <dd>各行向弹性盒容器的结束位置堆叠。</dd>
        <dt>center</dt>
        <dd>各行向弹性盒容器的中间位置堆叠。</dd>
        <dt>space-between</dt>
        <dd>各行在弹性盒容器中平均分布。</dd>
        <dt>space-around </dt>
        <dd>各行在弹性盒容器中平均
          分布，两端保留子元素与子元素之间间距大小的一半。</dd>
      </dl>
      <div class="code">
        <h3>演示flex-direction属性</h3>
        <div class="flex-container" v-bind:class="flexDirStyle">
          <div class="flex-item flex-width flex-height">Flex Item 1</div>
          <div class="flex-item flex-width flex-height">Flex Item 2</div>
          <div class="flex-item flex-width flex-height">Flex Item 3</div>
        </div>
        <div style="padding:10px;">
          <button v-on:click="flexDirection('row')">row</button>
          <button v-on:click="flexDirection('row-reverse')">row-reverse</button>
          <button v-on:click="flexDirection('column')">column</button>
          <button v-on:click="flexDirection('column-reverse')">column-reverse</button>
        </div>
        <h3>演示align-items属性</h3>
        <div class="flex-container" v-bind:class="flexAlignItemsStyle">
          <div class="flex-item flex-width">Flex Item 1</div>
          <div class="flex-item flex-width">Flex Item 2</div>
          <div class="flex-item flex-width">Flex Item 3</div>
        </div>
        <div style="padding:10px;">
          <button v-on:click="flexAlignItems('start')">flex-start</button>
          <button v-on:click="flexAlignItems('end')">flex-end</button>
          <button v-on:click="flexAlignItems('center')">center</button>
          <button v-on:click="flexAlignItems('baseline')">baseline</button>
          <button v-on:click="flexAlignItems('stretch')">stretch</button>
        </div>
        <h3>演示flex-wrap属性</h3>
        <div class="flex-container" v-bind:class="flexWrapStyle" style="width:300px;">
          <div class="flex-item flex-height flex-width">Flex Item 1</div>
          <div class="flex-item flex-height flex-width">Flex Item 2</div>
          <div class="flex-item flex-height flex-width">Flex Item 3</div>
        </div>
        <div style="padding:10px;">
          <button v-on:click="flexWarp('nowrap')">nowrap</button>
          <button v-on:click="flexWarp('wrap')">wrap</button>
          <button v-on:click="flexWarp('wrap-reverse')">wrap-reverse</button>
        </div>
        <h3>演示align-content属性</h3>
        <div class="flex-container flex-wrap-wrap" v-bind:class="flexAlignContentStyle" style="width:300px;height:300px;">
          <div class="flex-item flex-height flex-width">Flex Item 1</div>
          <div class="flex-item flex-height flex-width">Flex Item 2</div>
          <div class="flex-item flex-height flex-width">Flex Item 3</div>
        </div>
        <div style="padding:10px;">
          <button v-on:click="flexAlignContent('stretch')">stretch</button>
          <button v-on:click="flexAlignContent('start')">flex-start</button>
          <button v-on:click="flexAlignContent('end')">flex-end</button>
          <button v-on:click="flexAlignContent('center')">center</button>
          <button v-on:click="flexAlignContent('between')">space-between</button>
          <button v-on:click="flexAlignContent('around')">space-around</button>
        </div>
      </div>
      <h2>弹性子元素属性</h2>
      <h3>排序-order</h3>
      <p>order属性设置弹性容器内弹性子元素的属性,用整数值来定义排列顺序，数值小的排在前面。可以为负值。</p>
      <p> -webkit-order: -1;<br /> order: -1; </p>
      <h3>对齐-margin</h3>
      <p>设置"margin"值为"auto"值，自动获取弹性容器中剩余的空间。所以设置垂直方向margin值为"auto"，可以使弹性子元素在弹性容器的两上轴方向都完全居中。</p>
      <p>margin-right: auto;//将剩余空间放置在右侧<br />
        margin-left: auto;//将剩余空间放置在左侧<br />
        margin-top: auto;//将剩余空间放置在上侧<br />
        margin-bottom: auto;//将剩余空间放置在下侧<br />
        margin: auto;//居中对齐<br />
      </p>
      <h3>自身对齐-(align-self)</h3>
      <p>语法：align-self: auto | flex-start | flex-end | center | baseline | stretch</p>
      <dl>
        <dt>auto</dt>
        <dd>如果'align-self'的值为'auto'，则其计算值为元素的父元素的'align-items'值，如果其没有父元素，则计算值为'stretch'。</dd>
        <dt>flex-start</dt>
        <dd>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴起始边界。</dd>
        <dt>flex-end</dt>
        <dd>弹性盒子元素的侧轴（纵轴）起始位置的边界紧靠住该行的侧轴结束边界。</dd>
        <dt>center</dt>
        <dd>弹性盒子元素在该行的侧轴（纵轴）上居中放置。（如果该行的尺寸小于弹性盒子元素的尺寸，则会向两个方向溢出相同的长度）。</dd>
        <dt>baseline</dt>
        <dd>如弹性盒子元素的行内轴与侧轴为同一条，则该值与'flex-start'等效。其它情况下，该值将参与基线对齐。</dd>
        <dt>stretch</dt>
        <dd>如果指定侧轴大小的属性值为'auto'，则其值会使项目的边距盒的尺寸尽可能接近所在行的尺寸，但同时会遵照'min/max-width/height'属性的限制。</dd>
      </dl>
      <h3>空间分配-flex</h3>
      <p>flex 属性用于指定弹性子元素如何分配空间，相当于占比大小。</p>
      <div class="code">
        <h3>align-self属性</h3>
        <div class="flex-container">
          <div class="flex-item item1">flex-start</div>
          <div class="flex-item item2">flex-end</div>
          <div class="flex-item item3">center</div>
          <div class="flex-item item4">baseline</div>
          <div class="flex-item item5">stretch</div>
        </div>
        <h3>flex属性</h3>
        <div class="flex-container">
          <div class="flex-item item-flex-1">item-flex-1</div>
          <div class="flex-item item-flex-2">item-flex-2</div>
          <div class="flex-item item-flex-1">item-flex-1</div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

ul.page {
  display: inline-block;
  padding: 0;
  margin: 0;
}

ul.page li {
  display: inline;
}

ul.page li a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
}

ul.page li a.active {
  background-color: #4CAF50;
  color: white;
}

ul.page li a:hover:not(.active) {
  background-color: #ddd;
}

ul.round li a {
  border-radius: 5px;
}

ul.round li a:hover {
  border-radius: 5px;
}

ul.border li a {
  border: 1px solid #ddd;
}

ul.r-border li:first-child a {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

ul.r-border li:last-child a {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

ul.margin li a {
  margin: 0 2px;
  font-size: 18px;
}

ul.lever {
  padding: 8px 16px;
  list-style: none;
  background-color: #eee;
}

ul.level li {
  display: inline;
}

ul.level li+li:before {
  padding: 5px;
  color: black;
  content: "/\00a0";
}

ul.level li a {
  color: green;
}

.flex-container {
  display: -webkit-flex;
  display: flex;
  width: 400px;
  height: 250px;
  background-color: lightgrey;
}

.flex-item {
  background-color: cornflowerblue;
  margin: 10px;
}

.flex-width {
  width: 100px;
}

.flex-height {
  height: 100px;
}

.flex-dir-row {
  flex-direction: row;
  -webkit-flex-direction: row;
}

.flex-dir-row-reverse {
  flex-direction: row-reverse;
  -webkit-flex-direction: row-reverse;
}

.flex-dir-column {
  flex-direction: column;
  -webkit-flex-direction: column;
}

.flex-dir-column-reserse {
  flex-direction: column-reverse;
  -webkit-flex-direction: column-reverse;
}

.flex-align-items-start {
  align-items: flex-start;
  -webkit-align-items: flex-start;
}

.flex-align-items-end {
  align-items: flex-end;
  -webkit-align-items: flex-end;
}

.flex-align-items-center {
  align-items: center;
  -webkit-align-items: center;
}

.flex-align-items-baseline {
  align-items: baseline;
  -webkit-align-items: baseline;
}

.flex-align-items-stretch {
  align-items: stretch;
  -webkit-align-items: stretch;
}

.flex-wrap-wrap {
  flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
}

.flex-wrap-nowrap {
  flex-wrap: nowrap;
  -webkit-flex-wrap: nowrap;
}

.flex-wrap-wrap-reverse {
  flex-wrap: wrap-reverse;
  -webkit-flex-wrap: wrap-reverse;
}

.flex-align-content-start {
  align-content: flex-start;
  -webkit-align-content: flex-start;
}

.flex-align-content-end {
  align-content: flex-end;
  -webkit-align-content: flex-end;
}

.flex-align-content-center {
  align-content: center;
  -webkit-align-content: center;
}

.flex-align-content-around {
  align-content: space-around;
  -webkit-align-content: space-around;
}

.flex-align-content-between {
  align-content: space-between;
  -webkit-align-content: space-between;
}

.flex-align-content-stretch {
  align-content: stretch;
  -webkit-align-content: stretch;
}

.item1 {
  -webkit-align-self: flex-start;
  align-self: flex-start;
  min-height: 100px;
}

.item2 {
  -webkit-align-self: flex-end;
  align-self: flex-end;
  min-height: 100px;
}

.item3 {
  -webkit-align-self: center;
  align-self: center;
  min-height: 100px;
}

.item4 {
  -webkit-align-self: baseline;
  align-self: baseline;
  min-height: 100px;
}

.item5 {
  -webkit-align-self: stretch;
  align-self: stretch;
  min-height: 100px;
}

.item-flex-2 {
  -webkit-flex: 2;
  flex: 2;
}

.item-flex-1 {
  -webkit-flex: 1;
  flex: 1;
}

</style>
<script>
export default {
  name: 'CssBasic1',
  data() {
    return {
      title: 'CSS基础--分页、框、FlexBox',
      flexDirStyle: '',
      flexAlignItemsStyle: '',
      flexWrapStyle: '',
      flexAlignContentStyle: ''
    }
  },
  methods: {
    flexDirection: function(dir) {
      if (dir === "row") {
        this.flexDirStyle = 'flex-dir-row';
      } else if (dir === "row-reverse") {
        this.flexDirStyle = 'flex-dir-row-reverse';
      } else if (dir === "column") {
        this.flexDirStyle = 'flex-dir-column';
      } else if (dir === "column-reverse") {
        this.flexDirStyle = 'flex-dir-column-reserse';
      }
    },
    flexAlignItems: function(align) {
      if (align === 'start') {
        this.flexAlignItemsStyle = "flex-align-items-start";
      } else if (align === 'end') {
        this.flexAlignItemsStyle = "flex-align-items-end";
      } else if (align === 'center') {
        this.flexAlignItemsStyle = "flex-align-items-center";
      } else if (align == 'baseline') {
        this.flexAlignItemsStyle = "flex-align-items-baseline";
      } else if (align == 'stretch') {
        this.flexAlignItemsStyle = "flex-align-items-stretch";
      }
    },
    flexWarp: function(wrap) {
      if (wrap === 'wrap') {
        this.flexWrapStyle = 'flex-wrap-wrap';
      } else if (wrap === 'nowrap') {
        this.flexWrapStyle = 'flex-wrap-nowrap';
      } else if (wrap === 'wrap-reverse') {
        this.flexWrapStyle = 'flex-wrap-reverse';
      }
    },
    flexAlignContent: function(align) {
      if (align === 'start') {
        this.flexAlignContentStyle = "flex-align-content-start";
      } else if (align === 'end') {
        this.flexAlignContentStyle = "flex-align-content-end";
      } else if (align === 'center') {
        this.flexAlignContentStyle = "flex-align-content-center";
      } else if (align === 'stretch') {
        this.flexAlignContentStyle = "flex-align-content-stretch";
      } else if (align === 'between') {
        this.flexAlignContentStyle = "flex-align-content-between";
      } else if (align === 'around') {
        this.flexAlignContentStyle = "flex-align-content-around";
      }
    }
  }
}

</script>
