import { render, screen } from "@testing-library/react";
import { SignUpMoreInfoPage } from "./SignUpMoreInfoPage";

describe("SignUpMoreInfoPage", () => {
  it("should load and display page name", () => {
    render(<SignUpMoreInfoPage />);

    expect(screen.getByText("SignUpMoreInfoPage")).toBeVisible();
  });
});
