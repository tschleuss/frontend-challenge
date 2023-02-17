import { SignUpConfirmationPage } from "view/pages/SignUpConfirmationPage";
import { SignUpErrorPage } from "view/pages/SignUpErrorPage";
import { SignUpMoreInfoPage } from "view/pages/SignUpMoreInfoPage";
import { SignUpPage } from "view/pages/SignUpPage";
import { SignUpSuccessPage } from "view/pages/SignUpSuccessPage";
import { createBrowserRouter } from "react-router-dom";
import { SignUpLayout } from "view/layout/SignUpLayout/SignUpLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUpLayout />,
    children: [
      {
        element: <SignUpPage />,
        index: true,
      },
    ],
  },
  {
    path: "/more-info",
    element: <SignUpLayout />,
    children: [
      {
        element: <SignUpMoreInfoPage />,
        index: true,
      },
    ],
  },
  {
    path: "/confirmation",
    element: <SignUpLayout />,
    children: [
      {
        element: <SignUpConfirmationPage />,
        index: true,
      },
    ],
  },
  {
    path: "/success",
    element: <SignUpLayout />,
    children: [
      {
        element: <SignUpSuccessPage />,
        index: true,
      },
    ],
  },
  {
    path: "/error",
    element: <SignUpLayout />,
    children: [
      {
        element: <SignUpErrorPage />,
        index: true,
      },
    ],
  },
]);
