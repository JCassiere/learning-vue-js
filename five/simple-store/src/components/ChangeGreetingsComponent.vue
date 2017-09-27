<template>
	<input :value='msg' @keyup="handleMessageInputChanges($event)">
</template>
<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'

	export default {
		computed: mapGetters({ msg: 'getMessage' }),
		methods: mapActions(['handleMessageInputChanges'])
		// methods: {
		// 	changeMsg(ev) {
		// 		this.$store.dispatch('changeMessage', ev.target.value)
		// 	}
		// }
	}
</script>