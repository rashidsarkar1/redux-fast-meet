import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment,
  },
});

export default counterSlice.reducer;
