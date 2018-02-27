<template>
  <base-upload :options="options" v-model="val">
    <i v-if="options['list-type'] === 'picture-card'" class="el-icon-plus" slot="button"></i>
    <el-button 
      v-else
      class="upload-button"
      slot="button"

      :size="button.size" 
      :type="button.type" 
      :icon="button.icon" 
    >{{button.text}}</el-button>
    <span class="upload-tip el-upload__tip" v-if="options.tip" slot="tip">{{options.tip}}</span>
  </base-upload>
</template>

<script>

import BaseUpload from './base-upload.vue'

export default {
  components: { BaseUpload },
  props: {
    options: {
      default: Object,
      required: true
    },
    value: {
      // '1,2,3'
      required: true
    }
  },
  data () {
    return {
      cache: {}
    }
  },
  computed: {
    val: {
      get () {
        var cache = this.cache
        let value = []
        if (this.value) {
          this.value.split(',').forEach(aid => {
            let file = cache[aid]
            if (file) {
              value.push(file)
            }
          })
        }
        return value
      },
      set (value) {
        // element的逻辑是多文件的时候请求多次接口，将结果合并, filelist: [{response}, {response}]
        // 目前文件上传接口的逻辑是单个文件上传时，当作列表处理 response: [{id}]
        // v1的后端接口在队列处理上有bug，暂时不要用多文件上传的multiple配置
        var aids = []
        var cache = this.cache
        value.forEach(files => {
          var name = files.name
          files.response.forEach(file => {
            cache[file.id] = {
              name: name,
              url: file.url,
              response: [file]
            }
            aids.push(file.id)
          })
        })
        this.$emit('input', aids.join())
      }
    },
    button () {
      return Object.assign({
        size: 'small',
        type: 'primary',
        text: '上传',
        icon: 'el-icon-upload'
      }, this.options.button || {})
    }
  }
}
</script>

<style scoped>
  .upload-button {
    position: relative;
    right: 0;
  }
  .upload-tip {
    margin-left: 12px;
  }
</style>

