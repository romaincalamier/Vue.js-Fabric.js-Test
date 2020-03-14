<template>
    <fabric-canvas data-test='fabricCanvas'>
        <fabric-circle :id='1' data-test='fabricCircle'></fabric-circle>
    </fabric-canvas>
</template>

<script>
import vueFabricWrapper from 'vue-fabric-wrapper'

export default {
  name: 'CCanvas',
  components: {
    FabricCanvas: vueFabricWrapper.FabricCanvas,
    FabricCircle: vueFabricWrapper.FabricCircle
  }
}</script>

<style scoped lang="scss">
</style>
