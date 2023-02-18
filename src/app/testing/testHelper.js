import { render } from "@testing-library/react";
import { setupStore } from "app/config/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

const generateTestContext = (options) => {
  const route = options.route ?? "/";
  const reduxState = options.reduxState;
  const store = setupStore(reduxState);
  const routerOptions = options.router ?? { initialEntries: [route] };

  return { routerOptions, store };
};

const renderProviders = (component, routerOptions, store) => (
  <Provider store={store}>
    <MemoryRouter {...routerOptions}>{component}</MemoryRouter>
  </Provider>
);

export const renderUI = (component, options = {}) => {
  const { routerOptions, store } = generateTestContext(options);
  const rendered = render(renderProviders(component, routerOptions, store));
  return { rendered, store };
};
