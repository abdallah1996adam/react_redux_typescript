import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./state";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Provider store={store.store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
