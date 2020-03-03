<template>
    <div id="h_nav">
        <Mheader/>
        <Tabbar/>
    </div>
</template>

<script>
export default {
    name: 'h_nav',
    components: {
        Mheader: () => import('@/components/Mheader/mheader'),
        Tabbar: () => import('@/components/Tabbar/tabbar')
    }
}
</script>

<style lang="scss">
    #h_nav {
        position: fixed;
        width: 100%;
    }
</style>