import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const dataSliceName = "Data";

export const dataSlice = createSlice({
  name: dataSliceName,
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      const { data } = payload;

      return {
        data,
      };
    },
    cleanData: () => {
      return { ...initialState };
    },
  },
});

export const { addData, cleanData } = dataSlice.actions;

export default dataSlice.reducer;
