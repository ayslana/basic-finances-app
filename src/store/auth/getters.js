export default {
  getIsLogged(state) {
    return state.isLogged;
  },

  getToken(state) {
    return state.token;
  },

  getUserName(state) {
    return state.userData.name;
  },

  getIsLoading(state) {
    return state.userData.userName;
  },
};
