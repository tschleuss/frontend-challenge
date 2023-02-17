import { screen } from "@testing-library/react"
import { renderUI } from "app/testing/testHelper";
import { SignUpErrorPage } from "./SignUpErrorPage"

describe("SignUpErrorPage", () => {
  it("should load and display page name", () => {
    renderUI(<SignUpErrorPage />);

    expect(screen.getByText("SignUpErrorPage")).toBeVisible();
  });
});
