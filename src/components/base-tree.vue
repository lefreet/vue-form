<template>
  <el-tree
    :data="options['data'] || []"
    :empty-text="options['empty-text']"
    :node-key="options['node-key']"
    :props="options['props']"
    :load="options['load']"
    :render-content="options['render-content']"
    :highlight-current="options['highlight-current']"
    :default-expand-all="options['default-expand-all']"
    :expand-on-click-node="options['expand-on-click-node']"
    :auto-expand-parent="options['auto-expand-parent']"
    :default-expanded-keys="options['default-expanded-keys']"
    :show-checkbox="options['show-checkbox']"
    :check-strictly="options['check-strictly']"
    :filter-node-method="options['filter-node-method']"
    :accordion="options['accordion']"
    :indent="options['indent']"

    @node-click="this['_node-click']"
    @check-change="this['_check-change']"
    @current-change="this['_current-change']"
    @node-expand="this['_node-expand']"
    @node-collapse="this['_node-collapse']"

    ref="tree"
    :default-checked-keys="value"
  ></el-tree>
</template>

<script>

export default {
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  methods: {
    '_node-click' (nodeData, node, tree) {
      this.$emit('node-click', nodeData, node, tree)
    },
    // *
    '_check-change' (nodeData, nodeChecked, childChecked) {
      let value = this.getValue(this.options['node-key'])
      this.$emit('input', value)

      this.$emit('check-change', nodeData, nodeChecked, childChecked)
    },
    '_current-change' (nodeData, node) {
      this.$emit('current-change', nodeData, node)
    },
    '_node-expand' (nodeData, node, tree) {
      this.$emit('node-expand', nodeData, node, tree)
    },
    '_node-collapse' (nodeData, node, tree) {
      this.$emit('node-collapse', nodeData, node, tree)
    },
    // 自定义外部方法，用于决定返回节点内容，以及节点属性
    getValue (key) {
      let checkedNodes = this.$refs['tree'].getCheckedNodes()
      let result = checkedNodes.filter(node => node.isLeaf !== false).map(node => node[key]).toString()
      return result
    },
    filter () {
      return this.$refs['tree'].filter()
    },
    updateKeyChildren (key, data) {
      return this.$refs['tree'].updateKeyChildren(key, data)
    },
    getCheckedNodes (boole) {
      return this.$refs['tree'].getCheckedNodes(boole)
    },
    setCheckedNodes (nodes) {
      return this.$refs['tree'].setCheckedNodes(nodes)
    },
    getCheckedKeys (boole) {
      return this.$refs['tree'].getCheckedKeys(boole)
    },
    setCheckedKeys (keys, boole) {
      return this.$refs['tree'].setCheckedKeys(keys, boole)
    },
    setChecked (keys, boole, deep) {
      return this.$refs['tree'].setChecked(keys, boole, deep)
    },
    getCurrentKey () {
      return this.$refs['tree'].getCurrentKey()
    },
    getCurrentNode () {
      return this.$refs['tree'].getCurrentNode()
    },
    setCurrentKey (key) {
      return this.$refs['tree'].setCurrentKey(key)
    },
    setCurrentNode (node) {
      return this.$refs['tree'].setCurrentNode(node)
    }
  }
}
</script>
