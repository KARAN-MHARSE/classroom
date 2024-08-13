import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  role: null,
  loading: false,
  error: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state, action) => {
      state.loading = true;
    },
    signInFailure: (state, action) => {
      state.loading = false;
      state.error = true;
    },
    signInSuccess: (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
      state.loading = false;
      state.error = false;
    },
  },
});

export const { signInStart, signInFailure, signInSuccess } = userSlice.actions;
export default userSlice.reducer;
