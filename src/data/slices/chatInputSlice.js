import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const chatInputSlice = createSlice({
  name: "chatInput",
  initialState,
  reducers: {
    setChatInput: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setChatInput } = chatInputSlice.actions;

export default chatInputSlice.reducer;
