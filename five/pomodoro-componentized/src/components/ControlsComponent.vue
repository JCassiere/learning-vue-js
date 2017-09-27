<template>
  <div>
    <button :disabled='isStarted && !isPaused' @click="start">
      <i class="fa fa-play" aria-hidden="true"></i>
    </button>
    <button :disabled='!isStarted || isPaused' @click="pause">
      <i class="fa fa-pause" aria-hidden="true"></i>
    </button>
    <button :disabled='!isStarted' @click="stop">
      <i class="fa fa-stop" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters(['isStarted', 'isPaused', 'isStopped']),
    methods: mapActions(['start', 'stop', 'pause'])
  }
</script>

<style scoped>
	button:disabled i {
		color: gray;
	}
</style>