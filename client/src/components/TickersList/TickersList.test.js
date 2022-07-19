import TickersList from "./TickersList";
import renderWithRedux from "../../helpers/test/renderWithRedux";
import { setQuotes } from "../../features/tickers/tickersSlice";

describe("TickerList component", () => {
  test("should render loader", () => {
    const { getByTestId } = renderWithRedux(<TickersList />, {
      initialState: { tickers: [] },
    });

    const loader = getByTestId("loader");

    expect(loader).toBeInTheDocument();
  });

  test("should render table", () => {
    const { store, getByTestId } = renderWithRedux(<TickersList />, {
      initialState: {
        tickers: [],
      },
    });

    store.dispatch(
      setQuotes([
        {
          ticker: "AAPL",
          exchange: "NASDAQ",
          price: "157.09",
          change: "191.50",
          change_percent: "0.01",
          dividend: "0.07",
          yield: "0.26",
          last_trade_time: "2022-07-17T07:16:55.000Z",
        },
      ]),
    );

    const table = getByTestId("table");

    expect(table).toBeInTheDocument();
  });
});
