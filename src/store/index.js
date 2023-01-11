import Vue from "vue";
import Vuex from "vuex";
import login from "./login";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    login,
  },
  plugins: [vuexLocal.plugin],
});
