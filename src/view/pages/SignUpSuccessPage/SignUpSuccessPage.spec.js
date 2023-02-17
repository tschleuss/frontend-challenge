import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpSuccessPage } from "./SignUpSuccessPage";

describe("SignUpSuccessPage", () => {
  it("should load and render correctly", () => {
    renderUI(<SignUpSuccessPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: /Success/i })
    ).toBeVisible();
    expect(
      screen.getByText("You should receive a confirmation email soon.")
    ).toBeVisible();
    expect(screen.getByRole("button", { name: /Restart/i })).toBeVisible();
  });
});
