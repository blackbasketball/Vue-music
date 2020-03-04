<template>
  <div id="app">
    <HNav />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HNav: () => import("./views/Nav/h_nav")
  }
};
</script>

<style lang="scss">
@import "./base/scss/index.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f2f3f4;
}
</style>
