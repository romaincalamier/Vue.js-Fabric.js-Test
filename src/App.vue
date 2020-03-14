<template>
  <div id='app'>
    <c-canvas></c-canvas>
  </div>
</template>

<script>
import CCanvas from './components/CCanvas'

export default {
  name: 'App',
  components: {
    CCanvas
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
