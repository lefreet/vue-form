<!-- 1、暂时没集成快捷选项 -->
<template>
  <el-date-picker
    :readonly="options['readonly']"
    :disabled="options['disabled']"
    :editable="options['editable']"
    :clearable="options['clearable']"
    :size="options['size']"
    :placeholder="options['placeholder']"
    :start-placeholder="options['start-placeholder']"
    :end-placeholder="options['end-placeholder']"
    :type="options['type']"
    :format="options['format']"
    :align="options['align']"
    :popper-class="options['popper-class']"
    :picker-options="options['picker-options']"
    :range-separator="options['range-separator']"
    :default-value="options['default-value']"
    :value-format="options['value-format']"
    :name="options['name']"
    :unlink-panels="options['unlink-panels']"

    @change="_change"
    @blur="_blur"
    @focus="_focus"

    ref="date"
    v-model="val"
  ></el-date-picker>
</template>

<script>

export default {
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
    },
    _blur (e) {
      this.$emit('change', e)
    },
    _focus (e) {
      this.$emit('change', e)
    },
    focus () {
      this.$refs['input'].focus()
    }
  }
}
</script>