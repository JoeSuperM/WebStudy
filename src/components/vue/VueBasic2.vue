<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、计算属性</h1>
      <p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。如果在模板中放入太多的逻辑会让模板过重且难以维护，因此对于复杂运算，建议采用计算属性computed来表示。</p>
      <div>
        <h3>关键代码</h3>
        <pre>
          var vm = new Vue({
            el: '#example',
            data: {
              message: 'Hello'
            },
            <span class="red">computed:</span> {
              // 计算属性的 getter
              reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
              }
            }
          })
        </pre>
        <h3>执行效果</h3>
        <input type="text" v-model="message" placeholder="输入内容">
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
      <h2>计算属性与方法的区别</h2>
      <p>计算属性是基于它们的响应式依赖进行缓存的。只在相关响应式依赖发生改变时它们才会重新求值。</p>
      <p>这就意味着只要message还没有发生改变，多次访问reversedMessage计算属性会立即返回之前的计算结果，而不必再次执行函数。</p>
      <h2>计算属性与侦听属性</h2>
      <p>Vue 提供了一种更通用的方式来观察和响应Vue实例上的数据变动：侦听属性。</p>
      <div class="code">
        <p>使用侦听属性</p>
        <pre>
          var vm = new Vue({
            el: '#demo',
            data: {
              firstName: 'Foo',
              lastName: 'Bar',
              fullName: 'Foo Bar'
            },
            <span class="red">watch:</span> {
              firstName: function (val) {
                this.fullName = val + ' ' + this.lastName
              },
              lastName: function (val) {
                this.fullName = this.firstName + ' ' + val
              }
            }
          })
        </pre>
        <h3>使用计算属性</h3>
        <pre>
          var vm = new Vue({
            el: '#demo',
            data: {
              firstName: 'Foo',
              lastName: 'Bar'
            },
            <span class="red">computed: </span>{
              fullName: function () {
                return this.firstName + ' ' + this.lastName
              }
            }
          })
        </pre>
      </div>
      <h2>计算属性的setter</h2>
      <p>计算属性默认只有一个getter，不过也可以提供setter方法</p>
      <div class="code">
        <pre>
          computed: {
            fullName: {
              // getter
              <span class="red">get:</span> function () {
                return this.firstName + ' ' + this.lastName
              },
              // setter
              <span class="red">set:</span> function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
              }
            }
          }
        </pre>
      </div>
      <h1>二、侦听器</h1>
      <p>Vue通过watch选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。</p>
      <div class="code">
        <pre>
          var watchExampleVM = new Vue({
            el: '#watch-example',
            data: {
              question: '',
              answer: 'I cannot give you an answer until you ask a question!'
            },
            <span class="red">watch:</span> {
              // 如果 `question` 发生改变，这个函数就会运行
              <span class="red">question: function (newQuestion, oldQuestion)</span> {
                this.answer = 'Waiting for you to stop typing...'
                this.syncTask()//异步任务
              }
            }
          });
        </pre>
      </div>
      <h1>三、过滤器</h1>
      <p>Vue允许自定义过滤器，通过管道符指示，格式如下</p>
      <div class="code">
        &#60;!-- 在两个大括号中 --&#62;<br />
        { { message | capitalize } }<br />
        <br />
        &#60;!-- 在 v-bind 指令中 --&#62;<br />
        &#60;div v-bind:id="rawId | formatId"/&#62;<br />
        <br />
        &#60;!-- 过滤器可以串联 --&#62;<br />
        { { message | filterA | filterB } }<br />
        <br />
        &#60;!-- 过滤器是JavaScript函数，因此可以接受参数 --&#62;<br />
        { { message | filterA('arg1', arg2) } }<br />
        <br />
        //message 是第一个参数，字符串 'arg1' 将传给过滤器作为第二个参数，arg2表达式的值将被求值然后传给过滤器作为第三个参数。
      </div>
      <h3>演示代码</h3>
      <div class="code">
        <pre>
          &#60;div id="app"&#62;
            { { message | capitalize } }
          &#60;/div&#62;
          &#60;script&#62;
            new Vue({
              el: '#app',
              data: {
                message: 'runoob'
              },
              <span class="red">filters:</span> {
                capitalize: function (value) {
                  if (!value) return ''
                  value = value.toString()
                  return value.charAt(0).toUpperCase() + value.slice(1)
                }
              }
            })
          &#60;/script&#62;
        </pre>
        <p><span class="red">注意：</span>过滤器可以接收多个表达式，{ {msg1,msg2 | capitalize('param')} },<br />capitalize定义的时候需定义三个参数（capitalize: function (v1，v2, v3){}）。</p>
      </div>
      <h1>四、Class与Style绑定</h1>
      <p>将v-bind用于class和style时，Vue.js做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。</p>
      <h2>绑定HTML Class</h2>
      <h3>对象语法、v-bind:class="{attr:value, attr:value}"</h3>
      <div class="code">
        <h4>在对象中传入更多属性来动态切换多个class、同时v-bind:class指令也可以与普通的class属性共存。</h4>
        <p>&#60;div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }"&#62;&#60;/div&#62;</p>
        <p>当data: {isActive: true, hasError: false}时，渲染出来的结果为<br />
          <span class="red">&#60;div class="static active"&#60;&#60;/div&#62;</span></p>
        <h4>绑定数据对象不必内嵌到模板里</h4>
        <p>&#60;div v-bind:class="classObject"&#62;&#60;/div&#62;</p>
        <p>数据定义如下：</p>
        <pre>
          data: {
            classObject: {
              active: true,
              'text-danger': false
            }
          }
        </pre>
        <h4>绑定一个返回对象的计算属性</h4>
        <p>&#60;div v-bind:class="classObject"&#62;&#60;/div&#62;</p>
        <p>数据定义如下：</p>
        <pre>
          data: {
            isActive: true,
            error: null
          },
          computed: {
            classObject: function () {
              return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
              }
            }
          }
        </pre>
      </div>
      <h3>数组语法,v-bind:class="[class1, class2]"</h3>
      <p>Vue可以把一个数组传给 v-bind:class，以应用一个 class 列表</p>
      <div class="code">
        <h4>内嵌数组</h4>
        <p>&#60;div v-bind:class="[activeClass, errorClass]"/&#62;</p>
        <p>数据定义如下：</p>
        <pre>
          data: {
            activeClass: 'active',
            errorClass: 'text-danger'
          }
        </pre>
        <p>渲染结果为：</p>
        <p>&#60;div v-bind:class="active text-danger"/&#62;</p>
        <h4>三元表达式和对象</h4>
        <p>&#60;div v-bind:class="[isActive ? activeClass : '', errorClass]"/&#62;</p>
        <p>&#60;div v-bind:class="[{ active: isActive }, errorClass]"/&#60;</p>
      </div>
      <h2>绑定内联样式</h2>
      <p>v-bind:style 的对象语法十分直观——看着非常像CSS，但其实是一个JavaScript对象。CSS属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用引号括起来) 来命名</p>
      <h3>对象语法，v-bind:style="{attr:value, attr:value}"</h3>
      <div class="code">
        <h4>内联对象</h4>
        <p>&#60;div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"/&#62;</p>
        <p>数据定义如下：</p>
        <pre>
          data: {
            activeColor: 'red',
            fontSize: 30
          }
        </pre>
        <h4>直接绑定对象,或结合返回对象的计算属性</h4>
        <p>&#60;div v-bind:style="styleObject"/&#62;</p>
        <p>数据定义如下：</p>
        <pre>
          data: {
            styleObject: {
              color: 'red',
              fontSize: '13px'
            }
          }
        </pre>
      </div>
      <h3>数组语法，v-bind:style="[style1, style2]"</h3>
      <p>v-bind:style的数组语法可以将多个样式对象应用到同一个元素上</p>
      <p><span class="red">注意：</span>当v-bind:style使用需要添加浏览器引擎前缀的CSS属性时，Vue.js会自动侦测并添加相应的前缀。</p>
      <h4>多重值（2.3.0+）</h4>
      <p>从 2.3.0 起你可以为style绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值</p>
      <p>&#60;div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"/&#62;</p>
      <p>样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的flexbox，那么就只会渲染display: flex。</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic2',
  data() {
    return {
      title: 'Vue基础--计算属性、侦听器、Class与Style绑定',
      message: 'Hello'
    }
  },
  computed: {
    reversedMessage: function() {
      return this.message.split('').reverse().join('')
    }
  },
  methods: {

  }
}

</script>
