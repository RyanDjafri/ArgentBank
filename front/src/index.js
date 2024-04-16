import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./components/reducers/index";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
