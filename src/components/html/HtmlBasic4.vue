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
        <h3>(1)无序列表（disc模式，默认）</h3>
        <ul type="disc">
          <li>周超(disc,默认)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ul>
        <h3>(2)无序列表（circle模式）</h3>
        <ul type="circle">
          <li>周超(circle)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ul>
        <h3>(3)无序列表（square模式）</h3>
        <ul type="square">
          <li>周超(square)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ul>
        <h3>(4)有序列表</h3>
        <ol type="1">
          <li>周超(类型：1，默认)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ol>
        <ol type="A">
          <li>周超(类型：A)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ol>
        <ol type="a">
          <li>周超(类型：a)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ol>
        <ol type="i">
          <li>周超(类型：i)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ol>
        <ol type="I">
          <li>周超(类型：I)</li>
          <li>余瑞梅</li>
          <li>小飞鱼</li>
        </ol>
        <h3>(5)自定义列表</h3>
        <dl>
          <dt>计算机</dt>
          <dd>用来计算的仪器 ... ...</dd>
          <dt>显示器</dt>
          <dd>以视觉方式显示信息的装置 ... ...</dd>
        </dl>
        <h3>(6)嵌套列表</h3>
        <ul>
          <li>第一项</li>
          <li>第二项
            <ol type="A">
              <li>第二子项1</li>
              <li>第二子项2</li>
            </ol>
          </li>
          <li>第三项
            <dl>
              <dt>自定义项目名称A</dt>
              <dd>自定义项目数据A</dd>
              <dt>自定义项目名称B</dt>
              <dd>自定义项目数据B</dd>
            </dl>
          </li>
          <li>第四项</li>
        </ul>
      </div>
      <br />
    </div>
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

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
