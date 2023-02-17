import { render, screen } from "@testing-library/react"
import { SignUpErrorPage } from "./SignUpErrorPage"

describe("SignUpErrorPage", () => {
  it("should load and display page name", () => {
    render(<SignUpErrorPage />);

    expect(screen.getByText("SignUpErrorPage")).toBeVisible();
  });
});
