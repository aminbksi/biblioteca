import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserHistory } from "history";
import "./index.css";
import { App } from "scenes";
import { GlobalStyles } from "./scenes/App.styled";
import { RootStore } from "stores";
import { StoreProvider } from "shared/hooks/useStore";

/**
 * init rootStore and pass dependencies
 * https://mobx-state-tree.js.org/concepts/dependency-injection
 */
const history = createBrowserHistory({});
const rootStore = RootStore.create({}, { history });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <GlobalStyles />
      <App />
    </StoreProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
