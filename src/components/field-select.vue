<template>
  <base-select :options="options" v-model="val"></base-select>
</template>

<script>

import BaseSelect from './base-select'

export default {
  components: { BaseSelect },
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
    'options.options' () {
      this.setValues()
    }
  },
  computed: {
    multiple () {
      return this.options.multiple
    },
    val: {
      get () {
        if (this.multiple === true) {
          return this.value ? this.value.toString().split(',') : []
        } else {
          return this.value
        }
      },
      set (value) {
        if (this.multiple === true) {
          this.$emit('input', value.toString())
        } else {
          this.$emit('input', value)
        }
      }
    }
  },
  methods: {
    // 多选时element-ui内部通过 === 匹配标签值
    // 而包装split时无法判断原始值是数值还是字符串，所以统一转换成字符串
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