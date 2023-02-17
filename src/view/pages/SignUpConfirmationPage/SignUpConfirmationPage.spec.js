import { screen } from "@testing-library/react"
import { renderUI } from "app/testing/testHelper";
import { SignUpConfirmationPage } from "./SignUpConfirmationPage"

describe("SignUpConfirmationPage", () => {
  it("should load and display page name", () => {
    renderUI(<SignUpConfirmationPage />);

    expect(screen.getByText("SignUpConfirmationPage")).toBeVisible();
  });
});
