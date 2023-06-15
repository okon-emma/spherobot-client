import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const chatLogSlice = createSlice({
  name: "chatLog",
  initialState,
  reducers: {
    setChatLog: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChatLog } = chatLogSlice.actions;

export default chatLogSlice.reducer;
