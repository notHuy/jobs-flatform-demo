import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";

import { jobData } from "src/data/data";
import type { RootState } from "src/store/index";

const name = "board";

interface boardState {
  pagination: {
    page: number;
    rowsPerPage: number;
  };
  allJobs: {
    imgUrl: string;
    title: string;
    company: string;
    location: string;
    type: string;
    level: string;
  }[];
}

const initialState: boardState = {
  pagination: {
    page: 0,
    rowsPerPage: 10,
  },
  allJobs: [],
};

const boardSlice = createSlice({
  name,
  initialState,
  reducers: {
    getAllJobs: (state) => {
      state.allJobs = jobData;
    },
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setRowsPerPage: (state, action) => {
      state.pagination.rowsPerPage = action.payload;
    },
  },
});

const selector = (state: RootState) => state[name];
const selectPage = createSelector(
  selector,
  ({ pagination }) => pagination.page
);
const selectRowsPerPage = createSelector(
  selector,
  ({ pagination }) => pagination.rowsPerPage
);
const selectAllJobs = createSelector(selector, ({ allJobs }) => allJobs);
export const boardSelectors = { selectPage, selectRowsPerPage, selectAllJobs };

export const boardSliceActions = boardSlice.actions;
export default boardSlice.reducer;
