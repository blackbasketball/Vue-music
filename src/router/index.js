import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/user',
      component: () => import('../components/User/user'),
      meta: {
        title: '用户'
      }
    },
    {
      path: '/search',
      component: () => import('../components/Search/search')
    },
    {
      path: '/recommend',
      component: () => import('../components/Recommend/recommend')
    },
    {
      path: '/singer',
      component: () => import('../components/Singer/singer')
    },
    {
      path: '/rank',
      component: () => import('../components/Rank/rank')
    },
    {
      path: '/mine',
      component: () => import('../components/Mine/mine')
    },
    {
      path: '/playlist',
      component: () => import('../views/playlist/playlist'),
      meta: {
        title: '歌单列表'
      }
    }
  ]
})
