import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpPage } from "./SignUpPage";

describe("SignUpPage", () => {
  it("should load and render correctly", () => {
    renderUI(<SignUpPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Sign Up/i })
    ).toBeVisible();
    expect(screen.getByText("First Name")).toBeVisible();
    expect(screen.getByText("E-mail")).toBeVisible();
    expect(screen.getByText("Password")).toBeVisible();
    expect(screen.getByRole("button", { name: /Next/i })).toBeVisible();
  });
});
