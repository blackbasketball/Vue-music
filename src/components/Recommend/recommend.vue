<template>
  <div id="recommend">
    <Banner/>
    <Rtab/>
    <div class="list_head">
        <h3>每日推荐</h3>
        <button>查看更多</button>
    </div>
    <div class="list_band">
            <template v-for="item in songList">
                <div :key="item.id" class="single" @click="openSingle(item.id)">
                    <img :src="item.picUrl" alt="歌单图片" class="songImg">
                    <span><i class="el-icon-caret-right"></i>{{ item.playCount }}</span>
                    <p>{{ item.name }}</p>
                </div>
            </template>
        </div>
  </div>
</template>

<script>
import { getPlayList, getSingle } from '@/api/recommend'

export default {
  name: "recommend",
  data() {
    return {
      songList: [],
    };
  },
  created() {
        this.getPlaylist()
    },
  methods: {
      getPlaylist() {
            getPlayList().then((res) => {
                const list = res.data.result
                this.songList = list                
            }).catch(error => {
                console.log(error)
            })
        },
  },
  components: {
      Banner: () =>import('./banner'),
      Rtab: () =>import('./R_tab')
  }
};
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";
#recommend .list_head {
    margin-top: 30px;
    margin-left: 20px;
    text-align: left;
    height: 25px;
    line-height: 25px;
}
.list_head h3 {
    float: left;
}
.list_head button {
    float: right;
    display: block;
    height: 25px;
    width: 80px;
    margin-right: 20px;
    border: 1px solid #ccc;
    background-color: #f4f5f6;
    border-radius: 15px;
}
.list_band {
    padding-bottom: 48px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: space-around;
}
.single  {
    font-size: 12px;
    position: relative;
    margin-top: 20px;
}
.single img {
    display: block;
    width: 128px;
    height: 128px;
    border-radius: 5px;
    margin-right: 0;
}
.single span {
    position: absolute;
    top: 2px;
    right: 8px;
    font-weight: 600;
    color: #ffffff;
}
.single p {
    margin-top: 5px;
    width: 130px;
    text-align: left;
}
</style>
