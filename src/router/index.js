import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/NotFoundView.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "",
  routes: [
    {
      name: "Login",
      path: "/",
      component: LoginView,
    },
    {
      name: "Home",
      path: "/home",
      component: HomeView,
      beforeEnter: beforeEnter,
    },
    {
      path: "/nao-encontrado",
      name: "404",
      component: NotFoundView,
    },
    { path: "*", redirect: "/nao-encontrado" },
  ],
});

function beforeEnter(to, from, next) {
  if (store.getters["auth/getIsLogged"]) {
    next();
  } else {
    next({
      name: "Login",
    });
  }
}

export default router;
