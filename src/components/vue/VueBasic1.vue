<template>
  <div>
    <h1 class="center"><b>{{title}}</b></h1>
    <hr />
    <div class="content">
      <h1>一、Vue简介</h1>
    </div>
    <br />
  </div>
</template>
<style scoped>
@import url('../../style/right_content.css');

</style>
<script>
export default {
  name: 'VueBasic1',
  data() {
    return {
      title: 'Vue基础--简介、基础语法'
    }
  }
}

</script>
