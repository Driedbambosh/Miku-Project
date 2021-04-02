<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
}
html,body,#app {
  width: 100%;
  height: 100%;
}
html {
  height: 100%;
}
body {
  background-image: url('./assets/Backgroung.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
</style>
