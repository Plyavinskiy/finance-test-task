import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import TickerItemChange from "../TickerItemChange/TickerItemChange";
import TickerItemPercent from "../TickerItemPercent/TickerItemPercent";
import convertDate from "../../helpers/convertDate";
import { useStyles } from "./customMUIStyles";
import { TICKERS_NAMES } from "../../constants";
import useTickerItem from "./useTickerItem";

function TickerItem({ name, price, change, priceStatus, changePercent, date }) {
  const classes = useStyles();

  const { handleTableCellClick, handleHideItem, lowerCaseTicker } =
    useTickerItem(name);

  return (
    <TableRow className={classes.tableRow}>
      <TableCell className={classes.tableCell}>
        <div className={`${classes[lowerCaseTicker]} ${classes.ticker}`}>
          {name}
        </div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography component="span" variant="body1">
          {TICKERS_NAMES[name]}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography component="span" variant="body1">
          {`${price}\u00A0$`}
        </Typography>
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableCellRight}`}>
        <TickerItemChange change={change} priceStatus={priceStatus} />
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableCellRight}`}>
        <TickerItemPercent
          priceStatus={priceStatus}
          changePercent={changePercent}
        />
      </TableCell>
      <TableCell className={classes.tableCell}>{convertDate(date)}</TableCell>
      <TableCell className={classes.tableCell}>
        <Chip
          className={classes.hideChip}
          label="Hide"
          variant="outlined"
          onClick={() => handleHideItem(name)}
        />
      </TableCell>
      <TableCell className={`${classes.tableCell} ${classes.tableCellDelete}`}>
        <Chip
          className={classes.deleteChip}
          onDelete={() => handleTableCellClick(name)}
        />
      </TableCell>
    </TableRow>
  );
}

export default TickerItem;
