import { PRICE_STATUSES } from "../constants";

const updateTicketsMetrics = (currentTickers, previousTickers, index) => {
  const { price } = currentTickers[index];
  const { price: previousTickerPrice } = previousTickers.current[index] || {
    price,
  };

  const change = Math.abs(price - previousTickerPrice).toFixed(2);
  const changePercent = Math.abs(
    ((price - previousTickerPrice) / previousTickerPrice) * 100,
  ).toFixed(2);

  let priceStatus = PRICE_STATUSES.equal;

  if (price > previousTickerPrice) {
    priceStatus = PRICE_STATUSES.up;
  }

  if (price < previousTickerPrice) {
    priceStatus = PRICE_STATUSES.down;
  }

  return { change, changePercent, priceStatus };
};

export default updateTicketsMetrics;
