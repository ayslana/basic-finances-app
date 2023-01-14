<template>
  <v-card width="256" flat>
    <v-navigation-drawer
      permanent
      :mini-variant="miniResponsive"
      floating
      app
      color="base_dark"
      id="sidebar"
    >
      <v-list dense nav>
        <div
          class="base--text text-h6 my-12 d-none d-sm-none d-md-block d-lg-block d-xl-block"
        >
          <span class="base--text">Olá,</span>
          {{ getUserData.login }}.
        </div>
        <v-list-item-group color="primary" v-model="itemSelected" mandatory>
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
      itemSelected: 2,
      items: [
        {
          title: "Home",
          icon: "mdi-view-dashboard-outline",
          url: "/home",
        },
      ],
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),

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
    ...mapGetters("auth", ["getUserData"]),

    miniResponsive() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
<style lang="scss"></style>
