<template>
    <div id="singer">
        <h3>热门</h3>
    </div>
</template>

<script>
import { getSingerList } from '@/api/singer'

export default {
    name: 'singer',
    data() {
        return {
            singerList: [],
        }
    },
    created() {
        this._getSingerList()
    },
    methods: {
        _getSingerList() {
            getSingerList().then(res => {
                console.log(res.data.artists)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
</script>


<style lang="scss" scoped>
    #singer {
        text-align: left;
    }
    #singer h3 {
        margin-left: 20px;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        color: #666666;
    }
</style>