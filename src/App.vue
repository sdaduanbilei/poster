<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/init.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
