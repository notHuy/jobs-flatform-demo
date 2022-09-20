import { useNavigate } from "react-router-dom";

import React from "react";
import { authSliceActions } from "src/slices/auth";
import { useAppDispatch } from "src/types/redux";
import {
  Box,
  Button,
  Avatar,
  Typography,
  IconButton,
  Popover,
  List,
  ListItemIcon,
  ListItemButton,
  Divider,
  ListItemText,
} from "src/components";
import {
  UnfoldMoreIcon,
  ExitToAppIcon,
  LockOpenTwoToneIcon,
} from "src/components/Icon";
import CustomIcon from "src/components/CustomIcon";
import { popupSideBar } from "src/data/data";

const AvatarGroup: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
    navigate("/auth/login");
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box className="sideBar__AvatarGroup__Container">
      <Box className="sideBar__AvatarGroup">
        <Avatar
          alt="sidebar__avt"
          src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
          className="sideBar__AvatarGroup__mainAvatar"
        />
        <Typography mt={1.5} className="sideBar__AvatarGroup__mainName">
          Randy Smith
        </Typography>
        <Typography className="sideBar__AvatarGroup__subTitle">
          Lead Developer
        </Typography>{" "}
        <IconButton
          className="sideBar__AvatarGroup__IconButton"
          onClick={handleClick}
        >
          <UnfoldMoreIcon />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          sx={{
            ".MuiBackdrop-invisible": {
              backdropFilter: "blur(2px)",
              backgroundColor: "rgba(0, 0, 0, 0.001)",
              borderRadius: "1rem",
            },
          }}
          disableScrollLock
          className="sidebar__AvatarGroup__Popup"
        >
          <Box p={2} className="sidebar__AvatarGroup__PopupContainer">
            <Avatar
              sx={{ width: 40, height: 40, borderRadius: "0.2rem" }}
              alt="sidebar__avt"
              className="sidebar__AvatarGroup__PopupAvatar"
              src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
            ></Avatar>
            <Box ml={1.3}>
              <Typography className="sidebar__AvatarGroup__PopupMainName">
                Randy Smith
              </Typography>
              <Typography className="sidebar__AvatarGroup__PopupSubTitle">
                Lead Developer
              </Typography>
            </Box>
          </Box>
          <Divider />
          <List className="sidebar__AvatarGroup__customButtonList">
            {popupSideBar.map((item) => (
              <ListItemButton className="sidebar__AvatarGroup__customButton">
                <ListItemIcon>
                  <CustomIcon
                    name={item.icon}
                    className="sidebar__AvatarGroup_icon"
                  />
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ))}
          </List>
          <Divider />
          <Button
            variant="text"
            startIcon={<LockOpenTwoToneIcon />}
            onClick={logoutHandler}
            className="sidebar__AvatarGroup_logoutButton"
          >
            Sign out
          </Button>
        </Popover>
      </Box>
    </Box>
  );
};

export default AvatarGroup;
