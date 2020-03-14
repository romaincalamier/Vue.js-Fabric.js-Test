<template>
  <div id='app'>
    <c-editor></c-editor>
  </div>
</template>

<script>
import CEditor from './components/CEditor'

export default {
  name: 'App',
  components: {
    CEditor
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
