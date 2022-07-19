import Header from "./Header";
import renderWithRedux from "../../helpers/test/renderWithRedux";

describe("Header component", () => {
  it("should render 2 buttons and select field", () => {
    const { getByText, getByLabelText } = renderWithRedux(<Header />, {
      initialState: { tickers: [] },
    });

    const addTickerBtn = getByText(/Add ticker/i);
    const showHiddenTickersBtn = getByText(/Show hidden tickers/i);
    const timeoutSelect = getByLabelText(/Timeout/i);

    expect(addTickerBtn).toBeInTheDocument();
    expect(showHiddenTickersBtn).toBeInTheDocument();
    expect(timeoutSelect).toBeInTheDocument();
  });
});
