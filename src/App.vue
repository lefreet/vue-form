<template>
  <div id="app">
    <doc></doc>
  </div>
</template>

<script>

import doc from './docs/demo.md'

import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  name: 'app',
  components: {
    doc
  },
  data () {
    return {}
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 100px;
}
</style>
