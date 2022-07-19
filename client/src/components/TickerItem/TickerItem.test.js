import TickerItem from "./TickerItem";
import renderWithRedux from "../../helpers/test/renderWithRedux";

describe("TickerItem component", () => {
  test("should render table row with data", () => {
    const mockProps = {
      name: "AAPL",
      price: "260.80",
      change: "125.38",
      priceStatus: "down",
      changePercent: "11.57",
      date: "2022-07-17T06:36:50.000Z",
    };

    const tbody = document.createElement("tbody");

    const { getByText } = renderWithRedux(
      <TickerItem {...mockProps} />,
      {
        initialState: { tickers: [] },
      },
      tbody,
    );

    expect(getByText(/AAPL/i)).toBeInTheDocument();
    expect(getByText(/260.80/i)).toBeInTheDocument();
    expect(getByText(/125.38/i)).toBeInTheDocument();
    expect(getByText(/11.57/i)).toBeInTheDocument();
  });
});
