<template>
  <div id="app">
    <hr>
    <p>{{value}}</p>
    <vue-input :options="options" v-model="value"></vue-input>
    <br>
    <hr>
    <p>this is a form and it's values.</p>
    <div>{{ this.$refs['form'] && this.$refs['form'].values }}</div>
    <br>
    <vue-form ref="form" :CONFIG="CONFIG_FORM"></vue-form>
    <br>
    <hr>
  </div>
</template>

<script>

// 主表单配置
import CONFIG_FORM from './demo/config-form.js'

import VueForm, { VueInput } from '../index.js'

export default {
  name: 'app',
  components: {
    VueForm,
    VueInput
  },
  data () {
    return {
      CONFIG_FORM,
      options: {},
      value: 'this is a single component.'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
