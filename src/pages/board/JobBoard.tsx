import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";

import JobSurvey from "./JobSurvey";

import {
  Box,
  Grid,
  Paper,
  Avatar,
  IconButton,
  Typography,
  Chip,
  Divider,
  Button,
} from "src/components";
import { MoreVertIcon } from "src/components/Icon";
import { boardSelectors } from "src/slices/board";
import { boardSliceActions } from "src/slices/board";
import {
  filterJobsSliceActions,
  filterJobsSelectors,
} from "src/slices/filterJobs";
import { useAppDispatch } from "src/types/redux";

const PaperWrapper = styled(Paper)(
  () => `
          &{
              border-radius:10px;
              }
          `
);

const JobBoard: React.FC = () => {
  const isFirstRun = useRef(true);
  const [retrievedFilteredData, setRetrievedFilteredData] = useState({});
  const dispatch = useAppDispatch();
  const page = useSelector(boardSelectors.selectPage);
  const rowsPerPage = useSelector(boardSelectors.selectRowsPerPage);
  const data = useSelector(boardSelectors.selectAllJobs);
  const filteredJobs = useSelector(filterJobsSelectors.selectFilteredJobs);

  useEffect(() => {
    dispatch(boardSliceActions.getAllJobs());
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    dispatch(filterJobsSliceActions.filterJobs(retrievedFilteredData));
  }, [retrievedFilteredData]);

  useEffect(() => {
    dispatch(filterJobsSliceActions.loadJobs(data));
  }, [data]);

  return (
    <>
      <Box></Box>
      <Grid
        container
        spacing={2}
        className="board__gridItem__jobBoardContainer"
      >
        <JobSurvey />
        {filteredJobs
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((item) => (
            <Grid item xs={12} md={6} className="jobboard__item">
              <PaperWrapper className="jobboard__itemContainer custom-paper-elevation">
                <Box p={3} className="jobboard__item__head">
                  <Avatar
                    variant="square"
                    src={item.imgUrl}
                    sx={{ width: 108, height: 108, borderRadius: "10px" }}
                  />
                  <IconButton
                    aria-label="delete"
                    size="small"
                    className="jobboard__item__headIcon"
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Box>
                <Box className="jobboard__item__content">
                  <Typography
                    variant="h6"
                    className="jobboard__item__contentTitle"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    mt={0.5}
                    className="jobboard__item__contentCompany"
                  >
                    {item.company}
                  </Typography>
                  <Typography className="jobboard__item__contentLocation">
                    {item.location}
                  </Typography>
                </Box>
                <Box
                  pl={3}
                  pr={3}
                  pt={1}
                  pb={1}
                  className="jobboard__item__tags"
                >
                  <Chip
                    label={item.type}
                    className="jobboard__item__tagsLabel"
                  />
                  <Chip
                    label={item.level}
                    sx={{ fontWeight: "bold" }}
                    className="jobboard__item__tagsLabel"
                  />
                </Box>
                <Divider variant="fullWidth" />
                <Box className="jobboard__item__buttonGroup">
                  <Button
                    variant="contained"
                    className="jobboard__item__button jobboard__item__buttonFilled "
                  >
                    Apply now
                  </Button>
                  <Button
                    variant="outlined"
                    className="jobboard__item__button jobboard__item__buttonOutline"
                  >
                    View details
                  </Button>
                </Box>
              </PaperWrapper>
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default JobBoard;
