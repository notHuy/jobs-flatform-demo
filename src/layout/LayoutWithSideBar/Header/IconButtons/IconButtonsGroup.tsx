import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

import Notification from "./Notification";
import Languages from "./Languages";
import { Stack, Badge, IconButton, Tooltip, Avatar } from "src/components";
import { NotificationsNoneIcon, ForumIcon } from "src/components/Icon";
import SideBar from "src/layout/LayoutWithSideBar/SideBar/index";
import TemporaryDrawer from "src/components/Drawer";

const IconButtonsGroup = () => {
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

  // const AnimatedBadge = styled(Badge)(
  //   () => `
  //     .MuiBadge-badge{
  //       background: rgb(87, 202, 34);
  //       animation: ${spin} 1s infinite ease;
  //     }
  // `
  // );

  //   const AnimatedBadge = styled(Badge)(
  //     () => `
  //     .MuiBadge-badge {
  //         background-color: #44b700;
  //         color: #44b700;

  //         &::after {
  //             position: absolute;
  //             top: 0;
  //             left: 0;
  //             width: 100%;
  //             height: 100%;
  //             border-radius: 50%;
  //             animation: ripple 1.2s infinite ease-in-out;
  //             border: 1px solid currentColor;
  //             content: "";
  //         }
  //     }
  // `
  //   );

  const [anchorElNoti, setAnchorElNoti] = useState<HTMLButtonElement | null>(
    null
  );
  const [anchorElLang, setAnchorElLang] = useState<HTMLButtonElement | null>(
    null
  );

  // const [anchorElMegaMenu, setAnchorElMegaMenu] =
  //   useState<HTMLButtonElement | null>(null);

  // const [anchorElDashBoard, setAnchorElDashboard] =
  //   useState<HTMLButtonElement | null>(null);

  const handleClickNoti = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElNoti(event.currentTarget);
  };
  const handleClickLang = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElLang(event.currentTarget);
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
  // const handleCloseMegaMenu = () => {
  //   setAnchorElMegaMenu(null);
  // };
  // const handleCloseDashboard = () => {
  //   setAnchorElDashboard(null);
  // };

  const openNoti = Boolean(anchorElNoti);
  const openLang = Boolean(anchorElLang);
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
            <NotificationsNoneIcon fontSize="inherit" sx={{ fontSize: 22 }} />
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
      <Tooltip title="Messenger">
        <IconButton
          aria-label="delete"
          size="medium"
          className="header__iconGroup__iconButton header__iconGroup__iconButtonMessage"
        >
          <Badge
            color="error"
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <ForumIcon fontSize="inherit" sx={{ fontSize: 20 }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <IconButton
        aria-label="header__iconGroup__avatar"
        size="medium"
        className=" header__iconGroup__iconButton header__iconGroup__iconButtonAvatar"
      >
        <Avatar
          alt="header__iconGroup__avatar"
          src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
          className="header__iconGroup__iconButtonAvatar_Avatar"
          variant="circular"
        />
      </IconButton>
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
