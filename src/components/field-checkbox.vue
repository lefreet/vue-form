<template>
  <base-checkbox :options="options" v-model="val"></base-checkbox>
</template>

<script>

import BaseCheckbox from './base-checkbox'

export default {
  components: { BaseCheckbox },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  created () {
    this.setValues()
  },
  watch: {
    'options.checkboxs' () {
      this.setValues()
    }
  },
  computed: {
    val: {
      get () {
        return this.value ? this.value.toString().split(',') : []
      },
      set (value) {
        this.$emit('input', value.toString())
      }
    }
  },
  methods: {
    setValues () {
      if (this.options.options && this.multiple === true) {
        this.options.options.forEach(o => {
          o.value = o.value.toString()
        })
      }
    }
  }
}
</script>