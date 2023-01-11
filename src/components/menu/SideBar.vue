<template>
  <v-card width="256" flat>
    <v-navigation-drawer
      floating
      :temporary="miniResponsive"
      app
      color="base_dark"
      id="sidebar"
      v-model="drawerModel"
    >
      <v-list dense nav>
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="redirect(item.url)"
            link
          >
            <v-list-item-icon class="mr-4">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                class="font-weight-medium text-body-1 text-left align-self-start"
                >{{ item.title }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item class="mt-6" @click="logout()">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-title
              class="font-weight-medium text-body-1 text-start align-self-center"
              >Sair</v-list-item-title
            >
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SibeBarComponent",
  component: {},
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard-outline",
          url: "/dashboard",
        },
      ],
    };
  },
  props: {
    relative: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions("login", ["logout"]),

    redirect(url) {
      const atual = router.currentRouter;
      if (atual != url) {
        router.replace(url);
      }
    },
    onLoggedOut() {
      this.logout();
    },
  },
  computed: {
    ...mapGetters("menu", ["getDrawer"]),
    miniResponsive() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    drawerModel: {
      get() {
        return this.$store.state.menu.drawer;
      },
      set(value) {
        this.$store.dispatch("menu/setDrawer", value);
      },
    },
  },
};
</script>
<style lang="scss"></style>
