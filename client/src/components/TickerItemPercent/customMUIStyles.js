import { makeStyles } from "@mui/styles";
import { PRICE_STATUSES } from "../../constants";

export const useStyles = makeStyles({
  pctWrap: {
    display: "inline-block",
    paddingTop: "4px",
  },

  pctInner: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    borderRadius: "8px",
    width: "min-content",

    color: (props) => {
      if (props.priceStatus === PRICE_STATUSES.up) {
        return "#137333";
      }

      if (props.priceStatus === PRICE_STATUSES.down) {
        return "#a50e0e";
      }

      return "rgba(0, 0, 0, 0.87)";
    },

    background: (props) => {
      if (props.priceStatus === PRICE_STATUSES.up) {
        return "#e6f4ea";
      }

      if (props.priceStatus === PRICE_STATUSES.down) {
        return "#fce8e6";
      }

      return "transparent";
    },
  },
});
