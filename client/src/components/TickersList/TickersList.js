/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
// import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
// import TableRow from "@mui/material/TableRow";
// import TableCell from "@mui/material/TableCell";

import CircularProgress from "@mui/material/CircularProgress";
import { useStyles } from "./customMUIStyles";
// import { PRICE_STATUSES } from "../../constants";
import TickerItem from "../TickerItem/TickerItem";
import updateTicketsMetrics from "../../helpers/updateTicketsMetrics";
import useTickersList from "./useTickersList";

function TickersList() {
  const classes = useStyles();

  const { currentTickers, previousTickers } = useTickersList();

  return (
    <>
      {!currentTickers.length ? (
        <CircularProgress data-testid="loader" size={80} />
      ) : (
        <Paper className={classes.paper}>
          <Table data-testid="table" className={classes.table}>
            <TableBody role="rowgroup">
              {currentTickers.map((row, index) => {
                const { ticker, price, last_trade_time } = row;

                const { change, priceStatus, changePercent } =
                  updateTicketsMetrics(currentTickers, previousTickers, index);

                return (
                  <TickerItem
                    {...{
                      name: ticker,
                      change,
                      priceStatus,
                      price,
                      changePercent,
                      date: last_trade_time,
                    }}
                    key={ticker}
                  />
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      )}
    </>
  );
}

export default TickersList;
