import {Host} from '@/config' 
import axios from 'axios'

//获取歌手列表
export function getSingerList() {
    const getSingerListUrl = `${Host}/top/artists`
    return axios.get(getSingerListUrl,{
        params: {
            limit: 100
        }
    })
}