<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h2>一、屏幕底部弹框（Toast、SnackBar）</h2>
      <div class="code">
        <button v-on:click="showSnackBar">显示SnackBar</button>
        <div id="snackbar">这是提示的内容</div>
      </div>
      <h2>二、带百分比的进度条</h2>
      <div class="code">
        <div id="myProgress">
          <div id="myBar">{{progress}}%</div>
        </div>
        <br />
        <button v-on:click="showProgress(100)">点击显示进度(100%)</button>
        <button v-on:click="showProgress(60)">点击显示进度(60%)</button>
        <button v-on:click="showProgress(5)">点击显示进度(5%)</button>
      </div>
      <h2>三、左/右侧侧边栏实例</h2>
      <div class="code">
        <div id="mySidenav" v-bind:class="[showLeft ? 'sidenav-left' : 'sidenav-right','sidenav']">
          <a href="javascript:void(0)" target="_self" class="closebtn" v-on:click="closeNav()">&times;</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        <div id="main">
          <h2>侧边栏实例 - 页面主体向右移动</h2>
          <p>点击以下菜单图标打开侧边栏，主体内容向右偏移。主体内容添加黑色透明背景</p>
          <span style="font-size:30px;cursor:pointer" v-on:click="openNav(true)">&#9776; 打开左侧边栏</span>
          <h2>侧边栏实例 - 页面主体向左移动</h2>
          <p>点击以下菜单图标打开侧边栏，主体内容向左偏移。主体内容添加黑色透明背景</p>
          <span style="font-size:30px;cursor:pointer" v-on:click="openNav(false)">&#9776; 打开右侧边栏</span>
        </div>
      </div>
      <h2>四、监听Enter键触发或鼠标点击</h2>
      <div class="code">
        <h3>按下 Enter 触发按钮点击事件</h3>
        <p>选中输入框，然后按下"Enter" 就会触发按钮的点击事件。</p>
        <input id="myInput" value="v-on:keyup.13.." v-on:keyup.13="myKeyUp">
        <input id="myInput" value="v-on:keyup.." v-on:keyup="myKeyUp">
        <button id="myBtn" onclick="javascript:alert('Hello World!')">按钮</button>
        <p>点击下面的区域，可以查看点击位置的坐标信息等</p>
        <div class="mouse-div" v-on:mousedown="mouseDown">
          <p>点击查看鼠标位置信息等</p>
        </div>
      </div>
      <h2>五、判断浏览器是PC还是移动设备</h2>
      <button v-on:click="getBrowseType">点击查看浏览器类型</button>
      <h2>六、打开新窗口，并控制外观</h2>
      <button v-on:click="controlNewWindow(true)">点击打开新窗口</button>
      <button v-on:click="controlNewWindow(false)">点击关闭新窗口</button>
      <button v-on:click="changeNewWindow(true)">移动窗口到指定位置</button>
      <button v-on:click="changeNewWindow(false)">重置窗口大小</button>
      <h2>七、弹出Modal对话框</h2>
      <div class="code">
        <button v-on:click="showModal(true)">点击从顶部弹出</button>
        <button v-on:click="showModal(false)">点击从底部弹出</button>
        <!-- 弹窗 -->
        <div id="myModal" v-bind:class="{'modal-top' : modalTop, 'modal-bottom' : !modalTop}">
          <!-- 弹窗内容 -->
          <div v-bind:class="modalContentClass">
            <div class="modal-header">
              <span class="close">&times;</span>
              <h2>弹窗头部</h2>
            </div>
            <div class="modal-body">
              <p>弹窗文本...</p>
              <p>弹窗文本...</p>
            </div>
            <div class="modal-footer">
              <h3>弹窗底部</h3>
            </div>
          </div>
        </div>
      </div>
      <h2>八、Document对象</h2>
      <div class="code">
        <a name="anchor" href="https://www.runoob.com/js/js-ex-dom.html">点击查看Document所有属性</a>
        <br />
        <img src="../../assets/logo.png" width="100" height="100">
        <br />
        <form>
          <input type="button" v-on:click="lookDocument" value="点击查看Document对象的属性值"></input>
        </form>
        <hr />
        <span v-html="document" />
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

/*=======SnackBar或Toast效果=======*/
#snackbar {
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;
  font-size: 17px;
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 30px;
    opacity: 1;
  }
}

@keyframes fadein {
  from {
    bottom: 0;
    opacity: 0;
  }

  to {
    bottom: 30px;
    opacity: 1;
  }
}

@-webkit-keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}

@keyframes fadeout {
  from {
    bottom: 30px;
    opacity: 1;
  }

  to {
    bottom: 0;
    opacity: 0;
  }
}

/*=======百分比进度条=======*/
#myProgress {
  width: 100%;
  background-color: #ddd;
  border-radius: 4px;
}

#myBar {
  width: 20%;
  height: 30px;
  border-radius: 4px;
  background-color: #4CAF50;
  text-align: center;
  line-height: 30px;
  color: white;
}

/*======左或右滑侧边栏===========*/

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  /*left: 0;  right:0*/
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav-left {
  left: 0;
}

.sidenav-right {
  right: 0;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover,
.offcanvas a:focus {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

#main {
  transition: margin-left .5s;
  padding: 16px;
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }

  .sidenav a {
    font-size: 18px;
  }
}

/*===========弹窗提示==========*/
/* 弹窗 (background) */
.modal-top {
  display: none;
  /* 默认隐藏 */
  position: fixed;
  padding-top: 15%;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-bottom {
  display: none;
  /* 默认隐藏 */
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-animation-name: fadeIn;
  -webkit-animation-duration: 0.4s;
  animation-name: fadeIn;
  animation-duration: 0.4s
}

/* 弹窗内容 */

.modal-content-top {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  border: 1px solid #888;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: 50%;
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s;
}

.modal-content-bottom {
  position: fixed;
  bottom: 0;
  background-color: #fefefe;
  width: 100%;
  -webkit-animation-name: slideIn;
  -webkit-animation-duration: 0.4s;
  animation-name: slideIn;
  animation-duration: 0.4s
}

/* 添加动画 */
@-webkit-keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

@keyframes animatetop {
  from {
    top: -300px;
    opacity: 0
  }

  to {
    top: 0;
    opacity: 1
  }
}

/* 添加动画 */
@-webkit-keyframes slideIn {
  from {
    bottom: -300px;
    opacity: 0
  }

  to {
    bottom: 0;
    opacity: 1
  }
}

@keyframes slideIn {
  from {
    bottom: -300px;
    opacity: 0
  }

  to {
    bottom: 0;
    opacity: 1
  }
}

@-webkit-keyframes fadeIn {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

@keyframes fadeIn {
  from {
    opacity: 0
  }

  to {
    opacity: 1
  }
}

/* 关闭按钮 */
.close {
  color: white;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

.modal-header {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.modal-body {
  padding: 2px 16px;
}

.modal-footer {
  padding: 2px 16px;
  background-color: #5cb85c;
  color: white;
}

.mouse-div {
  border: 1px solid blue;
  padding-top: 50px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-bottom: 50px;
  text-align: center;
  width: 100%;
}

</style>
<script>
export default {
  name: 'JsBasic12',
  data() {
    return {
      title: 'JavaScript基础--有趣的实例效果',
      progress: 20,
      showLeft: true,
      newWindow: null,
      modalTop: true,
      document: ''
    }
  },
  computed: {
    modalContentClass: function() {
      return {
        'modal-content-top': this.modalTop,
        'modal-content-bottom': !this.modalTop
      };
    }
  },
  methods: {
    showSnackBar: function() {
      var x = document.getElementById("snackbar")
      x.className = "show";
      setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    },
    showProgress: function(maxProg) {
      var elem = document.getElementById("myBar");
      var thiz = this;
      var isAddProg = maxProg >= thiz.progress;
      var id = setInterval(function() {
        if (isAddProg ? thiz.progress >= maxProg : thiz.progress <= maxProg) {
          clearInterval(id);
        } else {
          if (isAddProg) {
            thiz.progress++;
          } else {
            thiz.progress--;
          }
          elem.style.width = thiz.progress + "%";
        }
      }, 10);
    },
    closeNav: function() {
      var sideNav = document.getElementById("mySidenav");
      sideNav.style.width = "0";
      //关闭侧边栏
      var eleMain = document.getElementById("main");
      eleMain.style.marginLeft = "0";
      eleMain.style.marginRight = "0";
      eleMain.style.backgroundColor = "white";
    },
    openNav: function(left) {
      this.showLeft = left;
      var sideNav = document.getElementById("mySidenav");
      sideNav.style.width = "250px";
      var eleMain = document.getElementById("main");

      if (left) {
        eleMain.style.marginLeft = "250px";
      } else {
        eleMain.style.marginRight = "250px";
      }
      eleMain.style.backgroundColor = "rgba(0,0,0,0.4)";
    },
    myKeyUp: function(event) {
      console.log(event);
      event.preventDefault();
      if (event.keyCode === 13) {
        document.getElementById("myBtn").click();
      }
    },
    mouseDown: function(event) {
      var txt = "screenX:" + event.screenX + ", screenY:" + event.screenY;
      txt += "\nclientX:" + event.clientX + ", clientY:" + event.clientY;
      alert(txt);
    },
    getBrowseType: function() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("当前浏览器是移动端\n" + navigator.userAgent);
      } else if (/MicroMessenger/i.test(navigator.userAgent)) {
        alert("当前浏览器是微信端\n" + navigator.userAgent);
      } else {
        alert("当前浏览器是PC端\n" + navigator.userAgent);
      }
    },
    controlNewWindow: function(open) {
      if (open) {
        if (this.newWindow && !this.newWindow.closed) {
          var result = confirm("新窗口未关闭，请确认重新打开一个新窗口？");
          if (!result) { //用户选择取消，直接跳过
            return;
          }
        }
        this.newWindow = window.open("", "新窗口名称", "toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=300, height=200");
        this.newWindow.document.write("这是新窗口的内容！！！");
        //移动，并且获取焦点
        this.newWindow.moveBy(300, 300);
        this.newWindow.focus();
      } else {
        this.newWindow.close();
        this.newWindow = null;
      }
    },
    changeNewWindow: function(move) {
      if (this.newWindow && !this.newWindow.closed) {
        if (move) {
          this.newWindow.moveTo(100, 100);
          this.newWindow.focus();
        } else {
          this.newWindow.resizeTo(600, 400);
          this.newWindow.focus();
        }
      } else {
        alert("窗口已关闭，无法操作！");
      }
    },
    showModal: function(modalTop) {
      this.modalTop = modalTop;
      // 获取弹窗
      var modal = document.getElementById('myModal');
      modal.style.display = "block";

      // 获取 <span> 元素，用于关闭弹窗 that closes the modal
      var span = document.getElementsByClassName("close")[0];
      // 点击 <span> (x), 关闭弹窗
      span.onclick = function() {
        modal.style.display = "none";
      } // 在用户点击其他地方时，关闭弹窗
      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    },
    lookDocument: function() {
      var txt = "<p>document.anchors.length = " + document.anchors.length + "</p>";
      txt += "<p>document.images.length = " + document.images.length + "</p>";
      txt += "<p>document.forms.length = " + document.forms.length + "</p>";
      txt += "<p>document.links.length = " + document.links.length + "</p>";
      txt += "<p>document.cookie = " + document.cookie + "</p>";
      txt += "<p>document.lastModified = " + document.lastModified + "</p>";
      txt += "<p>document.domain = " + document.domain + "</p>";
      txt += "<p>document.referrer = " + document.referrer + "</p>";
      txt += "<p>document.title = " + document.title + "</p>";
      txt += "<p>document.URL = " + document.URL + "</p>";

      this.document = txt;
    }
  }
}

</script>
