import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

import { Box, Paper, Autocomplete, TextField, Divider } from "src/components";
import { SearchIcon } from "src/components/Icon";
import { jobTags, locationTags } from "src/data/data";
import {
  filterJobsSliceActions,
  filterJobsSelectors,
} from "src/slices/filterJobs";
import { useAppDispatch } from "src/types/redux";

const SearchHeaderBar: React.FC = () => {
  const DividerWrapper = styled(Divider)(
    () => `
            &{
              background: rgba(34, 51, 84, 0.1);
            //   color: rgb(34, 51, 84);
               margin: 18px;
              width: 1px;
              }
            `
  );

  const dispatch = useAppDispatch();
  const filters = useSelector(filterJobsSelectors.selectFilters);
  console.log(filters);
  const handleSearchJobTagsChange = (
    event: any,
    value: { id: string; tagName: string }[]
  ) => {
    const mappedJobTags = value.map((tag) => tag.tagName);
    dispatch(
      filterJobsSliceActions.filterJobs({
        jobTags: mappedJobTags,
        locationTags: filters.locationTags,
        type: filters.type,
        salary: filters.salary,
        level: filters.level,
      })
    );
  };
  const handleSearchLocationTagsChange = (
    event: any,
    value: { id: string; tagName: string }[]
  ) => {
    const mappedLocationTags = value.map((tag) => tag.tagName);
    dispatch(
      filterJobsSliceActions.filterJobs({
        locationTags: mappedLocationTags,
        jobTags: filters.jobTags,
        type: filters.type,
        salary: filters.salary,
        level: filters.level,
      })
    );
  };

  return (
    <Paper
      sx={{ borderRadius: "1rem" }}
      className="board__searchHeaderContainer custom-paper-elevation"
    >
      <SearchIcon className="board__searchIcon" />
      <Box className="board__searchHeaderAutoCompleteContainer">
        <Autocomplete
          className="board__searchHeaderAutoComplete"
          multiple
          id="tags-outlined"
          options={jobTags}
          getOptionLabel={(option) => option.tagName}
          // defaultValue={[jobTags[1]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField {...params} label="Job Tags" placeholder="Job" />
          )}
          onChange={handleSearchJobTagsChange}
        />
        <DividerWrapper
          variant="fullWidth"
          orientation="vertical"
          //   flexItem
        />
        <Autocomplete
          className="board__searchHeaderAutoComplete"
          multiple
          id="tags-outlined"
          options={locationTags}
          getOptionLabel={(option) => option.tagName}
          // defaultValue={[locationTags[1]]}
          filterSelectedOptions
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location tags"
              placeholder="Location"
            />
          )}
          onChange={handleSearchLocationTagsChange}
        />
      </Box>
    </Paper>
  );
};

export default SearchHeaderBar;
