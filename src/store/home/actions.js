import { HomeRepository } from "@/repositories/HomeRepository";

export default {
  async requestFinanceData({ commit }) {
    const key = "5060e767";
    const response = await HomeRepository.getFinanceData(key);
    if (response.status >= 200 && response.status < 300) {
      commit("setFinanceData", response.data.results);
      return;
    }
    let errorObj = {
      errorStatus: true,
      errorMessage: response.data.message,
    };
    commit("notifications/setErrorNotification", errorObj, { root: true });
  },

  setIsLoading({ commit }, value) {
    commit("setIsLoading", value);
  },
};
