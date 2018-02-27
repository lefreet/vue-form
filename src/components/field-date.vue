<template>
  <base-date :options="options" v-model="val"></base-date>
</template>

<script>

import BaseDate from './base-date'

export default {
  components: { BaseDate },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true,
      default: ''
    }
  },
  computed: {
    val: {
      get () {
        return new Date(this.value)
      },
      set (value) {
        var time = ''
        if (value) {
          let year = value.getFullYear()
          let month = value.getMonth() + 1
          let day = value.getDate()
          let hour = value.getHours()
          let minute = value.getMinutes()
          let second = value.getSeconds()
          let real = function (number) {
            return number >= 10 ? number.toString() : '0' + number
          }
          time = [
            year,
            '-',
            real(month),
            '-',
            real(day),
            'T',
            real(hour),
            ':',
            real(minute),
            ':',
            real(second)
          ].join('')
        }
        this.$emit('input', time)
      }
    }
  }
}
</script>