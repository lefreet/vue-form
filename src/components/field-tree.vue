<!-- 组合input框和pop框，变成树形下拉框组件 -->
<template>
  <div class="field-tree">
    <!-- 指令引用要先声明 -->
    <el-popover ref="popover" :width="popWidth" transition="el-zoom-in-top">
      <base-tree 
        ref="tree" 
        :options="options" 
        v-model="val" 
        :style="popoverStyle"
      ></base-tree>
    </el-popover>
    <base-input @focus="focus" ref="input" :options="inputOptions" :value="showValue" v-popover:popover></base-input>
  </div>
</template>

<script>

import axios from 'axios'

import BaseInput from './base-input.vue'
import BaseTree from './base-tree.vue'

export default {
  components: { BaseInput, BaseTree },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  data () {
    return {
      popWidth: 0,
      showValue: ''
    }
  },
  mounted () {
    // 兼容问题，该用focus事件触发
    // 保持弹框宽度和输入框一致
    // let $input = this.$refs['input'].$el
    // if ($input.getBoundingClientRect() > 0) {
    //   this.popWidth = $input.getBoundingClientRect().width - 24
    // }  else {
    //   // 问题：当表单处于display:none情况时，宽度为0，所以希望在input focus后，重新获取输入框的宽度
    //   let observer = new MutationObserver((mutations, observer) => {
    //     this.popWidth = $input.getBoundingClientRect().width - 24
    //     observer.disconnect()
    //   })
    //   observer.observe($input, {
    //     attributes: true,
    //     subtree: true,
    //     characterData: false,
    //     childList: false
    //   })
    //   this.setShowValue()
    //   this.getData()
    // }
    this.setShowValue()
    this.getData()
  },
  watch: {
    // 用于监听清空事件
    value (val) {
      if (!val) {
        this.$refs['tree'].setCheckedNodes([])
      }
    }
  },
  computed: {
    val: {
      get () {
        return this.value ? this.value.split(',') : []
      },
      set (value) {
        this.$emit('input', value.toString())
        // 每次子组件变化，同时更新展示值
        this.setShowValue()
      }
    },
    popoverStyle () {
      let options = this.options
      return {
        'max-height': options['max-height'],
        'overflow-y': 'auto'
      }
    },
    inputOptions () {
      return {
        readonly: false
      }
    }
  },
  methods: {
    setShowValue () {
      this.showValue = this.$refs['tree'].getValue('label')
    },
    getData () {
      let api = this.options.api
      if (api) {
        axios
          .get(api.url, {
            params: api.params
          })
          .then(res => {
            let data = api.type === 'flat' ? this.flat2tree(res.data.data, api.transform) : res.data.data
            this.$set(this.options, 'data', data)
            this.$nextTick(() => {
              this.setShowValue()
            })
          })
      }
    },
    // 结构化树数据
    flat2tree (data = [], transform = {}) {
      transform = Object.assign({
        tree_id: 'tree_id',
        tree_pid: 'tree_pid',
        tree_label: 'tree_label'
      }, transform)
      // !!!!!!!!!!!严重问题，树形节点id不能重复
      // 属性转换，用map copy一份数据
      let nodes = data.map(row => {
        return Object.assign(row, {
          label: row[transform.tree_label],
          _id: row[transform.tree_id],
          _pid: row[transform.tree_pid],
          isLeaf: !!row['is_leaf'] || row['is_leaf'] === undefined
        })
      })

      // 构建树
      let create = function (nodes, _pid) {
        let result = []
        let len = nodes.length

        if (_pid) {
          for (let i = 0; i < len; i++) {
            let node = nodes[i]
            if (node._pid === _pid) {
              result.push(node)
              nodes.splice(i--, 1)
              len--
            }
          }
        } else {
          let cache = {}
          // 转哈希方便索引
          nodes.forEach(node => {
            cache[node._id] = true
          })
          // 如果_pid不在当前列表中，则认为是根节点，存到结果集，并且从node列表移除
          for (let i = 0; i < len; i++) {
            let node = nodes[i]
            if (!cache[node._pid]) {
              result.push(node)
              nodes.splice(i--, 1)
              len--
            }
          }
        }

        // 中文排序，貌似没起作用
        // result.sort(function (a, b) {
        //   let initialA = a.label.toString()[0]
        //   let initialB = b.label.toString()[0]
        //   return initialA.localeCompare(initialB)
        // })

        // 递归子节点
        result.forEach(node => {
          node.children = create(nodes, node._id)
        })

        return result.length > 0 ? result : null
      }

      let result = create(nodes) || []

      return result
    },
    focus () {
      let $input = this.$refs['input'].$el
      if (this.popWidth === 0) {
        this.popWidth = $input.getBoundingClientRect().width - 24
      }
    }
  }
}
</script>
