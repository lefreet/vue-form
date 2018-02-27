<template>
  <base-radio :options="options" v-model="val"></base-radio>
</template>

<script>

import BaseRadio from './base-radio'

export default {
  components: { BaseRadio },
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