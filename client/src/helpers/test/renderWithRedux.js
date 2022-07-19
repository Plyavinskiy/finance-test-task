import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { setupStore, rootReducer } from "../../store/index";

const renderWithRedux = (
  component,
  { initialState, store = setupStore(rootReducer, initialState) } = {},
  containerElement,
) => {
  return {
    ...render(
      <Provider store={store}>{component}</Provider>,
      containerElement && {
        container: document.body.appendChild(containerElement),
      },
    ),
    store,
  };
};

export default renderWithRedux;
