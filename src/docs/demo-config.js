import VueForm from '../../index.js'

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