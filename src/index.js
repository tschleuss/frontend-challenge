import { router } from "app/router";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  document.getElementById("root")
);
