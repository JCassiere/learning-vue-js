<template>
  <div id="app" class="container">
    <h2>
      <span>{{ 'Pomodoro' | uppercase | addspace }}</span>
      <controls-component></controls-component>
    </h2>
    <countdown-component></countdown-component>
    <transition name="fade">
      <kittens-component v-show="!isworking"></kittens-component>
    </transition>
    <state-title-component v-bind:isworking="isworking"></state-title-component>
  </div>
</template>

<script>
  import ControlsComponent from './components/ControlsComponent'
  import CountdownComponent from './components/CountdownComponent'
  import KittensComponent from './components/KittensComponent'
  import StateTitleComponent from './components/StateTitleComponent'

  window.data = {
    isworking: true
  }

  export default {
    components: {
      ControlsComponent,
      CountdownComponent,
      KittensComponent,
      StateTitleComponent
    },
    data () {
      return window.data
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
