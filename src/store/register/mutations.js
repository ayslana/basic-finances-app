export default {
  setIsLoading(state, payload) {
    state.isLoading = payload;
  },

  setRegisteredUser(state, payload) {
    state.registeredUsers.push(payload);
  },
};
