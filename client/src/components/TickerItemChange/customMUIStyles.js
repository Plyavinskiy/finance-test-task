import { makeStyles } from "@mui/styles";
import { PRICE_STATUSES } from "../../constants";

export const useStyles = makeStyles({
  textChange: {
    color: (props) => {
      if (props.priceStatus === PRICE_STATUSES.up) {
        return "#137333";
      }

      if (props.priceStatus === PRICE_STATUSES.down) {
        return "#a50e0e";
      }

      return "rgba(0, 0, 0, 0.87)";
    },
  },
});
