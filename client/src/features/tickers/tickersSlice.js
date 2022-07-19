/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickers: [],
  hiddenTickersNames: [],
};

export const tickersSlice = createSlice({
  name: "tickers",
  initialState,
  reducers: {
    setQuotes: (state, action) => {
      state.tickers = action.payload;
    },
    hideQuote: (state, action) => {
      state.hiddenTickersNames = [...state.hiddenTickersNames, action.payload];
    },
    unhideQuotes: (state) => {
      state.hiddenTickersNames = [];
    },
  },
});

export const { setQuotes, hideQuote, unhideQuotes } = tickersSlice.actions;
export default tickersSlice.reducer;
