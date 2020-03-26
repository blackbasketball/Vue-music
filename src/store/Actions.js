import {Host} from '@/config' 
import axios from 'axios'
//获取歌曲详情
const getSongDetailUrl = `${Host}/song/detail`
//获取歌曲Url
const getSongUrl = `${Host}/song/url`



export default {
    //获取歌曲详情
    getSongDetail({ commit, state },payload) {
        axios.get(getSongDetailUrl,{
            params: {
                ids: payload
            }
        }).then(({data:{songs}}) => {
            state.SongDetail = songs[0]
            console.log(songs[0])
        }).catch(error => {
            console.log(error)
        })
        commit
    },

    //获取歌曲Url
    getSong({ commit, state },payload) {
        axios.get(getSongUrl,{
            params: {
                id: payload
            }
        }).then(({data:{data}}) => {
            state.songUrl = data[0].url
            console.log(state.songUrl)
        }).catch(error => {
            console.log(error)
        })
        commit
    }
}



