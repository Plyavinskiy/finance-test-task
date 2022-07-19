import { useEffect } from "react";
import { useDispatch } from "react-redux";
import socket from "../api";
import { setQuotes } from "../features/tickers/tickersSlice";

const useSocket = () => {
  const dispatch = useDispatch();

  const setCustomDelay = ({ target: { value } }) => {
    socket.emit("change interval", value);
  };

  useEffect(() => {
    socket.emit("start");
    socket.on("ticker", (quotes) => {
      dispatch(setQuotes(quotes));
    });
    return () => {
      socket.disconnect();
    };
  }, [dispatch]);

  return { setCustomDelay };
};

export default useSocket;
