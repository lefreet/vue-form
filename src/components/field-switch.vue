<template>
  <base-switch :options="options" v-model="val"></base-switch>
</template>

<script>

import BaseSwitch from './base-switch'

export default {
  components: { BaseSwitch },
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
