import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpPage } from "./SignUpPage";

describe("SignUpPage", () => {
  it("should load and display page name", () => {
    renderUI(<SignUpPage />);

    expect(screen.getByText("SignUpPage")).toBeVisible();
  });
});
