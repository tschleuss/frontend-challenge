import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpSuccessPage } from "./SignUpSuccessPage";

describe("SignUpSuccessPage", () => {
  it("should load and display page name", () => {
    renderUI(<SignUpSuccessPage />);

    expect(screen.getByText("SignUpSuccessPage")).toBeVisible();
  });
});
