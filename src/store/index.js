import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import login from "./auth";
import notifications from "./notifications";
import menu from "./menu";
import home from "./home";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    login,
    notifications,
    menu,
    home,
  },
  plugins: [vuexLocal.plugin],
});
