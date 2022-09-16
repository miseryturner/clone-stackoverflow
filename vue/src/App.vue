<template>
  <div>
    <HeaderBlock />
    <router-view style="min-height: 80vh"/>
    <FooterBlock />
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue'
import FooterBlock from './components/FooterBlock.vue'

export default {
  components: {
    HeaderBlock,
    FooterBlock
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
