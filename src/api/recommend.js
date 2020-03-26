import {Host} from '@/config' 
import axios from 'axios'


//获取歌单列表
export function getPlayList() {
    const getPlayListUrl = `${Host}/personalized`
    return axios.get(getPlayListUrl,{
        params: {
            limit: 24
        }
    })
}

//获取歌单详情 
export function getSingle(singleId) {
    const getSingleUrl = `${Host}/playlist/detail`
    return axios.get(getSingleUrl,{
        params: {
            id: singleId
        }
    })
}





