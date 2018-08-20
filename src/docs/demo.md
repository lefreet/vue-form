<script>
import VM from './demo-config.js'

export default VM
</script>

### 说明

好像没什么可说的

### 完整示例

::: demo 通过`config`配置即可生成一个表单
```html
<vue-form :config="config1"></vue-form> 
<script>
  import VueForm from '@lefreet/vue-form'
  export default {
    components: { VueForm },
    data () {
      return {
        config1: {
          'cols': 2,
          'label-width': '100px',
          'fields': [{
            'required': true,
            'type': 'input',
            'prop': 'name',
            'label': '文本框',
            'options': {
              'placeholder': 'input your name'
            }
          }, {
            'type': 'radio',
            'prop': 'sex',
            'label': '单选框',
            'options': {
              'radios': [{
                'text': '男',
                'label': 'man'
              }, {
                'text': '女',
                'label': 'woman'
              }]
            }
          }, {
            'type': 'checkbox',
            'prop': 'like',
            'label': '复选框',
            'options': {
              'checkboxs': [{
                'text': '苹果',
                'label': 'apple'  
              }, {
                'text': '橙子',
                'label': 'orange'
              }]
            }
          }, {
            'type': 'switch',
            'prop': 'status',
            'label': '开关',
            'options': {
              'active-text': '开',
              'active-value': 1,
              'inactive-value': 0
            }
          }, {
            'type': 'select',
            'prop': 'company',
            'label': '下拉框',
            'options': {
              'options': [{
                'label': '阿里',
                'value': 1
              }, {
                'label': '腾讯',
                'value': 2
              }, {
                'label': '百度',
                'value': 3
              }]
            }
          }, {
            'type': 'tree',
            'prop': 'areacode',
            'label': '树形下拉框',
            'options': {
              'node-key': 'id',
              'show-checkbox': true,
              'value-type': 'leaf',
              'data': [{
                'id': 1,
                'label': '福建',
                'children': [{
                  'id': 2,
                  'label': '福州'
                }, {
                  'id': 3,
                  'label': '厦门'
                }]
              }]
            }
          }, {
            'type': 'date',
            'prop': 'day',
            'label': '日期',
            'options': {}
          }, {
            'type': 'date',
            'prop': 'time',
            'label': '时间',
            'options': {
              'type': 'datetime'
            }
          }, {
            'type': 'upload',
            'prop': 'attach',
            'label': '附件',
            'col': 2,
            'options': {
              'action': 'your action',
              'tip': '只能上传jpg/png文件',
              'list-type': 'text'
            }
          }, {
            'type': 'richtext',
            'prop': 'article',
            'col': 2
          }]
        }
      }
    }
  }
</script>
```
:::

### 取值

::: demo 表单通过`prop`自动生成`values`键值对；`@submit`监听表单提交事件，并获取验证通过的值；可直接调用实例的方法；`button`继承了`el-button`的所有属性，能够方便自定义；扩展了`event: '@xxx'`可以让表单触发内置的xxx事件，`event: xxx`可以直接调用表单的内置方法
```html
<vue-form :config="config2" @submit="submit2" ref="form"></vue-form> 
<p>your commit are: {{ values2 }} </p>

<script>
  import VueForm from '@lefreet/vue-form'
  export default {
    components: { VueForm },
    data () {
      config2: {
        'values': {
          'name': 'this is default value'
        },
        'buttons': [{
          'text': '触发@submit事件',
          'icon': 'el-icon-info',
          'event': '@submit'
        }, {
          'text': '调用clearFields方法',
          'icon': 'el-icon-success',
          'event': 'clearFields'
        }, {
          'text': '重置',
          'event': 'resetFields',
          'type': 'success'
        }],
        'fields': [{
          'type': 'input',
          'required': true,
          'prop': 'name'
        }]
      },
      values2: {}
    },
    methods: {
      submit2 (values) {
        this.values2 = values
      },
      clear2 () {
        this.$refs['form'].clearFields()
      }
    }
  }
</script>
```
:::

### 灵活布局

::: demo 通过config的`cols`和field的`col`属性，控制表单域布局；通过'btns-position'控制操作栏位置。
```html
<vue-form :config="config3"></vue-form>

<script>
  import VueForm from '@lefreet/vue-form'
  export default {
    components: { VueForm },
    data () {
      config2: {
        'cols': 3,
        'label-width': '80px',
        'btns-position': 'right',
        'fields': [{
          'type': 'input',
          'prop': 'input1',
          'label': 'input1',
          'col': 3
        }, {
          'type': 'input',
          'prop': 'input2',
          'label': 'input2',
          'col': 2
        }, {
          'type': 'input',
          'prop': 'input3',
          'label': 'input3',
          'col': 1
        }]
      }
    }
  }
</script>
```
:::

### 初始化

::: demo 组件内部用`js-cookie`和`query-string`获取了些静态数据，可以在配置的`values`节点，通过`#cookie.xxx`或者`#url.xxx`来获取些常用参数初始化到对应组件内，后面会根据需求扩展
```html
<vue-form :config="config4"></vue-form>

<script>
  import VueForm from '@lefreet/vue-form'
  document.cookie = 'vueformstring="this is a string from cookie"; path=/'
  export default {
    components: { VueForm },
    data () {
      config4: {
        'buttons': [],
        'values': {
          'name': '#cookie.vueformstring'
        },
        'fields': [{
          'prop': 'name',
          'type': 'input'
        }]
      }
    }
  }
</script>
```
:::

### 单控件引用
你可能想单独引用某个控件(这和直接用element不是一样的？)，比如`tree-select`(后面看看能不能提个pr给他们)
::: demo 每个控件都统一实现了`options`属性和`v-model`绑定
```html
<vue-tree :options="treeOptions" v-model="treeValue"></vue-tree>
<p>tree value is: {{ treeValue }} </p>

<script>
  import { VueTree } from '@lefreet/vue-form'
  export default {
    components: { VueTree },
    treeOptions: {
      'node-key': 'id',
      'show-checkbox': true,
      'value-type': 'leaf',
      'data': [{
        'id': 1,
        'label': '福建',
        'children': [{
          'id': 2,
          'label': '福州'
        }, {
          'id': 3,
          'label': '厦门'
        }]
      }]
    },
    treeValue: ''
  }
</script>
```
:::


### 配置文档

* 下文**from**代表配置节点的属性来自`element-ui`对应组件，可直接配置注入
* `return`表示单个表单控件值的返回格式示例
* 表格中写出来的为扩展或者需要特殊说明的属性，其他属性点击链接查看官方文档就好

#### config from [Form Attributes](http://element.eleme.io/#/zh-CN/component/form#form-attributes)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| cols | 表单布局每一行分割的列数 | number | - | 2 |
| buttons | 表单的按钮集合 | array | - | - |
| btns-position | 表单按钮栏的位置 | string | left/top/right/bottom | bottom |
| fields | 表单域的配置数组 | array<{}> | 见`field`说明 | [] |

| 方法名 | 说明 | 参数 |
| --- | --- | --- |
| clearFields | 清空所有控件的值(注意清空和重置`reset`的操作是不同的) | - |

#### `buttons<button>` from [Button Attributes](http://element.eleme.io/#/zh-CN/component/button#attributes)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| text | 按钮的文本内容 | string | - | - | 
| event | 按钮的事件或者调用方法的名称, `@xxx`代表触发事件，`xxx`代表调用xxx方法 | string | - | - | 

#### field from [Form-Item Attributes](http://element.eleme.io/#/zh-CN/component/form#form-item-attributes)

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 控件类型 | string | 见后文说明 | undefined | 
| options | 控件个性配置 | object | 见后文说明 | 

#### options of `input` from [Input Attributes](http://element.eleme.io/#/zh-CN/component/input#input-attributes) return `'a'`  

#### options of `radio` from [Radio-group Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-group-attributes) return `'a,b,c'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| radios | `<el-radio>`的集合 | array<{}> | 继承[Radio Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-attributes) | undefined |
| radio-buttons | `<el-radio-button>`的集合 | array<{}> | 继承[Radio-button Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-button-attributes) | undefined |

#### options of `checkbox` from [Radio-group Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-group-attributes) return `'a,b,c'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| checkboxs | `<el-checkbox>`的集合 | array<{}> | 继承[Checkbox-group Attributes](http://element.eleme.io/#/zh-CN/component/checkbox#checkbox-group-attributes) | undefined |
| checkbox-buttons | `<checkbox-buttons>`的集合 | arrat<{}> | 继承[Checkbox-button](http://element.eleme.io/#/zh-CN/component/checkbox#checkbox-button-attributes) | undefined |

#### options of `select` from [Select Attributes](http://element.eleme.io/#/zh-CN/component/select#select-attributes) return `'a,b,c'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `<el-option>`的集合 | array<{}> | 继承[Option Attributes](http://element.eleme.io/#/zh-CN/component/select#option-attributes)
| option-group | `<el-option-group>`，选项分组，使用该功能时，`options`挂载在该节点下 | object | 继承[Option Group Attributes](http://element.eleme.io/#/zh-CN/component/select#option-group-attributes) | undefined |

#### options of `switch` from [Switch Attributes](http://element.eleme.io/#/zh-CN/component/switch#attributes) return `true/false`

#### options of `tree` from [Tree Attributes](http://element.eleme.io/#/zh-CN/component/tree#attributes) return `'a,b,c'`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value-type | 被取值的节点类型 | string | all/node/leaf | leaf |
| max-height | 下拉框的最大高度 | string | css height value | 'auto' |
| api | 数据接口，优先级大于data，并且支持扁平化的数据；该功能是针对项目业务做的扩展，可能问题比较大 | object | - | undefined |
| node-key | 节点取值的属性，`必填` | string | - | - |
| show-checkbox | 展示复选框，`必填` | boolean | - | - |

* api参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| url | 接口地址 | string  | - | - |
| params | 接口参数 | object | - | - |
| type | 接口返回的数据结构类型，是扁平类型时，内部会自动迭代成树形结构 | string | flat | undefined |
| transform | 接口返回值的key-map映射，供内部构建数据结构使用 | object | - | - |
| transform.tree_label | 树节点名称的key | string | - | - |
| transform.tree_id | 数据构建树的唯一编号key | string | - | - |
| transform.tree_pid | 数据构建树的父级编号key | string | - | - |

* api示例

```json
/* 接口配置 */
'api': {
  'url': '/api/v2/basic/data',
  'params': {
    'key': 's_comapi_virtual_group_tree',
    'start_with_tree_pid': '58B8E19C9AA145E0852EA360C360CB9E'
  },
  'transform': {
    'id': 'id',
    'tree_label': 'name',
    'tree_id': 'id',
    'tree_pid': 'pid'
  },
  'type': 'flat'
}
/* 返回示例 */
[{
  'id': 1,
  'pid': 0
  'name': '福建'
}, {
  'id': 2,
  'pid': 1,
  'name': '福州'
}, {
  'id': 3,
  'pid': 1,
  'name': '厦门'
}]
```

* 外部得到的数据经常是扁平化的，同接口例子的数据类似，所以组件提供了递归树形的方法（没作为内置方法是因为无法明确的判断传入的data是flat还是tree结构), eg:

```js
<vue-tree ref="tree" :data="[]" :options="{}"></vue-tree>

this.$refs.tree.flat2tree(data, transform)
```

####  options of `upload` from [Upload Attribute](http://element.eleme.io/#/zh-CN/component/upload#attribute) return `file.id '1,2,3' from api`

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| tip | 上传提示文本 | string | - | - |
| button.size/type/icon | 上传按钮配置 | string | 参考[Button Attributes](http://element.eleme.io/#/zh-CN/component/button#attributes) | - | - |
| button.text | 上传按钮文本 | string | - | - |


