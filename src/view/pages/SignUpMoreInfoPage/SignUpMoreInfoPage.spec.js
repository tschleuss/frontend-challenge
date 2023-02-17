import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpMoreInfoPage } from "./SignUpMoreInfoPage";

describe("SignUpMoreInfoPage", () => {
  it("should load and render correctly", () => {
    renderUI(<SignUpMoreInfoPage />);

    expect(screen.getByText("Additional Info")).toBeVisible();
    expect(screen.getByText("Select your favorite color")).toBeVisible();
    expect(screen.getByText("I agree to Terms and Conditions")).toBeVisible();
    expect(screen.getByRole("button", { name: /Back/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /Next/i })).toBeVisible();
  });
});
