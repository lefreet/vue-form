<template>
  <div id="app">
    <div class="wrap">
      <doc></doc>
    </div>
  </div>
</template>

<script>

import doc from './docs/demo.md'

import 'highlight.js/styles/github.css'
import 'github-markdown-css'

export default {
  name: 'app',
  components: {
    doc
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">
html, body {
  overflow: hiden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: auto;
  overflow-y: auto;
}
#app .wrap {
  width: 870px;
  margin: auto;
}
#app .wrap section>h3:first-child {
  margin-top: 0;
}
#app .table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
}

ul {
  list-style-type: circle;
  li {
    line-height: 2;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
  background-color: #fff;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;

  strong {
    font-weight: normal;
  }

  td, th {
    border-bottom: 1px solid #d8d8d8;
    padding: 15px;
    max-width: 250px;
  }

  th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: normal;
  }

  td {
    color: #333;
  }

  th:first-child, td:first-child {
    padding-left: 10px;
  }
}
// from pages/template/component.tpl
#app {


  > {
    h3 {
      margin: 55px 0 20px;
    }



    ul:not(.timeline) {
      margin: 10px 0;
      padding: 0 0 0 20px;
      font-size: 14px;
      color: #5e6d82;
      line-height: 2em;
    }
  }

  .page-component-up {
    background-color: #fff;
    position: fixed;
    right: 100px;
    bottom: 150px;
    size: 40px;
    border-radius: 20px;
    cursor: pointer;
    transition: .3s;
    box-shadow: 0 0 6px rgba(0,0,0, .12);
    z-index: 5;

    i {
      color: #409EFF;
      display: block;
      line-height: 40px;
      text-align: center;
      font-size: 18px;
    }

    &.hover {
      opacity: 1;
    }
  }
  .back-top-fade-enter,
  .back-top-fade-leave-active {
    transform: translateY(-30px);
    opacity: 0;
  }
}

// from app.vue
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;

  &.is-component {
    overflow: hidden;
  }
}

#app {
  height: 100%;
  
  @when component {
    overflow-y: hidden;

    .main-cnt {
      padding: 0;
      margin-top: 0;
      height: 100%;
      min-height: auto;
    }

    .headerWrapper {
      position: fixed;
      width: 100%;
      left: 0;
      top: 0;
      z-index: 1500;
      
      .container {
        padding: 0;
      }
    }
  }
}

a {
  color: #409EFF;
  text-decoration: none;
}

code {
  background-color: #f9fafc;
  padding: 0 4px;
  border: 1px solid #eaeefb;
  border-radius: 4px;
}

button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
}

.hljs {
  line-height: 1.8;
  font-family: Menlo, Monaco, Consolas, Courier, monospace;
  font-size: 12px;
  padding: 18px 24px;
  background-color: #fafafa;
  border: solid 1px #eaeefb;
  margin-bottom: 25px;
  border-radius: 4px;
  -webkit-font-smoothing: auto;
}

.main-cnt {
  margin-top: -80px;
  padding: 80px 0 340px;
  box-sizing: border-box;
  min-height: 100%;
}

.container,
.page-container {
  width: 1140px;
  padding: 0;
  margin: 0 auto;
}

.page-container {
  padding-top: 55px;

  h2 {
    font-size: 28px;
    color: #1f2d3d;
    margin: 0;
  }
  h3 {
    font-size: 22px;
  }
  h2, h3, h4, h5 {
    font-weight: normal;
    color: #1f2f3d;

    &:hover a {
      opacity: .4;
    }

    a {
      float: left;
      margin-left: -20px;
      opacity: 0;
      cursor: pointer;

      &:hover {
        opacity: .4;
      }
    }
  }

  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }

  .tip {
    padding: 8px 16px;
    background-color: #ECF8FF;
    border-radius: 4px;
    border-left: #50bfff 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }

  .warning {
    padding: 8px 16px;
    background-color: #fff6f7;
    border-radius: 4px;
    border-left: #FE6C6F 5px solid;
    margin: 20px 0;

    code {
      background-color: rgba(255, 255, 255, .7);
      color: #445368;
    }
  }
}
.demo {
  margin: 20px 0;
}
@media (max-width: 1140px) {
  .container,
  .page-container {
    width: 100%;
  }
}

@media (max-width: 768px) {
  .container,
  .page-container {
    padding: 0 20px;
  }

  #app.is-component .headerWrapper .container {
    padding: 0 12px;
  }
}

</style>
