<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、条件渲染(v-if)</h1>
      <p>v-if指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回真值的时候被渲染。在2.1.0以后可以使用v-else-if添加多个else-if块。也可以用v-else添加一个“else块”</p>
      <div class="code">
        <pre>
          &#60;h1 <span class="red">v-if</span>="awesome"&#62;Vue is awesome!&#60;/h1&#62;
          &#60;h1 <span class="red">v-else-if</span>="holle"&#62;Vue is holle!&#60;/h1&#62;
          &#60;h1 <span class="red">v-else-if</span>="world"&#62;Vue is world!&#60;/h1&#62;
          &#60;h1 <span class="red">v-else</span>&#62;Vue is not awesome!&#60;/h1&#62;
        </pre>
      </div>
      <p>v-else元素必须紧跟在带v-if或者v-else-if的元素的后面，否则它将不会被识别。v-else-if也必须紧跟在带v-if或者v-else-if的元素之后。</p>
      <h2>在template元素上使用v-if条件渲染分组</h2>
      <p>因为v-if是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素则可以把一个template元素当做不可见的包裹元素，并在上面使用v-if。最终的渲染结果将不包含template元素。</p>
      <div class="code">
        &#60;template <b>v-if</b>="ok"&#62;<br />
        &#160;&#160;&#160;&#160;&#60;h1&#62;Title&#60;/h1&#62;<br />
        &#160;&#160;&#160;&#160;&#60;p&#62;Paragraph 1&#60;/p&#62;<br />
        &#160;&#160;&#160;&#160;&#60;p&#62;Paragraph 2&#60;/p&#62;<br />
        &#60;/template&#62;
      </div>
      <h2>用key管理可复用的元素</h2>
      <p>Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。</p>
      <div class="code">
        <h3>复用组件的情况</h3>
        <div>
          <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username">
          </template>
          <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address">
          </template>
          <br />
          <button @click="toggleLoginType">Toggle login type</button>
          <p>在上面的代码中切换loginType将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，input不会被替换掉——仅仅是替换了它的placeholder。</p>
        </div>
        <h3>指定不同key来独立元素</h3>
        <div>
          <template v-if="loginKeyType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
          </template>
          <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
          </template>
          <br />
          <button @click="toggleLoginKeyType">Toggle login key type</button>
          <p>在上面的代码中切换loginKeyType将会清除用户已经输入的内容。因为两个模板添加一个具有唯一值的key属性来表达相互独立而不复用的元素。</p>
        </div>
      </div>
      <h1>二、条件渲染(v-show)</h1>
      <p>另一个用于根据条件展示元素的选项是v-show指令。不同的是带有v-show的元素始终会被渲染并保留在DOM中。v-show只是简单地切换元素的CSS属性display。</p>
      <p>&#60;h1 v-show="ok"&#62;Hello!&#60;/h1&#62;</p>
      <p><span class="red">注意：</span>v-show不支持template元素，也不支持v-else。</p>
      <h2>v-if和v-show的区别</h2>
      <p>v-if是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。</p>
      <p>v-if也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。</p>
      <p>v-show是不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS进行切换。</p>
      <p><span class="red">推荐：</span>v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用v-show较好；如果在运行时条件很少改变，则使用v-if较好。</p>
      <h1>三、列表渲染</h1>
      <p>v-for指令基于一个数组来渲染一个列表。v-for指令需要使用item in items形式的特殊语法，其中items是源数据数组，而item则是被迭代的数组元素的别名。</p>
      <h2>v-for使用数组渲染</h2>
      <div class="code">
        <h3>渲染数组(v-for="item in items")</h3>
        <ul>
          <li v-for="item in items" v-bind:key="item.msg">{{item.msg}}</li>
        </ul>
        <h3>访问所有父作用域的属性</h3>
        <ul>
          <li v-for="item in items" v-bind:key="item.msg">
            {{parentMsg}} {{item.msg}}</li>
        </ul>
        <h3>v-for支持索引值(v-for="(item,index) in items")</h3>
        <ul>
          <li v-for="(item, index) in items" v-bind:key="item.msg">
            {{index}} : {{item.msg}}</li>
        </ul>
        <h3>v-for可以使用of替代in(v-for="item of items")</h3>
        <ul>
          <li v-for="(item, index) in items" v-bind:key="item.msg">
            {{parentMsg}} {{index}} : {{item.msg}}</li>
        </ul>
        <h3>v-for接受整数(v-for="n in 10")</h3>
        <div><span v-for="n in 10"> {{n}} </span></div>
        <h3>v-for在template上使用</h3>
        <ul>
          <template v-for="item in items">
            <li>倾斜效果：<i>{{item.msg}}</i></li>
            <li>加粗效果：<b>{{item.msg}}</b></li>
            <br />
          </template>
        </ul>
      </div>
      <h2>v-for使用对象渲染</h2>
      <p>用v-for来遍历一个对象的属性。</p>
      <div class="code">
        <h3>直接遍历对象属性值（v-for="obj in object"）</h3>
        <ul>
          <li v-for="obj in object">{{obj}}</li>
        </ul>
        <h3>v-for支持属性名(v-for="(value,name) in object")</h3>
        <ul>
          <li v-for="(value, name) in object">{{name}} : {{value}}</li>
        </ul>
        <h3>v-for支持索引值（v-for="(value,name,index) in object"）</h3>
        <ul>
          <li v-for="(value, name, index) in object">{{index}}.{{name}} : {{value}}</li>
        </ul>
      </div>
      <p><span class="red">注意：</span>在遍历对象时，会按Object.keys()的结果遍历，但是不能保证它的结果在不同的JavaScript引擎下都一致。</p>
      <h2>维护状态</h2>
      <p>当Vue正在更新使用v-for渲染的元素列表时，它默认使用“就地更新”的策略。如果数据项的顺序被改变，Vue将不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素，并且确保它们在每个索引位置正确渲染。</p>
      <p>这个默认的模式是高效的，但是<b>只适用于不依赖子组件状态或临时DOM状态(例如：表单输入值)的列表渲染输出。</b></p>
      <p>为了给Vue一个标识，以便它能跟踪每个节点的身份，从而重用和重新排序现有元素，你需要为每项提供一个唯一key属性</p>
      <div class="code">
        <pre>
          &#60;div v-for="item in items" <span class="red">v-bind:key</span>="item.id"&#62;
            &#60;!-- 内容 --&#62;
          &#60;/div&#62;
        </pre>
      </div>
      <p><span class="red">注意：</span>不要使用对象或数组之类的非基本类型值作为v-for的key。请用字符串或数值类型的值。</p>
      <h2>数组更新检测</h2>
      <h3>变更方法</h3>
      <p>Vue 将被侦听的数组的变更方法进行了包裹，所以它们也将会触发视图更新。这些被包裹过的方法包括：<br />
        push()、pop()、shift()、unshift()、splice()、sort()、reverse()</p>
      <h3>替换数组</h3>
      <p>变更方法，顾名思义，会变更调用了这些方法的原始数组。而有些方法不会变更原始数组，而总是返回一个新数组。比如：filter()、concat()和slice()等<br />
      </p>
      <div class="code">
        <p>当使用非变更方法时，可以用新数组替换旧数组：</p>
        <pre>
          example1.items = example1.items.filter(function (item) {
            return item.message.match(/Foo/)
          })
        </pre>
      </div>
      <p><span class="red">注意：</span>由于 JavaScript 的限制，Vue 不能检测数组和对象的变化。</p>
      <h2>显示过滤/排序后的结果</h2>
      <p>我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。</p>
      <div class="code">
        <h3>计算属性-computed</h3>
        <ul>
          <li v-for="n in eventNumbers">{{n}}</li>
        </ul>
        <h3>嵌套方法-methods</h3>
        <ul v-for="set in sets">
          <li v-for="n in even(set)">{{ n }}</li>
        </ul>
      </div>
      <h2>v-for和v-if一同使用</h2>
      <p>当它们处于同一节点，v-for 的优先级比 v-if 更高，这意味着 v-if 将分别重复运行于每个 v-for 循环中。当你只想为部分项渲染节点时，这种优先级的机制会十分有用</p>
      <div class="code">
        <h3>只渲染未完成的Todo</h3>
        <pre>
          &#60;li <b>v-for</b>="todo in todos" <b>v-if</b>="!todo.isComplete"&#62;
            { { todo } }
          &#60;/li&#62;
        </pre>
        <h3>有条件地跳过循环的执行</h3>
        <pre>
          &#60;ul v-if="todos.length"&#62;
            &#60;li v-for="todo in todos"&#62;
              { { todo } }
            &#60;/li&#62;
          &#60;/ul&#62;
          &#60;p v-else&#62;No todos left!&#60;/p&#62;
        </pre>
      </div>
      <p><span class="red">注意：</span>不推荐在同一元素上使用v-if和v-for</p>
      <h2>在组件上使用v-for</h2>
      <p>当在组件上使用v-for时，key现在是必须的。任何数据都不会被自动传递到组件里，因为组件有自己独立的作用域。为了把迭代数据传递到组件里，我们要使用prop：</p>
      <div class="code">
        <pre>
          &#60;my-component
            v-for="(item, index) in items"
            v-bind:item="item"
            v-bind:index="index"
            v-bind:key="item.id"&#62;
            &#60;/my-component&#62;
        </pre>
        <pre>
          Vue.component('todo-item', {
            template: '\
              &#60;li&#62;\
                {{ title }}\
                &#60;button v-on:click="$emit(\'remove\')"&#62;Remove&#60;/button&#62;\
              &#60;/li&#62;\
            ',
            <span class="red">props</span>: ['title']
          })
        </pre>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic3',
  data() {
    return {
      title: 'Vue基础--条件渲染、列表渲染',
      loginType: 'username',
      loginKeyType: 'username',
      parentMsg: 'Hello ',
      items: [{
        msg: 'Joe'
      }, {
        msg: 'YRM'
      }, {
        msg: 'XFY'
      }],
      object: {
        title: 'How to do lists in Vue.',
        author: 'JoeSuperM',
        data: '2020-04-26'
      },
      numbers: [1, 2, 3, 4, 5, 6],
      sets: [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12]
      ]
    }
  },
  computed: {
    eventNumbers: function() {
      return this.numbers.filter(function(num) {
        return num % 2 === 0;
      });
    }
  },
  methods: {
    toggleLoginType: function() {
      if (this.loginType === 'username') {
        this.loginType = 'email';
      } else {
        this.loginType = 'username';
      }
    },
    toggleLoginKeyType: function() {
      if (this.loginKeyType === 'username') {
        this.loginKeyType = 'email';
      } else {
        this.loginKeyType = 'username';
      }
    },
    even(numbers) {
      return numbers.filter(function(num) {
        return num % 2 !== 0;
      });
    }
  }
}

</script>
