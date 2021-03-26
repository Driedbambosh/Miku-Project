module.exports = {
  // 添加cdn引用包
  configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'element-ui': 'ELEMENT'
    }
  },
  // ...
}