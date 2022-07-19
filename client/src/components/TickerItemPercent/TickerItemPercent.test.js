import { render } from "@testing-library/react";
import TickerItemPercent from "./TickerItemPercent";

describe("TickerItemPercent component", () => {
  test("should render with arrow up icon", () => {
    const mockProps = {
      changePercent: "0",
      priceStatus: "up",
    };

    const { getByTestId } = render(<TickerItemPercent {...mockProps} />);

    const arrowUpIcon = getByTestId("icon-up");

    expect(arrowUpIcon).toBeInTheDocument();
  });

  test("should render with arrow down icon", () => {
    const mockProps = {
      changePercent: "0",
      priceStatus: "down",
    };

    const { getByTestId } = render(<TickerItemPercent {...mockProps} />);

    const arrowDownIcon = getByTestId("icon-down");

    expect(arrowDownIcon).toBeInTheDocument();
  });

  test("should render percentage value", () => {
    const mockProps = {
      changePercent: "23.51",
      priceStatus: "down",
    };

    const { getByText } = render(<TickerItemPercent {...mockProps} />);

    const percentageValue = getByText(/23.51/i);

    expect(percentageValue).toBeInTheDocument();
  });
});
