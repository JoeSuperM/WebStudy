<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、进入/离开与列表过渡</h1>
      <p>ue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。包括以下工具：</p>
      <ul>
        <li>在CSS过渡和动画中自动应用class</li>
        <li>可以配合使用第三方 CSS 动画库，如 Animate.css</li>
        <li>在过渡钩子函数中使用 JavaScript 直接操作 DOM</li>
        <li>可以配合使用第三方 JavaScript 动画库，如 Velocity.js</li>
      </ul>
      <h2>单元素/组件的过渡</h2>
      <p>Vue提供了transition的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡</p>
      <ul>
        <li>条件渲染 (使用 v-if)</li>
        <li>条件展示 (使用 v-show)</li>
        <li>动态组件</li>
        <li>组件根节点</li>
      </ul>
      <div class="code">
        <h3>演示HTML代码</h3>
        <pre>
          &#60;div id="demo"&#62;
            &#60;button v-on:click="show = !show"&#62;
              Toggle
            &#60;/button&#62;
            <b>&#60;transition name="fade"&#62;</b>
              &#60;p v-if="show">hello&#60;/p&#62;
            &#60;/transition&#62;
          &#60;/div&#62;
        </pre>
        <h3>增加CSS代码</h3>
        <pre>
          .fade-enter-active, .fade-leave-active {
            transition: opacity .5s;
          }
          .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
          }
        </pre>
        <h3>运行效果</h3>
        <div id="demo">
          <button v-on:click="show = !show">
            Toggle
          </button>
          <transition name="fade">
            <p v-if="show">这是一段用于演示CSS过渡效果的内容</p>
          </transition>
        </div>
        <h3>运行机制</h3>
        <p>当插入或删除包含在transition组件中的元素时，Vue将会做以下处理：</p>
        <ol>
          <li>自动嗅探目标元素是否应用了CSS过渡或动画，如果是，在恰当的时机添加/删除CSS类名。</li>
          <li>如果过渡组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用。</li>
          <li>如果没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM操作 (插入/删除) 在下一帧中立即执行。</li>
        </ol>
      </div>
      <h3>过渡类型</h3>
      <p>在进入/离开的过渡中，会有6个class切换。</p>
      <ol>
        <li>v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。</li>
        <li>v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。</li>
        <li>v-enter-to：2.1.8 版及以上定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。</li>
        <li>v-leave：定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。</li>
        <li>v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。</li>
        <li>v-leave-to：2.1.8 版及以上定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时v-leave被删除)，在过渡/动画完成之后移除。</li>
      </ol>
      <img src="../../assets/transition_vue.png">
      <p><span class="red">注意：</span>对于这些在过渡中切换的类名来说，如果你使用一个没有名字的transition，则v-是这些类名的默认前缀。如果你使用了transition name="my-transition"，那么v-enter会替换为 my-transition-enter。</p>
      <p>v-enter-active和v-leave-active可以控制进入/离开过渡的不同的缓和曲线</p>
      <h3>CSS过渡</h3>
      <p>常用的过渡都是使用 CSS 过渡。</p>
      <div class="code">
        <pre>
        <b>&#60;transition name="fade-fade"&#62;</b>
            &#60;p v-if="show">hello&#60;/p&#62;
        &#60;/transition&#62;
        </pre>
      </div>
      <h3>CSS动画</h3>
      <p>CSS动画用法同CSS过渡，区别是在动画中v-enter类名在节点插入DOM后不会立即删除，而是在animationend事件触发时删除。</p>
      <div class="code">
        <h3>HTML代码演示</h3>
        <pre>
          &#60;div id="example-2"&#62;
            &#60;button @click="show = !show"&#62;Toggle show&#60;/button&#62;
            &#60;transition name="bounce"&#62;
              &#60;p v-if="show">这是一段用于演示CSS动画效果的内容.&#60;/p&#62;
            &#60;/transition&#62;
          &#60;/div&#62;
        </pre>
        <h3>CSS代码</h3>
        <pre>
          .bounce-enter-active {
            animation: bounce-in .5s;
          }

          .bounce-leave-active {
            animation: bounce-in .5s reverse;
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0);
            }

            50% {
              transform: scale(1.5);
            }

            100% {
              transform: scale(1);
            }
          }
        </pre>
        <h3>运行效果</h3>
        <div id="example-2">
          <button @click="animShow = !animShow">Toggle animShow</button>
          <transition name="bounce">
            <p v-if="animShow">这是一段用于演示CSS动画效果的内容，这是一段用于演示CSS动画效果的内容，这是一段用于演示CSS动画效果的内容，这是一段用于演示CSS动画效果的内容.</p>
          </transition>
        </div>
      </div>
      <h3>自定义过渡的类名</h3>
      <p>我们可以通过以下属性来自定义过渡类名：enter-class、enter-active-class、enter-to-class (2.1.8+)、leave-class、leave-active-class、leave-to-class (2.1.8+)</p>
      <p>他们的优先级高于普通的类名，这对于 Vue 的过渡系统和其他第三方CSS动画库，如Animate.css结合使用十分有用。</p>
      <p>导入Animate.css动画库的方法</p>
      <ul>
        <li>通过npm install animate.css --save安装<br />然后再main.js中导入import animated from 'animate.css'<br />Vue.use(animated)</li>
        <li>在index.html文件的head中加入link路径。<br />
          &#60;link href="https://cdn.jsdelivr.net/npm/animate.css@3.5.1" rel="stylesheet" type="text/css"&#62;</li>
      </ul>
      <div class="code">
        <h3>HTML代码</h3>
        <pre>
          &#60;div id="example-3"&#62;
            &#60;button @click="animateShow = !animateShow"&#62;
              Toggle render
            &#60;/button&#62;
            &#60;transition name="custom-classes-transition"
                <b>enter-active-class="animated tada"
              leave-active-class="animated bounceOutRight"&#62;</b>
              &#60;p v-if="animateShow">演示第三方动画&#60;/p&#62;
            &#60;/transition&#62;
          &#60;/div&#62;
        </pre>
        <h3>运行效果</h3>
        <div id="example-3">
          <button @click="animateShow = !animateShow">
            Toggle render
          </button>
          <transition name="custom-classes-transition" enter-active-class="animated tada" leave-active-class="animated bounceOutRight">
            <p v-if="animateShow">演示第三方动画</p>
          </transition>
        </div>
      </div>
      <h3>同时使用过渡和动画</h3>
      <p>Vue 为了知道过渡的完成，必须设置相应的事件监听器。它可以是transitionend或animationend，这取决于给元素应用的CSS规则。如果你使用其中任何一种，Vue能自动识别类型并设置监听。</p>
      <p>但是，在一些场景中，你需要给同一个元素同时设置两种过渡动效，比如animation很快的被触发并完成了，而transition效果还没结束。在这种情况中，你就需要使用type attribute并设置animation或transition来明确声明你需要Vue监听的类型。</p>
      <h3>显性的过渡持续时间</h3>
      <p>在很多情况下，Vue 可以自动得出过渡效果的完成时机。默认情况下，Vue会等待其在过渡效果的根元素的第一个transitionend或animationend事件。</p>
      <p>在某些情况下你可以用transition组件上的duration属性定制一个显性的过渡持续时间 (以毫秒计)：</p>
      <p>&#60;transition :duration="1000"&#62;...&#60;/transition&#62;</p>
      <p>&#60;transition :duration="{ enter: 500, leave: 800 }"&#62;...&#60;/transition&#62;</p>
      <h3>JavaScript钩子</h3>
      <div class="code">
        <p>可以在transition中通过v-on来声明JavaScript钩子</p>
        <pre>
          &#60;transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            v-on:enter-cancelled="enterCancelled"

            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
            v-on:after-leave="afterLeave"
            v-on:leave-cancelled="leaveCancelled"&#62;
            &#60;!-- ... --&#62;
          &#60;/transition&#62;
        </pre>
        <p>在methods中定义相关的函数</p>
        <pre>
          methods: {
            // 进入中
            beforeEnter: function (el) {
              // ...
            },
            // 当与 CSS 结合使用时
            // 回调函数 done 是可选的
            enter: function (el, done) {
              // ...
              done()
            },
            afterEnter: function (el) {
              // ...
            },
            enterCancelled: function (el) {
              // ...
            },
            // 离开时
            beforeLeave: function (el) {
              // ...
            },
            // 当与 CSS 结合使用时
            // 回调函数 done 是可选的
            leave: function (el, done) {
              // ...
              done()
            },
            afterLeave: function (el) {
              // ...
            },
            // leaveCancelled 只用于 v-show 中
            leaveCancelled: function (el) {
              // ...
            }
          }
        </pre>
        <p><span class="red">注意：</span>当只用JavaScript过渡的时候，在enter和leave中必须使用done进行回调。否则，它们将被同步调用，过渡会立即完成。</p>
        <p><span class="red">推荐：</span>对于仅使用JavaScript过渡的元素添加v-bind:css="false"，Vue会跳过CSS的检测。这可以避免过渡过程中CSS的影响。</p>
      </div>
      <h3>初始渲染的过渡</h3>
      <p>可以通过appear属性设置节点在初始渲染的过渡，&#60;transition appear&#62;</p>
      <div class="code">
        <p>这里默认和进入/离开过渡一样，同样也可以自定义 CSS 类名。</p>
        <pre>
          &#60;transition appear
            appear-class="custom-appear-class"
            appear-to-class="custom-appear-to-class" (2.1.8+)
            appear-active-class="custom-appear-active-class"/&#62;
        </pre>
        <p>自定义 JavaScript 钩子</p>
        <pre>
          &#60;transition appear
            v-on:before-appear="customBeforeAppearHook"
            v-on:appear="customAppearHook"
            v-on:after-appear="customAfterAppearHook"
            v-on:appear-cancelled="customAppearCancelledHook"/&#62;
        </pre>
      </div>
      <h3>多个元素的过渡</h3>
      <p>对于原生标签可以使用v-if/v-else。最常见的多标签过渡是一个列表和描述这个列表为空消息的元素</p>
      <div class="code">
        <pre>
           &#60;transition &#62;
             &#60;table v-if="items.length > 0" &#62;
             &#60;/table &#62;
             &#60;p v-else>Sorry, no items found. &#60;/p &#62;
           &#60;/transition &#62;
        </pre>
        <p><span class="red">注意：</span>当有相同标签名的元素切换时，需要通过key属性设置唯一的值来标记以让Vue区分它们，否则Vue为了效率只会替换相同标签内部的内容。</p>
        <pre>
          &#60;transition&#62;
            &#60;button v-if="isEditing" <b>key="save"</b>>Save&#60;/button&#62;
            &#60;button v-else key="edit">Edit&#60;/button&#62;
          &#60;/transition&#62;
        </pre>
      </div>
      <h3>过渡模式</h3>
      <p>transition的默认行为 - 进入和离开同时发生。但是我们加上mode让它们运动像滑动过渡：</p>
      <ul>
        <li>in-out：新元素先进行过渡，完成之后当前元素过渡离开。</li>
        <li>out-in：当前元素先进行过渡，完成之后新元素过渡进入(常用)。</li>
      </ul>
      <p>&#60;transition name="fade" <b>mode="out-in"&#62;</b><br />
        &#160;&#160;&#60;!-- ... the buttons ... --&#62;<br />
        &#60;/transition&#62; </p>
      <h3>多个组件的过渡</h3>
      <div class="code">
        <h4>HTML代码</h4>
        <pre>
          &#60;transition name="component-fade" <b>mode="out-in"</b>&#62;
            &#60;component v-bind:is="view"&#62;&#60;/component&#62;
          &#60;/transition&#62;
        </pre>
        <h4>Vue代码</h4>
        <pre>
          new Vue({
            el: '#transition-components-demo',
            data: {
              view: 'v-a'
            },
            components: {
              'v-a': {
                template: ' &#60;div &#62;Component A &#60;/div &#62;'
              },
              'v-b': {
                template: ' &#60;div &#62;Component B &#60;/div &#62;'
              }
            }
          })
        </pre>
        <h4>CSS代码</h4>
        <pre>
          .component-fade-enter-active, .component-fade-leave-active {
            transition: opacity .3s ease;
          }
          .component-fade-enter, .component-fade-leave-to
          /* .component-fade-leave-active for below version 2.1.8 */ {
            opacity: 0;
          }
        </pre>
        <h4>运行效果</h4>
        <label>选择显示组件：</label>
        <input type="radio" v-on:click="radio('v-a')" name="component-transition" checked>A</input>
        <input type="radio" v-on:click="radio('v-b')" name="component-transition">B</input>
        <transition name="component-fade" mode="out-in">
          <component v-bind:is="view"></component>
        </transition>
      </div>
      <h2>列表过渡</h2>
      <p>渲染整个列表使用transition-group组件。这个组件的几个特点：</p>
      <ul>
        <li>不同于transition，它会以一个真实元素呈现：默认为一个span。你也可以通过tag属性更换为其他元素。</li>
        <li>过渡模式不可用，因为我们不再相互切换特有的元素。</li>
        <li>内部元素总是需要提供唯一的key属性值。</li>
        <li>CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身。</li>
      </ul>
      <h3>列表的进入/离开过渡</h3>
      <div class="code">
        <h4>HTML代码</h4>
        <pre>
          &#60;div id="list-demo" class="demo"&#62;
            &#60;button v-on:click="add"&#62;Add&#60;/button&#62;
            &#60;button v-on:click="remove"&#62;Remove&#60;/button&#62;
            &#60;transition-group name="list" tag="p"&#62;
              &#60;span v-for="item in items" v-bind:key="item" class="list-item"&#62;
                { { item } }
              &#60;/span&#62;
            &#60;/transition-group&#62;
          &#60;/div&#62;
        </pre>
        <h4>演示效果</h4>
        <div id="list-demo" class="demo">
          <button v-on:click="add">Add</button>
          <button v-on:click="remove">Remove</button>
          <transition-group name="list" tag="p">
            <span v-for="item in items" v-bind:key="item" class="list-item">
              {{ item }}
            </span>
          </transition-group>
        </div>
      </div>
      <h3>列表的排序过渡</h3>
      <p>transition-group组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。要使用这个新功能只需了解新增的v-move class，它会在元素的改变定位的过程中应用。像之前的类名一样，可以通过 name属性来自定义前缀，也可以通过move-class属性手动设置。</p>
      <div class="code">
        <h3>HTML代码</h3>
        <pre>
          &#60;div id="flip-list-demo" class="demo"&#62;
            &#60;button v-on:click="shuffle">Shuffle&#60;/button&#62;
            &#60;transition-group name="flip-list" tag="ul"&#62;
              &#60;li v-for="item in items" v-bind:key="item"&#62;
                { { item } }
              &#60;/li&#62;
            &#60;/transition-group&#62;
          &#60;/div&#62;
        </pre>
        <h3>演示效果</h3>
        <div id="flip-list-demo" class="demo">
          <button v-on:click="shuffle">Shuffle</button>
          <transition-group name="flip-list" tag="ul">
            <li v-for="item in items" v-bind:key="item">
              {{ item }}
            </li>
          </transition-group>
        </div>
      </div>
      <h2>动态过渡</h2>
      <p>在Vue中即使是过渡也是数据驱动的！动态过渡最基本的例子是通过name属性来绑定动态值。</p>
      <p>&#60;transition <b>v-bind:name</b>="transitionName"&#62;&#60;/transition&#62;</p>
      <h3>附录：部分动画效果</h3>
      <div class="warn">
        <pre>
          fade: {
            title: '淡入淡出',
            fadeIn: '淡入',
            fadeInDown: '向下淡入',
            fadeInDownBig: '向下快速淡入',
            fadeInLeft: '向右淡入',
            fadeInLeftBig: '向右快速淡入',
            fadeInRight: '向左淡入',
            fadeInRightBig: '向左快速淡入',
            fadeInUp: '向上淡入',
            fadeInUpBig: '向上快速淡入',
            fadeOut: '淡出',
            fadeOutDown: '向下淡出',
            fadeOutDownBig: '向下快速淡出',
            fadeOutLeft: '向左淡出',
            fadeOutLeftBig: '向左快速淡出',
            adeOutRight: '向右淡出',
            fadeOutRightBig: '向右快速淡出',
            fadeOutUp: '向上淡出',
            fadeOutUpBig: '向上快速淡出'
          },
          bounce: {
            title: '弹跳类',
            bounceIn: '弹跳进入',
            bounceInDown: '向下弹跳进入',
            bounceInLeft: '向右弹跳进入',
            bounceInRight: '向左弹跳进入',
            bounceInUp: '向上弹跳进入',
            bounceOut: '弹跳退出',
            bounceOutDown: '向下弹跳退出',
            bounceOutLeft: '向左弹跳退出',
            bounceOutRight: '向右弹跳退出',
            bounceOutUp: '向上弹跳退出'
          },
          zoom: {
            title: '缩放类',
            zoomIn: '放大进入',
            zoomInDown: '向下放大进入',
            zoomInLeft: '向右放大进入',
            zoomInRight: '向左放大进入',
            zoomInUp: '向上放大进入',
            zoomOut: '缩小退出',
            zoomOutDown: '向下缩小退出',
            zoomOutLeft: '向左缩小退出',
            zoomOutRight: '向右缩小退出',
            zoomOutUp: '向上缩小退出'
          },
          rotate: {
            title: '旋转类',
            rotateIn: '顺时针旋转进入',
            rotateInDownLeft: '从左往下旋入',
            rotateInDownRight: '从右往下旋入',
            rotateInUpLeft: '从左往上旋入',
            rotateInUpRight: '从右往上旋入',
            rotateOut: '顺时针旋转退出',
            rotateOutDownLeft: '向左下旋出',
            rotateOutDownRight: '向右下旋出',
            rotateOutUpLeft: '向左上旋出',
            rotateOutUpRight: '向右上旋出'
          },
          flip: {
            title: '翻转类',
            flipInX: '水平翻转进入',
            flipInY: '垂直翻转进入',
            flipOutX: '水平翻转退出',
            flipOutY: '垂直翻转退出'
          },
          strong: {
            title: '强调类',
            bounce: '弹跳',
            flash: '闪烁',
            pulse: '脉冲',
            rubberBand: '橡皮筋',
            shake: '左右弱晃动',
            swing: '上下摆动',
            tada: '缩放摆动',
            wobble: '左右强晃动',
            jello: '拉伸抖动'
          }
        </pre>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}

.bounce-leave-active {
  animation: bounce-in .5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }

  100% {
    transform: scale(1);
  }
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.flip-list-move {
  transition: transform 1s;
}

</style>
<script>
export default {
  name: 'VueBasic9',
  data() {
    return {
      title: 'Vue基础--过渡与动画',
      show: true,
      animShow: true,
      animateShow: true,
      view: 'v-a',
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods: {
    radio: function(v) {
      this.view = v;
    },
    randomIndex: function() {
      return Math.floor(Math.random() * this.items.length)
    },
    add: function() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove: function() {
      this.items.splice(this.randomIndex(), 1)
    },
    shuffle: function() {
      this.items = _.shuffle(this.items)
    }
  },
  components: {
    'v-a': {
      template: '<div>Component A</div>'
    },
    'v-b': {
      template: '<div>Component B</div>'
    }
  }

}

</script>
