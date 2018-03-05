<script>
import VM from './demo-config.js'

export default VM
</script>

### 全部

::: demo
```html
<vue-form :config="config"></vue-form>

```
:::

<!-- ## 更多例子

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
<vue-input :options="inputOptions" v-model="input">
  <template slot="prepend">Http://</template>
</vue-input>
<p>{{ input }}</p>

<script>
  // ...
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
| radio-buttons | `el-radio-button`...同上 | 同上 | 同上  -->



















