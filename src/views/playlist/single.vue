<template>
    <div id='single'>
        <div class="header">
            <div class="headBack" :style="{ background: ImgColor }">
            </div>
            <div class='list_head' :style="{ background: ImgColor }">
                <h2>
                    <i class='el-icon-back' @click='goBack'></i>
                    <span>歌单</span>
                </h2>
            </div>
            <img :src="singleHead.coverImgUrl" alt="" class="ban_img">
            <div class="ban_text">
                <h3>{{ singleHead.name }}</h3>
                <span>播放次数：{{ singleHead.playCount }}</span>
                <p>{{ singleHead.description }}</p>
            </div>
        </div>
        <ul class="songList">
            <template v-for="item in songList">
                <li :key="item.id" @click="SongDetail(item.id)">
                    <h4>{{ item.name }}</h4>
                    <span>{{ item.ar[0].name }}</span>
                    <i class="el-icon-video-play"></i>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import { getSingle } from '@/api/recommend'
import { mapActions, mapMutations } from 'vuex'

export default {
    activated() {
        this.getsingle(this.$route.params.id)
    },
    data() {
        return {
            singleHead: {},
            songList: [],
        }
    },
    computed: {
        ImgColor() {
            return `url('${this.singleHead.coverImgUrl}')`
        }
    },
    methods: {
        ...mapActions([
            'getSongDetail',
            'getSong',
        ]),
        ...mapMutations([
            'playing'
        ]),
        goBack() {
            this.$router.push({ path: '/playlist' })
            this.singleHead = {}
            this.songList = []
        },
        getsingle(id) {
            getSingle(id).then(res => {
                this.singleHead = res.data.playlist
                this.songList = this.singleHead.tracks
            }).catch(error => {
                console.log(error)
            })
        },
        async SongDetail(ids) {
            const payload = ids
            await this.getSongDetail(payload)
            await this.getSong(payload)
            this.playing()
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";

#single {
    text-align: left;
}
.header {
    width: 100%;
    height: 250px;
    position: relative;
}
.headBack {
    filter: blur(4px);
    height: 250px;
    width: 100%;
    position: absolute;
    opacity: .8;
}
.list_head {
    width: 100%;
    text-align: left;
    height: 48px;
    line-height: 48px;
    position: fixed;
    color: $color_text;
    z-index: 999;
    // background-color: rgba($color: #000000, $alpha: 0.2)
}
.list_head .el-icon-back {
    font-size: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
}
.list_head span {
    font-size: 20px;
    margin-left: 50px;
}
.ban_img {
    display: block;
    width: 150px;
    height: 150px;
    position: absolute;
    top: 68px;
    left: 10px;
    z-index: 888;
}
.ban_text {
    position: absolute;
    top: 68px;
    left: 176px;
    color: #ffffff;
    z-index: 888;
}
.ban_text span {
    font-size: 14px;
    font-weight: 500;
    color: $color_text;
}
.ban_text p {
    font-size: 12px;
    color: #eee;
    height: 74px;
    width: 210px;
    overflow: scroll;
}
.songList {
    padding-top: 10px;
    background-color:#ffffff;
}
.songList li {
    list-style: none;
    width: 84%;
    margin: 0 auto 5px;
    padding: 10px 20px 10px 10px;
    border-bottom: 1px #ddd solid;
    position: relative;
}
.songList li span {
    font-size: 12px;
    color: #3e3e3e;
}
.songList li i {
    position: absolute;
    right: 30px;
    top: 18px;
    font-size: 24px;
}
</style>