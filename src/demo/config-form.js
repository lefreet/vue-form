// 用js文件只是为了方便写示例注释，项目应用中还是json为主
// * 为必填项
export default {
  'cols': 1,
  'label-width': '100px',
  'btns-width': '200px', // 工具栏宽度，适用于工具栏在左右时的占位宽度，也适用于flex布局下，按钮的间距控制
  'btns-position': 'bottom', // 配合col，可实现行内表单
  'status-icon': true,
  'inline': false,
  'values': {
    // 依赖于ENV组件内置的cookie,url
    'title': '#cookie.RealName',
    'place': '1',
    'receiver_ids': '52'
  },
  'fields': [
    {
      'type': 'input', // *
      'prop': 'title', // *
      'label': '会议标题',
      'options': {
        'placeholder': 'this is a title',
        'value': 'some value'
      }
    },
    {
      'type': 'select',
      'prop': 'place',
      'label': '会议地点',
      'options': {
        'multiple': true,
        'options': [{
          'label': '水务厅9楼',
          'value': 1
        }, {
          'label': '水务厅10楼',
          'value': 2
        }]
      }
    },
    {
      'type': 'input',
      'prop': 'content',
      'label': '会议内容',
      'col': 2,
      'options': {
        'type': 'textarea',
        'placeholder': 'this is a content',
        'value': 'some value'
      }
    },
    {
      'type': 'radio',
      'prop': 'importance',
      'label': '是否重要',
      'options': {
        'radios': [{
          'border': true,
          'text': '是',
          'label': '1'
        }, {
          'border': true,
          'text': '否',
          'label': 2
        }]
      }
    },
    {
      'type': 'switch',
      'prop': 'is_message',
      'label': '',
      'options': {
        'active-text': '发送短信',
        'active-value': 1,
        'inactive-value': 0
      }
    },
    {
      'type': 'checkbox',
      'prop': 'units',
      'label': '参加单位',
      'options': {
        'checkboxs': [{
          'text': '三防办',
          'label': 1
        }, {
          'text': '四创',
          'label': 2
        }]
      }
    },
    {
      'type': 'date',
      'prop': 'begin_time',
      'label': '开始时间',
      'options': {
        'type': 'datetime'
      }
    },
    {
      'type': 'date',
      'prop': 'end_time',
      'label': '结束时间',
      'options': {}
    },
    {
      'type': 'tree',
      'prop': 'receiver_ids',
      'label': '接收单位',
      'col': 1,
      'options': {
        'node-key': 'id',
        'show-checkbox': true,
        'api': { // * 自定义 数据接口，提供数据结构化方法
          'url': '/api/v2/basic/data',
          'params': {
            'key': 's_comapi_virtual_group_tree',
            'start_with_tree_pid': '58B8E19C9AA145E0852EA360C360CB9E'
          },
          'transform': {
            'id': 'id',
            'tree_label': 'tree_label',
            'tree_id': 'tree_id',
            'tree_pid': 'tree_pid' // * tree_pid用于生成结构，'node-key'指定返回值
          },
          'type': 'flat'
        },
        'value-type': 'leaf', // * 自定义，获取的数据类型，leaf,node,all 默认leaf
        'max-height': '300px', // * 自定义，树形下拉框的高度
        'data': [{
          'id': 1,
          'label': '一级 1',
          'children': [{
            'id': 4,
            'label': '二级 1-1',
            'children': [{
              'id': 9,
              'label': '三级 1-1-1'
            }, {
              'id': 10,
              'label': '三级 1-1-2'
            }]
          }]
        }, {
          'id': 2,
          'label': '一级 2',
          'children': [{
            'id': 5,
            'label': '二级 2-1'
          }, {
            'id': 6,
            'label': '二级 2-2'
          }]
        }, {
          'id': 3,
          'label': '一级 3',
          'children': [{
            'id': 7,
            'label': '二级 3-1'
          }, {
            'id': 8,
            'label': '二级 3-2'
          }]
        }]
      }
    },
    {
      'type': 'upload',
      'prop': 'attach_id',
      'col': 2,
      'label': '附件',
      'options': {
        'tip': '只能上传jpg/png文件，且不超过500kb', // 自定义
        'action': '/api/v1/file/upload?is_sys_attachment=true',
        'list-type': 'text',
        'auto-upload': true
      }
    },
    {
      'type': 'richtext',
      'prop': 'record',
      'label': '会议纪要',
      'col': 2,
      'options': {}
    }
  ]
}
