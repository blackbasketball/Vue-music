<template>
    <div id="rank">
        <h3 class="rankHead">排行榜</h3>
        <ul>
            <li v-for="items in rankList" :key="items.name" class="clearLi">
                <img :src="items.coverImgUrl" alt="" class="rankImg">
                <span class="rankSpan">{{ items.updateFrequency }}</span>
                <ul class="rankText">
                    <li v-for="(item,index) in items.tracks" :key="item.first">
                        <p>{{index+1}}.{{item.first}} - {{item.second}}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { getRankList } from '@/api/rank'

export default {
    data(){
        return {
            rankList: [],
        }
    },
    created() {
        this.get_rankList()
    },
    methods: {
        get_rankList() {
            getRankList().then(({data:{list=[]}}) => {
                console.log(list)
                this.rankList = list
                }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    #rank li {
        list-style: none;
    }
    .rankHead {
        margin-top: 20px;
        margin-left: 18px;
        text-align: left;
        font-weight: 600;
    }
    .eee {
        width: 80%;
        margin: 10px auto;
    }
    .clearLi {
        position: relative;
    }
    .clearLi::after {
        content: '';
        display: block;
        clear: both;
    }
    .rankImg {
        margin: 20px 10px 0 15px;
        width: 144px;
        height: 144px;
        display: block;
        float: left;
        border-radius: 5px;
        box-shadow: -3px 3px 5px rgba($color: #000000, $alpha: 0.3);
    }
    .rankSpan {
        position: absolute;
        left: 23px;
        bottom: 10px;
        font-size: 12px;
        color: #ffffff;
        font-weight: 500;
    }
    .rankText {
        float: left;
        padding-top: 25px;
        font-size: 14px;
        text-align: left;
        color: #666666;
    }
    .rankText li {
        margin: 20px 0;
    }
</style>