export default {
  getIsLogged(state) {
    return state.isLogged;
  },

  getToken(state) {
    return state.token;
  },

  getUserData(state) {
    return state.userData;
  },

  getIsLoading(state) {
    return state.userData.userName;
  },
};
