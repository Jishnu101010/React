import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    setUserFromLocalStorage: (state) => {
      const user = localStorage.getItem("user");
      state.user = user ? JSON.parse(user) : null;
    }
  }
});

export const { setUser, removeUser, setUserFromLocalStorage } =
  authSlice.actions;

export default authSlice.reducer;
