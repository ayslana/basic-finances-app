<template>
  <v-app id="app" class="background">
    <navbar
      v-if="!['Login'].includes($route.name) && !['404'].includes($route.name)"
      :name="$route.name"
    />
    <sidebar
      v-if="!['Login'].includes($route.name) && !['404'].includes($route.name)"
    />
    <v-main class="background">
      <router-view />
    </v-main>
    <div class="overflow-visible float-end">
      <error-alert />
      <success-alert />
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/menu/NavBar.vue";
import Sidebar from "@/components/menu/SideBar.vue";
import ErrorAlert from "@/components/notifications/ErrorAlert.vue";
import SuccessAlert from "@/components/notifications/SuccessAlert.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Sidebar,
    ErrorAlert,
    SuccessAlert,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // background-color: #eeeeee;
  text-transform: none !important;
}
.container {
  max-width: 100% !important;
}
</style>
