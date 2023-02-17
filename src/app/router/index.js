import { SignUpConfirmationPage } from "pages/SignUpConfirmationPage";
import { SignUpErrorPage } from "pages/SignUpErrorPage";
import { SignUpMoreInfoPage } from "pages/SignUpMoreInfoPage";
import { SignUpPage } from "pages/SignUpPage";
import { SignUpSuccessPage } from "pages/SignUpSuccessPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpPage />,
  },
  {
    path: "/more-info",
    element: <SignUpMoreInfoPage />,
  },
  {
    path: "/confirmation",
    element: <SignUpConfirmationPage />,
  },
  {
    path: "/success",
    element: <SignUpSuccessPage />,
  },
  {
    path: "/error",
    element: <SignUpErrorPage />,
  },
]);
