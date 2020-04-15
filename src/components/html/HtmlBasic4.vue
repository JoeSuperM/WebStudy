<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1 name="anchor">一、表格</h1>
      <p>表格由 &#60;table&#62; 标签来定义。每个表格均有若干行（由 &#60;tr&#62; 标签定义），每行被分割为若干单元格（由 &#60;td&#602; 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。</p>
      <h2>1、表格实例</h2>
      <div class="code">
        <table border="1" width="300">
          <caption>(1)两行,宽度300，对齐</caption>
          <tr>
            <td align="left">数据A</td>
            <td align="right">数据B</td>
          </tr>
        </table>
        <table border="1" bgcolor="yellow" width="300">
          <caption>(2)两行三列,背景色</caption>
          <tr>
            <td>100</td>
            <td bgcolor="red">200</td>
          </tr>
          <tr>
            <td>400</td>
            <td>500</td>
          </tr>
        </table>
        <table width="100">
          <caption>(3)没有边框</caption>
          <tr>
            <td>100</td>
            <td>200</td>
          </tr>
          <tr>
            <td>400</td>
            <td>500</td>
          </tr>
        </table>
        <table border="1">
          <caption>(4)水平表头</caption>
          <tr>
            <th>表头1</th>
            <th>表头2</th>
          </tr>
          <tr>
            <td>400</td>
            <td>500</td>
          </tr>
          <tr>
            <td>100</td>
            <td>200</td>
          </tr>
        </table>
        <table border="1">
          <caption>(5)垂直表头</caption>
          <tr>
            <th>表头1</th>
            <td>400</td>
            <td>100</td>
          </tr>
          <tr>
            <th>表头2</th>
            <td>500</td>
            <td>800</td>
          </tr>
        </table>
        <table border="1">
          <caption>(6)空数据和跨行</caption>
          <tr>
            <th>姓名</th>
            <th colspan="2">电话</th>
          </tr>
          <tr>
            <td>Bill Gates</td>
            <td>555 77 854</td>
            <td>555 77 855</td>
          </tr>
          <tr>
            <td>Joe SuperM</td>
            <td rowspan="2">110 88 110</td>
            <td>666 88 110</td>
          </tr>
          <tr>
            <td>Yrm SuperM</td>
            <td>&nbsp;</td>
          </tr>
        </table>
        <table border="1" cellpadding="10">
          <caption>(7)嵌套和间距(边距和间距)</caption>
          <tr>
            <td>
              <p>这是一个段落。</p>
              <p>这是另一个段落。</p>
              <p>cellpadding = 10</p>
            </td>
            <td>这个单元包含一个表格（cellspacing = 8）：
              <table border="1" cellspacing="8">
                <tr>
                  <td>A</td>
                  <td>B</td>
                </tr>
                <tr>
                  <td>C</td>
                  <td>D</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td>这个单元包含一个列表：
              <ul>
                <li>苹果</li>
                <li>香蕉</li>
                <li>菠萝</li>
              </ul>
            </td>
            <td>HELLO</td>
          </tr>
        </table>
      </div>
      <h1 name="anchor">二、列表</h1>
      <p>HTML支持有序、无序和定义列表。<br />
        无序列表始于 &#60;ul&#62; 标签。每个列表项始于 &#60;li&#62; 标签。<br />
        有序列表始于 &#60;ol&#62; 标签。每个列表项始于 &#60;li&#62; 标签。<br />
        自定义列表以 &#60;dl&#62; 标签开始。每个自定义列表项以 &#60;dt&#62; 开始。每个自定义列表项的定义以 &#60;dd&#62; 开始。
      </p>
      <h2>1、列表实例</h2>
      <div class="code">
      </div>
      <br />
    </div>
  </div>
</template>
<style scoped>
.center {
  align-items: center;
  align-content: center;
  text-align: center;
}

.content {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
}

.code {
  padding: 5px;
  border-style: dashed;
  border-color: #0000FF;
  border-width: thin;
}

.warn {
  padding: 5px;
  border-style: solid;
  border-color: #FF0000;
  border-width: thin;
}

</style>
<script>
export default {
  name: 'HtmlBasic4',
  data() {
    return {
      title: 'HTML基础--表格、列表',
    }
  }
}

</script>
