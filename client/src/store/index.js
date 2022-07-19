import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tickersReducer from "../features/tickers/tickersSlice";

export const rootReducer = combineReducers({
  tickersReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
