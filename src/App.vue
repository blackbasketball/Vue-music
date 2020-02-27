<template>
  <div id="app">
    <Mheader/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    Mheader: () => import('./components/Mheader/mheader'),
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #FF4500;
}
* {
  margin: 0;
  padding: 0;
}
</style>
