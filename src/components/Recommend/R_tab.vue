<template>
  <div id="rtab">
    <el-row :gutter="25">
      <el-col :span="6">
        <router-link tag="div" to="/everyday">
          <div class="yuan">
            <i class="yuan_i el-icon-medal-1"></i>
          </div>
          <span class="rtab_text">每日推荐</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="/playlist">
          <div class="yuan">
            <i class="yuan_i el-icon-collection"></i>
          </div>
          <span class="rtab_text">歌单</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="everyday">
          <div class="yuan">
            <i class="yuan_i el-icon-s-platform"></i>
          </div>
          <span class="rtab_text">电台</span>
        </router-link>
      </el-col>
      <el-col :span="6">
        <router-link tag="div" to="everyday">
          <div class="yuan">
            <i class="yuan_i el-icon-video-camera-solid"></i>
          </div>
          <span class="rtab_text">MV</span>
        </router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "rtab"
};
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";

#rtab {
  padding: 0 5%;
  .yuan {
    padding-top: 5px;
    margin: 0 auto;
    width: 60%;
    height: 44px;
    background-image: linear-gradient(
      to right,
      #ff6347,
      #ff4500,
      $color_router,
      #b22222
    );
    border-radius: 50%;
    line-height: 44px;
    .yuan_i {
      color: $color_text;
      font-size: 26px;
    }
  }
  .rtab_text {
    font-size: 12px;
    color: #030303;
  }
}
</style>
