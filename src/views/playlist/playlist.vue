<template>
    <div id='playlist'>
        <div class='list_head'>
            <h2>
                <i class='el-icon-arrow-left' @click="goBack"></i>
                <span>歌单花园</span>
            </h2>
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
    data() {
        return {
            songList: [],
        }
    },
    created() {
        this.getPlaylist()
    },
    methods: {
        goBack() {
            this.$router.push({ path: '/recommend' })
        },
        getPlaylist() {
            getPlayList().then((res) => {
                const list = res.data.result
                this.songList = list                
            }).catch(error => {
                console.log(error)
            })
        },
        openSingle(id) {
            this.$router.push({ path: `/single/${id}` })
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/base/scss/color.scss";

.list_head {
    width: 100%;
    text-align: left;
    height: 48px;
    line-height: 48px;
    position: fixed;
    background-color: $color_router;
    color: $color_text;
    z-index: 999;
}
.list_head .el-icon-arrow-left {
    font-size: 24px;
    position: absolute;
    top: 50%;
    font-weight: 600;
    transform: translateY(-50%);
    left: 10px;
}
.list_head span {
    font-size: 20px;
    margin-left: 50px;
}
.list_band {
    padding-top: 48px;
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
