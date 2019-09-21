/* 引入vue */
import Vue from 'vue'
/* 引入组件 */
import App from './App.vue'
/* 控制台提示信息 */
Vue.config.productTip = false

/* eslint-disable no-new */

// 实例化对象
new Vue({
  el:'#app',
  components: {
    App
  },
  template:'<App/>'
})
