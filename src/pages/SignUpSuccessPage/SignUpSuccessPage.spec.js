import { render, screen } from "@testing-library/react";
import { SignUpSuccessPage } from "./SignUpSuccessPage";

describe("SignUpSuccessPage", () => {
  it("should load and display page name", () => {
    render(<SignUpSuccessPage />);

    expect(screen.getByText("SignUpSuccessPage")).toBeVisible();
  });
});
