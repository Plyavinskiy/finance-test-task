import { render } from "@testing-library/react";
import TickerItemChange from "./TickerItemChange";

describe("TickerItemChange component", () => {
  test("render change value with +", () => {
    const mockProps = {
      priceStatus: "up",
      change: "5",
    };

    const { getByText } = render(<TickerItemChange {...mockProps} />);

    const plusSign = getByText(/\+5/i);

    expect(plusSign).toBeInTheDocument();
  });

  test("should render change value with -", () => {
    const mockProps = {
      priceStatus: "down",
      change: "5",
    };

    const { getByText } = render(<TickerItemChange {...mockProps} />);

    const minusSign = getByText(/-5/i);

    expect(minusSign).toBeInTheDocument();
  });
});
