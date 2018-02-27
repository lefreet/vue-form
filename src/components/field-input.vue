<template>
  <base-input :options="options" v-model="val"></base-input>
</template>

<script>

import BaseInput from './base-input'

export default {
  components: { BaseInput },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
}
</script>