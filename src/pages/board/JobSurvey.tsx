import React from "react";
import { styled } from "@mui/material/styles";

import { Grid, Paper, Typography, IconButton, Box } from "src/components";
import { ThumbUpOffAltIcon, ThumbDownOffAltIcon } from "src/components/Icon";
const JobSurvey: React.FC = () => {
  const PaperWrapper = styled(Paper)(
    () => `
                &{
                    border-radius:10px;
                    padding: 2rem;
                    height: 100%;
                    display:flex;
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                    }
                `
  );
  return (
    <Grid
      item
      xs={12}
      md={6}
      className="board__survey__container jobboard__item"
    >
      <PaperWrapper className="board__survey__paper custom-paper-elevation">
        <Typography
          variant="h5"
          component="h4"
          className="board__survey__header"
        >
          Are these jobs right for you?
        </Typography>
        <Box className="board__survey__iconButtonContainer">
          <IconButton
            aria-label="thumbup"
            className="board__survey__iconButton"
          >
            <ThumbUpOffAltIcon sx={{ fontSize: 40 }} />
          </IconButton>
          <IconButton
            aria-label="thumbdown"
            className="board__survey__iconButton"
          >
            <ThumbDownOffAltIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
        <Typography className="board__survey__footer">
          We'll use your feedback to improve future recommendations
        </Typography>
      </PaperWrapper>
    </Grid>
  );
};

export default JobSurvey;
