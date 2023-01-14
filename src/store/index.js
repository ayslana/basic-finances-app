import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import notifications from "./notifications";
import register from "./register";
import auth from "./auth";
import menu from "./menu";
import home from "./home";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  modules: {
    namespaced: true,
    notifications,
    register,
    auth,
    menu,
    home,
  },
  plugins: [vuexLocal.plugin],
});
