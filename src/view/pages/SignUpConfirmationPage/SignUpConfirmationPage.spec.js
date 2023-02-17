import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpConfirmationPage } from "./SignUpConfirmationPage";

describe("SignUpConfirmationPage", () => {
  it("should load and render correctly", () => {
    renderUI(<SignUpConfirmationPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Confirmation/i })
    ).toBeVisible();
    expect(screen.getByText("First Name:")).toBeVisible();
    expect(screen.getByText("Password:")).toBeVisible();
    expect(screen.getByText("Favorite Color:")).toBeVisible();
    expect(screen.getByText("Terms and Conditions:")).toBeVisible();
    expect(screen.getByRole("button", { name: /Back/i })).toBeVisible();
    expect(screen.getByRole("button", { name: /Next/i })).toBeVisible();
  });
});
