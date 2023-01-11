<template>
  <v-container fluid class="d-flex fill-height" style="flex-direction: column">
    <v-row>
      <v-col cols="6" class="primary"
        ><v-img src="@/assets/login_asset.png"></v-img
      ></v-col>
      <v-col cols="6" align="center" align-self="center">
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
              style="text-transform: none !important; font-weight: bolder"
              :color="hover ? 'secondary' : 'primary'"
              :loading="isLoading"
              @click="sendLogin()"
              >Login
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    showPassword: false,
    login: {
      email: "",
      password: "",
    },
  }),
};
</script>
<style lang=""></style>
