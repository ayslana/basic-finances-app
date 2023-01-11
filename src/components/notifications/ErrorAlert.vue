<template>
  <v-row justify="end" class="overflow-visible notification-alignment">
    <v-col cols="auto">
      <v-snackbar
        timeout="4000"
        shaped
        color="red"
        bottom
        right
        class="white--text font-weight-bold"
        v-model="errorNotification.errorStatus"
      >
        {{ errorNotification.errorMessage || "Ocorreu um erro desconhecido" }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="errorNotification.errorStatus = false"
          >
            <v-icon>mdi-close-circle-outline</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    errorNotification: {
      errorStatus: false,
      errorMessage: "",
    },
  }),
  computed: {
    ...mapGetters("notifications", ["getErrorNotification"]),
  },
  methods: {
    ...mapActions("notifications", ["dismissErrorNotification"]),
  },
  mounted() {
    this.errorNotification = this.getErrorNotification;
    if (this.errorNotification.errorStatus) {
      this.dismissErrorNotification();
    }
  },
};
</script>

<style scoped>
.notification-alignment {
  position: absolute;
  right: 2%;
  top: 1%;
  z-index: 2000;
}
</style>
