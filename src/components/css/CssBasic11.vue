<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之过渡效果</h1>
      <h2>工作原理</h2>
      <p>CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。要实现这一点，必须规定两项内容：<br />
        指定要添加效果的CSS属性和指定效果的持续时间。</p>
      <h2>过渡属性</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="180">属性</th>
          <th>属性值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in transAttrs" :for="item.name">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h3>transition-timing-function值定义</h3>
      <img src="../../assets/transition-func.png">
      <h2>演示效果</h2>
      <div class="code">
        <h3>单项过渡效果</h3>
        <div id="one">这是演示单项过渡效果,鼠标放置看效果</div>
        <h3>多项过渡效果</h3>
        <div id="two">这是演示多项过渡效果,鼠标放置看效果</div>
        <h3>延迟过渡效果</h3>
        <div id="three">这是演示延迟过渡效果,鼠标放置看效果</div>
      </div>
      <h1>二、CSS3之动画效果</h1>
      <p>CSS3 可以创建动画，它可以取代许多网页动画图像、Flash 动画和 JavaScript 实现的效果。</p>
      <h2>@keyframes规则</h2>
      <p>@keyframes 规则是创建动画。@keyframes规则内指定一个CSS样式和动画将逐步从目前的样式更改为新的样式。<br />
        当在 @keyframes 创建动画，把它绑定到一个选择器，否则动画不会有任何效果。<br />指定至少这两个CSS3的动画属性绑定向一个选择器：规定动画的名称和规定动画的时长 </p>
      <h2>CSS3的动画属性</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3f3f3f">
          <th width="180">属性</th>
          <th width="300">属性值</th>
          <th>描述</th>
        </tr>
        <tr v-for="item in animationAttrs" :for="item.name">
          <td>{{item.name}}</td>
          <td>{{item.value}}</td>
          <td>{{item.desc}}</td>
        </tr>
      </table>
      <h3>animation-timing-function值定义</h3>
      <img src="../../assets/transition-func.png">
      <h3>animation-fill-mode值定义</h3>
      <img src="../../assets/animation-fill-mode.png">
      <h2>演示动画效果</h2>
      <div class="code">
        <h3>演示所有的动画效果</h3>
        <div style="width:300px; height:300px;">
          <div id="animation" />
        </div>
        <p>演示颜色变化的动画效果(当动画完成时，会变回初始的样式)</p>
        <div id="color" />
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

div#one {
  width: 100px;
  height: 100px;
  color: white;
  background: green;
  transition: width 2s;
  -webkit-transition: width 2s;
  /* Safari */
}

div#one:hover {
  width: 300px;
}

div#two {
  width: 100px;
  height: 100px;
  background: green;
  color: white;
  -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
  /* For Safari 3.1 to 6.0 */
  transition: width 2s, height 2s, transform 2s;
}

div#two:hover {
  width: 200px;
  height: 200px;
  -webkit-transform: rotate(180deg);
  /* Chrome, Safari, Opera */
  transform: rotate(180deg);
}

div#three {
  width: 100px;
  height: 100px;
  background: green;
  color: white;
  transition-property: width;
  transition-duration: 1s;
  transition-timing-function: linear;
  transition-delay: 2s;
  /* Safari */
  -webkit-transition-property: width;
  -webkit-transition-duration: 1s;
  -webkit-transition-timing-function: linear;
  -webkit-transition-delay: 2s;
  /*
    transition: width 1s linear 2s;
    -webkit-transition: width 1s linear 2s;
   */
}

div#three:hover {
  width: 200px;
}

/*动画*/
@keyframes myAnimation {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }

  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }

  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }

  75% {
    background: green;
    left: 0px;
    top: 200px;
  }

  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

@-webkit-keyframes myAnimation {
  0% {
    background: red;
    left: 0px;
    top: 0px;
  }

  25% {
    background: yellow;
    left: 200px;
    top: 0px;
  }

  50% {
    background: blue;
    left: 200px;
    top: 200px;
  }

  75% {
    background: green;
    left: 0px;
    top: 200px;
  }

  100% {
    background: red;
    left: 0px;
    top: 0px;
  }
}

div#animation {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;

  animation: myAnimation 5s linear 2s infinite alternate;
  /* Firefox: */
  -moz-animation: myAnimation 5s linear 2s infinite alternate;
  /* Safari and Chrome: */
  -webkit-animation: myAnimation 5s linear 2s infinite alternate;
  /* Opera: */
  -o-animation: myAnimation 5s linear 2s infinite alternate;
  /*
  animation-name: myAnimation;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-play-state: running;
   */
}

@keyframes myfirst {
  0% {
    background: red;
  }

  25% {
    background: yellow;
  }

  50% {
    background: blue;
  }

  100% {
    background: green;
  }
}

@-moz-keyframes myfirst

/* Firefox */
  {
  0% {
    background: red;
  }

  25% {
    background: yellow;
  }

  50% {
    background: blue;
  }

  100% {
    background: green;
  }
}

@-webkit-keyframes myfirst

/* Safari and Chrome */
  {
  0% {
    background: red;
  }

  25% {
    background: yellow;
  }

  50% {
    background: blue;
  }

  100% {
    background: green;
  }
}

@-o-keyframes myfirst

/* Opera */
  {
  0% {
    background: red;
  }

  25% {
    background: yellow;
  }

  50% {
    background: blue;
  }

  100% {
    background: green;
  }
}

div#color {
  width: 100px;
  height: 100px;
  background: red;
  animation: myfirst 5s;
  -moz-animation: myfirst 5s;
  /* Firefox */
  -webkit-animation: myfirst 5s;
  /* Safari and Chrome */
  -o-animation: myfirst 5s;
  /* Opera */
}

</style>
<script>
export default {
  name: 'CssBasic11',
  data() {
    return {
      title: 'CSS基础--过渡、动画',
      transAttrs: [{
        name: 'transition',
        value: '格式：transition: property duration timing-function delay;',
        desc: '简写属性，用于在一个属性中设置四个过渡属性。'
      }, {
        name: 'transition-property',
        value: 'none(没有属性会获得过渡效果。)、all(所有属性都将获得过渡效果。)、property(定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。)',
        desc: '规定应用过渡的 CSS 属性的名称。'
      }, {
        name: 'transition-duration',
        value: '规定完成过渡效果需要花费的时间（以秒或毫秒计）。',
        desc: '定义过渡效果花费的时间。默认是 0。'
      }, {
        name: 'transition-timing-function',
        value: 'linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);',
        desc: '规定过渡效果的时间曲线。默认是 "ease"。'
      }, {
        name: 'transition-delay',
        value: '规定在过渡效果开始之前需要等待的时间，以秒或毫秒计。',
        desc: '规定过渡效果何时开始。默认是 0。'
      }],
      animationAttrs: [{
        name: '@keyframes',
        value: '@keyframes animationname {keyframes-selector {css-styles;}},其中必需的。keyframes-selector:动画持续时间的百分比。合法值：0-100%/from(和0%相同)/to(和100%相同)',
        desc: '规定动画。@(-webkit-)keyframes name{from {原始属性}to {目标属性}}.'
      }, {
        name: 'animation',
        value: 'name duration timing-function delay iteration-count direction fill-mode play-state;',
        desc: '所有动画属性的简写属性，除了 animation-play-state 属性。'
      }, {
        name: 'animation-name',
        value: '指定要绑定到选择器的关键帧的名称',
        desc: '规定 @keyframes 动画的名称。'
      }, {
        name: 'animation-duration',
        value: '指定动画播放完成花费的时间。默认值为0，意味着没有动画效果。',
        desc: '规定动画完成一个周期所花费的秒或毫秒。默认是 0。'
      }, {
        name: 'animation-timing-function',
        value: 'linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);',
        desc: '规定动画的速度曲线。默认是 "ease"。'
      }, {
        name: 'animation-fill-mode',
        value: 'none|forwards|backwards|both',
        desc: '规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。'
      }, {
        name: 'animation-delay',
        value: '可选。定义动画开始前等待的时间，以秒或毫秒计。默认值为0',
        desc: '规定动画何时开始。默认是 0。'
      }, {
        name: 'animation-iteration-count',
        value: '一个数字，定义应该播放多少次动画',
        desc: '规定动画被播放的次数。默认是 1。'
      }, {
        name: 'animation-direction',
        value: 'normal(默认，动画按正常播放)|reverse(动画反向播放)|alternate(动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放)|alternate-reverse(动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放)',
        desc: '规定动画是否在下一周期逆向地播放。默认是 "normal"。'
      }, {
        name: 'animation-play-state',
        value: 'paused(指定暂停动画)|running(指定正在运行的动画);',
        desc: '规定动画是否正在运行或暂停。默认是 "running"。'
      }]
    }
  }
}

</script>
