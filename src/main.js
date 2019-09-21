// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 注释---忽略检查new出来的函数没调用的警告信息
/* eslint-disable no-new */

// 设置控制提示信息：如果不写，默认值是true
Vue.config.productionTip = false

// 实例化Vue对象
new Vue({
  el: '#app', /* 选择器 */
  components: { App }, /* 注册组件 */
  template: '<App/>' /* 模板 */
})
