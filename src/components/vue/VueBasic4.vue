<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、监听事件、v-on</h1>
      <p>用v-on指令监听DOM事件，并在触发时运行一些JavaScript代码。采用方法包括1、直接内联JS代码到指令2、指定函数名3、直接调用函数</p>
      <p>有时需要在内联语句处理器中访问原始的DOM事件。可以用特殊变量$event把它传入方法</p>
      <div class="code">
        <h3>内嵌代码(v-on:click="counter += 1")</h3>
        <p>按钮被点击了{{counter}}次</p>
        <button v-on:click="counter += 1">Add Click</button>
        <h3>指定函数名(v-on:click="greet")</h3>
        <button v-on:click="greet">Greet</button>
        <h3>直接调用函数(v-on:click="say('xx'))</h3>
        <button v-on:click="say('Hi')">Say Hi</button>
        <button v-on:click="say('Yo')">Say Yo</button>
        <h3>使用$event变量传递参数</h3>
        <button v-on:click="warn('Hello World', $event)">Submit</button>
      </div>
      <h1>二、事件修饰符</h1>
      <p>在事件处理程序中调用event.preventDefault()或event.stopPropagation()是非常常见的需求。尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。</p>
      <p>为了解决这个问题，Vue.js为v-on提供了事件修饰符。修饰符是由点开头的指令后缀来表示的。比如：.stop、.prevent、.capture、.self、.once、.passive</p>
      <div class="code">
        &#60;!-- 阻止单击事件继续传播 --&#62;<br />
        &#60;a v-on:click.stop="doThis"&#62;<br />
        <br />
        &#60;!-- 提交事件不再重载页面 --&#62;<br />
        &#60;form v-on:submit.prevent="onSubmit"&#62;<br />
        <br />
        &#60;!-- 修饰符可以串联 --&#62;<br />
        &#60;a v-on:click.stop.prevent="doThat"&#62;<br />
        <br />
        &#60;!-- 只有修饰符 --&#62;<br />
        &#60;form v-on:submit.prevent&#62;<br />
        <br />
        &#60;!-- 添加事件监听器时使用事件捕获模式 --&#62;<br />
        &#60;!-- 即内部元素触发的事件先在此处理，然后才交由内部元素进行处理 --&#62;<br />
        &#60;div v-on:click.capture="doThis"&#62;...&#60;/div&#62;<br />
        <br />
        &#60;!-- 只当在 event.target 是当前元素自身时触发处理函数 --&#62;<br />
        &#60;!-- 即事件不是从内部元素触发的 --&#62;<br />
        &#60;div v-on:click.self="doThat"&#62;...&#60;/div&#62;<br />
        <br />
        &#60;!-- 点击事件将只会触发一次（2.1.4新增），.once修饰符还能被用到自定义的组件事件上。--&#62;<br />
        &#60;a v-on:click.once="doThis"&#62;<br />
      </div>
      <p><span class="red">注意：</span>使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用v-on:click.prevent.self会阻止所有的点击，而v-on:click.self.prevent只会阻止对元素自身的点击。</p>
      <h2>.passive修饰符</h2>
      <p>Vue还对应addEventListener中的passive选项提供了.passive修饰符。这个.passive修饰符尤其能够提升移动端的性能。</p>
      <div class="code">
        &#60;!-- 滚动事件的默认行为 (即滚动行为) 将会立即触发 --&#62;<br />
        &#60;!-- 而不会等待 `onScroll` 完成 --&#62;<br />
        &#60;!-- 这其中包含 `event.preventDefault()` 的情况 --&#62;<br />
        &#60;div v-on:scroll.passive="onScroll"&#60;...&#60;/div&#62;
      </div>
      <p><span class="red">注意：</span>不要把.passive和.prevent一起使用，因为.prevent将会被忽略，同时浏览器可能会向你展示一个警告。请记住，.passive会告诉浏览器你不想阻止事件的默认行为。</p>
      <h1>三、按键修饰符</h1>
      <p>在监听键盘事件时，我们经常需要检查详细的按键。Vue允许为v-on在监听键盘事件时添加按键修饰符：</p>
      <div class="code">
        &#60;!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` --&#62;<br />
        &#60;input v-on:keyup.enter="submit"&#62;<br />
        <p>你可以直接将KeyboardEvent.key暴露的任意有效按键名转换为kebab-case来作为修饰符。</p>
        &#60;input v-on:keyup.page-down="onPageDown"&#62;
      </div>
      <h2>按键码</h2>
      <p>keyCode的事件用法已经被废弃了并可能不会被最新的浏览器支持。使用keyCode attribute也是允许的：</p>
      <p>&#60;input v-on:keyup.13="submit"&#62;</p>
      <p>为了在必要的情况下支持旧浏览器，Vue提供了绝大多数常用的按键码的别名：.enter、.tab、.delete (捕获“删除”和“退格”键)、.esc、.space、.up、.down、.left、.right</p>
      <p>你还可以通过全局 config.keyCodes 对象自定义按键修饰符别名：<br />// 可以使用 `v-on:keyup.f1`<br />
        Vue.config.keyCodes.f1 = 112</p>
      <h2>系统修饰键</h2>
      <p>可以用如下修饰符来实现仅在按下相应按键时才触发鼠标或键盘事件的监听器。.ctrl、.alt、.shift、.meta</p>
      <p><span class="red">注意：</span>在 Mac 系统键盘上，meta 对应 command 键 (⌘)。在 Windows 系统键盘 meta 对应 Windows 徽标键 (⊞)。在 Sun 操作系统键盘上，meta 对应实心宝石键 (◆)。在其他特定键盘上，尤其在 MIT 和 Lisp 机器的键盘、以及其后继产品，比如 Knight 键盘、space-cadet 键盘，meta 被标记为“META”。在 Symbolics 键盘上，meta 被标记为“META”或者“Meta”。</p>
      <div class="code">
        &#60;!-- Alt + C --&#62;<br />
        &#60;input v-on:keyup.alt.67="clear"&#62;<br />
        <br />
        &#60;!-- Ctrl + Click --&#62;<br />
        &#60;div v-on:click.ctrl="doSomething"&#62;Do something&#60;/div&#62;<br />
      </div>
      <p><span class="red">注意：</span>修饰键与常规按键不同，在和keyup 事件一起用时，事件触发时修饰键必须处于按下状态。换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发keyup.ctrl。而单单释放ctrl也不会触发事件。如果你想要这样的行为，请为ctrl换用keyCode：keyup.17。</p>
      <h2>.exact修饰符(2.5.0新增)</h2>
      <p>.exact 修饰符允许你控制由精确的系统修饰符组合触发的事件。</p>
      <div class="code">
        &#60;!-- 即使 Alt 或 Shift 被一同按下时也会触发 --&#62;<br />
        &#60;button v-on:click.ctrl="onClick">A&#60;/button&#62;<br />
        <br />
        &#60;!-- 有且只有 Ctrl 被按下的时候才触发 --&#62;<br />
        &#60;button v-on:click.ctrl.exact="onCtrlClick">A&#60;/button&#62;<br />
        <br />
        &#60;!-- 没有任何系统修饰符被按下的时候才触发 --&#62;<br />
        &#60;button v-on:click.exact="onClick"&#62;A&#60;/button&#62;
      </div>
      <h2>鼠标按钮修饰符(2.2.0新增)</h2>
      <p>这些修饰符会限制处理函数仅响应特定的鼠标按钮。.left、.right、.middle</p>
      <h1>三、表单输入绑定</h1>
      <h2>基础用法</h2>
      <p>你可以用v-model指令在表单input、textarea及select元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。</p>
      <p><span class="red">注意：</span>v-model会忽略所有表单元素的value、checked、selected attribute 的初始值而总是将Vue实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。</p>
      <p>v-model在内部为不同的输入元素使用不同的property并抛出不同的事件：</p>
      <ul>
        <li>text和textarea元素使用value property和input事件；</li>
        <li>checkbox和radio使用checked property和change 事件；</li>
        <li>select字段将value作为prop并将change作为事件。</li>
      </ul>
      <div class="code">
        <h3>文本</h3>
        <p>
          &#60;input <b>v-model</b>="inputMsg" placeholder="edit me"/&#62;<br />
          &#60;p&#62;Message is: { { inputMsg } }&#60;/p&#62;
        </p>
        <input v-model="inputMsg" placeholder="edit me" />
        <p>Message is: {{ inputMsg }}</p>
        <h3>多行文本</h3>
        <p>
          &#60;span>Multiline message is:&#60;/span&#62;<br />
          &#60;p style="white-space: pre-line;"&#62;{ { areaMsg } }&#60;/p&#62;<br />
          &#60;textarea <b>v-model="areaMsg"</b> placeholder="add multiple lines" /&#62;
        </p>
        <span>Multiline message is:</span>
        <p style="white-space: pre-line;">{{ areaMsg }}</p>
        <textarea v-model="areaMsg" placeholder="add multiple lines"></textarea>
        <h3>单选和复选框</h3>
        <p>单个复选框，绑定到布尔值</p>
        <p>
          &#60;input type="checkbox" id="checkbox" <b>v-model="checked"</b>&#62;
        </p>
        <input type="checkbox" id="checkbox" v-model="checked">
        <label for="checkbox">{{ checked }}</label>
        <p>多个复选框，绑定到同一个数组</p>
        <p>
          &#60;input type="checkbox" id="jack" value="Jack" <b>v-model="checkedNames"</b>&#62;
        </p>
        <div>
          <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
          <label for="jack">Jack</label>
          <input type="checkbox" id="john" value="John" v-model="checkedNames">
          <label for="john">John</label>
          <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
          <label for="mike">Mike</label>
          <br>
          <span>Checked names: {{ checkedNames }}</span>
        </div>
        <h3>单选按钮</h3>
        <p>
          &#60;input type="radio" id="one" value="One" <b>v-model="picked"</b>&#62;
        </p>
        <div id="radio">
          <input type="radio" id="one" value="One" v-model="picked">
          <label for="one">One</label>
          <br>
          <input type="radio" id="two" value="Two" v-model="picked">
          <label for="two">Two</label>
          <br>
          <span>Picked: {{ picked }}</span>
        </div>
        <h3>选择框</h3>
        <p>单选的时候，绑定一个字段</p>
        <p>
          &#60;select <b>v-model="selected"</b>&#62;
        </p>
        <div id="selected">
          <select v-model="selected">
            <option disabled value="">请选择</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
        </div>
        <p><span class="red">注意：</span>如果v-model表达式的初始值未能匹配任何选项，select元素将被渲染为“未选中”状态。</p>
        <p>多选时，绑定一个数组</p>
        <p>
          &#60;select <b>v-model="selecteds"</b> <i>multiple</i> style="width: 50px;"&#62;
        </p>
        <div id="selecteds">
          <select v-model="selecteds" multiple style="width: 50px;">
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
            <option>F</option>
          </select>
          <br>
          <span>Selected: {{ selecteds }}</span>
        </div>
        <h4>利用v-for来渲染选项示例</h4>
        <select v-model="forSelected">
          <option v-for="option in options" v-bind:value="option.value">
            {{ option.text }}
          </option>
        </select>
        <span>Selected: {{ forSelected }}</span>
      </div>
      <h2>值绑定</h2>
      <p>对于单选按钮，复选框及选择框的选项,v-model绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：</p>
      <div class="code">
        &#60;!-- 当选中时，`picked` 为字符串 "a" --&#62;<br />
        &#60;input type="radio" v-model="picked" value="a"&#62;<br />
        <br />
        &#60;!-- `toggle` 为 true 或 false --&#62;<br />
        &#60;input type="checkbox" v-model="toggle"&#62;<br />
        <br />
        &#60;!-- 当选中第一个选项时，`selected` 为字符串 "abc" --&#62;<br />
        &#60;select v-model="selected"&#62;<br />
        &#160;&#160;&#60;option value="abc"&#62;ABC&#60;/option&#62;<br />
        &#60;/select&#62;<br />
        <p><b>Vue支持用v-bind实现值绑定到Vue实例的一个动态property上，并且这个property的值可以不是字符串。</b></p>
        <h3>复选框</h3>
        <p>&#60;input type="checkbox" v-model="toggle" <b>true-value</b>="yes" <b>false-value</b>="no"&#62;</p>
        <p>// 当选中时<br />vm.toggle === 'yes'<br />// 当没有选中时<br />vm.toggle === 'no'</p>
        <h3>单选按钮</h3>
        <p>&#60;input type="radio" v-model="pick" <b>v-bind:value</b>="a"&#62;</p>
        <p>// 当选中时<br />vm.pick === vm.a</p>
        <h3>选择框选项</h3>
        <p>&#60;select v-model="selected"&#62;<br />
          &#60;!-- 内联对象字面量 --&#62;<br />
          &#60;option <b>v-bind:value</b>="{ number: 123 }"&#62;123&#60;/option&#62;<br />
          &#60;/select&#62;<br>
        </p>
        <p>// 当选中时<br />
          typeof vm.selected // => 'object'<br />
          vm.selected.number // => 123</p>
      </div>
      <h2>修饰符</h2>
      <h3>.lazy</h3>
      <p>在默认情况下，v-model 在每次input事件触发后将输入框的值与数据进行同步。你可以添加.lazy修饰符，从而转为在change事件之后进行同步：</p>
      <p>&#60;input v-model.lazy="msg"&#62;</p>
      <h3>.number</h3>
      <p>如果想自动将用户的输入值转为数值类型，可以给v-model添加.number修饰符</p>
      <p>&#60;input v-model.number="age" type="number"&#62;</p>
      <h3>.trim</h3>
      <p>如果要自动过滤用户输入的首尾空白字符，可以给v-model添加.trim修饰符</p>
      <p>&#60;input v-model.trim="msg"&#62;</p>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic4',
  data() {
    return {
      title: 'Vue基础--事件处理，表单输入绑定',
      counter: 0,
      inputMsg: '',
      areaMsg: '',
      checked: true,
      checkedNames: [],
      picked: '',
      selected: '',
      selecteds: [],
      forSelected: 'A',
      options: [
        { text: "Joe", value: 'A' },
        { text: "YRM", value: 'B' },
        { text: "XFY", value: 'C' }
      ]
    }
  },
  methods: {
    greet: function(event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.counter + '!');
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    },
    say: function(msg) {
      alert(msg);
    },
    warn: function(msg, event) {
      if (event) {
        // 现在我们可以访问原生事件对象
        event.preventDefault();
      }
      alert(msg);
    }
  },
  showMsg(msg) {
    alert(msg);
  }
}

</script>
