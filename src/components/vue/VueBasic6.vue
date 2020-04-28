<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、组件注册</h1>
      <h2>组件名称</h2>
      <p>在注册一个组件的时候，我们始终需要给它一个名字。比如Vue.component('my-component-name', { /* ... */ })，该组件名就是my-component-name。</p>
      <h3>组件名大小写</h3>
      <p>定义组件名的方式有两种：kebab-case和PascalCase</p>
      <h4>使用kebab-case(短横线分隔命名),<b>引用自定义元素时也必须使用kebab-case</b></h4>
      <p>Vue.component('my-component-name', { /* ... */ })</p>
      <h4>使用PascalCase(首字母大写命名),<b>引用自定义元素时两种命名法都可以使用</b></h4>
      <p>Vue.component('MyComponentName', { /* ... */ })</p>
      <p><span class="red">注意：</span>直接在DOM(即非字符串的模板)中使用时只有kebab-case是有效的。</p>
      <h2>全局注册与局部注册</h2>
      <p>通过Vue.component('my-component-name', { /* ... */ })的方式注册的组件为全局注册，任何新的VUE实例都可以使用这些组件。而有时候则只需要在某些页面使用组件，则可以通过普通的JavaScript对象来定义组件</p>
      <div class="code">
        <h3>通过JS对象或者import的方式创建组件</h3>
        <p>var ComponentA = { /* ... */ }<br />
          var ComponentB = { /* ... */ }<br />
          import ComponentC form "../ComponentC"
        </p>
        <h3>在components选项中定义你想要使用的组件</h3>
        <p>new Vue({components: {<br />
          &#160;&#160;'component-a': ComponentA,<br />
          &#160;&#160;'component-b': ComponentB}<br />
          })
        </p>
        <p><span class="red">注意：</span>对于components对象中的每个property来说，其property名就是自定义元素的名字，其 property 值就是这个组件的选项对象。</p>
        <h3>局部注册的组件在其子组件中不可用</h3>
        <p>如果你希望ComponentA在ComponentB中可用，则你需要这样写：<br />
          var ComponentA = { /* ... */ }<br />
          var ComponentB = {components: {<br />
          'component-a': ComponentA},<br />
          } </p>
        <p><span class="red">注意：</span>在对象中放一个类似 ComponentA 的变量名其实是 ComponentA: ComponentA 的缩写，即这个变量名同时是：用在模板中的自定义元素的名称和包含了这个组件选项的变量名</p>
      </div>
      <p></p>
      <h2>模块系统</h2>
      <p>通过import/require使用一个模块系统,在模块化系统中导入响应的组件</p>
      <h3>在模块化系统的局部注册</h3>
      <div class="code">
        <pre>
        import ComponentA from './ComponentA'
        import ComponentC from './ComponentC'

        export default {
          components: {
            ComponentA,
            ComponentC
          },
          // ...
        }
        //现在ComponentA和ComponentC都可以在ComponentB的模板中使用了。
        </pre>
      </div>
      <h3>基础组件的自动化全局注册</h3>
      <p>组件只是包裹了一个输入框或按钮之类的元素，是相对通用的。我们有时候会把它们称为基础组件</p>
      <p>如果你恰好使用了webpack(或在内部使用了webpack的Vue CLI 3+)，那么就可以使用require.context全局注册这些非常通用的基础组件。</p>
      <div class="code">
        <h3>应用入口文件(比如src/main.js)中全局导入基础组件的示例代码</h3>
        <pre>
          import Vue from 'vue'
          import upperFirst from 'lodash/upperFirst'
          import camelCase from 'lodash/camelCase'
          <b>
          const requireComponent = require.context(
            // 其组件目录的相对路径
            './components',
            // 是否查询其子目录
            false,
            // 匹配基础组件文件名的正则表达式
            /Base[A-Z]\w+\.(vue|js)$/
          )

          requireComponent.keys().forEach(fileName => {
            // 获取组件配置
            const componentConfig = requireComponent(fileName)

            // 获取组件的 PascalCase 命名
            const componentName = upperFirst(
              camelCase(
                // 获取和目录深度无关的文件名
                fileName
                  .split('/')
                  .pop()
                  .replace(/\.\w+$/, '')
              )
            )

            // 全局注册组件
            Vue.component(
              componentName,
              // 如果这个组件选项是通过 `export default` 导出的，
              // 那么就会优先使用 `.default`，
              // 否则回退到使用模块的根。
              componentConfig.default || componentConfig
            )
          })</b>
        </pre>
        <p><span class="red">注意：</span>全局注册的行为必须在根Vue实例(通过new Vue)创建之前发生。</p>
      </div>
      <h2>Prop</h2>
      <h3>1、Prop的大小写（camelCase Vs Kebab-case）</h3>
      <p>HTML中的属性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用DOM中的模板时，camelCase (驼峰命名法)的prop名需要使用其等价的kebab-case(短横线分隔命名)命名</p>
      <div class="code">
        <h4>Vue代码</h4>
        <pre>
          Vue.component('blog-post', {
            // 在 JavaScript 中是 camelCase 的
            <span class="red">props: ['postTitle']</span>,
            template: '&#60;h3&#62;{ { postTitle } }&#60;/h3&#62;'
          })
        </pre>
        <h4>HTML代码</h4>
        <pre>
          &#60;!-- 在 HTML 中是 kebab-case 的 --&#62;
          &#60;blog-post <span class="red">post-title</span>="hello!"&#62;&#60;/blog-post&#62;
        </pre>
      </div>
      <h3>Prop类型</h3>
      <p>props只是以字符串的形式列出了prop，如果你希望指定值的类型，可以通过对象的形式列出prop，这些property的名称和值分别是prop各自的名称和类型</p>
      <div class="code">
        <h4>数组形式</h4>
        <p>props: ['title', 'likes', 'isPublished', 'commentIds', 'author']</p>
        <h4>对象形式</h4>
        <pre>
          props: {
            title: String,
            likes: Number,
            isPublished: Boolean,
            commentIds: Array,
            author: Object,
            callback: Function,
            contactsPromise: Promise // or any other constructor
          }
        </pre>
      </div>
      <h3>传递静态或动态的Prop</h3>
      <div class="code">
        <h4>传递一个数字</h4>
        &#60;!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue --&#62;<br />
        &#60;!-- 这是一个 JavaScript 表达式而不是一个字符串。--&#62;<br />
        &#60;blog-post v-bind:likes="42"/&#62;<br />
        <br />
        &#60;!-- 用一个变量进行动态赋值。--&#62;<br />
        &#60;blog-post v-bind:likes="post.likes"/&#62;<br />
        <h4>传递一个布尔值</h4>
        &#60;!-- 包含该 prop 没有值的情况在内，都意味着 `true`。--&#62;<br />
        &#60;blog-post is-published/&#62;<br />
        <br />
        &#60;!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue --&#62;<br />
        &#60;!-- 这是一个 JavaScript 表达式而不是一个字符串。--&#62;<br />
        &#60;blog-post v-bind:is-published="false"/&#62;<br />
        <br />
        &#60;!-- 用一个变量进行动态赋值。--&#62;<br />
        &#60;blog-post v-bind:is-published="post.isPublished"/&#62;
        <h4>传递一个数组</h4>
        &#60;!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue --&#62;<br />
        &#60;!-- 这是一个 JavaScript 表达式而不是一个字符串。--&#62;<br />
        &#60;blog-post v-bind:comment-ids="[234, 266, 273]"/&#62;<br />
        <br />
        &#60;!-- 用一个变量进行动态赋值。--&#62;<br />
        &#60;blog-post v-bind:comment-ids="post.commentIds"/&#62;<br />
        <h4>传递一个对象</h4>
        &#60;!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue --&#62;<br />
        &#60;!-- 这是一个 JavaScript 表达式而不是一个字符串。--&#62;<br />
        &#60;blog-post v-bind:author="{<br />
        &#160;&#160;name: 'Veronica',<br />
        &#160;&#160;company: 'Veridian Dynamics'<br />
        }"/&#62;<br />
        &#60;!-- 用一个变量进行动态赋值。--&#62;<br />
        &#60;blog-post v-bind:author="post.author"/&#62;<br />
        <h4>传递一个对象所有的Property</h4>
        <p>如果你想要将一个对象的所有property都作为prop传入，你可以使用不带参数的v-bind(取代 v-bind:prop-name)。</p>
        <p>
          //对象<br />
          post: {<br />
          &#160;&#160;id: 1,<br />
          &#160;&#160;title: 'My Journey with Vue'<br />
          }
        </p>
        <p>//代码<br />&#60;blog-post v-bind="post"/&#62;</p>
        <p>上述等价于</p>
        <p>&#60;blog-post v-bind:id="post.id" v-bind:title="post.title"/&#62;</p>
      </div>
      <h3>单向数据流</h3>
      <p>所有的prop都使得其父子prop之间形成了一个单向下行绑定：父级prop的更新会向下流动到子组件中，但是反过来则不行。这样会防止从子组件意外变更父级组件的状态，从而导致你的应用的数据流向难以理解。</p>
      <img src="../../assets/prop_data_stream.png" alt="数据流图">
      <p><span class="red">注意：</span>在JavaScript中对象和数组是通过引用传入的，所以对于一个数组或对象类型的prop来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。</p>
      <h2>Prop验证</h2>
      <p>我们可以为组件的prop指定验证要求，例如你知道的这些类型。如果有一个需求没有被满足，则Vue会在浏览器控制台中警告你。这在开发一个会被别人用到的组件时尤其有帮助。</p>
      <div class="code">
        <pre>
          Vue.component('my-component', {
            props: {
              // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
              propA: Number,
              // 多个可能的类型
              propB: [String, Number],
              // 必填的字符串
              propC: {
                type: String,
                required: true
              },
              // 带有默认值的数字
              propD: {
                type: Number,
                default: 100
              },
              // 带有默认值的对象
              propE: {
                type: Object,
                // 对象或数组默认值必须从一个工厂函数获取
                default: function () {
                  return { message: 'hello' }
                }
              },
              // 自定义验证函数
              propF: {
                validator: function (value) {
                  // 这个值必须匹配下列字符串中的一个
                  return ['success', 'warning', 'danger'].indexOf(value) !== -1
                }
              }
            }
          })
        </pre>
      </div>
      <p><span class="red">注意：</span>当prop验证失败的时候，(开发环境构建版本的)Vue将会产生一个控制台的警告。同时prop会在一个组件实例创建之前进行验证，所以实例的property(如 data、computed等)在default或validator函数中是不可用的。</p>
      <h3>类型检查</h3>
      <p>type可以是下列原生构造函数中的一个：String、Number、Boolean、Array、Object、Date、Function、Symbol</p>
      <p>额外的，type还可以是一个自定义的构造函数，并且通过instanceof来进行检查确认。</p>
      <h2>非Propde的属性</h2>
      <p>一个非prop的属性是指传向一个组件，但是该组件并没有相应prop定义的属性。因为显式定义的prop适用于向一个子组件传入信息，然而组件库的作者并不总能预见组件会被用于怎样的场景。</p>
      <h3>替换/合并已有的属性</h3>
      <p>对于绝大多数属性来说，从外部提供给组件的值会替换掉组件内部设置好的值。class和style会稍微智能一些，即两边的值会被合并起来</p>
      <h3>禁用属性继承</h3>
      <p>如果你不希望组件的根元素继承属性，你可以在组件的选项中设置inheritAttrs: false。</p>
      <div class="code">
        <pre>
          Vue.component('my-component', {
            <b>inheritAttrs: false</b>,
            // ...
          })
          </pre>
      </div>
      <p><span class="red">注意：</span>inheritAttrs: false选项不会影响style和class的绑定。</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic6',
  data() {
    return {
      title: 'Vue基础--组件注册、Prop、插槽，动态组件等',

    }
  },
  methods: {

  }
}

</script>
