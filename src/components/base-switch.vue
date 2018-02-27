<template>
  <el-switch
    :disabled="options['disabled']"
    :width="options['width']"
    :active-icon-class="options['active-icon-class']"
    :inactive-icon-class="options['inactive-icon-class']"
    :active-text="options['active-text']"
    :inactive-text="options['inactive-text']"
    :active-value="options['active-value']"
    :inactive-value="options['inactive-value']"
    :active-color="options['active-color']"
    :inactive-color="options['inactive-color']"
    :name="options['name']"

    @change="_change"

    v-model="val"
  >
  </el-switch>
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
