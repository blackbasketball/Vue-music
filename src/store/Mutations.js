export default {
    //音乐的暂停和播放
    playing(state) {
        if (!state.playState) {
            state.playState = true
        }
        return
    },
    pausing(state) {
        if (state.playState) {
            state.playState = false
        }
        return
    }
} 