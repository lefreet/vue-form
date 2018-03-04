<script>
  import VueForm, { VueInput, VueRadio } from '../../index.js'

  export default {
    components: {
      VueInput,
      VueRadio
    },
    data () {
      return {
        inputOptions: {},
        input: 'this is a input component.',
        radioOptions: {
          radios: [{
            'text': '苹果',
            'label': 'apple'
          }, {
            'text': '橘子',
            'label': 'orange'
          }]
        },
        radio: 'apple'
      }
    }
  }
</script>

## 说明

基于element-ui控件的表单组件封装，抽取配置，统一接口，做成标准的v-model交互控件。

这个组件的npm完整名称是`@lefreet/vue-form`，因为名称被人占用了，我也不想取别的名字。与[vue-form](https://www.npmjs.com/package/vue-form)相比，`@lefreet/vue-form`更关注基础表单的简单调用和取值。

简单封装：
  * `input` 文本框
  
功能扩展：
  * `tree-select` 树形下拉框
  * `richtext` 富文本框(quill)

## 使用

```bash
# install
npm install @lefreet/vue-form --save
```

```html
<template>
  <div id="app">
    <vue-form :options="" v-model="values"></vue-form>
    <vue-input :options="" v-model="input"></vue-input>
  </div>
</template>

<script>
  import VueForm, { VueInput } from 'vue-form'

  export default {
    components: { VueForm, VueInput },
    data () {
      return {
        values: {},
        input: ''
      }
    }
  }
</script>
```

所有控件都只接收两个参数:
  * options: 简单的控件一般就是element原控件的参数，只不过被抽取成了键值对`{}`，方便配置注入。如有变更，会在下文demo中说明。
  * v-model: 控件对应的双向绑定值，不了解的[请点击](https://cn.vuejs.org/v2/guide/forms.html)。
  * 控件单独使用时，原控件`slot`,`methods`,`event`都是可以直接调用的。

## 更多例子

为了节约空间（是我太懒），下文demo组件引用和注入都省略。

```html
<script>
  import { VueXXX } from '@lefreet/vue-form'
  export default {
    components: { VueXXX }
  }
</script>
```

### input 输入框

::: demo
```html
<vue-input :options="{}" v-model="input"></vue-input>
<p>{{ input }}</p>

<script>
  export default {
    data () {
      return {
        input: 'this is a input component.'
      }
    }
  }
</script>
```
:::

`options`配置参考，[请点击](http://element.eleme.io/#/zh-CN/component/input)

### radio 单选框

::: demo
```html
<vue-radio :options="radioOptions" v-model="radio"></vue-radio>
<p>this radio's value is {{ radio }}</p>

<script>
  export default {
    data () {
      return {
        radio: 'apple'
      }
    }
  }
</script>
```
:::

用`el-radio-group`标签对`el-radio`和`el-radio-button`做了包装

#### options扩展参数
| 参数 | 说明 | 示例 | 默认值 |
| --- | --- | --- | --- |
| radios | `el-radio`标签的枚举数组, 对象内容为该标签的配置 | `[{text: '是', label: '1'}, {text: '否', label: '0'}]` | undefined
| radio-buttons | `el-radio-button`...同上 | 同上 | 同上 



















