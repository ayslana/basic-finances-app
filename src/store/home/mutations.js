export default {
  setFinanceData(state, response) {
    state.financeData = response;

    var currenciesMapped = Object.keys(response.currencies).map((key) => {
      return response.currencies[key];
    });
    currenciesMapped = currenciesMapped.slice(1);
    state.currencies = currenciesMapped;

    var bitcoinMapped = Object.keys(response.bitcoin).map((key) => {
      return response.bitcoin[key];
    });
    bitcoinMapped = bitcoinMapped.slice(1);

    state.bitcoin = bitcoinMapped;
    state.stocks = response.stocks;
    state.taxes = response.taxes;
  },

  setIsLoading(state, value) {
    state.isLoading = value;
  },
};
