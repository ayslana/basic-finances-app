export default {
  setFinanceData(state, response) {
    state.financeData = response;
    var currenciesMapped = Object.keys(response.currencies).map((key) => {
      return response.currencies[key];
    });
    currenciesMapped = currenciesMapped.slice(1);
    state.currencies = currenciesMapped;
    state.bitcoin = response.bitcoin;
    state.stocks = response.stocks;
  },

  setIsLoading(state, value) {
    state.isLoading = value;
  },
};
