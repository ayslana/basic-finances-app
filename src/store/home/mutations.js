export default {
  setFinanceData(state, response) {
    state.financeData = response;
  },

  setBitcoin(state, response) {
    var bitcoinMapped = Object.keys(response).map((key) => {
      return response[key];
    });
    bitcoinMapped = bitcoinMapped.slice(1);

    state.bitcoin = bitcoinMapped;
  },

  setCurrencies(state, response) {
    var currenciesMapped = Object.keys(response).map((key) => {
      return response[key];
    });
    currenciesMapped = currenciesMapped.slice(1);
    state.currencies = currenciesMapped;
  },

  setTaxes(state, response) {
    delete response.date;
    const replacements = {
      cdi: "CDI",
      cdi_daily: "CDI Diária",
      daily_factor: "Fator Diário",
      selic: "SELIC",
      selic_daily: "SELIC Diária",
    };
    let replacedObj = Object.keys(response).map((key) => {
      const newKey = replacements[key] || key;
      return { [newKey]: response[key] };
    });

    state.taxes = replacedObj;
  },

  setIsLoading(state, value) {
    state.isLoading = value;
  },
};
