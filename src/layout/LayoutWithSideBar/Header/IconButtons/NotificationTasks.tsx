import React from "react";
import { Box, Typography, Paper, Link, Avatar } from "src/components";
import { AccessTimeIcon, CheckIcon } from "src/components/Icon";
import { styled } from "@mui/material/styles";

const NotificatioNTasks: React.FC = () => {
  const AvatarWrapper = styled(Avatar)(
    () => `
            &{
              margin: 0 auto 2rem !important;
              }
            `
  );
  return (
    <Box p={4}>
      <Typography className="header__iconGroup__noti__taskTitle">
        tasks for today
      </Typography>
      <Paper
        className="header__iconGroup__noti__taskPaper"
        square={false}
        variant="outlined"
        elevation={4}
      >
        <Link href="#" underline="hover">
          Presentation site design
        </Link>
        <Box className="header__iconGroup__noti__taskPaper__detail" mt={2}>
          <Box
            className="header__iconGroup__noti__taskPaper__detail__onHoldBtn"
            p={1}
          >
            On Hold
          </Box>
          <span>
            <AccessTimeIcon
              sx={{
                width: "20px",
                height: "20px",
                marginRight: "0.4rem",
                marginLeft: "0.5rem",
              }}
            />{" "}
            2.35 pm
          </span>
        </Box>
      </Paper>
      <Typography className="header__iconGroup__noti__taskTitle header__iconGroup__noti__taskTitleSecond">
        tomorrow schedule
      </Typography>
      <Box className="header__iconGroup__noti__detail__avatarGroup">
        <AvatarWrapper className="header__iconGroup__noti__detail__avatar">
          <CheckIcon />
        </AvatarWrapper>
        <Typography
          variant="h6"
          sx={{ textAlign: "center" }}
          className="header__iconGroup__noti__detail__avatar__text"
        >
          Nothing to report{" "}
        </Typography>
        <Typography
          className="header__iconGroup__noti__detail__avatar__text"
          sx={{ textAlign: "center" }}
        >
          You don't have any other pending tasks in progress!
        </Typography>
      </Box>
    </Box>
  );
};

export default NotificatioNTasks;
