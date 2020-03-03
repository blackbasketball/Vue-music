<template>
    <div id="tab">
        <el-row :gutter="25">
            <el-col :span="6">
                <router-link tag="div" to="recommend">
                    <span class="tab_text">发现</span>
                </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="div" to="rank">
                    <span class="tab_text">排行</span>
                </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="div" to="singer">
                    <span class="tab_text">歌手</span>
                </router-link>
            </el-col>
            <el-col :span="6">
                <router-link tag="div" to="mine">
                    <span class="tab_text">我的</span>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import '@/base/scss/color.scss';

    #tab {
        position: absolute;
        padding: 0 10%;
        top: 48px;
        left: 0;
        right: 0;
        z-index: 999;
        background-color: $color_router;
        .el-col {
            text-align: center;
            height: 32px;
            .tab_text {
                color: $color_text;
            }
        }
    }
</style>