import React from "react";
import { useNavigate } from "react-router-dom";

import InfoChart from "./InfoChart";

import {
  IconButton,
  Avatar,
  Box,
  Typography,
  Popover,
  Divider,
  MenuList,
  MenuItem,
  ListItemText,
  Button,
} from "src/components";
import {
  ArrowForwardIosIcon,
  MonetizationOn,
  ExitToAppIcon,
} from "src/components/Icon";
import { authSliceActions } from "src/slices/auth";
import { useAppDispatch } from "src/types/redux";

interface InfoProps {
  id: string | undefined;
  anchorEl: Element | ((element: Element) => Element) | null;
  handleClose: () => void;
  handleClickInfo: (event: React.MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
}

const infoData = [
  {
    id: "1",
    title: "My account",
  },
  {
    id: "2",
    title: "Profile settings",
  },
  {
    id: "3",
    title: "Active tasks",
  },
];

const Info: React.FC<InfoProps> = ({
  id,
  open,
  anchorEl,
  handleClose,
  handleClickInfo,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(authSliceActions.logout());
    navigate("/auth/login");
  };
  return (
    <>
      <IconButton
        aria-label="header__iconGroup__avatar"
        size="medium"
        className=" header__iconGroup__iconButton header__iconGroup__iconButtonAvatar"
        onClick={handleClickInfo}
      >
        <Avatar
          alt="header__iconGroup__avatar"
          src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
          className="header__iconGroup__iconButtonAvatar_Avatar"
          variant="circular"
        />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.001)",
          borderRadius: "1rem",
        }}
        disableScrollLock
        className="header__iconGroup__info__popOver"
        PaperProps={{ className: "header__iconGroup__info__popOverPaper" }}
      >
        <Box className="header__iconGroup__info">
          <Avatar
            alt="sidebar__avt"
            src="https://tokyo.bloomui.com/static/images/avatars/3.jpg"
            className="header__iconGroup__info__ava"
          />
          <Box className="header__iconGroup__info__nameAndTitle">
            <Typography className="header__iconGroup__info__name">
              Randy Smith
            </Typography>
            <Typography className="header__iconGroup__info__title">
              Lead Developer
            </Typography>
          </Box>
        </Box>
        <Divider />
        <MenuList className="header__iconGroup__info__menuList">
          {infoData.map((item, index) => (
            <MenuItem className={`header__iconGroup__info__menuListItem`}>
              <ListItemText
                primaryTypographyProps={{
                  className: `header__iconGroup__info__menuListItemText`,
                }}
              >
                {item.title}
              </ListItemText>
              <ArrowForwardIosIcon
                fontSize="small"
                color="disabled"
                className="header__iconGroup__info__menuListItemIcon"
              />
            </MenuItem>
          ))}
        </MenuList>
        <Divider />
        <Box m={1}>
          <Box className="header__iconGroup__info__chartDes">
            <MonetizationOn
              sx={{ color: "rgb(255, 163, 25)", width: "35px", height: "35px" }}
            />
            <Box className="header__iconGroup__info__chartDesContent">
              <Typography className="header__iconGroup__info__chartPrimaryText">
                $14,264
              </Typography>
              <Typography className="header__iconGroup__info__chartSecondaryText">
                total value
              </Typography>
            </Box>
          </Box>
          <div className="header__iconGroup__info__chart">
            <InfoChart />
          </div>
        </Box>
        <Divider />
        <Button
          variant="text"
          startIcon={<ExitToAppIcon />}
          onClick={logoutHandler}
          className="sidebar__AvatarGroup_logoutButton"
        >
          Log out
        </Button>
      </Popover>
    </>
  );
};
export default Info;
