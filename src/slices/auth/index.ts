import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "src/store/index";

const name = "auth";

interface AuthState {
  account: {
    user: string;
  };
}

const initialState: AuthState = {
  account: {
    user: "",
  },
};

const authSlice = createSlice({
  name,
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.account.user = action.payload;
    },
    logout(state) {
      state.account.user = "";
    },
  },
});

const selector = (state: RootState) => state[name];
const selectAccount = createSelector(selector, ({ account }) => account);

export const authSelectors = { selectAccount };

export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
