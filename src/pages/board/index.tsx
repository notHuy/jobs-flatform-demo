// import { Box, Grid, Typography, Paper } from "src/components";

import { Grid, Box } from "@mui/material";

import Title from "./Title";
import SearchHeaderBar from "./SearchHeaderBar";
import SearchSideBar from "./SearchSideBar";
import JobBoard from "./JobBoard";
import SortBar from "./SortBar";
import PaginationBar from "./PaginationBar";
import Footer from "./Footer";

const JobFlatform: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="board__container" pl={4.5} pr={4.5}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title />
          </Grid>
          <Grid item xs={12}>
            <SearchHeaderBar />
          </Grid>
          <Grid item xs={12} lg={3} xl={3} className="board__gridItem__sideBar">
            <SearchSideBar className="board__searchSideBarContainer" />
          </Grid>
          <Grid
            item
            xs={12}
            lg={9}
            xl={9}
            className="board__gridItem__mainBoard"
          >
            <SortBar />
            <JobBoard />
            <Grid item pt={2}>
              <PaginationBar />
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default JobFlatform;
