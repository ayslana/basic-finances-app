<template>
  <v-card flat>
    <v-app-bar flat color="base" absolute app>
      <v-toolbar-title
        class="flex text-start text-h4 text--text font-weight-bold"
        >{{ name }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-switch
        v-model="tougle"
        inset
        @click="darkMode"
        class="mt-5"
      ></v-switch>
      <span class="text--text text-body-1"> {{ getUserName }}</span>
    </v-app-bar>
  </v-card>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    return: {},
    tougle: false,
  }),
  props: {
    name: { type: String, required: true },
  },
  mounted() {
    this.darkModeOn();
  },
  computed: {
    ...mapGetters("login", ["getUserName"]),
    ...mapGetters("menu", ["getDarkMode"]),
  },
  methods: {
    ...mapActions("menu", ["setDarkMode"]),

    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.setDarkMode(!this.getDarkMode);
      this.tougle = true;
    },

    darkModeOn() {
      this.$vuetify.theme.dark = this.getDarkMode;
      this.tougle = this.getDarkMode;
    },
  },
};
</script>
<style>
.navBarComponent {
  background-color: #f2f4f5 !important;
}
.page-title {
  color: #002233;
}
</style>
