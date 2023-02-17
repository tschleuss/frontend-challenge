import { screen } from "@testing-library/react";
import { renderUI } from "app/testing/testHelper";
import { SignUpMoreInfoPage } from "./SignUpMoreInfoPage";

describe("SignUpMoreInfoPage", () => {
  it("should load and display page name", () => {
    renderUI(<SignUpMoreInfoPage />);

    expect(screen.getByText("SignUpMoreInfoPage")).toBeVisible();
  });
});
