<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、自定义事件</h1>
      <h2>事件名</h2>
      <p>不同于组件和prop，事件名不存在任何自动化的大小写转换。而是触发的事件名需要完全匹配监听这个事件所用的名称。不同于组件和prop，事件名不会被用作一个 JavaScript变量名或property名，所以就没有理由使用camelCase或PascalCase了。并且v-on事件监听器在DOM模板中会被自动转换为全小写 (因为HTML是大小写不敏感的)，所以v-on:myEvent将会变成v-on:myevent——导致myEvent不可能被监听到。</p>
      <p><span class="red">推荐：</span>始终使用kebab-case的事件名。</p>
      <h2>自定义组件的v-model,2.2.0新增</h2>
      <p>一个组件上的v-model默认会利用名为value的prop和名为input的事件，但是像单选框、复选框等类型的输入控件可能会将value属性用于不同的目的。Model选项可以用来避免这样的冲突：</p>
      <div class="code">
        <pre>
          Vue.component('base-checkbox', {
            <b>model: {
              prop: 'checked',
              event: 'change'
            },</b>
            props: {
              checked: Boolean
            },
            template: `&#60;input
                type="checkbox"
                <b>v-bind:checked="checked"
                v-on:change</b>="$emit('change', $event.target.checked)"
              &#62;`
          })
        </pre>
        <p>在组件上使用v-model：<br />&#60;base-checkbox v-model="lovingVue"/&#62;</p>
        <p>这里的lovingVue的值将会传入这个名为checked的prop。同时当base-checkbox触发一个change事件并附带一个新的值的时候，这个lovingVue的property将会被更新。</p>
      </div>
      <h2>绑定原生事件到组件</h2>
      <p>组件的根元素上直接监听一个原生事件。这时，你可以使用v-on的.native修饰符：</p>
      <p>&#60;base-input <b>v-on:focus.native</b>="onFocus"/&#62;</p>
      <p>Vue提供了一个$listeners property，它是一个对象，里面包含了作用在这个组件上的所有监听器。</p>
      <div class="code">
        <pre>
          Vue.component('base-input', {
            inheritAttrs: false,
            props: ['label', 'value'],
            computed: {
              inputListeners: function () {
                var vm = this
                // `Object.assign` 将所有的对象合并为一个新对象
                return Object.assign({},
                  // 我们从父级添加所有的监听器
                  <span class="red">this.$listeners,</span>
                  // 然后我们添加自定义监听器，
                  // 或覆写一些监听器的行为
                  {
                    // 这里确保组件配合 `v-model` 的工作
                    input: function (event) {
                      vm.$emit('input', event.target.value)
                    }
                  }
                )
              }
            },
            template: `
              &#60;label&#62;
                {{ label }}
                &#60;input
                  v-bind="$attrs"
                  v-bind:value="value"
                  v-on="inputListeners"
                &#62;
              &#60;/label&#62;`
          })
        </pre>
        <p>现在base-input组件是一个完全透明的包裹器了，也就是说它可以完全像一个普通的input元素一样使用了：所有跟它相同的属性和监听器都可以工作。</p>
      </div>
      <h3>.sync修饰符</h3>
      <p>在有些情况下，我们可能需要对一个prop进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以变更父组件，且在父组件和子组件都没有明显的变更来源。</p>
      <p><span class="red">推荐做法</span>以update:myPropName的模式触发事件取而代之</p>
      <div class="code">
        <h4>子组件中调用方法</h4>
        <p>this.$emit('<b>update:title</b>', newTitle)</p>
        <h4>父组件监听并更新数据</h4>
        <p>
          &#60;text-document<br />
          v-bind:title="doc.title"<br />
          <b>v-on:update:title</b>="doc.title = $event"/&#62;
        </p>
        <h4>为了方便起见，这种模式的缩写，即.sync修饰符</h4>
        <p>&#60;text-document <b>v-bind:title.sync</b>="doc.title"/&#62;</p>
      </div>
      <p><span class="red">注意：</span>注意带有.sync修饰符的v-bind不能和表达式一起使用，取而代之的是，你只能提供你想要绑定的property名，类似 v-model</p>
      <p>当我们用一个对象同时设置多个prop的时候，也可以将这个.sync修饰符和v-bind配合使用</p>
      <p>&#60;text-document v-bind.sync="doc"/&#62;</p>
      <p>这样会把doc对象中的每一个property(如 title)都作为一个独立的prop传进去，然后各自添加用于更新的v-on监听器。</p>
      <p><span class="red">注意：</span>将v-bind.sync用在一个字面量的对象上，例如v-bind.sync=”{ title: doc.title }”，是无法正常工作的</p>
      <h1>二、插槽</h1>
      <h2>Vue实现了一套内容分发的API,将slot元素作为承载分发内容的出口。</h2>
      <div class="code">
        <h3>模板代码、navigation-link</h3>
        <p>
          &#60;a v-bind:href="url" class="nav-link"&#62;<br />
          &#60;slot&#62;&#60;/slot&#62;<br />
          &#60;/a&#62; </p>
        <h3>渲染组件</h3>
        <p>
          &#60;navigation-link url="/profile"&#62;<br />
          &#160;&#160;&#160;&#160;Your Profile<br />
          &#60;/navigation-link&#62;
        </p>
        <p>当组件渲染的时候，&#60;slot&#62;&#60;/slot&#62;将会被替换为“Your Profile”。插槽内可以包含任何模板代码，包括HTML.</p>
        <p>如果navigation-link没有包含一个slot元素，则该组件起始标签和结束标签之间的任何内容都会被抛弃。</p>
      </div>
      <h2>编译作用域</h2>
      <p>父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。</p>
      <h2>后备内容（默认值）</h2>
      <p>有时为一个插槽设置具体的后备(默认的)内容是很有用的，它只会在没有提供内容的时候被渲染。</p>
      <div class="red">
        <p>
          &#60;button type="submit"&#62;<br />
          &#160;&#160;&#60;slot&#62;Submit&#60;/slot&#62;<br />
          &#60;/button&#62;
        </p>
        <p>如果指定了内容，就替换。否则就使用默认值</p>
      </div>
      <h2>具名卡槽,通过v-slot指定卡槽名称，默认卡槽名称为default</h2>
      <div class="code">
        <pre>
          &#60;div class="container"&#62;
          &#60;header&#62;
            &#60;slot name="header"&#62;&#60;/slot&#62;
          &#60;/header&#62;
          &#60;main&#62;
            &#60;slot&#62;&#60;/slot&#62;
          &#60;/main&#62;
          &#60;footer&#62;
            &#60;slot name="footer"&#62;&#60;/slot&#62;
          &#60;/footer&#62;
          &#60;/div&#62;
        </pre>
        <p>使用具名卡槽</p>
        <pre>
          &#60;base-layout&#62;
          &#60;template <b>v-slot:header</b>&#62;
            &#60;h1>Here might be a page title&#60;/h1&#62;
          &#60;/template&#62;

          &#60;p>A paragraph for the main content.&#60;/p&#62;
          &#60;p>And another one.&#60;/p&#62;

          &#60;template <b>v-slot:footer</b>&#62;
            &#60;p>Here's some contact info&#60;/p&#62;
          &#60;/template&#62;
          &#60;/base-layout&#62;
        </pre>
        <p>template元素中的所有内容都将会被传入相应的插槽。任何没有被包裹在带有v-slot的template中的内容都会被视为默认插槽的内容。</p>
        <p><span class="red">注意：</span>v-slot只能添加在template上。</p>
      </div>
      <h2>作用域插槽</h2>
      <p>有时让插槽内容能够访问子组件中才有的数据是很有用的。</p>
      <div class="code">
        <h3>current-user组件</h3>
        <pre>
          &#60;span&#62;
            &#60;slot&#62;{ { user.lastName } }&#60;/slot&#62;
          &#60;/span&#62;
        </pre>
        <h3>替换备用内容</h3>
        <pre>
          &#60;current-user&#62;
            { { user.firstName } }
          &#60;/current-user&#62;
        </pre>
        <p>然而上述代码不会正常工作，因为只有current-user组件可以访问到user而我们提供的内容是在父级渲染的。</p>
        <h3>解决方案,将user作为slot元素的一个属性绑定上去</h3>
        <pre>
          &#60;span&#62;
            &#60;slot v-bind:user="user"&#62;{ { user.lastName } }&#60;/slot&#62;
          &#60;/span&#62;
        </pre>
        <p>绑定在slot元素上的属性被称为插槽prop。现在在父级作用域中，我们可以使用带值的v-slot来定义我们提供的插槽prop的名字</p>
        <pre>
          &#60;current-user&#62;
           &#60;template <b>v-slot:default</b>="slotProps"&#62;
             { { slotProps.user.firstName } }
           &#60;/template&#62;
          &#60;/current-user&#62;
        </pre>
      </div>
      <h3>独占默认插槽的缩写语法</h3>
      <p>在上述情况下，当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。</p>
      <div class="code">
        <h4>正常写法：v-slot:default="name"</h4>
        <pre>
          &#60;current-user v-slot:default="slotProps"&#62;
            { { slotProps.user.firstName } }
          &#60;/current-user&#62;
        </pre>
        <h4>缩写写法：v-slot="name"</h4>
        <pre>
          &#60;current-user v-slot="slotProps"&#62;
            { { slotProps.user.firstName } }
          &#60;/current-user&#62;
        </pre>
        <p><span class="red">注意：</span>默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确。同时只要出现多个插槽，请始终为所有的插槽使用完整的基于template的语法</p>
      </div>
      <h3>解构插槽Prop</h3>
      <p>作用域插槽的内部工作原理是将你的插槽内容包括在一个传入单个参数的函数里：function (slotProps){//槽内容}.<br />这意味着v-slot的值实际上可以是任何能够作为函数定义中的参数的JavaScript表达式。</p>
      <div class="code">
        <h4>v-slot定义函数</h4>
        <pre>
          &#60;current-user v-slot="{ user }"&#62;
            { { user.firstName } }
          &#60;/current-user&#62;
        </pre>
        <h4>prop重命名</h4>
        <pre>
          &#60;current-user v-slot="{ user: person }"&#62;
            { { person.firstName } }
          &#60;/current-user&#62;
        </pre>
        <h4>定义后备内容</h4>
        <pre>
          &#60;current-user v-slot="{ user = { firstName: 'Guest' } }"&#62;
            { { user.firstName } }
          &#60;/current-user&#62;
        </pre>
      </div>
      <h3>动态插槽名</h3>
      <p>动态指令参数也可以用在v-slot上，来定义动态的插槽名：&#60;template <b>v-slot:[dynamicSlotName]</b>&#62;</p>
      <h3>具名插槽的缩写</h3>
      <p>跟v-on和v-bind一样，v-slot也有缩写，即<b>把参数之前的所有内容(v-slot:)替换为字符#</b>。例如v-slot:header 可以被重写为#header：默认插槽缩写<b>#default</b></p>
      <h2>废弃语法,2.6.0之前</h2>
      <h3>带有slot属性的具名插槽</h3>
      <p>在template上使用特殊的slot属性，可以将内容从父级传给具名插槽</p>
      <p>&#60;template slot="header"&#62; 或 &#60;template slot="footer"&#62;</p>
      <h3>带有slot-scope属性的作用域插槽</h3>
      <p>slot-scope声明了被接收的prop对象会作为slotProps变量存在于template作用域中。</p>
      <p>&#60;template slot="default" slot-scope="slotProps"&#62;</p>
      <h1>三、自定义指令</h1>
      <p>除了默认设置的核心指令(v-model和v-show), Vue也允许使用directives选项来注册局部自定义指令。</p>
      <div class="code">
        <h3>创建自定义指令</h3>
        <pre>
          // 创建根实例
          new Vue({
            el: '#app',
            <span class="red">directives: </span>{
              // 注册一个局部的自定义指令 v-focus
              focus: {
                // 指令的定义
                inserted: function (el) {
                  // 聚焦元素
                  el.focus()
                }
              }
            }
          })
        </pre>
        <h3>使用方法</h3>
        &#60;p&#62;页面载入时，input 元素自动获取焦点：&#60;/p&#62;<br />
        &#60;input v-focus&#62;<br />
        <p>页面载入时，input 元素自动获取焦点：</p>
        <input v-focus>
      </div>
      <h2>钩子</h2>
      <h3>钩子函数</h3>
      <ul>
        <li v-for="hookFuc in hookFucs">{{hookFuc}}</li>
      </ul>
      <h3>钩子函数参数</h3>
      <ul>
        <li>el: 指令所绑定的元素，可以用来直接操作 DOM 。</li>
        <li>binding: 一个对象，包含以下属性：
          <ul>
            <li>name: 指令名，不包括 v- 前缀。</li>
            <li>value: 指令的绑定值， 例如： v-my-directive="1 + 1", value 的值是 2。</li>
            <li>oldValue: 指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</li>
            <li>expression: 绑定值的表达式或变量名。 例如 v-my-directive="1 + 1" ， expression 的值是 "1 + 1"。</li>
            <li>arg: 传给指令的参数。例如 v-my-directive:foo， arg 的值是 "foo"。</li>
            <li>modifiers: 一个包含修饰符的对象。 例如： v-my-directive.foo.bar, 修饰符对象 modifiers 的值是 { foo: true, bar: true }。</li>
          </ul>
        </li>
        <li>vnode: Vue 编译生成的虚拟节点。</li>
        <li>oldVnode: 上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。</li>
      </ul>
      <div class="code">
        <h3>JS代码</h3>
        <pre>
          Vue.directive('joe', {
            bind: function (el, binding, vnode) {
              var s = JSON.stringify
              el.innerHTML =
                'name: '       + s(binding.name) + '&#60;br&#62;' +
                'value: '      + s(binding.value) + '&#60;br&#62;' +
                'expression: ' + s(binding.expression) + '&#60;br&#62;' +
                'argument: '   + s(binding.arg) + '&#60;br&#62;' +
                'modifiers: '  + s(binding.modifiers) + '&#60;br&#62;' +
                'vnode keys: ' + Object.keys(vnode).join(', ')
            }
          })
          new Vue({
            el: '#app',
            data: {
              message: '学习教程!'
            }
          })
        </pre>
        <h3>演示效果</h3>
        <div v-joe:hello.a.b="message" />
      </div>
      <h3>简写指令钩子函数</h3>
      <div class="code">
        <pre>
          &#60;div v-runoob="{ color: 'green', text: '菜鸟教程!' }"/&#62;
          <br/>
          Vue.directive('yrm', function (el, binding) {
              // 简写方式设置文本及背景颜色
              el.innerHTML = binding.value.text
              el.style.backgroundColor = binding.value.color
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
  name: 'VueBasic7',
  data() {
    return {
      title: 'Vue基础--自定义事件，插槽',
      hookFucs: [
        "bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。",
        "inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。",
        "update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。",
        "omponentUpdated: 被绑定元素所在模板完成一次更新周期时调用。",
        "unbind: 只调用一次， 指令与元素解绑时调用。"
      ],
      message: '学习教程!'
    }
  },
  methods: {},
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function(el) {
        // 聚焦元素
        el.focus()
      }
    },
    joe: {
      bind: function(el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML =
          'name: ' + s(binding.name) + '<br>' +
          'value: ' + s(binding.value) + '<br>' +
          'expression: ' + s(binding.expression) + '<br>' +
          'argument: ' + s(binding.arg) + '<br>' +
          'modifiers: ' + s(binding.modifiers) + '<br>' +
          'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  }
}

</script>
