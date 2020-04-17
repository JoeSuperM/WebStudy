<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、表单</h1>
      <p>HTML表单用于搜集不同类型的用户输入。使用form定义表单，表单中包含不同类型的input元素，比如复选框、单选按钮、提交按钮等</p>
      <h2>1、action属性</h2>
      <p>action 属性定义在提交表单时执行的动作。向服务器提交表单的通常做法是使用提交按钮。如果省略 action 属性，则 action 会被设置为当前页面。</p>
      <div class="code">
        <p>&#60;form action=&#34;action_page.php&#34;&#62;</p>
      </div>
      <h2>2、method属性</h2>
      <p>method 属性规定在提交表单时所用的HTTP方法（GET 或 POST）,默认情况是GET方法，用于提交少量或不涉密的数据，二POST方法则多用于提交比较多或敏感数据</p>
      <div class="code">
        <p>&#60;form action=&#34;action_page.php&#34; method=&#34;POST&#34;&#62;</p>
        <p>&#60;form action=&#34;action_page.php&#34; method=&#34;GET&#34;&#62;</p>
      </div>
      <h2>3、autocomplete属性</h2>
      <p>规定浏览器应该自动完成表单（默认：开启）。autocomplete=&#34;on/off&#34;<br />
        autocomplete 属性适用于 &#60;form&#62; 以及如下&#60;input&#62; 类型：text、search、url、tel、email、password、datepickers、range 以及 color。</p>
      <h2>4、enctype属性</h2>
      <p>规定被提交数据的编码（默认：url-encoded）。</p>
      <h2>5、novalidate属性</h2>
      <p>规定在提交表单时不对表单数据进行验证。</p>
      <h2>6、target属性</h2>
      <p>规定 action 属性中地址的目标（默认：_self）。</p>
      <h2>7、accept-charset</h2>
      <p>规定在被提交表单中使用的字符集（默认：页面字符集）。</p>
      <h1>二、input元素</h1>
      <p>input元素是最重要的表单元素。根据不同的类型，有不同个形态</p>
      <div class="code">
        <h3>类型：text</h3>
        <form>
          请输入姓名：<input type="text" name="name" value="默认值" />
        </form>
        <h3>类型：password</h3>
        <form>请输入密码：<input type="password" name="pwd" value="123" />
        </form>
        <h3>类型：radio</h3>
        <form>
          请选择性别：<input type="radio" name="set" value="0">男</input>
          <input type="radio" name="set" value="1" checked="">女</input>
        </form>
        <h3>类型：checkbox</h3>
        <form>
          请选择喜欢的颜色：<input type="checkbox" name="color" value="0">红色</input>
          <input type="checkbox" name="color" value="1" checked="">绿色</input>
          <input type="checkbox" name="color" value="2">蓝色</input>
        </form>
        <h3>类型：number</h3>
        <form>
          请选择数字【0，100】：<input type="number" name="num" min="0" max="100" step="2" value="88" />
        </form>
        <h3>类型：date</h3>
        <form>
          请选择日期【2000.01.01~2020.12.31】：<input type="date" name="data" min="2000-01-01" max="2020-12-31">
        </form>
        <h3>类型：</h3>
        <form>
          请选择颜色：<input type="color" name="color" value="#00FF00">
        </form>
        <h3>类型：range</h3>
        <form>
          请选择范围【0-100，步长：2】：<input type="range" name="range" min="0" max="100" step="2" value="50">
        </form>
        <h3>类型：month</h3>
        <form>
          请选择月份：<input type="month" name="month" value="4">
        </form>
        <h3>类型：week</h3>
        <form>
          请选择周期：<input type="week" name="week">
        </form>
        <h3>类型：time</h3>
        <form>
          请选择时间：<input type="time" name="time">
        </form>
        <h3>类型：datetime</h3>
        <form>
          请选择日期和时间：<input type="datetime" name="datetime">
        </form>
        <h3>类型：datetime-local</h3>
        <form>
          请选择本地日期和时间：<input type="datetime-local" name="datetime-local">
        </form>
        <h3>类型：email</h3>
        <form>
          请输入邮箱地址：<input type="email" name="email">
        </form>
        </form>
        <h3>类型：search</h3>
        <form>
          请输入搜索内容：<input type="search" name="search">
        </form>
        <h3>类型：tel</h3>
        <form>
          请输入电话号码：<input type="tel" name="tel">
        </form>
        <h3>类型：url</h3>
        <form>
          请输入网址：<input type="url" name="url">
        </form>
        <h3>类型：image</h3>
        <form>
          图片按钮：<input type="image" alt="提交" width="64" height="64" src="https://www.w3school.com.cn/i/eg_submit.jpg" />
        </form>
        <h3>类型：file</h3>
        <form>
          请选择文件：<input type="file" name="file" multiple>
        </form>
        <h3>类型：button、submit</h3>
        <form>
          <input type="button" name="save" value="保存" onclick="alert('保存成功！')" />
          <input type="submit" name="submit" value="提交" onclick="alert('提交成功！')" />
        </form>
      </div>
      <h2>input元素的限制属性</h2>
      <table border="1" cellpadding="5" cellspacing="0">
        <tr class="table_head" bgcolor="#3F3F3F">
          <th>属性</th>
          <th>描述</th>
        </tr>
        <tr v-for="attr in inp_attrs" :key="attr.name">
          <td width="150">{{attr.name}}</td>
          <td>{{attr.desc}}</td>
        </tr>
      </table>
      <h1>三、select、option和button元素（下拉列表）</h1>
      <p>select元素定义下拉列表，option元素定义待选择的选项，selected属性来定义预定义选项，否则默认为第一个选项。</p>
      <div class="code">
        <form>
          请选择车型：
          <select name="cars">
            <option value="op1">宝马</option>
            <option value="op2" selected>奔驰</option>
            <option value="op3">奥迪</option>
            <option value="op4">五菱</option>
          </select>
          <br />
          <button type="button" onclick="alert('按钮点击！')">点击按钮</button>
        </form>
      </div>
      <h1>四、textarea元素</h1>
      <p>textarea元素定义独航输入字段（文本域）</p>
      <div class="code">
        <form>请输入文本内容：
          <textarea name="msg" rows="10" cols="50">这是默认内容</textarea>
        </form>
      </div>
      <h1>五、H5新增元素</h1>
      <p>HTML元素新增datalist，keygen和output元素。<br />
        默认地，浏览器不会显示未知元素。新元素不会破坏您的页面。</p>
      <div class="code">
        <h3>datalist元素,规定预定义选项列表</h3>
        <form>
          <input type="text" name="browsers" list="browsers">
          <datalist id="browsers">
            <option valeu="Internet Explorer" />
            <option value="Firefox" />
            <option value="Chrome" />
            <option value="Opera" />
            <option value="Safari" />
          </datalist>
        </form>
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
  name: 'HtmlBasic8',
  data() {
    return {
      title: 'HTML基础--表单',
      inp_attrs: [{
          name: 'diasbled',
          desc: "规定输入字段应该被禁用。被禁用的元素是不可用和不可点击也不会被提交。"
        },
        {
          name: 'name',
          desc: '如果要正确地提交数据，每个输入字段必须设置一个name属性以便服务器获取输入的值。最终提交的数据会已键值对的形式提交，键即为输入字段的name，值就是用户输入的内容。'
        },
        {
          name: 'width、height',
          desc: 'height 和 width 属性规定input元素的高度和宽度,仅用于 <input type="image"/>。'
        },
        {
          name: 'autofocus',
          desc: '属性是布尔属性。如果设置，则规定当页面加载时input元素应该自动获得焦点。'
        }, {
          name: 'list',
          desc: '该属性应用的datalist元素中包含了input元素的预定义选项。'
        },
        {
          name: 'max',
          desc: '规定输入字段的最大值.'
        },
        {
          name: 'maxlength',
          desc: '规定输入字段的最大字符数。'
        },
        {
          name: 'min',
          desc: '规定输入字段的最小值。'
        },
        {
          name: 'pattern',
          desc: '规定通过其检查输入值的正则表达式。适用于text、search、url、tel、email、and password。'
        },
        {
          name: 'readonly',
          desc: '规定输入字段为只读（无法修改），readonly属性不需要值。'
        },
        {
          name: 'required',

          desc: '规定输入字段是必需的（必需填写）。适用于text、search、url、tel、email、password、date pickers、number、checkbox、radio、and file.'
        },
        {
          name: 'size',
          desc: '规定输入字段的宽度（以字符计）。'
        },
        {
          name: 'step',
          desc: '规定输入字段的合法数字间隔。适用于number、range、date、datetime、datetime-local、month、time 以及 week。'
        },
        {
          name: 'value',
          desc: '规定输入字段的默认值。'
        }, {

          name: 'multiple',
          desc: '布尔属性。规定允许用户在input元素中输入一个以上的值。适用于email 和 file。'
        },
        {
          name: 'placeholder',
          desc: '规定用以描述输入字段预期值的提示（样本值或有关格式的简短描述）。适用于text、search、url、tel、email 以及 password。'
        }
      ]

    }
  }
}

</script>
