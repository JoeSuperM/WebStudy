<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、Vue路由安装</h1>
      <h2>1、直接下载</h2>
      <p>直接通过链接（https://unpkg.com/vue-router/dist/vue-router.js）下载最新版的vue-router.js文件</p>
      <p>然后通过script标签来导入该js文件</p>
      <div class="code large">
        &#60;script src="/path/to/vue.js"&#62;<br />
        &#60;script src="/path/to/vue-router.js"&#62;
      </div>
      <h2>2、通过NPM安装</h2>
      <p>通过指令（npm install vue-router）来自动下载安装JS文件</p>
      <p>然后通过在模块化工程中通过 Vue.use() 明确地安装路由功能</p>
      <div class="code large">
        import Vue from 'vue'<br />
        import VueRouter from 'vue-router'<br />
        <br />
        Vue.use(VueRouter)
      </div>
      <h2>3、直接编译源代码</h2>
      <p>直接通过github开源代码clone下来，然后编译生成vue-router.js文件</p>
      <div class="code large">
        git clone https://github.com/vuejs/vue-router.git node_modules/vue-router<br />
        cd node_modules/vue-router<br />
        npm install<br />
        npm run build<br />
      </div>
      <h1>二、Vue的介绍</h1>
      <p>Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。包含的功能有：</p>
      <li v-for="intro in intros" v-bind:key="intro">{{intro}}</li>
      <h1>三、Vue的基础</h1>
      <h2>1、起步</h2>
      <p>用Vue.js + Vue Router创建单页应用，是非常简单的。使用Vue.js，我们已经可以通过组合组件来组成应用程序，当你要把Vue Router添加进来，我们需要做的是，将组件(components)映射到路由(routes)，然后告诉Vue Router在哪里渲染它们。</p>
      <h3>HTMl代码列表</h3>
      <div class="code">
        &#60;script src="https://unpkg.com/vue/dist/vue.js"/&#62;<br />
        &#60;script src="https://unpkg.com/vue-router/dist/vue-router.js"/&#62;<br />
        <br />
        &#60;div id="app"&#62;<br />
        &#160;&#160;&#60;h1&#62;Hello App!&#60;/h1&#62;<br />
        &#160;&#160;&#60;p&#62;<br />
        &#160;&#160;&#160;&#160;&#60;!-- 使用 router-link 组件来导航. --&#62;<br />
        &#160;&#160;&#160;&#160;&#60;!-- 通过传入 `to` 属性指定链接. --&#62;<br />
        &#160;&#160;&#160;&#160;&#60;!-- &#60;router-link&#62; 默认会被渲染成一个 `&#60;a&#62;` 标签 --&#62;<br />
        &#160;&#160;&#160;&#160;<span class="red">&#60;router-link to=</span>"/foo"&#62;Go to Foo&#60;/router-link&#62;<br />
        &#160;&#160;&#160;&#160;<span class="red">&#60;router-link to=</span>"/bar"&#62;Go to Bar&#60;/router-link&#62;<br />
        &#160;&#160;&#60;/p&#62;<br />
        &#160;&#160;&#60;!-- 路由出口 --&#62;<br />
        &#160;&#160;&#60;!-- 路由匹配到的组件将渲染在这里 --&#62;<br />
        &#160;&#160;<span class="red">&#60;router-view&#62;&#60;/router-view&#62;</span><br />
        &#60;/div&#62;
      </div>
      <h3>JavaScript代码</h3>
      <div class="code">
        <pre>
// 0. 如果使用模块化机制编程，导入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '&#60;div&#62;foo&#60;/div&#62;' }
const Bar = { template: '&#60;div&#62;bar&#60;/div&#62;' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')

// 现在，应用已经启动了！
        </pre>
      </div>
      <p>通过注入路由器，可以在任何组件内通过<span class="red">this.$router</span>访问路由器，或者通过<span class="red">this.$route</span>访问当前路由</p>
      <p>当&#60;router-link&#62; 对应的路由匹配成功，将自动设置 class 属性值 .router-link-active</p>
      <h2>2、动态路由匹配</h2>
      <p>把某种模式匹配到的所有路由，全都映射到同个组件。一个“路径参数”使用冒号:标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。</p>
      <div class="code large">
        <h3>动态匹配用户ID示例</h3>
        <pre>
const User = {
  template: '&#60;div&#62;User {{ this.$route.params.id }}&#60;/div&#62;'
}
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
//以上可以匹配路径/user/foo,/user/bar,/user/joe等等。
        </pre>
        <p>一个路由中设置多段“路径参数”，对应的值都会设置到$route.params中</p>
        <table cellpadding="5" cellspacing="0" border="1" width="100%">
          <tr class="table_head" bgcolor="#3f3f3f">
            <th>模式</th>
            <th>匹配路径</th>
            <th>$route.params</th>
          </tr>
          <tr>
            <td>/user/:username</td>
            <td>/user/evan</td>
            <td>{ username: 'evan' }</td>
          </tr>
          <tr>
            <td>/user/:username/post/:post_id</td>
            <td>/user/evan/post/123</td>
            <td>{ username: 'evan', post_id: '123' }</td>
          </tr>
        </table>
        <h3>$route提供的数据</h3>
        <dl>
          <template v-for="route in routes">
            <dt>{{route.type}}</dt>
            <dd>{{route.desc}}</dd>
          </template>
        </dl>
      </div>
      <h2>3、响应路由参数的变化</h2>
      <p>当使用路由参数时，例如从/user/foo导航到/user/bar，原来的组件实例会被复用。这也意味着组件的生命周期钩子不会再被调用。</p>
      <div class="code">
        <h3>复用组件时，想对路由参数的变化作出响应的话，你可以简单地 watch (监测变化) $route 对象：</h3>
        <pre>
const User = {
  template: '...',
  <span class="red">watch: {
    '$route' (to, from) </span>{
      // 对路由变化作出响应...
    }
  }
}
        </pre>
        <h3>使用 2.2 中引入的 beforeRouteUpdate 导航守卫</h3>
        <pre>
const User = {
  template: '...',
  <span class="red">beforeRouteUpdate (to, from, next)</span> {
    // react to route changes...
    // don't forget to call next()
  }
}
        </pre>
      </div>
      <h2>4、捕获所有路由或404路由</h2>
      <p>常规参数只会匹配被/分隔的URL片段中的字符。如果想匹配任意路径，我们可以使用通配符 (*)：</p>
      <div class="code">
        <pre>
{
  // 会匹配所有路径
  path: '*'
}
{
  // 会匹配以 `/user-` 开头的任意路径
  path: '/user-*'
}
        </pre>
      </div>
      <p>当使用一个通配符时，$route.params 内会自动添加一个名为 pathMatch 参数。它包含了 URL 通过通配符被匹配的部分：</p>
      <div class="code large">
        // 给出一个路由 { path: '/user-*' }<br />
        this.$router.push('/user-admin')<br />
        this.$route.params.pathMatch // 'admin'<br />
        <br />
        // 给出一个路由 { path: '*' }<br />
        this.$router.push('/non-existing')<br />
        this.$route.params.pathMatch // '/non-existing'
      </div>
      <p><span class="red">注意：</span>同一个路径可以匹配多个路由，此时，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。</p>
      <h2>5、嵌套路由</h2>
      <p>实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL中各段动态路径也按某种结构对应嵌套的各层组件</p>
      <div class="code">
        <h3>创建顶层路由出口</h3>
        <pre>
&#60;div id="app"&#62;
  &#60;router-view&#62;&#60;/router-view&#62;
&#60;/div&#62;
        </pre>
        <h3>配置路由信息</h3>
        <pre>
const User = {
  template: '&#60;div&#62;User {{ $route.params.id }}&#60;/div&#62;'
}

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
        </pre>
        <p>这里的&#60;router-view&#62;是最顶层的出口，渲染最高级路由匹配到的组件。同样地，一个被渲染组件同样可以包含自己的嵌套&#60;router-view&#62;</p>
        <h3>嵌套路由出口</h3>
        <pre>
const User = {
  template: `
    &#60;div class="user"&#62;
      &#60;h2&#62;User {{ $route.params.id }}&#60;/h2&#62;
      &#60;router-view&#62;&#60;/router-view&#62;
    &#60;/div&#62;
  `
}
        </pre>
        <h3>配置嵌套路由出口的渲染组件</h3>
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的router-view 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/:id/posts 匹配成功
          // UserPosts 会被渲染在 User 的router-view中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
        </pre>
        <p><span class="red">注意：</span>以/开头的嵌套路径会被当作根路径。 这让你充分的使用嵌套组件而无须设置嵌套的路径。</p>
        <h3>如果没有匹配到子路由，则不会渲染任何东西,但是可以提供空路由来作为默认值</h3>
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/user/:id', component: User,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的router-view中
        { path: '', component: UserHome },

        // ...其他子路由
      ]
    }
  ]
})
        </pre>
      </div>
      <h2>6、编程式导航</h2>
      <p>除了使用router-link创建a标签来定义导航链接，我们还可以借助router的实例方法，通过编写代码来实现。</p>
      <h3>router.push(location, onComplete?, onAbort?)、&#60;router-link :to="..."&#62; 等价于 router.push(...)</h3>
      <p><span class="red">注意：</span>在 Vue 实例内部，你可以通过 $router 访问路由实例。因此你可以调用 this.$router.push。</p>
      <div class="code large">
        <h3>代码实例</h3>
        // 字符串<br />
        router.push('home')<br />
        <br />
        // 对象<br />
        router.push({ path: 'home' })<br />
        <br />
        // 命名的路由<br />
        router.push({ name: 'user', params: { userId: '123' }})<br />
        <br />
        // 带查询参数，变成 /register?plan=private<br />
        router.push({ path: 'register', query: { plan: 'private' }})<br />
        <p><span class="red">注意：</span>如果提供了path，params会被忽略，取而代之的是你需要提供路由的name或手写完整的带有参数的path。同样的规则也适用于router-link组件的to属性</p>
        const userId = '123'<br />
        router.push({ name: 'user', params: { userId }}) // -> /user/123<br />
        router.push({ path: `/user/${userId}` }) // -> /user/123<br />
        // 这里的 params 不生效<br />
        router.push({ path: '/user', params: { userId }}) // -> /user<br />
      </div>
      <h3>router.replace(location, onComplete?, onAbort?)、&#60;router-link :to="..." replace&#62; 等价于 router.replace(...)</h3>
      <p>跟router.push 很像，唯一的不同就是，它不会向history添加新记录，而是替换掉当前的history记录。</p>
      <h3>router.go(n)</h3>
      <p>这个方法的参数是一个整数，意思是在history记录中向前或者后退多少步</p>
      <div class="code large">
        // 在浏览器记录中前进一步，等同于 history.forward()<br />
        router.go(1)<br />
        <br />
        // 后退一步记录，等同于 history.back()<br />
        router.go(-1)<br />
        <br />
        // 前进 3 步记录<br />
        router.go(3)<br />
        <br />
        // 如果 history 记录不够用，那就默默地失败呗<br />
        router.go(-100)<br />
        router.go(100)<br />
      </div>
      <h2>7、命名路由</h2>
      <p>通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候</p>
      <div class="code">
        <h3>定义一个路由</h3>
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
        </pre>
        <h3>链接到一个命名路由</h3>
        <p><b>
            &#60;router-link :to="{ name: 'user', params: { userId: 123 }}"&#62;User&#60;/router-link&#62;</b></p>
        或
        <p><b>router.push({ name: 'user', params: { userId: 123 }})</b></p>
      </div>
      <h2>8、命名视图与嵌套命名视图</h2>
      <p>可以在界面中拥有多个单独命名的视图，而不是只有一个单独的出口。如果router-view没有设置名字，那么默认为 default。</p>
      <div class="code large">
        &#60;router-view class="view one"&#62;&#60;/router-view&#62;<br />
        &#60;router-view class="view two" name="a"&#62;&#60;/router-view&#62;<br />
        &#60;router-view class="view three" name="b"&#62;&#60;/router-view&#62;<br />
      </div>
      <p>一个视图使用一个组件渲染，因此对于同个路由，多个视图就需要多个组件。</p>
      <div class="code">
        <h3>命名视图路由定义</h3>
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,
        a: Bar,
        b: Baz
      }
    }
  ]
})
        </pre>
        <h3>嵌套命名视图路由定义</h3>
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/settings',
      // 你也可以在顶级路由就配置命名视图
      component: UserSettings,
      children: [{
        path: 'emails',
        component: UserEmailsSubscriptions
      }, {
        path: 'profile',
        components: {
          default: UserProfile,
          helper: UserProfilePreview
        }
      }]
    }
  ]
})
        </pre>
      </div>
      <h2>9、重定向和别名</h2>
      <p>重定向也是通过routes配置来完成</p>
      <div class="code">
        <h3>直接配置重定向路径</h3>
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/a', <span class="red">redirect:</span> '/b' }
  ]
})
        </pre>
        <h3>配置重定向组件</h3>
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/a', <span class="red">redirect:</span> { name: 'foo' }}
  ]
})
        </pre>
        <h3>配置重定向方法,动态返回路径</h3>
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/a', <span class="red">redirect: to =></span> {
      // 方法接收 目标路由 作为参数
      // return 重定向的 字符串路径/路径对象
    }}
  ]
})
        </pre>
      </div>
      <p>/a的别名是/b，意味着当用户访问/b时，URL会保持为/b，但是路由匹配则为/a，就像用户访问/a一样。</p>
      <div>
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, <span class="red">alias:</span> '/b' }
  ]
})
        </pre>
        <p>“别名”的功能让你可以自由地将UI结构映射到任意的URL，而不是受限于配置的嵌套路由结构。</p>
      </div>
      <h2>10、路由组件传参</h2>
      <p>在组件中使用 $route 会使之与其对应路由形成高度耦合，从而使组件只能在某些特定的 URL 上使用，限制了其灵活性。因此推荐使用props将组件和路由解耦。</p>
      <div class="code">
        <h3>取代与 $route 的耦合</h3>
        <pre>
const User = {
  template: '&#60;div&#62;User { { $route.params.id } }&#60;/div&#62;'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})
        </pre>
        <h3>通过props解耦</h3>
        <pre>
const User = {
  props: ['id'],
  template: '&#60;div&#62;User {{ id }}&#60;/div&#62;'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },

    // 对于包含命名视图的路由，你必须分别为每个命名视图添加 `props` 选项：
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
        </pre>
      </div>
      <h3>布尔模式</h3>
      <p>如果props被设置为true，route.params将会被设置为组件属性。</p>
      <h3>对象模式</h3>
      <p>如果props是一个对象，它会被按原样设置为组件属性。</p>
      <div class="code">
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/promotion/from-newsletter', component: Promotion, props: { newsletterPopup: false } }
  ]
})
        </pre>
      </div>
      <h3>函数模式</h3>
      <p>创建一个函数返回props。这样你便可以将参数转换成另一种类型</p>
      <div class="code">
        <pre>
const router = new VueRouter({
  routes: [
    { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q }) }
  ]
})
        </pre>
        <p>URL /search?q=vue 会将 {query: 'vue'} 作为属性传递给 SearchUser 组件。</p>
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
  name: 'VueBasic11',
  data() {
    return {
      title: 'Vue基础--路由配置',
      intros: ['嵌套的路由/视图表',
        '模块化的、基于组件的路由配置',
        '路由参数、查询、通配符',
        '基于 Vue.js 过渡系统的视图过渡效果',
        '细粒度的导航控制',
        '带有自动激活的 CSS class 的链接',
        'HTML5 历史模式或 hash 模式，在 IE9 中自动降级',
        '自定义的滚动条行为'
      ],
      routes: [{
        type: '$route.path(string)',
        desc: '字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。'
      }, {
        type: '$route.params(object)',
        desc: '一个 key/value 对象，包含了动态片段和全匹配片段，如果没有路由参数，就是一个空对象。'
      }, {
        type: '$route.query(object)',
        desc: '一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。'
      }, {
        type: '$route.hash(string)',
        desc: '当前路由的 hash 值 (带 #) ，如果没有 hash 值，则为空字符串。'
      }, {
        type: '$route.fullPath(string)',
        desc: '完成解析后的 URL，包含查询参数和 hash 的完整路径。'
      }, {
        type: '$route.matched(Array<RouteRecord>',
        desc: '一个数组，包含当前路由的所有嵌套路径片段的路由记录 。路由记录就是 routes 配置数组中的对象副本'
      }, {
        type: '$route.name(string)',
        desc: '当前路由的名称，如果有的话。'
      }, {
        type: '$route.redirectedFrom(string)',
        desc: '如果存在重定向，即为重定向来源的路由的名字。'
      }]
    }
  },
  methods: {

  }
}

</script>
