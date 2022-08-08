import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  userToken: {'token':sessionStorage.getItem('access_token'), timestamp:Date.now()+3600},
  error: null,
  success: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, token) => {
      state.userToken = {'token':token.payload, timestamp:Date.now()+3600};
      sessionStorage.setItem('access_token', token.payload)
    },

  },
  extraReducers: {},
});

export default userSlice.reducer;

export const { setToken, getSessionStorageToken } = userSlice.actions
