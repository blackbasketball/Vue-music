import {Host} from '@/config' 
import axios from 'axios'

// 获取排行榜列表
export function getRankList() {
    const getRankListUrl = `${Host}/toplist/detail`
    return axios.get(getRankListUrl)
}