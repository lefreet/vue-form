<template>
  <div class="vue-form" :class="config['btns-position']" vm>
    <el-form
      class="form-body"
      :rules="config['rules']"
      :label-position="config['label-position']"
      :label-width="config['label-width']"
      :label-suffix="config['label-suffix']"
      :show-message="config['show-message']"
      :inline-message="config['inline-message']"
      :status-icon="config['status-icon']"
      :size="config['size']"
      :disabled="config['disabled']"

      ref="form"
      :model="values"
    >
      <el-row v-for="(row, i) in layout" :key="i">
        <el-col v-for="(field, j) in row" :key="j" :span="span(field)">
          <el-form-item 
            :prop="field['prop']"
            :label="field['label']"
            :label-width="field['label-width']"
            :required="field['required']"
            :rules="field['rules']"
            :error="field['error']"
            :show-message="field['show-message']"
            :inline-message="field['inline-message']"
            :size="field['size']"

            v-if="field"
          >
            <component 
              :is="'field-' + field.type" 
              v-model="values[field.prop]" 
              :options="field.options" 
              :style="fieldStyle(field)"
            ></component>

          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <div class="form-btns" :style="btnsStyle">
      <el-button 
        v-for="button in buttons"
        :key="button['text']"

        :size="button['size']"
        :type="button['type']"
        :plain="button['plain']"
        :round="button['round']"
        :loading="button['loading']"
        :disabled="button['disabled']"
        :icon="button['icon']"
        :autofocus="button['autofocus']"
        :native-type="button['native-type']"

        @click="events(button['event'])"
      >{{button['text']}}</el-button>
    </div>

  </div>
</template>

<script>

import ENV from '../utils/env'

// 强制依赖element-ui
import Vue from 'vue'
// 判断下是否有注册element组件
if (!Vue.$ELEMENT) {
  var ElementUI = require('element-ui')
  require('element-ui/lib/theme-chalk/index.css')
  Vue.use(ElementUI)
}

export default {
  components: {
    FieldInput: () => import('./field-input.vue'),
    FieldSelect: () => import('./field-select.vue'),
    FieldRadio: () => import('./field-radio.vue'),
    FieldSwitch: () => import('./field-switch.vue'),
    FieldCheckbox: () => import('./field-checkbox.vue'),
    FieldDate: () => import('./field-date.vue'),
    FieldTree: () => import('./field-tree.vue'),
    FieldUpload: () => import('./field-upload.vue'),
    FieldRichtext: () => import('./field-richtext.vue')
  },
  props: ['config'],
  data () {
    return {
      values: {}
    }
  },
  created () {
    let setValues = this.config.values || {}
    let getValues = {}
    const _ENV = ENV

    // 初始化values.key
    this.config.fields.forEach((field, i) => {
      if (!field.prop && !field.type) {
        throw Error('field name || type 是必填的')
      } else if (getValues[field.prop]) {
        throw Error('field.prop: ' + field.prop + ' 重复')
      } else {
        getValues[field.prop] = ''
      }
    })

    // 动态默认值
    Object.keys(setValues).forEach(key => {
      let value = setValues[key]
      if (value && value[0] === '#') {
        let indexs = value.substring(1).split('.')
        let _value = _ENV
        indexs.some(index => {
          if (_value[index]) {
            _value = _value[index]
          } else {
            _value = ''
            return true
          }
        })
        setValues[key] = _value
      }
    })

    this.values = Object.assign(getValues, setValues)
  },
  computed: {
    form () {
      return this.$refs['form']
    },
    fields () {
      let cols = this.config.cols
      return this.config.fields.map(field => {
        // 预处理防止列配置超出范围
        field.col = field.col > cols ? cols : (field.col || 1)

        return field
      })
    },
    buttons () {
      return this.config.buttons || [
        {
          'text': '提交',
          'event': 'submit',
          'type': 'primary'
        },
        {
          'text': '重置',
          'event': 'resetFields',
          'type': 'danger'
        }
      ]
    },
    btnsStyle () {
      return {
        width: this.config['btns-width']
      }
    },
    // 一个简单的动态规划，初始化表单域布局
    layout () {
      let cols = this.config.cols || 2
      let fields = this.fields
      let lastIndex = fields.length - 1

      var layout = []
      // 填充空值
      var fill = function (row, num) {
        return row.concat(new Array(num).fill(0))
      }

      fields.reduce((row, field, index) => {
        let col = field.col
        let count = row.reduce((sum, field) => sum + field.col, 0) // 求和
        let left = cols - count - col

        if (left >= 0) {
          // 还能容纳的情况
          row.push(field)
          if (index === lastIndex) {
            // 最后一个时，填充后直接添加一行
            layout.push(fill(row, left))
          } else {
            return row
          }
        } else {
          // 容纳不下的情况，先添加当前行
          layout.push(fill(row, cols - count))
          // 然后处理下一行， 如果是最后一个，直接添加行
          if (index === lastIndex) {
            layout.push(fill([field], cols - col))
          } else {
            return [field]
          }
        }
      }, [])

      return layout
    }
  },
  methods: {
    span (field) {
      return field.col / this.config.cols * 24
    },
    events (name) {
      if (name) {
        if (name[0] === '@') {
          this.$emit(name.substring(1), this.values)
        } else {
          this[name]()
        }
      }
    },
    fieldStyle (field) {
      return {
        'width': field.width || '100%',
        'text-align': 'left'
      }
    },
    // 事件，提交表单，验证成功的话返回表单值
    submit () {
      this.validate(valid => {
        if (valid === true) {
          let values = this.values

          this.$emit('submit', Object.assign({}, values))
        }
      })
    },
    validate (callback) {
      return this.$refs['form'].validate(callback)
    },
    validateField (fieldName, callback) {
      this.$refs['form'].validateField(fieldName, callback)
    },
    resetFields () {
      this.$refs['form'].resetFields()
    },
    clearFields () {
      for (let key in this.values) {
        this.values[key] = ''
      }
    },
    clearValidate () {
      this.$refs['form'].clearValidate()
    }
  }
}
</script>

<style>
  .vue-form[vm] {
    height: auto;
    width: 100%;
    display: flex;
    /*默认纵向布局*/
    flex-direction: column;
  }
  .vue-form[vm].top {
    flex-direction: column-reverse;
  }
  .vue-form[vm].left {
    flex-direction: row-reverse;
  }
  .vue-form[vm].right {
    flex-direction: row;
  }
  .vue-form[vm] .form-body {
    width: 100%;
  }
  .vue-form[vm] .el-col {
    text-align: left;
  }
  .vue-form[vm] .form-btns {
    text-align: center;
    display: inline-flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    align-items: center;
    margin: 0 auto 22px;
  }
  .vue-form[vm] .form-btns .el-button {
    margin: 0 10px;
  }
</style>
