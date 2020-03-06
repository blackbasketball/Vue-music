import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    Path: ["/recommend", "/rank", "/singer", "/mine"]
  }
});

export default store;
