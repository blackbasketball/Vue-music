<template>
  <div id="recommend">
    <Banner/>
    <Rtab/>
  </div>
</template>

<script>
export default {
  name: "recommend",
  data() {
    return {
      
    };
  },
  methods: {
  },
  components: {
      Banner: () =>import('./banner'),
      Rtab: () =>import('./R_tab')
  }
};
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";

</style>
