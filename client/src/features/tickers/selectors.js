export const selectTickersInfo = ({
  tickersReducer: { tickers, hiddenTickersNames },
}) => {
  return tickers.filter(({ ticker }) => {
    return !hiddenTickersNames.includes(ticker);
  });
};

export const selectHiddenTickersLength = ({
  tickersReducer: { hiddenTickersNames },
}) => hiddenTickersNames.length;
