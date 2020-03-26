<template>
  <div id="app">
    <HNav v-if = "status" />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <PlayMusic/>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      status: true,
    }
  },
  components: {
    HNav: () => import("./views/Nav/h_nav"),
    PlayMusic: () => import("./components/Playmusic/playMusic")
  },
  watch: {
    $route() {
      this.status = this.$store.state.Path.indexOf(this.$route.path) + 1
    }
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
  background-color: #f4f5f6;
}
</style>
