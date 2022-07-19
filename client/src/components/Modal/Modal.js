import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal as MuiModal } from "@mui/material";
import "./Modal.css";
import TextField from "@mui/material/TextField";
import useAddNewTicker from "./useAddNewTicker";

function Modal({ open, toggleModal }) {
  const { handleChangeName, handleSaveTicker, isSaveButtonDisabled, name } =
    useAddNewTicker(toggleModal);

  return (
    <MuiModal open={open} onClose={toggleModal}>
      <Box className="modal">
        <Typography variant="h6" component="h2">
          Enter ticker name
        </Typography>
        <TextField
          label="Name"
          value={name}
          onChange={handleChangeName}
          variant="outlined"
          inputProps={{ maxLength: 5 }}
        />
        <Button
          data-testid="save-ticker"
          onClick={handleSaveTicker}
          variant="contained"
          disabled={isSaveButtonDisabled}
        >
          Save ticker
        </Button>
      </Box>
    </MuiModal>
  );
}

export default Modal;
