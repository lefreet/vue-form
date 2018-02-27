<template>
  <el-radio-group
    :size="options['size']"
    :disabled="options['disabled']"
    :text-color="options['text-color']"
    :fill="options['fill']"

    @change="_change"

    ref="radio"
    v-model="val"
  >

    <template v-if="options['radios']">
      <el-radio
        v-for="radio in options['radios']"
        :key="radio['label']"
        :label="radio['label']"
        :disabled="radio['disabled']"
        :border="radio['border']"
        :size="radio['size']"
        :name="radio['name']"
      >{{radio['text']}}</el-radio>
    </template>

    <template v-else>
      <el-radio-button
        v-if="options['radio-buttons']"
        v-for="button in options['radio-buttons']"
        :key="button['label']"
        :label="button['label']"
        :disabled="button['disabled']"
        :name="button['name']"
      >{{button['text']}}</el-radio-button>
    </template>

  </el-radio-group>
</template>

<script>

export default {
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
  },
  methods: {
    _change (value) {
      this.$emit('change', value)
    }
  }
}
</script>