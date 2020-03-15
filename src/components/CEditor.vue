<template>
    <div class='editor'>
        <p data-test='title'> My Editor </p>
        <c-canvas :circles=circlesNumber :rectangles=rectanglesNumber data-test='canvas'></c-canvas>
        <button @click=addCircle() data-test='circle-button'>Add circle</button>
        <button @click=addRectangle() data-test='rectangle-button'>Add rectangle</button>
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
    circlesNumber: 0,
    rectanglesNumber: 0
  }),
  methods: {
    addCircle: function () {
      this.circlesNumber += 1
    },
    addRectangle: function () {
      this.rectanglesNumber += 1
    }
  }
}
</script>

<style>
.editor {
    height: 600px;
    width: 600px;
}
</style>
