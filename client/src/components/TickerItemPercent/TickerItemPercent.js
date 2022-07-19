import Typography from "@mui/material/Typography";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useStyles } from "./customMUIStyles";

function TickerItemPercent(props) {
  const { priceStatus, changePercent } = props;
  const classes = useStyles(props);

  return (
    <div className={classes.pctWrap}>
      <div className={classes.pctInner}>
        {priceStatus === "up" && (
          <ArrowUpwardIcon data-testid="icon-up" fontSize="small" />
        )}
        {priceStatus === "down" && (
          <ArrowDownwardIcon data-testid="icon-down" fontSize="small" />
        )}
        <Typography component="span" variant="body1">
          {`${changePercent}\u00A0%`}
        </Typography>
      </div>
    </div>
  );
}

export default TickerItemPercent;
