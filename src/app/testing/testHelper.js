import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const generateTestContext = (options) => {
  const route = options.route ?? "/";
  const routerOptions = options.router ?? { initialEntries: [route] };
  return { routerOptions };
};

const renderProviders = (component, routerOptions) => (
  <MemoryRouter {...routerOptions}>{component}</MemoryRouter>
);

export const renderUI = (component, options = {}) => {
  const { routerOptions } = generateTestContext(options);
  const rendered = render(renderProviders(component, routerOptions));
  return { rendered, history };
};
