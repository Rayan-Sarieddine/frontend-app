import { configureStore } from "@reduxjs/toolkit";
import dataReducer, { dataSliceName } from "./Data";

export const store = configureStore({
  reducer: {
    [dataSliceName]: dataReducer,
  },
  devTools: true,
});
