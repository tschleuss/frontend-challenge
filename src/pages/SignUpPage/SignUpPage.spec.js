import { render, screen } from "@testing-library/react";
import { SignUpPage } from "./SignUpPage";

describe("SignUpPage", () => {
  it("should load and display page name", () => {
    render(<SignUpPage />);

    expect(screen.getByText("SignUpPage")).toBeVisible();
  });
});
