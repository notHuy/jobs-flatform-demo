import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

import { authSliceActions } from "src/slices/auth";
import { useAppDispatch } from "src/types/redux";
import { Box, Tooltip, IconButton, Badge } from "src/components";
import {
  CalendarMonthIcon,
  QuizIcon,
  PowerSettingsNew,
} from "src/components/Icon";

const spin = keyframes`
0%, 100% { opacity: 0; }
50% { opacity: 1; }
`;

const AnimatedBadge = styled(Badge)({
  ".MuiBadge-badge": {
    top: "-0.3rem",
    right: "-0.2rem",
    background: "rgb(87, 202, 34)",
    animation: `${spin} 0.6s infinite ease`,
  },
});

const FooterButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const renderButton = (iconName: string) => {
    switch (iconName) {
      case "calendar":
        return (
          <CalendarMonthIcon className="sideBar__footerButton__container__iconButtonIcon" />
        );
      case "message":
        return (
          <QuizIcon className="sideBar__footerButton__container__iconButtonIcon" />
        );
      case "logout":
        return (
          <PowerSettingsNew className="sideBar__footerButton__container__iconButtonIcon" />
        );
    }
  };
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
    navigate("/auth/login");
  };
  return (
    <Box sx={{ color: "white" }} className="sideBar__footerButton__container">
      <Tooltip title="Event Calendar">
        <IconButton
          aria-label="calendar"
          size="medium"
          className="sideBar__footerButton__container__iconButton"
        >
          {renderButton("calendar")}
        </IconButton>
      </Tooltip>
      <Tooltip title="Messenger">
        <IconButton
          aria-label="message"
          size="medium"
          className="sideBar__footerButton__container__iconButton"
          //   onClick={handleClickNoti}
        >
          <AnimatedBadge color="success" variant="dot">
            {renderButton("message")}
          </AnimatedBadge>
        </IconButton>
      </Tooltip>
      <Tooltip title="Logout">
        <IconButton
          aria-label="logout"
          size="medium"
          className="sideBar__footerButton__container__iconButton"
          onClick={logoutHandler}
        >
          {renderButton("logout")}
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default FooterButton;
