import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderUI } from "app/testing/testHelper";
import { SignUpErrorPage } from "./SignUpErrorPage";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

  it("should redirect user to sign up page upon clicking on Restart", async () => {
    renderUI(<SignUpErrorPage />);

    const user = userEvent.setup();
    await user.click(screen.getByText("Restart"));

    expect(mockUseNavigate).toHaveBeenCalledWith("/");
  });
});
