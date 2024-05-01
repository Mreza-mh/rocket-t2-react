import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    token: "d",
  },
  reducers: {
    setUserdata: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setUserdata } = auth.actions;

export default auth.reducer;
