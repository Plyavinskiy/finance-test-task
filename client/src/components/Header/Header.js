import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { delayOptions } from "../../constants";
import renderOptions from "../../helpers/renderOptions";
import Modal from "../Modal/Modal";
import "./Header.css";
import useHeader from "./useHeader";

function Header() {
  const {
    setCustomDelay,
    open,
    toggleModal,
    isHiddenTickersExist,
    unhideAllTickers,
  } = useHeader();

  return (
    <>
      <div className="header">
        <Button onClick={toggleModal} variant="contained" size="small">
          Add ticker
        </Button>
        <div className="field">
          <TextField
            label="Timeout"
            variant="outlined"
            select
            onChange={setCustomDelay}
            fullWidth
            defaultValue={1000}
            data-testid="timeout-select"
          >
            {renderOptions(delayOptions)}
          </TextField>
        </div>
        <Button
          variant="contained"
          onClick={unhideAllTickers}
          disabled={!isHiddenTickersExist}
        >
          Show hidden tickers
        </Button>
      </div>
      <Modal open={open} toggleModal={toggleModal} />
    </>
  );
}

export default Header;
