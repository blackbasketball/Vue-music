<template>
  <div id="tab">
    <el-row :gutter="25">
      <el-col :span="6">
        <router-link tag="div" to="/recommend">
          <span :class="{tab_text:true,Hlight:path === Tpath.recommend}">发现</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="/rank">
          <span :class="{tab_text:true,Hlight:path === Tpath.rank}">排行</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="/singer">
          <span :class="{tab_text:true,Hlight:path === Tpath.singer}">歌手</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="/mine">
          <span :class="{tab_text:true,Hlight:path === Tpath.mine}">我的</span>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
      Tpath: {
        recommend: "/recommend",
        rank: "/rank",
        singer: "/singer",
        mine: "/mine"
      },
      path: "/recommend"
    };
  },
  watch: {
    $route(to, form) {
      this.path = to.path;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";

#tab {
  position: absolute;
  padding: 0 10%;
  top: 48px;
  left: 0;
  right: 0;
  z-index: 99999;
  background-color: $color_router;
  .el-col {
    text-align: center;
    height: 32px;
    .tab_text {
      color: rgba(220, 220, 220, 0.6);
    }
    .Hlight {
      font-weight: bold;
      color: $color_text;
      text-shadow: 3px 3px 6px rgba($color: #000000, $alpha: 0.2);
    }
  }
}
</style>
