<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、Vue简介</h1>
      <p>Vue是一套用于构建用户界面的渐进式框架。Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
      <h2>安装导入Vue.js的支持</h2>
      <div class="code">
        <p>&#60;!-- 开发环境版本，包含了有帮助的命令行警告 --&#62;<br />
          &#60;script src=&#34;https://cdn.jsdelivr.net/npm/vue/dist/vue.js&#34;&#62;&#60;/script&#62;
        </p>
        <p>&#60;!-- 生产环境版本，优化了尺寸和速度 --&#62;<br />
          &#60;script src=&#34;https://cdn.jsdelivr.net/npm/vue&#34;&#62;&#60;/script&#62;
        </p>
      </div>
      <h2>声明式渲染</h2>
      <p>Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进DOM的系统</p>
      <div class="code">
        <h3>文本插值--通过双括号实现</h3>
        <p>这是通过双括号{ {text} }插入的信息：{{text}}。</p>
        <h3>属性差值--通过v-bind指令实现</h3>
        <p v-bind:title="bindTitle">鼠标悬停几秒钟查看此处动态绑定的提示信息！</p>
        <h3>条件渲染--通过v-if指令实现</h3>
        <p v-if="seen">现在组件可以显示了。</p>
        <button v-on:click="changeSeen">点击改变组件显示状态</button>
        <h3>循环渲染--通过v-for指令实现</h3>
        <ol>
          <li v-for="item in items" v-bind:key="item">{{item}}</li>
        </ol>
        <button v-on:click="addItem">点击添加条目</button>
        <h3>处理用户输入-v-model双向绑定</h3>
        <p>{{inputText}}</p>
        <input type="text" placeholder="输入点内容试试！" v-model="inputText" />
      </div>
      <h1>二、Vue实例</h1>
      <p>每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始.</p>
      <h2>数据与方法</h2>
      <p>当一个Vue实例被创建时，它将data对象中的所有的属性加入到Vue的响应式系统中。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。</p>
      <p><span class="red">注意：</span>只有当实例被创建时就已经存在于data中的属性才是响应式的。后期增加的属性不会触发视图更新。</p>
      <div class="code">
        <p>//数据对象<br />var myData = {a : 1}</p>
        <p>//将该数据对象放入Vue实例中<br />var vm = new Vue({data : myData})</p>
        <p>访问上述的数据对象方法：</p>
        <p>//返回数据源中对应的字段<br />vm.a == myData.a //==>true</p>
        <p>//设置属性也会影响到原始数据<br />vm.a = 2<br /> myData.a //==>2</p>
        <p>//反之亦然<br /> myData.a = 3<br /> vm.a //==>3</p>
      </div>
      <p><span class="red">例外：</span>Object.freeze()方法会阻止修改现有的属性，也意味着响应系统无法再追踪变化。</p>
      <div class="code">
        <p>var obj = {foo : 'bar'}</p>
        <p><span class="red">Object.freeze(obj)</span></p>
        <p>new Vue({el:'#app', data:obj})</p>
        <p>后续修改obj.foo，页面视图不会更新</p>
      </div>
      <h2>实例属性和方法</h2>
      <p>它们都有前缀$，以便与用户定义的属性区分开来。</p>
      <div class="code">
        <p>var myData = {a : 1}</p>
        <p>var wm = new Vue({el:'#id', data:myData})</p>
        <p>//访问data<br />vm.$data === myData //==>true</p>
        <p>//访问属性<br /> vm.$el === document.getElementById('id') //===>true</p>
        <p>//实例方法$watch <br /> vm.$watch('a', function(newValue, oldValue){<br />
          //这个回调将在'vm.a'改变后调用<br />
          })</p>
      </div>
      <h2>生命周期钩子函数</h2>
      <p>每个Vue实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到DOM并在数据变化时更新DOM等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。
      </p>
      <img src="../../assets/lifecycle.png" width="600">
      <h1>三、模板语法</h1>
      <p>Vue.js 使用了基于 HTML 的模板语法，允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。所有 Vue.js 的模板都是合法的 HTML，所以能被遵循规范的浏览器和 HTML 解析器解析。
      </p>
      <p>在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统，Vue能够智能地计算出最少需要重新渲染多少组件，并把 DOM 操作次数减到最少。</p>
      <h2>插值</h2>
      <h3>文本--“Mustache”语法(双大括号)</h3>
      <p>Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。</p>
      <p><span class="red">注意：</span>通过使用v-once指令，也能执行一次性地插值，当数据改变时，插值处的内容不会更新。这可能会影响其他数据的绑定</p>
      <div class="code">
        <p>&#60;span&#62; Message : { { msg } }&#60;/span&#62; <br />
          &#60;span v-once&#62;这个将不会改变：{ { msg } }&#60;/span&#62;
        </p>
      </div>
      <h3>原始HTML,v-html指令</h3>
      <p>双大括号会将数据解释为普通文本，而非HTML代码。为了输出真正的HTML，你需要使用v-html指令</p>
      <div class="code">
        <h4>使用双括号语法：</h4>
        <p>&#60;p&#62;Using mustaches: { { rawHtml } }&#60;/p&#62;</p>
        <p>Using mustaches: {{ rawHtml }}</p>
        <h4>使用v-html指令</h4>
        <p>&#60;p&#62;Using v-html directive: &#60;span v-html="rawHtml"/&#62;&#60;/p&#62;</p>
        <p>Using v-html directive: <span v-html="rawHtml" /></p>
      </div>
      <h3>属性Attribute,v-bind指令</h3>
      <p>Mustache 语法不能作用在HTML attribute 上,而只能使用v-bind指令</p>
      <div class="code">
        <p>&#60;div v-bind:id=&#34;dynamicId&#34;/&#62;</p>
        <h4>对于布尔属性，只要存在则意味着值为真，只有当值为null，undefined或false时，才认为是假</h4>
        <p>&#60;button v-bind:disabled=&#34;isButtonDisabled&#34;&#62;这是演示button的可用状态&#60;/button&#62;
        </p>
        <div class="btn">
          <button v-bind:disabled="isButtonDisabled">这是演示button的可用状态</button>
          <br />
          <button v-on:click="changeBtnDisabled(null)">isButtonDisabled=null</button>
          <br />
          <button v-on:click="changeBtnDisabled(undefined)">isButtonDisabled=undefined</button>
          <br />
          <button v-on:click="changeBtnDisabled(false)">isButtonDisabled=false</button>
          <br />
          <button v-on:click="changeBtnDisabled('')">isButtonDisabled=''</button>
          <br />
          <button v-on:click="changeBtnDisabled(true)">isButtonDisabled=true</button>
          <br />
          <button v-on:click="changeBtnDisabled('joe')">isButtonDisabled='joe'</button>
        </div>
      </div>
      <h3>使用JavaScript表达式</h3>
      <p>对于所有的数据绑定，Vue.js都提供了完全的JavaScript表达式支持。每个绑定都只能包含单个表达式，</p>
      <div class="code">
        <p>{ { number + 1 } }</p>
        <p>{ { ok ? 'YES' : 'No' } }</p>
        <p>{ { message.split(' ').reverse().join(' ') } }</p>
        <p>&#60;div v-bind:id=&#34;'list-' + id&#34;/&#62;</p>
      </div>
      <p><span class="red">注意：</span>模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如Math和Date。你不应该在模板表达式中试图访问用户定义的全局变量。
      </p>
      <h2>指令</h2>
      <p>指令(Directives)是带有v-前缀的特殊attribute。指令attribute的值预期是单个JavaScript表达式 (v-for是例外情况)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM。</p>
      <h3>参数</h3>
      <p>一些指令能够接收一个“参数”，在指令名称之后以冒号表示。如：v-bind:href="param",v-on:click="click"等</p>
      <h3>动态参数</h3>
      <p>从2.6.0开始，可以用方括号括起来的JavaScript表达式作为一个指令的参数。如：v-bind:[attrName]="url", v-on:[methodName]="doSomeThing".</p>
      <p>上述的AttrName会被作为一个JavaScript表达式进行动态求值，求得的值将会作为最终的参数来使用。如attrName="href"，则相当于v-bind:href="url".</p>
      <p><span class="red">注意：</span>动态参数预期会求出一个字符串，异常情况下值为null。这个特殊的null值可以被显性地用于移除绑定。任何其它非字符串类型的值都将会触发一个警告。</p>
      <p><span class="red">注意：</span>动态参数表达式有一些语法约束，因为某些字符，如空格和引号，放在HTML属性名里是无效的。变通的方法是使用没有空格或引号的表达式，或用计算属性替代这种复杂表达式。</p>
      <div class="code">
        <p>&#60;!-- 这会触发一个编译警告 --&#62;<br />
          &#60;a v-bind:['foo' + bar]=&#34;value&#34;&#62; ... &#60;/a&#62;</p>
      </div>
      <p><span class="red">注意：</span>在DOM中使用模板时，还需要避免使用大写字符来命名键名，因为浏览器会把属性名全部强制转为小写。</p>
      <div class="code">
        <p>&#60;!--<br>/
          在 DOM 中使用模板时这段代码会被转换为 `v-bind:[someattr]`。<br />
          除非在实例中有一个名为“someattr”的 property，否则代码不会工作。<br />
          --&#62;<br />
          &#60;a v-bind:[someAttr]=&#34;value&#34;&#62; ... &#60;/a&#62;</p>
      </div>
      <h2>修饰符</h2>
      <p>修饰符(modifier)是以半角句号.指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。</p>
      <p>如，.prevent修饰符告诉v-on指令对于触发的事件调用event.preventDefault()：</p>
      <p>&#60;form v-on:submit.prevent=&#34;onSubmit&#34;&#62;...&#60;/form&#62;</p>
      <h2>缩写</h2>
      <p>v- 前缀作为一种视觉提示，用来识别模板中 Vue 特定的 attribute。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，v- 前缀很有帮助</p>
      <h3>v-bind缩写==>冒号（:）</h3>
      <div class="code">
        &#60;!-- 完整语法 --&#62;<br />
        &#60;a v-bind:href=&#34;url&#34;&#62;...&#60;/a&#62;<br />
        <br />
        &#60;!-- 缩写 --&#62;<br />
        &#60;a :href=&#34;url&#34;&#62;...&#60;/a&#62;<br />
        <br />
        &#60;!-- 动态参数的缩写 (2.6.0+) --&#62;<br />
        &#60;a :[key]=&#34;url&#34;&#62; ... &#60;/a&#62;<br />
      </div>
      <h3>v-on缩写==>邮箱号（@）</h3>
      <div class="code">
        &#60;!-- 完整语法 --&#62;<br />
        &#60;a v-on:click=&#34;doSomething&#34;&#62;...&#60;/a&#62;<br />
        <br />
        &#60;!-- 缩写 --&#62;<br />
        &#60;a @click=&#34;doSomething&#34;&#62;...&#60;/a&#62;<br />
        <br />
        &#60;!-- 动态参数的缩写 (2.6.0+) --&#62;<br />
        &#60;a @[event]=&#34;doSomething&#34;&#62; ... &#60;/a&#62;<br />
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div.btn button {
  margin: 2px;
}

</style>
<script>
export default {
  name: 'VueBasic1',
  data() {
    return {
      title: 'Vue基础--简介、实例、模板语法',
      text: 'Hello Vue!',
      bindTitle: '页面加载于' + new Date().toLocaleString(),
      seen: true,
      items: ["这是列表条目A", "这是列表条目B", "这是列表条目C"],
      inputText: '默认内容',
      rawHtml: '<span style="color:red">This should be red.</span>',
      isButtonDisabled: '',
    }
  },
  methods: {
    changeSeen: function() {
      this.seen = !this.seen;
    },
    addItem: function() {
      this.items.push("这是新增的条目");
    },
    changeBtnDisabled: function(btnDisabled) {
      this.isButtonDisabled = btnDisabled;
    }
  }
}

</script>
