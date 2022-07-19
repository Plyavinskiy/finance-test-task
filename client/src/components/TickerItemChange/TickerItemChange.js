/* eslint-disable react/jsx-props-no-spreading */
import Typography from "@mui/material/Typography";
import { PRICE_STATUSES } from "../../constants";
import { useStyles } from "./customMUIStyles";

const PRICE_SYMBOLS = {
  [PRICE_STATUSES.equal]: "",
  [PRICE_STATUSES.up]: "+",
  [PRICE_STATUSES.down]: "-",
};

function TickerItemChange(props) {
  const { priceStatus, change } = props;
  const valueTickerItemChange = `${PRICE_SYMBOLS[priceStatus]}${change}`;
  const classes = useStyles(props);

  return (
    <Typography className={classes.textChange} component="span" variant="body1">
      {valueTickerItemChange}
    </Typography>
  );
}

export default TickerItemChange;
