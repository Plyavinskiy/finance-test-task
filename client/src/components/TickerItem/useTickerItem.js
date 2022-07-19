import { useDispatch } from "react-redux";
import { hideQuote } from "../../features/tickers/tickersSlice";
import socket from "../../api";

const useTickerItem = (name) => {
  const dispatch = useDispatch();

  const handleTableCellClick = (name) => {
    socket.emit("delete ticker", name);
  };

  const handleHideItem = (selectedTicker) => {
    dispatch(hideQuote(selectedTicker));
  };

  const lowerCaseTicker = name ? name.toLowerCase() : "";

  return { handleTableCellClick, handleHideItem, lowerCaseTicker };
};

export default useTickerItem;
