<template>
  <div>
    <h3>{{post.title}}</h3>
    <p>{{post.content}}</p>
    <button v-on:click="$emit('enlargeText')">Enlarge text</button>
    <button v-on:click="$emit('smallText',2)">Small text</button>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['post']
}

</script>
