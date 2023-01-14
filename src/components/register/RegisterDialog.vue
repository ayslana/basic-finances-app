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
              <span class="text-h3 login--text font-weight-bold"
                >WorldWallet</span
              >
            </v-col>
          </v-row>
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              <v-text-field
                v-model="modelRegister.login"
                label="Login"
                outlined
                dense
                required
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
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="center" class="py-3 mx-3">
            <v-col cols="12" sm="12" md="8" lg="12" xl="12">
              <v-text-field
                v-model="confirmPassword"
                label="Confirmar Senha"
                outlined
                dense
                required
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <span v-show="passwordDivergence" class="primary--text"
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
                class="white--text login"
                style="text-transform: none !important; font-weight: bolder"
                :disabled="disabledField"
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
      login: "",
      password: "",
    },
    confirmPassword: "",
    isLoading: false,
    passwordDivergence: false,
  }),
  watch: {
    confirmPassword: {
      handler(newValue) {
        newValue != this.modelRegister.password
          ? (this.passwordDivergence = true)
          : (this.passwordDivergence = false);
      },
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("register", ["register"]),

    async sendRegister() {
      this.isloading = true;
      this.register(this.modelRegister);
      this.isloading = false;
      this.closeRegisterDialog();
    },

    closeRegisterDialog() {
      this.$emit("closeRegisterDialog");
    },
  },
  computed: {
    disabledField() {
      if (
        this.modelRegister.login === "" ||
        this.modelRegister.password === "" ||
        this.confirmPassword === "" ||
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
