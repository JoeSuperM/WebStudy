<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、组件基础</h1>
      <h2>基本示例</h2>
      <p>组件是可复用的 Vue 实例，且带有一个名字，我们可以在一个通过new Vue创建的Vue根实例中，把这个组件作为自定义元素来使用</p>
      <div class="code">
        <h3>1、创建一个vue文件，如ButtonCounter.vue</h3>
        <h3>2、增加如下代码，实现组件内容</h3>
        <p>
          &#60;template&#62;<br />
          &#160;&#60;div&#62;<br />
          &#160;&#160;&#60;label&#62;点击按钮试试效果【{ {count} }】&#60;/label&#62;<br />
          &#160;&#160;&#60;button v-on:click="count++"&#62;You clicked me { { count } } times.&#60;/button&#62;<br />
          &#160;&#60;/div&#62;<br />
          &#60;/template&#62;<br />
          &#60;script type="text/javascript"&#62;<br />
          export default {<br />
          &#160;name: 'button-counter',<br />
          &#160;data() {<br />
          &#160;&#160;return {<br />
          &#160;&#160;&#160;count: 0<br />
          &#160;&#160;}<br />
          &#160;}<br />
          }<br />
          &#60;/script&#62;
        </p>
        <h3>3、在需要使用的页面导入该组件</h3>
        <p>导入组件，import ButtonCounter from "../views/ButtonCounter";</p>
        <p><span class="red">注意：</span>后续使用的组件，采用<b>驼峰命名加短横杠</b>的import内容，跟vue文件内的名称无关。如上述应使用button-counter来定义该组件</p>
        <p>加入组件，components: { ButtonCounter }</p>
        <h3>4、直接通过&#60;button-counter&#62;&#60;/button-counter&#62;使用组件</h3>
        <button-counter></button-counter>
        <h3>5、组件复用，类似于自定义组件，可多次使用</h3>
        <p>当点击按钮时，每个组件都会各自独立维护它的count。因为你每用一次组件，就会有一个它的新实例被创建。</p>
        <div>
          <button-counter></button-counter>
          <button-counter></button-counter>
          <button-counter></button-counter>
        </div>
      </div>
      <h3>data必须是一个函数</h3>
      <p>一个组件的<b>data选项必须是一个函数</b>，因此每个实例可以维护一份被返回对象的独立的拷贝,而不是直接提供一个对象。</p>
      <h2>通过prop向子组件传递数据，即自定义属性</h2>
      <p>Prop是你可以在组件上注册的一些自定义属性。当一个值传递给一个prop属性的时候，它就变成了那个组件实例的一个property。一个组件默认可以拥有任意数量的prop，任何值都可以传递给任何prop。</p>
      <div class="code">
        <h3>代码示例</h3>
        <p>
          Vue.component('blog-post', {<br />
          &#160;&#160;props: ['title'],<br />
          &#160;&#160;template: '&#60;h3&#62;{ { title } }&#60;/h3&#62;'<br />
          })
        </p>
        <h3>使用该组件</h3>
        <p>&#60;blog-post <b>title</b>="My journey with Vue"&#62;&#60;/blog-post&#62;</p>
        <hr />
        <blog-post title="My journey with Vue"></blog-post>
        <blog-post title="Blogging with Vue"></blog-post>
        <blog-post title="Why Vue is so fun"></blog-post>
        <h3>动态传递prop数据</h3>
        <p>&#60;blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title"/&#62;</p>
        <hr />
        <blog-post v-for="post in posts" v-bind:key="post.id" v-bind:title="post.title" />
      </div>
      <h2>单个根元素</h2>
      <p>每个组件必须只有一个根元素,如果存在多个子元素组合的情况，可以将模板的内容包裹在一个父元素内。</p>
      <p>当组件变得越来越复杂后，再通过动态绑定的方式会变得很麻烦，此时可通过接收一个对象的方式重构组件</p>
      <div class="code">
        <h3>代码示例</h3>
        <p>
          Vue.component('blog-post', {<br />
          &#160;props: ['post'],<br />
          &#160;template: `<br />
          &#160;&#160;&#60;div&#62;<br />
          &#160; &#160; &#160;&#60;h3&#62;{ { post.title } }&#60;/h3&#62;<br />
          &#160; &#160; &#160; &#60;p&#62;{ {post.content} }&#60;/p&#62;<br />
          &#160;&#160; &#60;/div&#62;<br />
          &#160; `})
        </p>
        <h3>使用该组件</h3>
        <p>&#60;blog-post v-for="post in posts" v-bind:key="post.id" v-bind:post="post"/&#62;</p>
        <hr />
        <blog-post-obj v-for="post in posts" v-bind:key="post.id" v-bind:post="post"></blog-post-obj>
      </div>
      <h2>监听子组件事件</h2>
      <p>子组件的一些功能可能要求我们和父级组件进行沟通。通过子组件的$emit调用父组件指定方法，而父组件通过v-on指令指定处理逻辑</p>
      <div class="code">
        <h3>组件中通过调用内建的<b>$emit方法</b>并传入事件名称来触发一个事件</h3>
        <p>&#60;button <b>v-on:click="$emit</b>('enlargeText')"&#62;Enlarge text&#60;/button&#62;</p>
        <p>&#60;button <b>v-on:click="$emit</b>('smallText',2)"&#62;Small text&#60;/button&#62;</p>
        <h3>父级组件通过v-on指令来绑定子组件的事件</h3>
        <p>&#60;blog-post-event v-for="post in posts" v-bind:key="post.id" <b>v-on:enlargeText</b>="myEnlargeText"
          <b>v-on:smallText</b>="mySmallText" v-bind:post="post"/&#62;</p>
        <hr />
        <div v-bind:style="{ fontSize: postFontSize + 'px' }">
          <blog-post-event v-for="post in posts" v-bind:key="post.id" v-on:enlargeText="myEnlargeText" v-on:smallText="mySmallText" v-bind:post="post" />
        </div>
      </div>
      <h3>在组件上使用v-model指令</h3>
      <p>自定义事件也可以用于创建支持v-model的自定义输入组件。</p>
      <div class="code">
        <h3>子组件的定义如下</h3>
        <p>
          Vue.component('custom-input', {<br />
          &#160; props: ['value'],<br />
          &#160; template: `<br />
          &#160;&#160; &#60;<b>input v-bind:value="value"</b> <br />
          &#160;&#160;&#160;<b>v-on:input="$emit('input', $event.target.value)"</b>&#62;`<br />
          }) </p>
        <h3>直接绑定数据</h3>
        <p>&#60;custom-input v-model="inputText" /&#62;</p>
        <hr />
        <custom-input v-model="inputText" />
        <label>您输入的内容为：{{inputText}}</label>
      </div>
      <p><span class="red">注意：</span>为了让子组件正常工作，这个组件内的input必须：<br />
        <b>将其value属性绑定到一个名叫value的prop上.</b><br />
        <b>在其input事件被触发时，将新的值通过自定义的input事件抛出</b>
      </p>
      <h2>通过插槽分发内容</h2>
      <p>和HTML元素一样，我们经常需要向一个组件传递内容,可以在子组件中定义插槽&#60;slot&#62;&#60;/slot&#62;来实现</p>
      <h2>动态组件-is属性</h2>
      <p>通过Vue的component元素加一个特殊的is属性来实现在不同组件之间进行动态切换，同时对于某些限制元素，可以通过is来实现。如&#60;table&#62;&#60;tr is="blog-post-row"&#62;&#60;/tr&#60;/table&#62;</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
//导入自定义组件
import ButtonCounter from "../views/ButtonCounter";
import BlogPost from "../views/BlogPost";
import BlogPostObj from "../views/BlogPostObj";
import BlogPostEvent from "../views/BlogPostEvent";
import CustomInput from "../views/CustomInput"

export default {
  name: 'VueBasic5',
  data() {
    return {
      title: 'Vue基础--组件基础',
      postFontSize: 15,
      inputText: 'Hello',
      posts: [
        { id: 1, title: 'My journey with Vue', content: '这是博客的内容1' },
        { id: 2, title: 'Blogging with Vue', content: '这是博客的内容2' },
        { id: 3, title: 'Why Vue is so fun', content: '这是博客的内容3' }
      ]
    }
  },
  methods: {
    myEnlargeText: function() {
      this.postFontSize += 1;
    },
    mySmallText: function(size) {
      this.postFontSize -= size;
    }
  },
  components: { ButtonCounter, BlogPost, BlogPostObj, BlogPostEvent, CustomInput }
}

</script>
