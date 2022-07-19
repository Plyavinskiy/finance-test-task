import App from "./App";
import renderWithRedux from "./helpers/test/renderWithRedux";

test("should render app wrapper", () => {
  const { getByTestId } = renderWithRedux(<App />, {
    initialState: { tickers: [] },
  });

  const appWrapper = getByTestId(/app-wrapper/i);
  expect(appWrapper).toBeInTheDocument();
});
