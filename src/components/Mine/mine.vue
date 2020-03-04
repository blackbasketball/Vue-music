<template>
  <div id="mine">
    <h1>MINE</h1>
    <button @click="diao">这是一个尝试调取接口的按钮</button>
    <audio :src="mmm" controls></audio>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      mmm: "",
    };
  },
  methods: {
    diao() {
      this.axios
        .get("https://daiwei.site/netease/personalized/newsong", {
          params: {
            //id: 6452
          }
        })
        .then(({ data: { result = [] } }) => {
          console.log("成了");
          console.log(result[0].id);
          this.axios
            .get("https://daiwei.site/netease/song/url", {
              params: {
                id: result[0].id
              }
            })
            .then(({ data: { data = [] } }) => {
              this.mmm = data[0].url;
              console.log(this.mmm);
            })
            .catch(error => {
              console.log(error);
              console.log("获取不到歌曲");
            });
        })
        .catch(error => {
          console.log(error);
          console.log("不行");
        });
    }
  }
};
</script>

<style lang="scss"></style>
