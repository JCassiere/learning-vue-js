<template>
  <div class="well">
    <img v-bind:src="catImgSrc"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        catImgSrc: 'http://thecatapi.com/api/images/get?type=gif&size=med&ts='
        // +timestamp"
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>