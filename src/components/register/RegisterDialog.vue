<template>
  <v-card tile>
    <v-toolbar flat color="base" max-height="60px">
      <v-btn icon @click="closeRegisterDialog">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="text-h5 font-weight-bold"
        >Cadastro</v-toolbar-title
      >
    </v-toolbar>
    <v-card-text class="pt-12">
      <v-row justify="center">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          xl="6"
          align="center"
          align-self="center"
        >
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              ><span class="text-h3 login--text font-weight-bold"
                >WorldWallet</span
              >
            </v-col>
          </v-row>
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              <v-text-field
                v-model="modelRegister.email"
                label="E-mail"
                outlined
                dense
                required
                :rules="emailRules"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              <v-text-field
                v-model="modelRegister.password"
                label="Senha"
                outlined
                dense
                required
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              <v-text-field
                v-model="confimPassword"
                label="Confirmar Senha"
                outlined
                dense
                required
                :rules="passwordRules"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <span v-show="passwordDivergence" class="primary"
                >As senhas devem ser iguais.</span
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-container
          ><v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="3" xl="3">
              <v-btn
                rounded
                x-large
                block
                class="white--text"
                style="text-transform: none !important; font-weight: bolder"
                :disabled="disabledField"
                :color="hover ? 'secondary' : 'login'"
                :loading="isLoading"
                @click="sendRegister()"
                >Cadastrar
              </v-btn>
            </v-col>
          </v-row></v-container
        >
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    showPassword: false,
    modelRegister: {
      email: "",
      password: "",
    },
    confirmPassword: "",
    passwordDivergence: false,
  }),
  watch: {
    confirmPassword: {
      handler(newValue) {
        newValue.confirmPassword = !this.modelRegister.password
          ? (this.passwordDivergence = true)
          : (this.passwordDivergence = false);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("register", ["register"]),

    sendRegister() {
      this.modelRegister.password === this.modelRegister.confirmPassword
        ? this.register
        : "";
    },

    closeRegisterDialog() {
      this.$emit("closeRegisterDialog");
    },
  },
  computed: {
    disabledField() {
      if (
        this.modelRegister.email === "" ||
        this.modelRegister.password === "" ||
        this.modelRegister.confirmPassword === "" ||
        this.modelRegister.password != this.confirmPassword
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>
<style lang=""></style>
