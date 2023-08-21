import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

import "./assets/restyle.css"
import "./assets/base.css"
import "./assets/font.css"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter future={{ v7_startTransition: true }}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
