<template>
  <div id="recommend">
    <Banner/>
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
      Banner: () =>import('./banner')
  }
};
</script>

<style lang="scss">
@import "@/base/scss/color.scss";

</style>
