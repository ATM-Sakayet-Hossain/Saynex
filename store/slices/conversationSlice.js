import { createSlice } from "@reduxjs/toolkit";

export const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    friend: null,
    group: null,
  },
  reducers: {
    userConversation: (state, actions) => {
      state.friend = actions.payload;
    },
    selectGroup: (state, actions) => {
      state.group = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userConversation, selectGroup } = conversationSlice.actions;

export default conversationSlice.reducer;
