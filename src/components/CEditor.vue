<template>
    <div>
        <p data-test='title'> My awesome Editor </p>
        <c-canvas :circles=circlesNumber data-test='canvas'></c-canvas>
        <button @click=addCircle() data-test='circle-button'>Add circle</button>
    </div>
</template>

<script>
import CCanvas from './CCanvas'

export default {
  name: 'CEditor',
  components: {
    CCanvas
  },
  data: () => ({
      circlesNumber: 0
  }),
  methods: {
      addCircle: function() {
          this.circlesNumber += 1
      }
  }
}
</script>

<style scoped lang="scss">
</style>
