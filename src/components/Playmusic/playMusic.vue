<template>
    <div id="playMusic">
        <div class="listening">
            <img :src="$store.state.SongDetail.al.picUrl" alt="歌曲图片" class="playImg">
            <h2>{{ $store.state.SongDetail.name }}</h2>
            <p>{{ $store.state.SongDetail.ar[0].name }}</p>
            <button :class="this.$store.state.playState?'el-icon-video-pause play':'el-icon-video-play play'" @click="playing">
            </button>
            <button class="el-icon-s-unfold songState">
            </button>
            <audio ref="audio" @play="handPlay" @pause="handPlay">
                <source :src="$store.state.songUrl" type="audio/ogg">
                <source :src="$store.state.songUrl" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'playMusic',
    data() {
        return {
        }
    },
    methods: {
        ...mapMutations([
            'playing',
            'pausing',
        ]),
        playing() {
            // if(!this.playState) {
            //     this.playing()
            //     this.$refs.audio.play()
            // } else {
            //     this.pausing()
            //     this.$refs.audio.pause()
            // }
        },
        handPlay() {
            if (!this.playState) {
                console.log('播放')
                return
            } else {
                console.log('暂停')
                return
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .listening {
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 48px;
        background-color: rgba($color: #EEEEEE, $alpha: 0.9);
        box-shadow: 0 -3px 5px rgba($color: #000000, $alpha: 0.2);
        z-index: 999;
        .playImg {
            width: 40px;
            height: 40px;
            display: block;
            position: absolute;
            left: 20px;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
        }
        .play {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 70px;
            display: block;
            width: 30px;
            height: 30px;
            font-size: 30px;
            z-index: 9999;
        }
        .songState {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 15px;
            display: block;
            width: 30px;
            height: 30px;
            font-size: 30px;
            z-index: 9999;
        }
    }
    .listening h2 {
        position: absolute;
        top: 6px;
        left: 70px;
        font-size: 14px;
        font-weight: 400;
    }
    .listening p {
        position: absolute;
        top: 26px;
        left: 71px;
        font-size: 12px;
        color: #333333;
    }
    .listening button {
        border: 0;
        background-color: rgba($color: #EEEEEE, $alpha: 0.9);
    }
</style>