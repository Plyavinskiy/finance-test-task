import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTickersInfo } from "../../features/tickers/selectors";

const useTickersList = () => {
  const currentTickers = useSelector(selectTickersInfo);

  const previousTickers = useRef(currentTickers);

  useEffect(() => {
    previousTickers.current = currentTickers;
  }, [currentTickers]);

  return { currentTickers, previousTickers };
};

export default useTickersList;
