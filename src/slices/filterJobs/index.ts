import { createSlice, createSelector } from "@reduxjs/toolkit";

import type { RootState } from "src/store/index";

const name = "filterJobs";

export type TypeFilter =
  | "jobTags"
  | "locationTags"
  | "type"
  | "level"
  | "salary";

interface jobType {
  imgUrl: string;
  title: string;
  company: string;
  location: string;
  type: string;
  level: string;
  salary: string;
}

interface filterJobsState {
  filteredJobs: jobType[];
  allJobs: jobType[];
  filters: {
    [key in TypeFilter]: string[];
  };
}

const initialState: filterJobsState = {
  filteredJobs: [],
  allJobs: [],
  filters: {
    jobTags: [],
    locationTags: [],
    type: [],
    level: [],
    salary: [],
  },
};

const modifiedFiltersParameters = (object: string[], type: string) => {
  return object.map((item) => item.toLowerCase().replace(type, ""));
};

const modifiedDataParameters = (data: string) => {
  return data.toLowerCase().replace(/\s/g, "");
};

const filterJobsSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadJobs(state, actions): void {
      state.filteredJobs = actions.payload;
      state.allJobs = actions.payload;
    },
    filterJobs(state, actions): void {
      // const { jobTags, locationTags, type, level, salary } = actions.payload;
      state.filters = { ...state.filters, ...actions.payload };
      // state.filters.jobTags = jobTags;
      // state.filters.locationTags = locationTags;
      // state.filters.type = type;
      // state.filters.level = level;
      // state.filters.salary = salary;

      let temptJobList = state.allJobs;
      if (state.filters.jobTags.length > 0) {
        temptJobList = temptJobList.filter(
          (job) =>
            state.filters.jobTags.includes(job.title) ||
            state.filters.jobTags.includes(job.type) ||
            state.filters.jobTags.includes(job.level)
        );
      }
      if (state.filters.locationTags.length > 0)
        temptJobList = temptJobList.filter((job) =>
          state.filters.locationTags.includes(job.location)
        );
      if (state.filters.type.length > 0) {
        const modifiedFilterTypes = modifiedFiltersParameters(
          state.filters.type,
          "type"
        );
        temptJobList = temptJobList.filter((job) =>
          modifiedFilterTypes.includes(modifiedDataParameters(job.type))
        );
      }
      if (state.filters.level.length > 0) {
        const modifiedFilterTypes = modifiedFiltersParameters(
          state.filters.level,
          "level"
        );
        temptJobList = temptJobList.filter((job) =>
          modifiedFilterTypes.includes(modifiedDataParameters(job.level))
        );
      }
      if (state.filters.salary.length > 0) {
        temptJobList = temptJobList.filter((job) =>
          state.filters.salary.includes(job.salary)
        );
      }
      state.filteredJobs = temptJobList;
    },
  },
});

const selector = (state: RootState) => state[name];

const selectJobsLength = createSelector(
  selector,
  ({ allJobs }) => allJobs.length
);
const selectFilteredJobs = createSelector(
  selector,
  ({ filteredJobs }) => filteredJobs
);
const selectFilteredJobsLength = createSelector(
  selector,
  ({ filteredJobs }) => filteredJobs.length
);

const selectFilters = createSelector(selector, ({ filters }) => filters);

export const filterJobsSelectors = {
  selectFilteredJobs,
  selectFilters,
  selectFilteredJobsLength,
  selectJobsLength,
};

export const filterJobsSliceActions = filterJobsSlice.actions;
export default filterJobsSlice.reducer;
