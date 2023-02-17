import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpErrorPage } from "./SignUpErrorPage";

describe("SignUpErrorPage", () => {
  it("should load and render correctly", () => {
    renderUI(<SignUpErrorPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Error/i })
    ).toBeVisible();
    expect(
      screen.getByText("Uh oh, something went wrong. Please try again later")
    ).toBeVisible();
    expect(screen.getByRole("button", { name: /Restart/i })).toBeVisible();
  });
});
