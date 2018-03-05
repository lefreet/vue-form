> 基于element-ui的vue表单组件封装，通过配置生成表单

[live demo](https://lefreet.github.io/vue-form/)

## 说明

通过`config`配置项生成一张表单，起因是项目应用中，有几百张表单要通过对应的`json`配置自动生成，方便通过配置维护，才做了这个组件。

组件的npm包名称是`@lefreet/vue-form`，不是`vue-form`。我也不想取别的名字，`@lefreet/vue-form`更关注基础表单配置抽象和简单取值。

最后，造轮子很无聊。

## 使用

```bash
# install
npm install @lefreet/vue-form --save
```

```html
<template>
  <div id="app">
    <vue-form :config="config" @submit="submit" ref="form"></vue-form>
  </div>
</template>

<script>
  import VueForm from '@lefreet/vue-form'

  export default {
    components: { VueForm },
    data () {
      return {
        config: {
          'cols': 1,
          'label-width': '200px',
          'values': {},
          'fields': [{
            'type': 'input',
            'prop': 'name',
            'label': 'name',
            'options': {
              // some options of element component
              'placeholder': 'input your name'
            }
          }, {
            'type': 'radio',
            'prop': 'sex',
            'label': 'sex',
            'options': {
              // some extend options by me
              'radios': [{
                'label': 'man',
                'value': 1  
              }, {
                'label': 'woman',
                'value': 2
              }]
            }
          }]
        }
      }
    },
    methods: {
      // on submit event to get form's values by verifying
      submit (values) {
        console.log(values)
      },
      // use method to clear all fields
      clear () {
        this.$refs['form'].clearFields()
      }
    }
  }
</script>
```

## 可选控件列表

* `input` 文本框
* `radio` 单选框
* `checkbox` 复选框
* `switch` 开关
* `select` 下拉框
* `tree` 树形下拉框
* `date` 时间选择框
* `upload` 文件上传
* `richtext` 富文本编辑器([vue-quill-editor](https://github.com/surmon-china/vue-quill-editor))

具体用法见[live demo](https://lefreet.github.io/vue-form/)，[欢迎提issue](https://github.com/lefreet/vue-form/issues)。


