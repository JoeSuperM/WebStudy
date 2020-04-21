<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS选择器</h1>
      <h2>1、元素选择器(类型选择器)</h2>
      <p>最常见的 CSS 选择器是元素选择器。文档的元素就是最基本的选择器。</p>
      <div class="code">
        <p>
          html { color:black; }<br />
          em { color: red; }
        </p>
        <em>这是演示元素选择器【em { color: red; }】</em>
      </div>
      <h2>2、选择器分组</h2>
      <p>将多个选择器名称通过<span class="red">逗号(,)</span>分割后进行分组，可以将任意多个选择器分组在一起。</p>
      <div class="code">
        <p>
          h2, p { color:gray; }<br />
          或<br />
          body, h2, p, table, th, td, pre, strong, em { color:gray; }
        </p>
      </div>
      <h2>3、通配符选择器</h2>
      <p>CSS2引入了一种新的简单选择器 - 通配选择器（universal selector），显示为一个<span class="red">星号(*)</span>。该选择器可以与任何元素匹配，就像是一个通配符。</p>
      <div class="code">
        * {color:red;}
      </div>
      <h2>4、派生选择器(后代选择器)</h2>
      <p>通过依据元素在其位置的上下文关系来定义样式，规则左边的选择器一端包括两个或多个用空格分隔的选择器。通过<span class="red">空格( )</span>来组装不同的元素</p>
      <div class="code">
        <p>
          //列表中的strong元素变为斜体字<br />
          li strong { font-style: italic; font-weight: normal; }
        </p>
        <ul>
          <li><strong>这是列表的strong条目</strong></li>
          <li>这是列表的普通条目</li>
        </ul>
      </div>
      <h2>5、ID选择器</h2>
      <p>id选择器可以为标有特定id的HTML元素指定特定的样式。通过<span class="red">井号(#)</span>来实现</p>
      <div class="code">
        <p>
          #red {color:red;}<br />
          #green {color:green;}
        </p>
        <p id="red">这是演示ID选择器(id=red)</p>
        <p id="green">这是演示ID选择器(id=green)</p>
      </div>
      <h2>6、类选择器</h2>
      <p>类型选择器可以为特定的class来指定特定的样式，通过<span class="red">点号(.)</span>来实现</p>
      <p>类选择器可以结合元素选择器来使用。</p>
      <p>多类型选择器，在HTML中，一个class值中可能包含一个词列表，各个词之间用空格分隔。</p>
      <div class="code">
        <p>
          .cls { text-align: center; color: blue; }<br />
          //结合元素选择器，多类型选择器<br />
          p.important{ font-style: italic; font-size: 20px; }<br />
          //两个类选择器链接在一起，匹配同时包含<br />
          .important.urgent {background:silver;}
        </p>
        <p class="cls">这是演示类选择器的效果(class=cls)</p>
        <p class="important cls">这是演示多类型选择器(class=cls important)</p>
        <p class="important cls urgent">这是类选择器链接的效果(class=important cls urgent)</p>
      </div>
      <h3>类选择器还是ID选择器的选择？</h3>
      <div class="warn">
        <h4>ID选择器只能在同一个文档中使用一次，而类选择器可以使用多次</h4>
        <h4>ID选择器不能使用列表，而类选择器可以通过空格指定多个类名</h4>
        <h4>ID选择器可以包含更多更精确的含义，而类型选择器则可包含的信息较为模糊</h4>
        <h4>类选择器和ID选择器可能是区分大小写的,类和ID值的大小写必须与文档中的相应值匹配。</h4>
      </div>
      <h2>7、属性选择器</h2>
      <p>对带有指定属性的HTML元素设置样式。通过<span class="red">中括号([])</span>来实现</p>
      <div class="code">
        <h4>(1)包含特定属性的所有元素设置样式。</h4>
        <p>
          [title] { color: blue; }
        </p>
        <p title="Title">这是演示Title属性选择器</p>
        <h4>(2)包含title属性特定值的所有元素设置样式。</h4>
        <p>
          [title=Joe] { color: silver; }
        </p>
        <p title="Joe">这是演示Title属性特定值效果</p>
        <h4>(3)包含指定值的title属性的所有元素设置样式。适用于由空格分隔的属性值：</h4>
        <p>
          [title~=joe] { color: green; }
        </p>
        <p title="joe super man">这是演示Title属性包含效果</p>
        <h4>(4)带有包含指定值的lang属性的所有元素设置样式。适用于由连字符分隔的属性值:</h4>
        <p>
          [lang|=en] { color: red; }
        </p>
        <p lang="en">这是演示lang属性效果(lang=en)</p>
        <p lang="en-us">这是演示lang属性效果(lang=en-us)</p>
        <h4>(5)简单属性选择器含义</h4>
        <p>
          //只对有 href 属性的锚（a 元素）应用样式<br />
          a[href] {color:red;}<br />
          //将同时有 href 和 title 属性的 HTML 超链接的文本设置为红色<br />
          a[href][title] {color:red;}<br />
          //可以对所有带有 alt 属性的图像应用样式，从而突出显示这些有效的图像<br />
          img[alt] {border: 5px solid red;}
        </p>
      </div>
      <br />
      <table border="1" cellpadding="5" cellspacing="0">
        <option class="center">属性选择器参考手册</option>
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>选择器</th>
          <th>描述</th>
        </tr>
        <tr v-for="attr in attrs" :key="attr.name">
          <td width="200">{{attr.name}}</td>
          <td>{{attr.desc}}</td>
        </tr>
      </table>
      <h2>8、子元素选择器</h2>
      <p>子元素选择器（Child selectors）只能选择作为某元素子元素的元素。通过<span class="red">大于号(>)</span>来实现</p>
      <div class="code">
        <p>
          //选择作为 h1 元素子元素的所有strong元素<br />
          h1 &#60; strong
        </p>
      </div>
      <h2>9、相邻兄弟选择器</h2>
      <p>相邻兄弟选择器（Adjacent sibling selector）可选择紧接在另一元素后的元素，且二者有相同父元素。通过<span class="red">加号(+)</span>来实现</p>
      <div class="code">
        <p> //紧接在 h1 元素后出现的段落的上边距<br />
          h1 + p {margin-top:50px;}
        </p>
      </div>
      <h2>10、伪类与伪元素</h2>
      <p>CSS 伪类用于向某些选择器添加特殊的效果。通过<span class="red">冒号(:)</span>来实现<br />
        伪类语法：selector : pseudo-class {property: value}
      </p>
      <div class="code">
        <h3>锚伪类</h3>
        <p>a:link {color: #FF0000} /* 未访问的链接 */<br />
          a:visited {color: #00FF00} /* 已访问的链接 */<br />
          a:hover {color: #FF00FF} /* 鼠标移动到链接上 */<br />
          a:active {color: #0000FF} /* 选定的链接 */
        </p>
        <a id="link" href="https://www.baidu.com/" target="_blank">这是一个演示伪锚类的链接</a>
        <p><span class="red">注意：a:hover必须被置于a:link和a:visited之后，才是有效的。<br />
            a:active必须被置于a:hover 之后，才是有效的。</span>
        </p>
        <h3>first-child伪类</h3>
        <p>使用:first-child 伪类来选择元素的第一个子元素。<br />
          li:first-child {text-transform:uppercase;}//列表第一个子元素的所有li元素变成大写
        </p>
        <ul id="list">
          <li>这是第一个演示first-child条目（Hello One）</li>
          <li>这是第二个演示first-child条目（Hello Two</li>
        </ul>
        <h3>lang伪类</h3>
        <p>:lang伪类使你有能力为不同的语言定义特殊的规则。<br />
          q:lang(no) { quotes: &#34;【&#34; &#34;】&#34; }
        </p>
        <p>演示lang伪类的使用方法<q lang="no">段落中的引用的文字</q>其他文字</p>
      </div>
      <p>CSS伪元素用于向某些选择设置特殊效果。通过<span class=器"red">冒号(:)</span>来实现<br />
        伪元素语法：selector:pseudo-element {property:value;}
      </p>
      <div class="code">
        <h3>first-line伪元素</h3>
        <p>用于向文本的首行设置特殊样式。<br />
          p:first-line { color:#ff0000; font-variant:small-caps; }
        </p>
        <p id="first-line">You can use the :first-line pseudo-element to add a special effect to the first line of a text!
        </p>
        <p>可应用于 "first-line" 伪元素：font、color、background、word-spacing、letter-spacing、text-decoration、vertical-align、text-transform、line-height、clear
        </p>
        <h3>first-letter伪元素</h3>
        <p>用于向文本的首字母设置特殊样式。<br />
          p:first-letter { color:#ff0000; font-size:xx-large; }
        </p>
        <p id="first-letter">
          You can use the :first-letter pseudo-element to add a special effect to the first letter of a text!
        </p>
        <p>可应用于 "first-letter" 伪元素：font、color、background、margin、padding、border、text-decoration、vertical-align (仅当 float 为 none 时)、text-transform、line-height、float、clear</p>
        <h3>before伪元素</h3>
        <p>可以在元素的内容前面插入新内容。<br />
          h1:before { content:url(eg_cute.gif); }
        </p>
        <h4 id="before">这是一个演示before伪元素的标题</h4>
        <h3>after伪元素</h3>
        <p>可以在元素的内容之后插入新内容。<br />
          h1:after { content:url(eg_cute.gif); }
        </p>
        <h4 id="after">这是一个演示after伪元素的标题</h4>
        <h3 class="center"><span class="red">！！！！特别注意:伪类或伪元素的冒号之间不能有空格！！！！</span></h3>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

/*元素选择器*/
em {
  color: red;
}

/*派生选择器*/
li strong {
  font-style: italic;
  font-weight: normal;
}

/*ID选择器*/
#red {
  color: red;
}

#green {
  color: green;
}

/*类型选择器*/
.cls {
  text-align: center;
  color: blue;
}

p.important {
  font-style: italic;
  font-size: 20px;
}

.important.urgent {
  background: silver;
}

/*属性选择器*/
[title] {
  color: blue;
}

[title=Joe] {
  color: silver;
}

[title~=joe] {
  color: green;
}

[lang|=en] {
  color: red;
}

/*伪类*/
a#link:link {
  color: #FF0000
}

a#link:visited {
  color: #00FF00
}

a#link:hover {
  color: #FF00FF
}

a#link:active {
  color: #0000FF
}

#list>li:first-child {
  text-transform: uppercase;
  color: blue;
}

q:lang(no) {
  quotes: "【""】"
}

/*伪元素*/
p#first-line:first-line {
  color: #ff0000;
  font-variant: small-caps;
}

p#first-letter:first-letter {
  color: #ff0000;
  font-size: xx-large
}

h4#before:before {
  content: url(../../assets/eg_cute.gif);
}

h4#after:after {
  content: url(../../assets/eg_cute.gif);
}

</style>
<script>
export default {
  name: 'CssBasic2',
  data() {
    return {
      title: 'CSS基础-选择器',
      attrs: [{
          name: '[attribute]',
          desc: '用于选取带有指定属性的元素。'
        },
        {
          name: '[attribute=value]',
          desc: '用于选取带有指定属性和值的元素。'
        },
        {
          name: '[attribute~=value]',
          desc: '用于选取属性值中包含指定词汇的元素。'
        },
        {
          name: '[attribute|=value]',
          desc: '用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。'
        },
        {
          name: '[attribute^=value]',
          desc: '匹配属性值以指定值开头的每个元素。'
        },
        {
          name: '[attribute$=value]',
          desc: '匹配属性值以指定值结尾的每个元素。'
        },
        {
          name: '[attribute*=value]',
          desc: '匹配属性值中包含指定值的每个元素。'
        }
      ]
    }
  }
}

</script>
