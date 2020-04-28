<template>
  <div>
    <label>点击按钮试试效果【{{count}}】</label>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
  </div>
</template>
<script type="text/javascript">
export default {
  name: 'button-counter',
  data() {
    return {
      count: 0
    }
  }
}

</script>
