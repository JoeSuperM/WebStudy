<template>
  <div>
    <div id="main-top">
      <router-link :to="{name:'TopMain'}">
        <h1>{{title}}</h1>
      </router-link>
    </div>
    <div id="top">
      <ul id="h_ul">
        <li>
          <router-link :to="{name:'HTML'}">HTML</router-link>
        </li>
        <li>
          <router-link :to="{name:'CSS'}">CSS</router-link>
        </li>
        <li>
          <router-link :to="{name:'JavaScript'}">JavaScript</router-link>
        </li>
        <li>
          <router-link :to="{name:'Vue'}">Vue</router-link>
        </li>
      </ul>
    </div>
    <hr />
  </div>
</template>
<style scoped>
  #main-top {
  width: 100%;
  height: 120px;
  background-image: url('../assets/page_top.jpg');
  background-repeat: repeat;
  background-attachment: scroll;
  padding-top: 50px;
}

/*顶部列表栏目的导航栏*/
#h_ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #bebebe;
  border-style: dashed;
  border-color: #0000FF;
  border-width: thin;
}

#h_ul li {
  float: left;
}

#h_ul a:link,
#h_ul a:visited {
  display: block;
  width: 150px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: #bebebe;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  text-transform: uppercase;
}

#h_ul a:hover,
#h_ul a:active {
  background-color: #00CC00;
}
/*顶部标题链接到欢迎页*/
#main-top a:link,
#main-top a:visited {
  color: black;
  background-color: transparent;
  text-align: center;
  text-decoration: none;
}
#main-top a:hover,
#main-top a:active {
  background-color: transparent;
}

</style>
<script type="text/javascript">
export default {
  name: 'TopTableBar',
  data() {
    return {
      title: 'JoeSuperM学习Demo导航知识点'
    }
  }
}

</script>>
