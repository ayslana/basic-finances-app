<template>
  <v-row justify="end" class="overflow-visible notification-alignment">
    <v-col cols="auto">
      <v-snackbar
        timeout="4000"
        shaped
        top
        color="green"
        right
        class="white--text font-weight-bold"
        v-model="successNotification.successStatus"
      >
        {{ successNotification.successMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="black"
            text
            v-bind="attrs"
            @click="successNotification.successStatus = false"
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
    successNotification: {
      successStatus: false,
      successMessage: "",
    },
  }),
  computed: {
    ...mapGetters("notifications", ["getSuccessNotification"]),
  },
  methods: {
    ...mapActions("notifications", ["dismissSuccessNotification"]),
  },
  mounted() {
    this.successNotification = this.getSuccessNotification;
    if (this.successNotification) {
      this.dismissSuccessNotification();
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
