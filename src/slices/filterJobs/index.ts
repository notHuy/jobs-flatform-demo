import { createSlice, createSelector } from "@reduxjs/toolkit";

import type { RootState } from "src/store/index";

const name = "filterJobs";

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
    jobTags: string[];
    locationTags: string[];
    type: string[];
    level: string[];
    salary: string[];
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
const filterJobsSlice = createSlice({
  name,
  initialState,
  reducers: {
    loadJobs(state, actions): void {
      state.filteredJobs = actions.payload;
      state.allJobs = actions.payload;
    },
    filterJobs(state, actions): void {
      const { jobTags, locationTags, type, level, salary } = actions.payload;
      state.filters.jobTags = jobTags;
      state.filters.locationTags = locationTags;
      state.filters.type = type;
      state.filters.level = level;
      state.filters.salary = salary;

      let temptJobList = state.allJobs;
      if (jobTags.length > 0) {
        temptJobList = temptJobList.filter(
          (job) =>
            jobTags.includes(job.title) ||
            jobTags.includes(job.type) ||
            jobTags.includes(job.level)
        );
      }
      if (locationTags.length > 0)
        temptJobList = temptJobList.filter((job) =>
          locationTags.includes(job.location)
        );
      if (type.length > 0) {
        temptJobList = temptJobList.filter((job) => type.includes(job.type));
      }
      if (level.length > 0) {
        temptJobList = temptJobList.filter((job) => level.includes(job.level));
      }
      if (salary.length > 0) {
        temptJobList = temptJobList.filter((job) =>
          salary.includes(job.salary)
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
