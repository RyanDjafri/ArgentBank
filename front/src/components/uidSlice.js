import { createSlice } from "@reduxjs/toolkit";

const uidSlice = createSlice({
  name: "uid",
  initialState: { token: null },
  reducers: {
    setUidToken: (state, action) => {
      state.token = action.payload;
    },
    clearUidToken: (state) => {
      state.token = null;
    },
  },
});

export const { setUidToken, clearUidToken } = uidSlice.actions;
export default uidSlice.reducer;
