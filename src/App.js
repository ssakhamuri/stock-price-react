import './App.css';
import React, { useEffect, useState } from 'react';
import Search from "./components/Search";
import Stock from "./components/Stock";
import stockService from "./services/stockService";
import Header from "./components/Header";
import {CircularProgress} from "@material-ui/core";

export default function App() {
  const [stock, setStock] = useState({});
  const [symbolValue, setSymbolValue] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  useEffect(() => {
    if (symbolValue !== undefined) {
      stockService.getStockDetailsBySymbolName(symbolValue, successCallback, failureCallback);
    }
  }, [symbolValue]);

  function successCallback(stock) {
    setStock(stock)
    setLoading(false)
  }

  function failureCallback(error) {
    setErrorMessage("The entered stock symbol is not found.")
    setLoading(false)
    setSymbolValue(undefined)
  }

  function symbol(value) {
    setErrorMessage(undefined)
    setLoading(true)
    setSymbolValue(value)
  }

  function error() {
    setErrorMessage("Missing Required Field..")
  }

  return (
      <div className="App">
        <Header text="Stock Summary" />
        <div className="errorMessage">{errorMessage}</div>
        <Search symbol={symbol} error={error}/>
        <div className="stock">
          {loading && !errorMessage ? (
              <CircularProgress />
          )  : symbolValue ? (<div>
                  <Stock key={stock.symbol} stock={stock}/>
              </div>
          ) : <div></div>}
        </div>
      </div>
  );
}
