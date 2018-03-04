> 未完成，未发布npm，demo没有，文档不全，先等着

> 基于element-ui的vue表单组件封装，扩展了tree-select，richtext，upload

[live demo](https://lefreet.github.io/vue-form/), trying, coming soon.

## 使用

#### 依赖于element-ui `^2.0.1` 在`main.js`文件中全局注册

```js
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
```

#### 安装

``` bash
npm i @strongsoft/vue-form --save
```

#### 使用

```html

<template>
  <div id="app">
    <vue-form :CONFIG="CONFIG"></vue-form>
    <vue-input :options="{}" v-model="value"></vue-input>
  </div>
</template>

```

```js

import CONFIG_FORM from './demo/config-form.js'

import VueForm, { VueInput } from 'vue-form'

export default {
  name: 'app',
  components: {
    VueForm,
    VueInput
  },
  data () {
    return {
      CONFIG_FORM,
      value: 'this is a single component.'
    }
  }
}

```

#### [配置详情](http://www.baidu.com) 见 `src/demo/config-form.js`，有空再整理
