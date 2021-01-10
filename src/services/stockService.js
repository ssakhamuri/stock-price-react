import axios from 'axios';

const stockService = {};

stockService.GET_STOCK_BY_SYMBOL_PATH = "https://sandbox.iexapis.com/stable/stock/";

stockService.getStockDetailsBySymbolName = function (symbolName, successCallback, failureCallback) {
  axios.get(stockService.GET_STOCK_BY_SYMBOL_PATH + symbolName + "/quote",
      {params: {token: process.env.REACT_APP_STOCK_API_TOKEN}})
      .then((result) => {
        successCallback(result.data);
      })
      .catch(error => {
        failureCallback(error.response);
      });
}

export default stockService;