import { HomeRepository } from "@/repositories/HomeRepository";

export default {
  async requestFinanceData({ commit }) {
    const key = "0da8be0b";
    const response = await HomeRepository.getFinanceData(key);
    if (response.status >= 200 && response.status < 300) {
      commit("setFinanceData", response.data.results);
      commit("setCurrencies", response.data.results.currencies);
      commit("setBitcoin", response.data.results.bitcoin);
      commit("setTaxes", response.data.results.taxes[0]);

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
