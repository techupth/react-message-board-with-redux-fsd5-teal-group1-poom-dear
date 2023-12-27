// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      state = [...state, action.payload];
      return state;
    },
    deleteMessage: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);

      return state;
    },
  },
});

export const { addMessage, deleteMessage } = messageSlice.actions;
export default messageSlice.reducer;
