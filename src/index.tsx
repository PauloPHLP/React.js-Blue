import ReactDOM from "react-dom";
import React from "react";

import CustomRouter from "customRouter";
import history from "./_shared/history";
import App from "./App";
import "./externalComponents";
import "./index.css";

declare global {
  interface Window {
    mountBlue: Function;
    unmountBlue: Function;
  }
}

window.mountBlue = (containerId: string) => {
  ReactDOM.render(
    <React.StrictMode>
      <CustomRouter history={history}>
        <App />
      </CustomRouter>
    </React.StrictMode>,
    document.getElementById(containerId)
  );
};

window.unmountBlue = (containerId: string) => {
  const container = document.getElementById(containerId);

  if (container) ReactDOM.unmountComponentAtNode(container);
};
