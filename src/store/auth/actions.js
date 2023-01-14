import router from "@/router";

export default {
  async login({ commit, rootGetters }, payload) {
    commit("setIsLoading", true);
    let successObj = {
      successStatus: true,
      successMessage: "Usuário logado com sucesso",
    };
    try {
      const loginsRegistered = rootGetters["register/getRegistedUsers"].map(
        (i) => i.login
      );
      if (!loginsRegistered.includes(payload.login)) {
        let errorObj = {
          errorStatus: true,
          errorMessage: "Usuário não cadastrado",
        };
        commit("setIsLoading", false);
        commit("notifications/setErrorNotification", errorObj, { root: true });
        return;
      }
      const passwordMatch = rootGetters["register/getRegistedUsers"].filter(
        (i) => i.login === payload.login
      );
      if (payload.password != passwordMatch[0].password) {
        let errorObj = {
          errorStatus: true,
          errorMessage: "Senha incorreta",
        };
        commit("setIsLoading", false);
        commit("notifications/setErrorNotification", errorObj, { root: true });
        return;
      } else {
        commit("notifications/setSuccessNotification", successObj, {
          root: true,
        });
        commit("setIsLoading", false);
        commit("setUserData", payload);
        localStorage.setItem("login", payload.login);
        commit("setLogin");
        router.replace("/home");
      }
    } catch (e) {
      let errorObj = {
        errorStatus: true,
        errorMessage: "Ocorreu um erro desconhecido",
      };
      commit("setIsLoading", false);
      commit("notifications/setErrorNotification", errorObj, { root: true });
    }
  },

  async logout({ commit }) {
    let successObj = {
      successStatus: true,
      successMessage: "Usuário deslogado com sucesso",
    };
    commit("notifications/setSuccessNotification", successObj, {
      root: true,
    });
    Object.keys(JSON.parse(JSON.stringify(localStorage))).forEach((login) =>
      localStorage.removeItem(login)
    );
    commit("setLogout");
    router.replace("/");
  },
};
