export default {
  async register({ commit, getters }, payload) {
    commit("setIsLoading", true);
    let successObj = {
      successStatus: true,
      successMessage: "Usuário registrado com sucesso",
    };
    try {
      const loginsRegistered = getters["getRegistedUsers"].map((i) => i.login);
      if (loginsRegistered.includes(payload.login)) {
        let errorObj = {
          errorStatus: true,
          errorMessage: "Login não disponível",
        };
        commit("setIsLoading", false);
        commit("notifications/setErrorNotification", errorObj, { root: true });
      } else {
        commit("notifications/setSuccessNotification", successObj, {
          root: true,
        });
        commit("setRegisteredUser", payload);
      }
    } catch (e) {
      let errorObj = {
        errorStatus: true,
        errorMessage: "Ocorreu um erro ao cadastrar usuários",
      };
      commit("setIsLoading", false);
      commit("notifications/setErrorNotification", errorObj, { root: true });
    }
  },
};
