import { configureStore } from "@reduxjs/toolkit";

// Import Reducers
import chatInputReducer from "./slices/chatInputSlice";
import chatLogReducer from "./slices/chatLogSlice";

export const store = configureStore({
  reducer: {
    chatInput: chatInputReducer,
    chatLog: chatLogReducer,
  },
});
