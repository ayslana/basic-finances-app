<template>
  <v-container fluid class="d-flex fill-height" style="flex-direction: column">
    <v-row>
      <v-col cols="6" class="login"
        ><v-img src="@/assets/loginAsset.png"></v-img
      ></v-col>
      <v-col cols="6" align="center" align-self="center">
        <v-row justify="center" class="pb-12"
          ><span class="text-h2 login--text font-weight-bold">WorldWallet</span>
        </v-row>
        <v-row class="py-3 mx-3">
          <v-text-field
            v-model="login.email"
            label="E-mail"
            outlined
            dense
            required
            :rules="emailRules"
          ></v-text-field>
        </v-row>
        <v-row class="py-3 mx-3">
          <v-text-field
            v-model="login.senha"
            label="Senha"
            outlined
            dense
            required
            :rules="passwordRules"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-row>
        <v-row justify="center" class="py-3 mx-3">
          <v-col cols="6">
            <v-btn
              rounded
              x-large
              block
              class="white--text login"
              style="text-transform: none !important; font-weight: bolder"
              :loading="isLoading"
              @click="sendLogin()"
              >Login
            </v-btn>
          </v-col>
        </v-row>
        <v-row justify="center" class="py-3 mx-3">
          <v-col cols="6">
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
  </v-container>
</template>
<script>
import RegisterDialog from "@/components/register/RegisterDialog.vue";

export default {
  name: "LoginView",
  components: {
    RegisterDialog,
  },
  data: () => ({
    dialogRegister: false,
    showPassword: false,
    login: {
      email: "",
      password: "",
    },
  }),
  methods: {
    openRegisterDialog() {
      this.dialogRegister = true;
    },
    closeRegisterDialog() {
      this.dialogRegister = false;
    },
  },
};
</script>
<style scopped>
.v-ripple__animation {
  display: none;
}
</style>
