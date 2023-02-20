import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderUI } from "app/testing/testHelper";
import { SignUpPage } from "./SignUpPage";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

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

  it("should prevent submit when required fields are not informed", async () => {
    renderUI(<SignUpPage />);

    const user = userEvent.setup();
    await user.click(screen.getByText("Next"));

    expect(screen.getAllByText("This field is required")).toHaveLength(3);
    screen.getAllByText("This field is required").forEach((element) => {
      expect(element).toBeVisible();
    });
    expect(mockUseNavigate).not.toHaveBeenCalled();
  });

  it("should redirect user to more info page when all required fields are informed", async () => {
    renderUI(<SignUpPage />);

    const user = userEvent.setup();

    const nameField = screen.getByPlaceholderText("First Name");
    const emailField = screen.getByPlaceholderText("Email Address");
    const passwordField = screen.getByPlaceholderText("Password");

    nameField.focus();
    await user.paste("John Doe");

    emailField.focus();
    await user.paste("john_doe@domain.com");

    passwordField.focus();
    await user.paste("123456789");

    await user.click(screen.getByText("Next"));

    expect(mockUseNavigate).toHaveBeenCalledWith("/more-info");
  });
});
