<template>
    <fabric-canvas @mouse:down=selectedCircle() data-test='fabricCanvas'>
        <div v-for='circle in circles' :key=circle>
            <fabric-circle :id='circle' data-test='fabricCircle'></fabric-circle>
        </div>
    </fabric-canvas>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'

export default {
  name: 'CCanvas',
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricCircle: vueFabricWrapper.FabricCircle
  },
  props: {
    circles: {
      type: Number,
      default: 1
    }
  },
  methods: {
    selectedCircle: function (circleId) {
      this.$emit('selectedCircle', circleId)
    }
  }
}</script>

<style scoped lang="scss">
</style>
