import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  tableRow: {
    "&:last-child td": {
      borderBottom: 0,
    },
  },

  ticker: {
    width: "60px",
    height: "22px",
    display: "flex",
    letterSpacing: ".07272727em",
    fontSize: ".6875rem",
    lineHeight: "1rem",
    textTransform: "uppercase",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "black",
    borderRadius: "4px",
    margin: "0",
  },

  aapl: {
    background: "rgba(0, 0, 0, 0.4)",
  },

  googl: {
    background: "rgba(60, 186, 84, 0.8)",
  },

  msft: {
    background: "rgba(242, 80, 34, 0.8)",
  },

  amzn: {
    background: "rgba(255, 153, 0, 0.8)",
  },

  fb: {
    background: "rgba(66, 103, 178, 0.8)",
  },

  tsla: {
    background: "rgba(232, 33, 39, 0.8)",
  },

  tableCell: {
    padding: "10px 15px 10px 15px",
  },

  tableCellRight: {
    textAlign: "right",
  },

  tableCellDelete: {
    "&:last-child span": {
      padding: 0,
    },

    "&:last-child svg": {
      width: "30px",
      height: "30px",
      display: "block",
      margin: 0,
    },
  },

  hideChip: {
    fontSize: "inherit",
  },

  deleteChip: {
    display: "contents",
  },
});
