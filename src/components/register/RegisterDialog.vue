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
        <v-col cols="6" align="center" align-self="center">
          <v-row justify="center" class="pb-12"
            ><span class="text-h2 login--text font-weight-bold"
              >WorldWallet</span
            >
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
              v-model="login.password"
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
          <v-row class="py-3 mx-3">
            <v-text-field
              v-model="login.confimPassword"
              label="Confirmar Senha"
              outlined
              dense
              required
              :rules="passwordRules"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
          </v-row>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-container
          ><v-row justify="center" class="py-3 mx-3">
            <v-col cols="3">
              <v-btn
                rounded
                x-large
                block
                class="white--text"
                style="text-transform: none !important; font-weight: bolder"
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
export default {
  data: () => ({
    showPassword: false,
    login: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  }),

  methods: {
    closeRegisterDialog() {
      this.$emit("closeRegisterDialog");
    },
  },
};
</script>
<style lang=""></style>
