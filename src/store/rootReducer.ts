import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "src/slices/auth";
import boardReducer from "src/slices/board";
import filterJobsReducer from "src/slices/filterJobs";

export default combineReducers({
  auth: authReducer,
  board: boardReducer,
  filterJobs: filterJobsReducer,
});
