<template>
  <div fluid class="d-flex fill-height" style="flex-direction: column">
    <v-row>
      <v-col
        cols="6"
        class="login d-none d-sm-none d-md-none d-lg-block d-xl-none"
        ><v-img src="@/assets/loginAsset.png"></v-img
      ></v-col>
      <v-col
        cols="12"
        sm="12"
        md="12"
        lg="6"
        xl="6"
        align="center"
        align-self="center"
      >
        <v-row justify="center" class="pb-12">
          <v-col cols="12" sm="8" md="8" lg="12" xl="6"
            ><span class="text-h2 login--text font-weight-bold"
              >WorldWallet</span
            >
          </v-col>
        </v-row>
        <v-row justify="center" class="py-3 mx-3">
          <v-col cols="12" sm="12" md="8" lg="12" xl="12">
            <v-text-field
              v-model="modelLogin.login"
              label="Login"
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
              v-model="modelLogin.password"
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
          <v-col cols="12" sm="8" md="8" lg="12" xl="12">
            <v-btn
              rounded
              x-large
              block
              class="white--text login"
              style="text-transform: none !important; font-weight: bolder"
              :loading="isLoading"
              @click="doLogin()"
              >Login
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="py-3 mx-3">
          <v-col cols="12" sm="8" md="8" lg="12" xl="12">
            <span>Não possui Login? </span>
            <v-hover v-slot="{ hover }">
              <v-btn
                block
                plain
                text
                style="text-transform: none !important; font-weight: bolder"
                :class="hover ? 'accent--text' : 'login--text'"
                :loading="isLoading"
                @click="openRegisterDialog()"
                >Cadastre-se.
              </v-btn>
            </v-hover>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialogRegister"
      fullscreen
      hide-overlay
      scrollable
      max-width="720"
      transition="dialog-bottom-transition"
    >
      <register-dialog @closeRegisterDialog="closeRegisterDialog" />
    </v-dialog>
  </div>
</template>
<script>
import RegisterDialog from "@/components/register/RegisterDialog.vue";
import { mapActions } from "vuex";

export default {
  name: "LoginView",
  components: {
    RegisterDialog,
  },
  data: () => ({
    dialogRegister: false,
    showPassword: false,
    modelLogin: {
      login: "",
      password: "",
    },
  }),
  methods: {
    ...mapActions("login", ["login"]),

    openRegisterDialog() {
      this.dialogRegister = true;
    },
    closeRegisterDialog() {
      this.dialogRegister = false;
    },
    doLogin() {
      this.login(this.modelLogin);
    },
  },
};
</script>
<style scopped>
.v-ripple__animation {
  display: none;
}
</style>
