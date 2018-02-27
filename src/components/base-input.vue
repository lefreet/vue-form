<template>
  <el-input
    :type="options['type']"
    :maxlength="options['maxlength']"
    :minlength="options['minlength']"
    :placeholder="options['placeholder']"
    :disabled="options['disabled']"
    :size="options['size']"
    :prefix-icon="options['prefix-icon']"
    :suffix-icon="options['suffix-icon']"
    :rows="options['rows']"
    :autosize="options['autosize']"
    :auto-complete="options['auto-complete']"
    :name="options['name']"
    :readonly="options['readonly']"
    :max="options['max']"
    :min="options['min']"
    :step="options['step']"
    :resize="options['resize']"
    :autofocus="options['autofocus']"
    :form="options['form']"
    :label="options['label']"

    @blur="_blur"
    @focus="_focus"
    @change="_change"

    ref="input"
    v-model="val"
  >
      
    <!-- 插槽封装 这里插槽即作为引用组件el-input的内容(slot=“”) 又作为当前组件的插槽容器(<slot name="" />) -->
    <slot name="prefix" slot="prefix"></slot>
    <slot name="suffix" slot="suffix"></slot>
    <slot name="prepend" slot="prepend"></slot>
    <slot name="append" slot="append"></slot>
  </el-input>
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
    // 带下划线统一作为内部事件分发，防止外部调用
    _blur (e) {
      this.$emit('blur', e)
    },
    _focus (e) {
      this.$emit('focus', e)
    },
    _change (e) {
      this.$emit('change', e)
    },
    // 没带下划线的作为暴露的外部方法
    focus () {
      this.$refs['input'].focus()
    }
  }
}
</script>

