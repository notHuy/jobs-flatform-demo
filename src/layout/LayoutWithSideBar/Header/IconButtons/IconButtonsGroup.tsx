import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

import Notification from "./Notification";
import Message from "./Message";
import Info from "./Info";
import Languages from "./Languages";
import { Stack, Badge, IconButton, Tooltip } from "src/components";
import { NotificationsActiveTwoToneIcon } from "src/components/Icon";
import SideBar from "src/layout/LayoutWithSideBar/SideBar/index";
import TemporaryDrawer from "src/components/Drawer";

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

const IconButtonsGroup = () => {
  const [anchorElNoti, setAnchorElNoti] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElLang, setAnchorElLang] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElMessage, setAnchorElMessage] =
    useState<HTMLButtonElement | null>(null);

  const [anchorElInfo, setAnchorElInfo] = useState<HTMLButtonElement | null>(
    null
  );

  const handleClickNoti = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNoti(event.currentTarget);
  };
  const handleClickLang = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLang(event.currentTarget);
  };
  const handleClickMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElMessage(event.currentTarget);
  };
  const handleClickInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElInfo(event.currentTarget);
  };
  // const handleClickMegaMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorElMegaMenu(event.currentTarget);
  // };
  // const handleClickDashboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorElDashboard(event.currentTarget);
  // };

  const handleCloseNoti = () => {
    setAnchorElNoti(null);
  };
  const handleCloseLang = () => {
    setAnchorElLang(null);
  };
  const handleCloseMessage = () => {
    setAnchorElMessage(null);
  };
  const handleCloseInfo = () => {
    setAnchorElInfo(null);
  };
  // const handleCloseMegaMenu = () => {
  //   setAnchorElMegaMenu(null);
  // };
  // const handleCloseDashboard = () => {
  //   setAnchorElDashboard(null);
  // };

  const openNoti = Boolean(anchorElNoti);
  const openLang = Boolean(anchorElLang);
  const openMessage = Boolean(anchorElMessage);
  const openInfo = Boolean(anchorElInfo);
  // const openMegaMenu = Boolean(anchorElMegaMenu);
  // const openDashboard = Boolean(anchorElDashBoard);

  const id = openNoti ? "simple-popover" : undefined;

  return (
    <Stack direction="row" className="header__iconGroup">
      <Tooltip title="Notifications">
        <IconButton
          aria-label="delete"
          size="medium"
          className="header__iconGroup__iconButton header__iconGroup__iconButtonNoti"
          onClick={handleClickNoti}
        >
          <AnimatedBadge color="success" variant="dot" badgeContent=" ">
            <NotificationsActiveTwoToneIcon fontSize="small" />
          </AnimatedBadge>
        </IconButton>
      </Tooltip>
      <Notification
        open={openNoti}
        anchorEl={anchorElNoti}
        id={id}
        handleClose={handleCloseNoti}
      />
      <Languages
        open={openLang}
        anchorEl={anchorElLang}
        id={id}
        handleClose={handleCloseLang}
        handleClickLang={handleClickLang}
      />
      <Message
        open={openMessage}
        anchorEl={anchorElMessage}
        id={id}
        handleClose={handleCloseMessage}
        handleClickMessage={handleClickMessage}
      />
      <Info
        open={openInfo}
        anchorEl={anchorElInfo}
        id={id}
        handleClose={handleCloseInfo}
        handleClickInfo={handleClickInfo}
      />

      <Tooltip title="Toggle Menu">
        <TemporaryDrawer
          btnClassName="header__iconGroup__iconButton  header__iconGroup__iconButtonMenu"
          tooltip="Toggle Menu"
        >
          <SideBar className="sideBar__containerDrawer" />
        </TemporaryDrawer>
      </Tooltip>
    </Stack>
  );
};

export default IconButtonsGroup;
