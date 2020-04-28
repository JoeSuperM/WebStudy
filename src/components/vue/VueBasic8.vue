<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、动态组件与异步组件</h1>
      <h2>在动态组件上使用keep-alive</h2>
      <div class="code">
        <p>重新创建动态组件的行为通常是非常有用的，但是有时候我们更希望那些标签的组件实例能够被在它们第一次被创建的时候缓存下来。为了解决这个问题，我们可以用一个keep-alive元素将其动态组件包裹起来。</p>
        <pre>
          &#60;!-- 失活的组件将会被缓存！--&#62;
          &#60;keep-alive&#62;
            &#60;component v-bind:is="currentTabComponent"&#62;
          &#60;/keep-alive&#62;
        </pre>
        <p><span class="red">注意：</span>这个keep-alive要求被切换到的组件都有自己的名字，不论是通过组件的name选项还是局部/全局注册。</p>
      </div>
      <h2>异步组件</h2>
      <p>Vue允许你以一个工厂函数的方式定义你的组件，这个工厂函数会异步解析你的组件定义。Vue只有在这个组件需要被渲染的时候才会触发该工厂函数，且会把结果缓存起来供未来重渲染。</p>
      <div class="code">
        <pre>
          Vue.component('async-example', function (resolve, reject) {
            setTimeout(function () {
              // 向 `resolve` 回调传递组件定义
              resolve({
                template: '&#60;div&#62;I am async!&#60;/div&#62;'
              })
            }, 1000)
          })
        </pre>
        <p>这个工厂函数会收到一个resolve回调，这个回调函数会在你从服务器得到组件定义的时候被调用。你也可以调用reject(reason)来表示加载失败。这里的setTimeout是为了演示用的，如何获取组件取决于你自己。</p>
      </div>
      <h3>处理加载状态</h3>
      <div class="code">
        <p>异步组件工厂函数也可以返回一个如下格式的对象:</p>
        <pre>
          const AsyncComponent = () => ({
            // 需要加载的组件 (应该是一个 `Promise` 对象)
            component: import('./MyComponent.vue'),
            // 异步组件加载时使用的组件
            loading: LoadingComponent,
            // 加载失败时使用的组件
            error: ErrorComponent,
            // 展示加载时组件的延时时间。默认值是 200 (毫秒)
            delay: 200,
            // 如果提供了超时时间且组件加载也超时了，
            // 则使用加载失败时使用的组件。默认值是：`Infinity`
            timeout: 3000
          })
        </pre>
      </div>
      <h1>二、处理边界情况</h1>
      <p>在绝大多数情况下，我们最好不要触达另一个组件实例内部或手动操作DOM元素。不过也确实在一些情况下做这些事情是合适的。</p>
      <h2>访问元素与组件</h2>
      <h3>访问根实例，$root</h3>
      <p>在每个new Vue实例的子组件中，其根实例可以通过$root property进行访问。</p>
      <div class="code">
        <pre>
          // Vue 根实例
          new Vue({
            data: {
              foo: 1
            },
            computed: {
              bar: function () { /* ... */ }
            },
            methods: {
              baz: function () { /* ... */ }
            }
          })
        </pre>
        <p>所有的子组件都可以将这个实例作为一个全局 store 来访问或使用。</p>
        <pre>
          // 获取根组件的数据
          this.$root.foo

          // 写入根组件的数据
          this.$root.foo = 2

          // 访问根组件的计算属性
          this.$root.bar

          // 调用根组件的方法
          this.$root.baz()
        </pre>
      </div>
      <h3>访问父级组件，$parent</h3>
      <p>$parent property可以用来从一个子组件访问父组件的实例。它提供了一种机会，可以在后期随时触达父级组件，以替代将数据以 prop 的方式传入子组件的方式。</p>
      <h3>访问子组件实例或子元素</h3>
      <p>尽管存在prop和事件，有的时候你仍可能需要在JavaScript里直接访问一个子组件。为了达到这个目的，你可以通过ref这个 属性为子组件赋予一个ID引用。</p>
      <p>&#60;base-input ref="usernameInput"/&#62;<br />现在在你已经定义了这个ref的组件里，你可以使用：<br /><b>this.$refs.usernameInput</b></p>
      <h3>依赖注入</h3>
      <p>依赖注入的用武之地，它用到了两个新的实例选项：provide和inject。provide选项允许我们指定我们想要提供给后代组件的数据/方法。使用inject选项来接收指定的我们想要添加在这个实例上的property</p>
      <h2>程序化的事件侦听器</h2>
      <div class="code">
        <p>Vue 实例同时在其事件接口中提供了其它的方法。我们可以：<br />
          通过 $on(eventName, eventHandler) 侦听一个事件<br />
          通过 $once(eventName, eventHandler) 一次性侦听一个事件<br />
          通过 $off(eventName, eventHandler) 停止侦听一个事件</p>
      </div>
      <h2>循环引用</h2>
      <h3>递归组件</h3>
      <p>组件是可以在它们自己的模板中调用自身的。不过它们只能通过name选项来做这件事,你使用Vue.component全局注册一个组件时，这个全局的ID会自动设置为该组件的name选项。</p>
      <h3>组件之间的循环引用</h3>
      <p></p>
      <h2>模板定义的替代品</h2>
      <div class="code">
        <h3>内联模板</h3>
        <p>当inline-template这个特殊的属性出现在一个子组件上时，这个组件将会使用其里面的内容作为模板，而不是将其作为被分发的内容。这使得模板的撰写工作更加灵活。</p>
        <pre>
          &#60;my-component inline-template&#62;
            &#60;div&#62;
              &#60;p&#62;These are compiled as the component's own template.&#60;/p&#62;
              &#60;p&#62;Not parent's transclusion content.&#60;/p&#62;
            &#60;/div&#62;
          &#60;/my-component&#62;
        </pre>
        <h3>X-Template</h3>
        <p>另一个定义模板的方式是在一个script元素中，并为其带上text/x-template的类型，然后通过一个id 将模板引用过去。</p>
        <pre>
          &#60;script type="text/x-template" id="hello-world-template"&#62;
            &#60;p>Hello hello hello&#60;/p&#62;
          &#60;/script&#62;
          //通过ID来使用
          Vue.component('hello-world', {
            template: '#hello-world-template'
          })
        </pre>
      </div>
      <p></p>
      <h2>通过v-once创建低开销的静态组件</h2>
      <p>渲染普通的HTML元素在Vue中是非常快速的，但有的时候你可能有一个组件，这个组件包含了大量静态内容。在这种情况下，你可以在根元素上添加v-once属性以确保这些内容只计算一次然后缓存起来</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic8',
  data() {
    return {
      title: 'Vue基础--动态组件与异步组件'
    }
  }

}

</script>
