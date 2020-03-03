<template>
  <div id="mheader">
    <h1>{{ header }}</h1>
    <router-link tag="div" class="h_user" to="/user">
      <i class="el-icon-user"></i>
    </router-link>
    <router-link tag="div" class="h_search" to="/search">
      <i class="el-icon-search"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Mheader",
  data() {
    return {
      header: "Magic Music"
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/base/scss/color.scss';

  #mheader {
  width: 100%;
  height: 48px;
  background-color: $color_router;
  color: $color_text;
  line-height: 1;
  position: absolute;
  font-size: 24px;
  z-index: 999;
  .h_user {
    position: absolute;
    left: 12px;
    top: 12px;
  }
  .h_search {
    position: absolute;
    right: 12px;
    top: 12px;
  }
  }
  #mheader h1 {
    line-height: 48px;
    font-size: 24px;
  }
</style>
