<!-- 1、事件绑定的地方，为了统一命名，用this引出非驼峰的函数名 -->
<!-- 2、multiple属性指定时，必须明确初始值是值或者数组 -->
<template>
  <el-select
    :multiple="options['multiple']"
    :disabled="options['disabled']"
    :value-key="options['value-key']"
    :size="options['size']"
    :clearable="options['clearable']"
    :collapse-tags="options['collapse-tags']"
    :multiple-limit="options['multiple-limit']"
    :name="options['name']"
    :placeholder="options['placeholder']"
    :filterable="options['filterable']"
    :allow-create="options['allow-create']"
    :filter-method="options['filter-method']"
    :remote="options['remote']"
    :remote-method="options['remote-method']"
    :loading="options['loading']"
    :loading-text="options['loading-text']"
    :no-match-text="options['no-match-text']"
    :no-data-text="options['no-data-text']"
    :popper-class="options['popper-class']"
    :reserve-keyword="options['reserve-keyword']"
    :default-first-option="options['default-first-option']"

    @change="_change"
    @visible-change="this['_visible-change']"
    @remove-tag="this['_remove-tag']"
    @clear="_clear"
    @blur="_blur"

    ref="select"
    v-model="val"
  >
    <!-- options优先级比group高 -->
    <template v-if="options['options']">
      <el-option 
        v-for="option in options['options']" 
        :key="option['value']"
        :label="option['label']"
        :value="option['value']"
      ></el-option>
    </template>

    <template v-else>
      <el-option-group 
        v-if="options['options-group']" 
        v-for="group in options['options-group']" 
        :key="group['label']"
        :label="group['label']"
        :disabled="group['disabled']"
      >
        <el-option 
          v-for="option in group['options']" 
          :key="option['value']"
          :label="option['label']"
          :value="option['value']"
        ></el-option>
      </el-option-group>
    </template>

  </el-select>
  
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
  data () {
    return {}
  },
  methods: {
    _change (value) {
      this.$emit('change', value)
    },
    '_visible-change' (boole) {
      this.$emit('visible-change', boole)
    },
    '_remove-tag' (value) {
      this.$emit('remove-tag', value)
    },
    _clear () {
      this.$emit('clear')
    },
    _blur (e) {
      this.$emit('blur', e)
    },
    _focus (e) {
      this.$emit('focus', e)
    },
    focus () {
      this.$refs['input'].focus()
    }
  }
}
</script>
