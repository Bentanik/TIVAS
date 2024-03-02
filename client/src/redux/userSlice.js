import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetching: false,
  data: null,
  error: "",
};

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    getUserStart: (state) => {
      state.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.data = action.payload;
      state.error = "";
    },
    getUserError: (state, action) => {
      state.isFetching = false;
      state.data = null;
      state.error = action.payload;
    },
  },
});

export const { getUserStart, getUserSuccess, getUserError } = userSlice.actions;

export default userSlice.reducer;
