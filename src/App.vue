<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
/* 写js代码，操作模板上的相关功能 */

/* 引入子组件： HelloWorld  */
import HelloWorld from './components/HelloWorld'

// 向外暴露一个对象
export default {
  name: 'App',
  components: { /* 注册子组件 */
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
