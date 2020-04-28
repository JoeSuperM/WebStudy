<template>
  <div>
    <h3>{{post.title}}</h3>
    <p>{{post.content}}</p>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['post']
}

</script>
