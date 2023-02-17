import { render, screen } from "@testing-library/react"
import { SignUpConfirmationPage } from "./SignUpConfirmationPage"

describe("SignUpConfirmationPage", () => {
  it("should load and display page name", () => {
    render(<SignUpConfirmationPage />);

    expect(screen.getByText("SignUpConfirmationPage")).toBeVisible();
  });
});
