<template>
  <quill-editor
    :options="options"
    
    :blur="_blur"
    :focus="_focus"
    :ready="_ready"

    ref="richtext"
    v-model="val"
  ></quill-editor>
</template>

<script>

import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: { quillEditor },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      required: true
    }
  },
  computed: {
    val: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    _blur (editor) {
      this.$emit('blur', editor)
    },
    _focus (editor) {
      this.$emit('focus', editor)
    },
    _ready (editor) {
      this.$emit('ready', editor)
    }
  }
}
</script>

<style>
  .quill-editor {
    line-height: initial;
  }
</style>
