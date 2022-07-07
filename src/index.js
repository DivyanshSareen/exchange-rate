import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { getInitialRates } from "./store/rates";
import "./style.css";

// kick start AJAX call for exchange rates
store.dispatch(getInitialRates);

ReactDOM.render(
  <Provider store={store}>
    <ExchangeRate />
  </Provider>,
  document.getElementById("root")
);
