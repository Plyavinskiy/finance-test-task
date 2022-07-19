import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSocket from "../../hooks/useSocket";
import { unhideQuotes } from "../../features/tickers/tickersSlice";
import { selectHiddenTickersLength } from "../../features/tickers/selectors";

const useHeader = () => {
  const { setCustomDelay } = useSocket();

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const dispatch = useDispatch();
  const isHiddenTickersExist = useSelector(selectHiddenTickersLength);

  const unhideAllTickers = () => {
    dispatch(unhideQuotes());
  };

  return {
    setCustomDelay,
    open,
    toggleModal,
    isHiddenTickersExist,
    unhideAllTickers,
  };
};

export default useHeader;
