export default {
  setToken(state, token) {
    state.token = token;
  },

  setLogin(state) {
    state.isLogged = true;
  },

  setLogout(state) {
    state.isLogged = false;
  },

  setUserData(state, payload) {
    state.userData = payload;
  },

  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
};
