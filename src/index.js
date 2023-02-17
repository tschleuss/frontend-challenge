import { router } from "app/router";
import { BaseStyle } from "app/theme/base";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BaseStyle />
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById("root")
);
