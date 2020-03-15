<template>
    <fabric-canvas
      backgroundColor='lightgrey'
      :width=canvasHeight
      :height=canvasWidth
      @mouse:down=selectedCircle()
      data-test='fabricCanvas'
    >
        <div v-for='circle in circles' :key=getFabricCircleId(circle)>
            <fabric-circle :id=getFabricCircleId(circle) data-test='fabricCircle'></fabric-circle>
        </div>
        <div v-for='rect in rectangles' :key=getFabricRectangleId(rect)>
            <fabric-rectangle :id=getFabricRectangleId(rect) data-test='fabricRectangle'></fabric-rectangle>
        </div>
    </fabric-canvas>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'

export default {
  name: 'CCanvas',
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricCircle: vueFabricWrapper.FabricCircle,
    FabricRectangle: vueFabricWrapper.FabricRectangle
  },
  props: {
    circles: {
      type: Number,
      default: 1
    },
    rectangles: {
      type: Number,
      default: 1
    }
  },
  methods: {
    getFabricCircleId: function (circleId) {
      return `circle${circleId}`
    },
    getFabricRectangleId: function (rectangleId) {
      return `rectangle${rectangleId}`
    },
    selectedCircle: function (circleId) {
      this.$emit('selectedCircle', circleId)
    }
  },
  data: () => ({
    canvasHeight: 600,
    canvasWidth: 600
  })
}</script>

<style lang="scss">
</style>
