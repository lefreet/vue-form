<script>
import VM from './demo-config.js'

export default VM
</script>

### 说明

好像没什么可说的

### 全部控件

::: demo 通过`config`配置即可生成一个表单
```html
<vue-form :config="config"></vue-form> 

<script>
  import VueForm from '@lefreet/vue-form'

  export default {
    components: { VueForm },
    data () {
      return {
        config: {
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

### 布局

::: demo 通过config的`cols`和field的`col`属性，控制表单域布局；通过'btns-position'控制操作栏位置。
```html
<vue-form :config="config1"></vue-form>

<script>
  import VueForm from '@lefreet/vue-form'

  export default {
    components: { VueForm },
    data () {
      config1: {
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

### 详细说明

* `config`节点配置抽取自`<el-form>`，见[Form Attributes](http://element.eleme.io/#/zh-CN/component/form#form-attributes)。
* `field`节点配置抽取自`<el-form-item>`，见[Form-Item Attributes](http://element.eleme.io/#/zh-CN/component/form#form-item-attributes)。
* `options`配置抽取自`element-ui`中多个form控件，或者自行封装，具体说明见后文表格。
* 下文`继承`的意思：配置节点的属性，和`element-ui`原组件的属性一致。

#### config

* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| cols | 表单布局每一行分割的列数 | number | - | 2 |
| btns-position | 表单按钮栏的位置 | string | left/top/right/bottom | bottom |
| fields | 表单域的配置数组 | array<{}> | 见`field`说明 | [] |

#### field

* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| type | 控件类型 | string | 见后文说明 | undefined | 
| options | 控件个性配置 | object | 见后文说明 | 

#### options of `input`

* 继承[Input Attributes](http://element.eleme.io/#/zh-CN/component/input#input-attributes)

#### options of `radio`

* 继承[Radio-group Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-group-attributes)
* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| radios | `<el-radio>`的集合 | array<{}> | 继承[Radio Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-attributes) | undefined |
| radio-buttons | `<el-radio-button>`的集合 | array<{}> | 继承[Radio-button Attributes](http://element.eleme.io/#/zh-CN/component/radio#radio-button-attributes) | undefined |

#### options of `checkbox`

* 继承[Radio-group](http://element.eleme.io/#/zh-CN/component/radio#radio-group-attributes)
* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| checkboxs | `<el-checkbox>`的集合 | array<{}> | 继承[Checkbox-group Attributes](http://element.eleme.io/#/zh-CN/component/checkbox#checkbox-group-attributes) | undefined |
| checkbox-buttons | `<checkbox-buttons>`的集合 | arrat<{}> | 继承[Checkbox-button](http://element.eleme.io/#/zh-CN/component/checkbox#checkbox-button-attributes) | undefined |


#### options of `select`

* 继承[Select Attributes](http://element.eleme.io/#/zh-CN/component/select#select-attributes)
* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| options | `<el-option>`的集合 | array<{}> | 继承[Option Attributes](http://element.eleme.io/#/zh-CN/component/select#option-attributes)
| 
| option-group | `<el-option-group>`，选项分组，使用该功能时，`options`挂载在该节点下 | object | 继承[Option Group Attributes](http://element.eleme.io/#/zh-CN/component/select#option-group-attributes) | undefined |

#### options of `switch`

* 继承[Switch Attributes](http://element.eleme.io/#/zh-CN/component/switch#attributes)

#### options of `tree`

* 继承[Tree Attributes](http://element.eleme.io/#/zh-CN/component/tree#attributes)
* `api`功能原先是针对业务写的，可能有问题，慎用
* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value-type | 被取值的节点类型 | string | all/node/leaf | leaf |
| max-height | 下拉框的最大高度 | string | css height value | 'auto' |
| api | 数据接口，优先级大于data，并且支持扁平化的数据 | object | - | undefined |
| node-key | 节点取值的属性，`必填` | string | - | - |
| show-checkbox | 展示复选框，`必填` | boolean | - | - |

* api参数：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| url | 接口地址 | string  | - | - |
| params | 接口参数 | object | - | - |
| type | 接口返回的数据结构类型，是扁平类型时，内部会自动迭代成树形结构 | string | flat | undefined |
| transform | 接口返回值的key-map映射，供内部构建数据结构使用 | object | - | - |
| transform.id | 数据值的key | string | - | - |
| transform.tree_label | 树节点名称的key | string | - | - |
| transform.tree_id | 数据构建树的唯一编号key | string | - | - |
| transform.tree_pid | 数据构建树的唯一编号key | string | - | - |

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

####  options of `upload`

* 继承[Upload Attribute](http://element.eleme.io/#/zh-CN/component/upload#attribute)
* 扩展：

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| tip | 上传提示文本 | string | - | - |
| button.size/type/icon | 上传按钮配置 | string | 参考[Button Attributes](http://element.eleme.io/#/zh-CN/component/button#attributes) | - | - |
| button.text | 上传按钮文本 | string | - | - |


