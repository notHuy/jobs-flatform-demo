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

const DividerWrapper = styled(Divider)(
  () => `
          &{
            color: rgb(34, 51, 84);
            margin: 0px 18px;
            width: 1px;
            height: 53px;
            }
          `
);
const AutocompleteWrapper = styled(Autocomplete)(
  () => `
        &{
          .MuiAutocomplete-popper{
            color: red;
          }
        }
          `
);

const SearchHeaderBar: React.FC = () => {
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
          componentsProps={{
            popper: {
              className: "board__searchHeaderAutoCompletePopper",
            },
          }}
          onChange={handleSearchJobTagsChange}
          renderInput={(params) => (
            <TextField {...params} label="Job Tags" placeholder="Job" />
          )}
        />
        <Divider
          variant="fullWidth"
          orientation="vertical"
          className="board__searchHeaderDivider"
        />
        <Autocomplete
          className="board__searchHeaderAutoComplete"
          multiple
          id="tags-outlined"
          options={locationTags}
          getOptionLabel={(option) => option.tagName}
          // defaultValue={[locationTags[1]]}
          filterSelectedOptions
          componentsProps={{
            popper: {
              className: "board__searchHeaderAutoCompletePopper",
            },
          }}
          onChange={handleSearchLocationTagsChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Location tags"
              placeholder="Location"
            />
          )}
        />
      </Box>
    </Paper>
  );
};

export default SearchHeaderBar;
