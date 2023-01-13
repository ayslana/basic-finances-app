export default {
  setToken(state, token) {
    state.token = token;
  },

  setUserData(state, payload) {
    state.userData = payload;
  },

  setIsLoading(state, payload) {
    state.isLoading = payload;
  },
};
