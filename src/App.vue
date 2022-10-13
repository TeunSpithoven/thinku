<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <ChatSocket/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChatSocket from './components/ChatSocket.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ChatSocket
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
