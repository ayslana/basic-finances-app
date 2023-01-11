import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import login from "./login";
import notifications from "./notifications";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    login,
    notifications,
  },
  plugins: [vuexLocal.plugin],
});
