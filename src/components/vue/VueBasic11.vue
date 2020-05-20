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
      <h3>&#60;router-link&#62;相关属性</h3>
      <h4>to(表示目标路由的链接)</h4>
      <p>当被点击后，内部会立刻把to的值传到router.push()，所以这个值可以是一个字符串或者是描述目标位置的对象。</p>
      <div class="code large">
        &#60;!-- 字符串 --&#62;<br />
        &#60;router-link to="home"&#62;Home&#60;/router-link&#62;<br />
        &#60;!-- 渲染结果 --&#62;<br />
        &#60;a href="home"&#62;Home&#60;/a&#62;<br />
        <br />
        &#60;!-- 使用 v-bind 的 JS 表达式 --&#62;<br />
        &#60;router-link v-bind:to="'home'"&#62;Home&#60;/router-link&#62;<br />
        <br />
        &#60;!-- 不写 v-bind 也可以，就像绑定别的属性一样 --&#62;<br />
        &#60;router-link :to="'home'"&#62;Home&#60;/router-link&#62;<br />
        <br />
        &#60;!-- 同上 --&#62;<br />
        &#60;router-link :to="{ path: 'home' }"&#62;Home&#60;/router-link&#62;<br />
        <br />
        &#60;!-- 命名的路由 --&#62;<br />
        &#60;router-link :to="{ name: 'user', params: { userId: 123 }}"&#62;User&#60;/router-link&#62;<br />
        <br />
        &#60;!-- 带查询参数，下面的结果为 /register?plan=private --&#62;<br />
        &#60;router-link :to="{ path: 'register', query: { plan: 'private' }}"&#62;Register&#60;/router-link&#62;<br />
      </div>
      <h4>replace(导航后不会留下history记录)</h4>
      <p>当点击时，会调用router.replace()而不是router.push()，导航后不会留下history记录。</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" replace&#62;Router Link 1&#60;/router-link&#62;
      </div>
      <h4>append-当前 (相对) 路径前添加基路径。</h4>
      <p>我们从 /a 导航到一个相对路径 b，如果没有配置 append，则路径为 /b，如果配了，则为 /a/b</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" append&#62;Router Link 1&#60;/router-link&#62;
      </div>
      <h4>tag(指定何种标签)</h4>
      <p>有时候想要&#60;router-link&#62;渲染成某种标签，例如&#60;li&#62;。于是我们使用tag prop类指定何种标签，同样它还是会监听点击，触发导航。</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" tag = "li"&#62;Router Link 1&#60;/router-link&#62;
      </div>
      <h4>active-class(链接激活时使用的 CSS 类名。)</h4>
      <p>设置 链接激活时使用的 CSS 类名。</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" active-class = "_active"&#62;Router Link 1&#60;/router-link&#62;
      </div>
      <h4>exact-active-class(配置当链接被精确匹配的时候应该激活的 class。)</h4>
      <p>配置当链接被精确匹配的时候应该激活的 class。</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" exact-active-class = "_active"&#62;Router Link 1&#60;/router-link&#62;
      </div>
      <h4>event(声明可以用来触发导航的事件。</h4>
      <p>声明可以用来触发导航的事件。可以是一个字符串或是一个包含字符串的数组。</p>
      <div class="code large">
        &#60;router-link v-bind:to = "{ path: '/route1'}" event = "mouseover"&#62;Router Link 1&#60;/router-link&#62;
      </div>
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
      <h2>11、导航守卫</h2>
      <p>正如其名，vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航。有多种机会植入路由导航过程中：全局的, 单个路由独享的, 或者组件级的。注意：参数或查询的改变并不会触发进入/离开的导航守卫。</p>
      <h3>（1）全局前置守卫</h3>
      <p>使用 router.beforeEach 注册一个全局前置守卫,当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于等待中。</p>
      <div class="code large">
        const router = new VueRouter({ ... })<br />
        <br />
        <span class="red">router.beforeEach</span>((to, from, next) => {<br />
        &#160;&#160;// ...<br />
        })
        <p><b>每个守卫方法接收三个参数:</b></p>
        <ul>
          <li>to: Route: 即将要进入的目标 路由对象</li>
          <li>from: Route: 当前导航正要离开的路由</li>
          <li>next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
            <ul>
              <li>next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed(确认的)。</li>
              <li>next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。</li>
              <li>next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向next传递任意位置对象，且允许设置诸如replace: true、name: 'home' 之类的选项以及任何用在router-link的 to prop 或 router.push 中的选项。</li>
              <li>next(error): (2.4.0+)如果传入next的参数是一个Error实例，则导航会被终止且该错误会被传递给 router.onError()注册过的回调。</li>
            </ul>
          </li>
        </ul>
        <p><span class="red">注意：</span>确保要调用next方法，否则钩子就不会被resolved。</p>
      </div>
      <h3>（2）全局解析守卫</h3>
      <p>在 2.5.0+ 你可以用 router.beforeResolve 注册一个全局守卫。这和router.beforeEach类似，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。</p>
      <h3>（3）全局后置钩子</h3>
      <p>可以注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受next函数也不会改变导航本身：</p>
      <div class="code large">
        <span class="red">router.afterEach</span>((to, from) => {<br />
        &#160;&#160;// ...<br />
        })
      </div>
      <h3>（4）路由独享的守卫</h3>
      <p>可以在路由配置上直接定义beforeEnter守卫</p>
      <div class="code">
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      <span class="red">beforeEnter: (to, from, next)</span> => {
        // ...
      }
    }
  ]
})
        </pre>
      </div>
      <h3>（5）组件内的守卫</h3>
      <p>可以在路由组件内直接定义以下路由导航守卫：beforeRouteEnter、beforeRouteUpdate (2.2 新增)、beforeRouteLeave</p>
      <div class="code">
        <pre>
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
        </pre>
      </div>
      <p>beforeRouteEnter守卫不能访问this，因为守卫在导航确认前被调用，因此即将登场的新组件还没被创建。</p>
      <p>可以通过传一个回调给next来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。</p>
      <div class="code large">
        beforeRouteEnter (to, from, next) {<br />
        &#160;&#160;next(vm => {<br />
        &#160;&#160;&#160;&#160;// 通过 `vm` 访问组件实例<br />
        &#160;&#160;})<br />
        }
      </div>
      <p><span class="red">注意：</span>beforeRouteEnter是支持给next传递回调的唯一守卫。对于beforeRouteUpdate和beforeRouteLeave来说，this已经可用了，所以不支持传递回调，因为没有必要了。</p>
      <div class="code large">
        beforeRouteUpdate (to, from, next) {<br />
        &#160;&#160;// just use `this`<br />
        &#160;&#160;this.name = to.params.name<br />
        &#160;&#160;next()<br />
        }
      </div>
      <p>这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。</p>
      <div class="code large">
        beforeRouteLeave (to, from, next) {<br />
        &#160;&#160;const answer = window.confirm('Do you really want to leave? you have unsaved changes!')<br />
        &#160;&#160;if (answer) {<br />
        &#160;&#160;&#160;&#160;next()<br />
        &#160;&#160;} else {<br />
        &#160;&#160;&#160;&#160; next(false)<br />
        &#160;&#160;}<br />
        }
      </div>
      <h3>（6）完整的导航解析流程</h3>
      <ol type="1">
        <li v-for="step in parseSteps" :key="step">{{step}}</li>
      </ol>
      <h2>12、路由元信息-meta</h2>
      <p>定义路由的时候可以配置 meta 字段：</p>
      <div class="code">
        <pre>
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          <span class="red">meta:</span> { requiresAuth: true }
        }
      ]
    }
  ]
})
        </pre>
      </div>
      <p>一个路由匹配到的所有路由记录会暴露为 $route 对象 (还有在导航守卫中的路由对象) 的 $route.matched 数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。</p>
      <div class="code">
        <pre>
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
        </pre>
      </div>
      <h2>13、过渡动画</h2>
      <p>&#60;router-view&#62;是基本的动态组件，所以我们可以用&#60;transition&#62;组件给它添加一些过渡效果：</p>
      <div class="code large">
        &#60;transition&#62;<br />
        &#160;&#160;&#60;router-view&#62;&#60;/router-view&#62;<br />
        &#60;/transition&#62;<br />
      </div>
      <h3>单个路由的过渡</h3>
      <p>在各路由组件内使用&#60;transition&#62;并设置不同的 name。</p>
      <div class="code">
        <pre>
const Foo = {
  template: `
    &#60;transition name="slide"&#62;
      &#60;div class="foo"&#62;...&#60;/div&#62;
    &#60;/transition&#62;
  `
}

const Bar = {
  template: `
    &#60;transition name="fade"&#62;
      &#60;div class="bar"&#62;...&#60;/div&#62;
    &#60;/transition&#62;
  `
}
        </pre>
      </div>
      <h3>基于路由的动态过渡</h3>
      <p>可以基于当前路由与目标路由的变化关系，动态设置过渡效果</p>
      <div class="code large">
        &#60;!-- 使用动态的 transition name --&#62;<br />
        &#60;transition :name="transitionName"&#62;<br />
        &#160;&#160;&#60;router-view&#62;&#60;/router-view&#62;<br />
        &#60;/transition&#62;<br />
        <br />
        // 接着在父组件内<br />
        // watch $route 决定使用哪种过渡<br />
        watch: {<br />
        &#160;&#160;'$route' (to, from) {<br />
        &#160;&#160;&#160;&#160; const toDepth = to.path.split('/').length<br />
        &#160;&#160;&#160;&#160; const fromDepth = from.path.split('/').length<br />
        &#160;&#160;&#160;&#160; this.transitionName = toDepth &lt; fromDepth ? 'slide-right' : 'slide-left'<br />
        &#160;&#160;}<br />
        }
      </div>
      <h2>14、数据获取</h2>
      <p>进入某个路由后，需要从服务器获取数据，可以通过两种方式来实现：</p>
      <p>导航完成之后获取：先完成导航，然后在接下来的组件生命周期钩子中获取数据。在数据获取期间显示“加载中”之类的指示。</p>
      <p>导航完成之前获取：导航完成前，在路由进入的守卫中获取数据，在数据获取成功后执行导航。</p>
      <h3>导航完成后获取数据</h3>
      <p>当你使用这种方式时，我们会马上导航和渲染组件，然后在组件的 created 钩子中获取数据。这让我们有机会在数据获取期间展示一个 loading 状态，还可以在不同视图间展示不同的 loading 状态。</p>
      <div class="code">
        <h4>HTML代码</h4>
        <pre>
&#60;template&#62;
  &#60;div class="post"&#62;
    &#60;div v-if="loading" class="loading"&#62;
      Loading...
    &#60;/div&#62;

    &#60;div v-if="error" class="error"&#62;
      { { error } }
    &#60;/div&#62;

    &#60;div v-if="post" class="content"&#62;
      &#60;h2&#62;{ { post.title } }&#60;/h2&#62;
      &#60;p&#62;{ { post.body } }&#60;/p&#62;
    &#60;/div&#62;
  &#60;/div&#62;
&#60;/template&#62;
        </pre>
        <h4>Vue代码</h4>
        <pre>
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
        </pre>
      </div>
      <h3>在导航完成前获取数据</h3>
      <p>通过这种方式，我们在导航转入新的路由前获取数据。我们可以在接下来的组件的 beforeRouteEnter 守卫中获取数据，当数据获取成功后只调用 next 方法。</p>
      <div class="code">
        <pre>
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
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
      }],
      parseSteps: ['导航被触发。', '在失活的组件里调用离开守卫。',
        '调用全局的 beforeEach 守卫。', '在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。',
        '在路由配置里调用 beforeEnter。', '解析异步路由组件。', '在被激活的组件里调用 beforeRouteEnter。',
        '调用全局的 beforeResolve 守卫 (2.5+)。', '导航被确认。', '调用全局的 afterEach 钩子。',
        '触发 DOM 更新。', '用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。'
      ]
    }
  },
  methods: {

  }
}

</script>
