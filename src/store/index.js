import Vue from "vue";
import Vuex from "vuex";
import actions from './Actions'
import mutations from './Mutations'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Path: ["/recommend", "/rank", "/singer", "/mine"],
    playState: false,
    SongDetail: {
      name: '暂无播放曲目',
      al: {
        picUrl: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584616990379&di=48844c9edddf113b642febbc843
                b4537&imgtype=0&src=http%3A%2F%2Ffile2.zhituad.com%2Fthumb%2F201204%2F06%2F201204060157412665coy2v_priv.jpg`
      },
      ar: [
        {
          name: '',
        }
      ],
    },
    songUrl: '',
  },
  actions,
  mutations,
});

export default store;
