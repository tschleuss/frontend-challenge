import { router } from "app/router";
import { BaseStyle } from "app/theme/base";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "app/config/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BaseStyle />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
