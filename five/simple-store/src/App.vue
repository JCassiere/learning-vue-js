<template>
  <div>
    <show-greetings-component></show-greetings-component>
    <change-greetings-component></change-greetings-component>
  </div>
</template>

<script>
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue'
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue'
import store from './vuex/store'

export default {
  components: { ShowGreetingsComponent, ChangeGreetingsComponent },
  store
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
