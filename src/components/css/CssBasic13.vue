<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、CSS3之图片效果</h1>
      <h2>1、圆角图片(border-radius:9px)</h2>
      <img style="border-radius:9px;" src="../../assets/base1.jpg" width="300" height="200" alt="JoeSuperM">
      <h2>2、椭圆图像(border-radius:50%)</h2>
      <img style="border-radius:50%;" src="../../assets/base1.jpg" width="300" height="200" alt="JoeSuperM">
      <h2>3、缩略图像(border-radius:4px,border:1px solid #ddd)</h2>
      <img style="border-radius:4px; border:1px solid #ddd; padding:5px;" src="../../assets/base1.jpg" width="300" height="200" alt="JoeSuperM">
      <h2>4、缩略图作为链接</h2>
      <a class="img" href="https://www.baidu.com/" target="_blank">
        <img src="../../assets/base1.jpg" width="300" height="200" alt="JoeSuperM">
      </a>
      <h2>5、响应式图片(自动适配各种尺寸的屏幕)</h2>
      <img src="../../assets/base1.jpg" style="max-width:100%; height:auto;" alt="JoeSuperM">
      <h2>6、图片文字</h2>
      <div style="position:relative;">
        <img src="../../assets/base1.jpg" style="max-width:100%; height:auto; opacity:0.3;" alt="JoeSuperM">
        <div style="position:absolute; left:0; top:50%; width:100%; text-align:center; font-size:18px; margin-top:-9px;">居中文本</div>
        <div style="position:absolute; left:16px; top:8px;font-size:18px;">左上角文本</div>
        <div style="position:absolute; right:16px; top:8px;font-size:18px;">右上角文本</div>
        <div style="position:absolute; left:16px; bottom:8px;font-size:18px;">左下角文本</div>
        <div style="position:absolute; right:16px; bottom:8px;font-size:18px;">右下角文本</div>
      </div>
      <h2>7、图片滤镜</h2>
      <div>
        <img src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="blur" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="brightness" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="contrast" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="grayscale" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="huerotate" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="invert" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="opacity" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="saturate" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="sepia" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
        <img class="shadow" src="../../assets/pineapple.jpg" width="200" height="200" alt="Pineapple">
      </div>
      <h2>8、图片Modal(模态)-点击图片时，图片会在弹出的窗口中显示</h2>
      <div>
        <img id="myImg" v-on:click="openModal" src="../../assets/base1.jpg" width="300" height="200" alt="这是alt内容，用于描述图片的相关信息">
        <!-- The Modal -->
        <div id="myModal" class="modal">
          <span class="close" v-on:click="closeModal">x</span>
          <img class="modal-content" id="img01">
          <div id="caption"></div>
        </div>
      </div>
      <h1 id="css-button-demo">二、CSS3之按钮效果</h1>
      <div class="code">
        <h3>各种类型的按钮</h3>
        <div>
          <button>默认按钮</button>
          <a href="https://www.baidu.com/" target="_blank" class="button">链接按钮</a>
          <button class="button">按钮</button>
          <input type="button" class="button" value="输入框按钮">
        </div>
        <h3>按钮颜色</h3>
        <div>
          <button class="button">Green</button>
          <button class="button" style="background-color: #008CBA;">Blue</button>
          <button class="button" style="background-color: #f44336;">Red</button>
          <button class="button" style="background-color: #e7e7e7; color: black;">Gray</button>
          <button class="button" style="background-color: #555555;">Black</button>
        </div>
        <h3>按钮大小</h3>
        <div>
          <button class="button" style="font-size: 10px;">10px</button>
          <button class="button" style="font-size: 12px;">12px</button>
          <button class="button" style="font-size: 16px;">16px</button>
          <button class="button" style="font-size: 20px;">20px</button>
          <button class="button" style="font-size: 24px;">24px</button>
        </div>
        <h3>圆角按钮</h3>
        <div>
          <button class="button" style="border-radius: 2px;">2px</button>
          <button class="button" style="border-radius: 4px;">4px</button>
          <button class="button" style="border-radius: 8px;">8px</button>
          <button class="button" style="border-radius: 12px;">12px</button>
          <button class="button" style="border-radius: 50%;">50%</button>
        </div>
        <h3>按钮边框颜色与鼠标悬浮效果</h3>
        <div class="hover">
          <button class="button btn1">Green</button>
          <button class="button btn2">Blue</button>
          <button class="button btn3">Red</button>
          <button class="button btn4">Gray</button>
          <button class="button btn5">Black</button>
        </div>
        <h3>按钮阴影与悬浮阴影</h3>
        <div class="btn-shadow">
          <button class="button btn1">阴影按钮</button>
          <button class="button btn2">鼠标悬停后出现阴影</button>
        </div>
        <h3>禁用按钮</h3>
        <div>
          <button class="button">正常按钮</button>
          <button class="button" style=" opacity:0.6; cursor:not-allowed;">禁用按钮</button>
        </div>
        <h3>按钮宽度</h3>
        <div>
          <button class="button" style="width:250px">250px</button><br>
          <button class="button" style="width:50%">50%</button><br>
          <button class="button" style="width:100%">100%</button>
        </div>
        <h3>按钮组，float</h3>
        <div class="float-btn">
          <button class="button" style="float:left;border: 1px solid green;margin: 0;">按钮A</button>
          <button class="button" style="float:left;border: 1px solid green;margin: 0;">按钮B</button>
          <button class="button" style="float:left;border: 1px solid green;margin: 0;">按钮C</button>
          <button class="button" style="float:left;border: 1px solid green;margin: 0;">按钮D</button>
        </div>
        <h3 style="clear:both;">按钮动画</h3>
        <div>
          <p>鼠标移动到按钮上后添加箭头标记</p>
          <button class="button" style="vertical-align:middle; width:150px;"><span>Hover </span></button>
          <p>点击时添加 "波纹" 效果</p>
          <button id="anim-btn">Click Me</button>
          <p>按钮动画 - "按压效果"</p>
          <button id="press-btn">Click Me</button>
          <p>按钮动画 - "缩小效果"</p>
          <button id="scale-btn">Click Me</button>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

.button {
  background-color: #4CAF50;
  /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
}

div.float-btn button:hover {
  background-color: #3e8e41;
}

.button span {
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '»';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

#anim-btn {
  position: relative;
  background-color: #4CAF50;
  border: none;
  font-size: 28px;
  color: #FFFFFF;
  padding: 20px;
  width: 200px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

#anim-btn:after {
  content: "";
  background: #90EE90;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px !important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

#anim-btn:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}

#press-btn {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #999;
}

#press-btn:hover {
  background-color: #3e8e41
}

#press-btn:active {
  background-color: #3e8e41;
  box-shadow: 0 2px #666;
  transform: translateY(4px);
}

#scale-btn {
  display: inline-block;
  padding: 15px 25px;
  font-size: 24px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 15px;
  box-shadow: 0 5px #ddd;
}

#scale-btn:hover {
  background-color: #3e8e41;
}

#scale-btn:active {
  background-color: #3e8e41;
  box-shadow: 0 2px #999;
  transform: scale(0.95, 0.95);
}

div.hover .btn1 {
  background-color: white;
  color: black;
  border: 2px solid green;
}

div.hover .btn1:hover {
  background-color: green;
  color: white;
}

div.hover .btn2 {
  background-color: white;
  color: black;
  border: 2px solid blue;
}

div.hover .btn2:hover {
  background-color: blue;
  color: white;
}

div.hover .btn3 {
  background-color: white;
  color: black;
  border: 2px solid red;
}

div.hover .btn3:hover {
  background-color: red;
  color: white;
}

div.hover .btn4 {
  background-color: white;
  color: black;
  border: 2px solid gray;
}

div.hover .btn4:hover {
  background-color: gray;
  color: white;
}

div.hover .btn5 {
  background-color: white;
  color: black;
  border: 2px solid black;
}

div.hover .btn5:hover {
  background-color: black;
  color: white;
}

div.btn-shadow .btn1 {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

div.btn-shadow .btn2:hover {
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.img {
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  transition: 0.3s;
}

.img:hover {
  box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 100px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: auto;
  /* Enable scroll if needed */
  background-color: rgb(0, 0, 0);
  /* Fallback color */
  background-color: rgba(0, 0, 0, 0.9);
  /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {
    -webkit-transform: scale(0)
  }

  to {
    -webkit-transform: scale(1)
  }
}

@keyframes zoom {
  from {
    transform: scale(0.1)
  }

  to {
    transform: scale(1)
  }
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px) {
  .modal-content {
    width: 100%;
  }
}

/**图片模糊*/

img#filter {
  width: 33%;
  height: auto;
  float: left;
  max-width: 235px;
}

.blur {
  -webkit-filter: blur(4px);
  filter: blur(4px);
}

.brightness {
  -webkit-filter: brightness(250%);
  filter: brightness(250%);
}

.contrast {
  -webkit-filter: contrast(180%);
  filter: contrast(180%);
}

.grayscale {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.huerotate {
  -webkit-filter: hue-rotate(180deg);
  filter: hue-rotate(180deg);
}

.invert {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

.opacity {
  -webkit-filter: opacity(50%);
  filter: opacity(50%);
}

.saturate {
  -webkit-filter: saturate(7);
  filter: saturate(7);
}

.sepia {
  -webkit-filter: sepia(100%);
  filter: sepia(100%);
}

.shadow {
  -webkit-filter: drop-shadow(8px 8px 10px green);
  filter: drop-shadow(8px 8px 10px green);
}

</style>
<script>
export default {
  name: 'CssBasic13',
  data() {
    return {
      title: 'CSS基础--图片与按钮',
      modal: '',
      modalImg: '',
    }
  },
  methods: {
    openModal: function() {
      // 获取模态窗口
      this.modal = document.getElementById('myModal');
      //找到图片组件，以便获取图片属性等
      var img = document.getElementById('myImg');
      // 获取图片模态框，alt 属性作为图片弹出中文本描述
      this.modalImg = document.getElementById("img01");
      //模态对话框赋值
      this.modalImg.src = img.src;
      this.modalImg.alt = img.alt;

      var captionText = document.getElementById("caption");
      captionText.innerHTML = img.alt;
      this.modal.style.display = "block";
    },
    closeModal: function() {
      this.modal.style.display = "none";
    }
  }
}

</script>
