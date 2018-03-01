
## 输入框

::: demo
```html
<vue-input :options="{}" v-model="value"></vue-input>
<p>{{value}}</p>

<script>
  import VueForm, { VueInput } from '../../index.js'

  export default {
    components: {
      VueInput
    },
    data () {
      return {
        value: 'this is a input component.'
      }
    }
  }
</script>
```
:::
