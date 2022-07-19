import { useState } from "react";
import socket from "../../api";

const useAddNewTicker = (toggleModal) => {
  const [name, setName] = useState("");

  const isSaveButtonDisabled = !name.length;

  const handleChangeName = ({target}) => {
    setName(target.value);
  };

  const handleSaveTicker = () => {
    socket.emit("add a ticker", name);
    setName("");
    toggleModal();
  };

  return { handleChangeName, handleSaveTicker, isSaveButtonDisabled, name };
};

export default useAddNewTicker;
