<template>
  <div>
    <label>请输入内容</label>
    <input type="text" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['value']
}

</script>
