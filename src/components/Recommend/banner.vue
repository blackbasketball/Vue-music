<template>
  <div id="banner">
    <el-carousel trigger="click" indicator-position="none" :interval="3000">
      <el-carousel-item v-for="(item, index) in imgUrl" :key="index">
        <img :src="item" alt="banner图" class="banner_img" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      imgUrl: []
    };
  },
  created() {
    this.axios
      .get("https://daiwei.site/netease/banner", {
        params: {
          type: 0
        }
      })
      .then(({ data: { banners = [] } }) => {
        let img = banners.map(a => a.imageUrl);
        this.imgUrl = img;
        console.log("success");
      })
      .catch(error => {
        console.log(error);
        console.log("请求失败了");
      });
  }
};
</script>

<style lang="scss">
@import "@/base/scss/color.scss";

.banner_img {
  width: 100%;
  height: 100%;
}
#banner {
  background-color: $color_router;
  height: 120px;
  padding-top: 2%;
  margin-bottom: 46px;
  .el-carousel {
    margin: 0 auto;
    width: 90%;
    height: 140px;
    border-radius: 5px;
    .el-carousel__container {
      height: 100%;
    }
  }
}
</style>
