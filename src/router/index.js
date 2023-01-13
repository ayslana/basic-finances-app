import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    name: "Login",
    path: "/",
    component: LoginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    name: "Home",
    path: "/home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    name: "Home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters["auth/getIsLogged"]) {
      next({
        path: "/",
      });
    } else {
      next({
        path: "/home",
      });
    }
  } else {
    next();
  }
});
export default router;
